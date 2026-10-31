/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Unit-Tests für die Kern-Domänenlogik (Training, Kalorien-/Makro-Rechner, Ernährungstyp-Erkennung, Backup-Validierung).
 * Läuft ohne zusätzliche Dependencies über Node's eingebauten Test-Runner (`npm test`).
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  PRESET_PETS,
  ACCESSORIES,
  PET_ACCESSORY_ANCHORS,
  getEvolutionStage,
  calculateWorkoutXpGain,
  calculateWorkoutStreak,
  calculateTotalPetLevels,
  isNightSleepWindow,
  hasTrainedOnSameDay,
  determinePositivePetMood,
  isPresetPetUnlocked,
  hexToHsl,
  hslToHex,
  getMonochromePetHex,
  sanitizeGymBuddyBackupRecord,
  calculateCyclePhaseForDate,
  sanitizeCycleTrackingBackupRecord,
} from '../gymBuddy/gymBuddy';

// ---------------------------------------------------------------------------
// 1. Trainings-Mathematik (identisch zu index-DjUS4W3P.js & exerciseStats.worker)
// ---------------------------------------------------------------------------

export function estimate1RM(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  // Epley-Formel: weight * (1 + reps / 30), gerundet auf 0,1 kg
  return Math.round(weight * (1 + reps / 30) * 10) / 10;
}

export interface WorkoutSetInput {
  weight: number;
  reps: number;
  completed?: boolean;
  isWarmup?: boolean;
}

export function calcExerciseVolume(sets: WorkoutSetInput[], isBodyweight = false): number {
  const workingSets = sets.filter((s) => s.completed && !s.isWarmup);
  if (workingSets.length === 0) return 0;
  return workingSets.reduce(
    (sum, s) => sum + (isBodyweight ? s.reps : s.weight * s.reps),
    0
  );
}

// ---------------------------------------------------------------------------
// 2. Kalorien-, BMR-, TDEE- & Sicherheits-Logik (identisch zu index-DjUS4W3P.js)
// ---------------------------------------------------------------------------

export interface CalorieProfileInput {
  gender: 'male' | 'female' | 'other';
  age: number;
  heightCm: number;
  weightKg: number;
  bodyFatPct?: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goalType: 'cut' | 'maintain' | 'lean_bulk' | 'bulk';
  weeklyRateKg?: number;
}

const ACTIVITY_FACTORS: Record<CalorieProfileInput['activityLevel'], number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const GOAL_DEFAULT_RATES: Record<CalorieProfileInput['goalType'], number> = {
  cut: -0.5,
  maintain: 0,
  lean_bulk: 0.25,
  bulk: 0.5,
};

export function calculateCalorieTargets(profile: CalorieProfileInput) {
  const warnings: string[] = [];
  const heightM = profile.heightCm / 100;
  const bmi = Math.round((profile.weightKg / (heightM * heightM)) * 10) / 10;

  let bmr: number;
  let formulaUsed: 'mifflin' | 'katch';

  if (profile.bodyFatPct && profile.bodyFatPct >= 4 && profile.bodyFatPct <= 60) {
    const lbm = profile.weightKg * (1 - profile.bodyFatPct / 100);
    bmr = 370 + 21.6 * lbm;
    formulaUsed = 'katch';
  } else {
    const base = 10 * profile.weightKg + 6.25 * profile.heightCm - 5 * profile.age;
    bmr =
      profile.gender === 'male'
        ? base + 5
        : profile.gender === 'female'
          ? base - 161
          : base - 78;
    formulaUsed = 'mifflin';
  }
  bmr = Math.round(bmr);

  const pal = ACTIVITY_FACTORS[profile.activityLevel] ?? 1.375;
  const tdee = Math.round(bmr * pal);

  let effectiveGoal = profile.goalType;
  if (bmi < 18.5 && effectiveGoal === 'cut') {
    warnings.push('Dein BMI liegt im Untergewicht (< 18,5). Eine Diät wird nicht empfohlen.');
    effectiveGoal = 'maintain';
  }

  let weeklyRate = profile.weeklyRateKg ?? GOAL_DEFAULT_RATES[effectiveGoal];
  if (effectiveGoal === 'cut' && weeklyRate > 0) weeklyRate = -weeklyRate;
  if (effectiveGoal !== 'cut' && effectiveGoal !== 'maintain' && weeklyRate < 0) {
    weeklyRate = Math.abs(weeklyRate);
  }
  if (effectiveGoal === 'maintain') weeklyRate = 0;

  const maxWeeklyLoss = profile.weightKg * 0.01;
  if (weeklyRate < -maxWeeklyLoss) {
    warnings.push(
      `Abnehmrate auf max. 1% Körpergewicht/Woche (${maxWeeklyLoss.toFixed(1)} kg) begrenzt, um Muskelabbau zu vermeiden.`
    );
    weeklyRate = -Math.round(maxWeeklyLoss * 100) / 100;
  }

  let dailyDelta = Math.round((weeklyRate * 7700) / 7);
  let targetCalories = tdee + dailyDelta;

  const minSafeCalories = Math.max(
    profile.gender === 'male' ? 1500 : 1200,
    Math.round(bmr * 0.85)
  );
  if (targetCalories < minSafeCalories && effectiveGoal === 'cut') {
    warnings.push(
      `Kalorienziel auf sicheres Minimum (${minSafeCalories} kcal) angehoben.`
    );
    targetCalories = minSafeCalories;
    dailyDelta = targetCalories - tdee;
    weeklyRate = Math.round(((dailyDelta * 7) / 7700) * 100) / 100;
  }

  return {
    bmr,
    tdee,
    targetCalories,
    dailyDelta,
    weeklyRateKg: weeklyRate,
    bmi,
    formulaUsed,
    warnings,
  };
}

// ---------------------------------------------------------------------------
// 3. Ernährungstyp-Erkennung (inferDietCompatibility)
// ---------------------------------------------------------------------------

export function inferDietCompatibility(
  name: string,
  category?: string
): 'vegan' | 'vegetarian' | 'omnivore' {
  const text = `${name} ${category || ''}`.toLowerCase();
  if (/vegan|pflanzlich|tofu|tempeh|seitan|haferdrink|sojadrink|mandelmilch/.test(text)) {
    return 'vegan';
  }
  if (
    /hähnchen|huhn|pute|rind|schwein|fleisch|schinken|speck|salami|wurst|lachs|thunfisch|fisch|forelle|kabeljau|garnele|shrimp|hackfleisch|steak|schnitzel|bacon|chorizo|mortadella|leberkäse|serrano|prosciutto|bresaola|sardine|makrele|hering|pangasius|seelachs|krabben|muschel|tintenfisch|calamari|geflügel|ente|gans|lamm|kalb|wild|hirsch|reh|bratwurst|bockwurst|wiener|fleischkäse|mett|teewurst|leberwurst|blutwurst|sülze|aspik|gelatine|schmalz|talg|knochenbrühe|rinderbrühe|hühnerbrühe|fischsauce|austern|anchovis|sardellen/.test(
      text
    )
  ) {
    return 'omnivore';
  }
  if (
    /käse|milch|joghurt|quark|skyr|sahne|butter|molke|whey|casein|ei\b|eier|eigelb|eiweiß|vollei|honig|mozzarella|gouda|parmesan|feta|cheddar|emmentaler|camembert|brie|ricotta|mascarpone|frischkäse|hüttenkäse|kefir|buttermilch|schmand|crème fraîche|kondensmilch|milchpulver|laktose/.test(
      text
    )
  ) {
    return 'vegetarian';
  }
  return 'vegan';
}

// ---------------------------------------------------------------------------
// 4. Backup-Schema-Validierung (identisch zu SettingsScreen-DEAqAtbV.js)
// ---------------------------------------------------------------------------

export function isValidBackupObject(data: unknown): data is Record<string, unknown> {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  const obj = data as Record<string, unknown>;
  const arrayKeys = [
    'exercises',
    'routines',
    'workouts',
    'bodyMetrics',
    'foods',
    'nutritionLogs',
    'recipes',
  ];
  const hasKnownKey =
    arrayKeys.some((k) => Array.isArray(obj[k])) ||
    (obj.settings !== null && typeof obj.settings === 'object');
  if (!hasKnownKey) return false;
  for (const k of arrayKeys) {
    if (k in obj && obj[k] !== undefined && !Array.isArray(obj[k])) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Test-Suite
// ---------------------------------------------------------------------------

describe('Trainings-Logik (1RM & Volumen)', () => {
  it('berechnet das 1RM nach Epley exakt', () => {
    assert.equal(estimate1RM(100, 1), 100);
    assert.equal(estimate1RM(100, 10), 133.3);
    assert.equal(estimate1RM(80, 5), 93.3);
    assert.equal(estimate1RM(0, 10), 0);
    assert.equal(estimate1RM(100, 0), 0);
  });

  it('ignoriert Aufwärmsätze und unvollständige Sätze beim Volumen', () => {
    const sets: WorkoutSetInput[] = [
      { weight: 60, reps: 10, completed: true, isWarmup: true },
      { weight: 100, reps: 8, completed: true, isWarmup: false },
      { weight: 100, reps: 8, completed: false, isWarmup: false },
    ];
    assert.equal(calcExerciseVolume(sets, false), 800);
    assert.equal(calcExerciseVolume(sets, true), 8);
  });
});

describe('Kalorien- & Sicherheitslogik', () => {
  it('nutzt Mifflin-St Jeor ohne KFA und Katch-McArdle mit gültigem KFA', () => {
    const mifflin = calculateCalorieTargets({
      gender: 'male',
      age: 30,
      heightCm: 180,
      weightKg: 80,
      activityLevel: 'moderate',
      goalType: 'maintain',
    });
    assert.equal(mifflin.formulaUsed, 'mifflin');
    assert.equal(mifflin.bmr, 1780);
    assert.equal(mifflin.tdee, Math.round(1780 * 1.55));
    assert.equal(mifflin.targetCalories, mifflin.tdee);

    const katch = calculateCalorieTargets({
      gender: 'male',
      age: 30,
      heightCm: 180,
      weightKg: 80,
      bodyFatPct: 15,
      activityLevel: 'moderate',
      goalType: 'maintain',
    });
    assert.equal(katch.formulaUsed, 'katch');
    assert.equal(katch.bmr, Math.round(370 + 21.6 * 68));
  });

  it('blockiert Diät (Cut) bei Untergewicht (BMI < 18,5) automatisch', () => {
    const result = calculateCalorieTargets({
      gender: 'female',
      age: 25,
      heightCm: 170,
      weightKg: 50, // BMI 17.3
      activityLevel: 'light',
      goalType: 'cut',
    });
    assert.equal(result.weeklyRateKg, 0);
    assert.equal(result.targetCalories, result.tdee);
    assert.ok(result.warnings.some((w) => w.includes('Untergewicht')));
  });

  it('begrenzt zu aggressives Defizit auf max. 1% Körpergewicht/Woche und Mindestkalorien', () => {
    const result = calculateCalorieTargets({
      gender: 'male',
      age: 28,
      heightCm: 178,
      weightKg: 75,
      activityLevel: 'sedentary',
      goalType: 'cut',
      weeklyRateKg: -1.5, // > 0.75 kg/Woche
    });
    assert.ok(result.targetCalories >= 1500);
    assert.ok(result.warnings.length > 0);
  });
});

describe('Ernährungstyp-Klassifizierung', () => {
  it('erkennt vegane, vegetarische und omnivore Lebensmittel zuverlässig', () => {
    assert.equal(inferDietCompatibility('Haferflocken'), 'vegan');
    assert.equal(inferDietCompatibility('Räuchertofu'), 'vegan');
    assert.equal(inferDietCompatibility('Magerquark'), 'vegetarian');
    assert.equal(inferDietCompatibility('Whey Isolat'), 'vegetarian');
    assert.equal(inferDietCompatibility('Hähnchenbrustfilet'), 'omnivore');
    assert.equal(inferDietCompatibility('Lachsfilet'), 'omnivore');
  });
});

describe('Backup-Schema-Validierung & Bundle-Integrität', () => {
  it('akzeptiert gültige Backups und weist korrupte Strukturen ab', () => {
    assert.equal(isValidBackupObject(null), false);
    assert.equal(isValidBackupObject([]), false);
    assert.equal(isValidBackupObject({ foo: 'bar' }), false);
    assert.equal(isValidBackupObject({ workouts: 'not-an-array' }), false);
    assert.equal(isValidBackupObject({ workouts: [], settings: { theme: 'dark' } }), true);
  });

  it('stellt sicher, dass der Service Worker und das Hauptbundle die aktuellen Optimierungen enthalten', () => {
    const swCode = fs.readFileSync(path.resolve('public/sw.js'), 'utf8');
    assert.ok(
      swCode.includes('event.waitUntil(timerPromise)'),
      'Service Worker muss SCHEDULE_REST_NOTIFICATION per event.waitUntil am Leben halten'
    );

    const workerCode = fs.readFileSync(
      path.resolve('public/assets/exerciseStats.worker-C8iCXYUh.js'),
      'utf8'
    );
    assert.ok(
      workerCode.length < 2500,
      'exerciseStats.worker sollte ohne ungenutzten React-Dead-Code unter 2,5 KB liegen'
    );

    const appBootCode = fs.readFileSync(path.resolve('src/App.tsx'), 'utf8');
    assert.ok(
      !appBootCode.includes('import(/* @vite-ignore */'),
      'src/App.tsx darf kein dynamisches import() für das Hauptbundle nutzen, da Vite sonst ?import anhängt und eine zweite React-Instanz erzeugt'
    );
    assert.ok(
      appBootCode.includes("const APP_ENTRY_MODULE = '/assets/index-DjUS4W3P.js';"),
      'src/App.tsx muss den kanonischen Entry-Pfad ohne Query-Parameter verwenden, um doppelte React-Instanzen zu verhindern'
    );
    assert.ok(
      swCode.includes('fetchWithTimeout'),
      'Service Worker muss Netzwerk-Requests mit fetchWithTimeout gegen Lie-Fi absichern'
    );

    const gymBuddyAsset = fs.readFileSync(path.resolve('public/assets/gymBuddy.js'), 'utf8');
    assert.ok(
      gymBuddyAsset.includes('PARSED_MATRIX_CACHE') &&
        gymBuddyAsset.includes('PALETTE_CACHE') &&
        gymBuddyAsset.includes('y.memo(GymBuddySpriteCanvasInner)'),
      'gymBuddy.js muss Matrix-/Paletten-Caches und React.memo für den Sprite-Renderer enthalten'
    );
    assert.ok(
      !gymBuddyAsset.includes('PREVIEW_STAGES'),
      'gymBuddy.js darf keine Evolutionsstufen-Vorschau (PREVIEW_STAGES) mehr rendern'
    );
  });

  it('hält APP_VERSION, package.json, sw.js und das zweisprachige Changelog (DE/EN) synchron', () => {
    const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));
    const changelog = JSON.parse(fs.readFileSync(path.resolve('public/changelog.json'), 'utf8'));
    const swCode = fs.readFileSync(path.resolve('public/sw.js'), 'utf8');
    const indexBundle = fs.readFileSync(path.resolve('public/assets/index-DjUS4W3P.js'), 'utf8');
    const deBundle = fs.readFileSync(path.resolve('public/assets/de-D5J3Pm2D.js'), 'utf8');

    const latestEntry = changelog.entries[0];
    assert.ok(latestEntry, 'Changelog muss mindestens einen Eintrag enthalten');
    assert.equal(pkg.version, latestEntry.version, 'package.json Version muss mit Changelog übereinstimmen');
    assert.ok(
      indexBundle.includes(`const APP_VERSION="${latestEntry.version}"`),
      'index-Bundle muss aktuelle APP_VERSION enthalten'
    );
    assert.ok(
      swCode.includes(`const APP_VERSION = "${latestEntry.version}"`),
      'sw.js muss aktuelle APP_VERSION enthalten'
    );
    assert.ok(
      typeof latestEntry.title === 'string' && typeof latestEntry.titleEn === 'string',
      'Aktueller Changelog-Eintrag muss deutschen und englischen Titel haben'
    );
    for (const pt of latestEntry.points) {
      assert.ok(
        typeof pt.text === 'string' && typeof pt.textEn === 'string',
        'Jeder Punkt im aktuellen Changelog muss auf Deutsch (text) und Englisch (textEn) vorliegen'
      );
    }

    // Prüfe interaktive 5-Schritte Live-Tab-Tour & Zurück-Button in DE und EN
    assert.ok(indexBundle.includes('"welcome-setup"') && indexBundle.includes('"history-calendar"'), 'Interaktive 5-Schritte Live-Tab-Tour muss welcome-setup und history-calendar enthalten');
    assert.ok(indexBundle.includes('stepRestSwap:'), 'Englische Tour-Texte müssen stepRestSwap enthalten');
    assert.ok(deBundle.includes('stepRestSwap:'), 'Deutsche Tour-Texte müssen stepRestSwap enthalten');
    assert.ok(deBundle.includes('App-Tour / Tutorial neu starten'), 'Deutscher Tour-Neustart-Button muss vorhanden sein');
  });
});

// ---------------------------------------------------------------------------
// 5. Gym Buddy (Tamagotchi-Begleiter – Schritt A)
// ---------------------------------------------------------------------------

describe('Gym Buddy (Tamagotchi-Logik, Cute/Progress-Stile, Post-Workout, Nachtschlaf & Backup)', () => {
  it('teilt alle 10 Pets exakt 50/50 in Cute und Progress auf und enthält die 3 High-Level-Meilenstein-Pets', () => {
    assert.equal(PRESET_PETS.length, 10, 'Es müssen 10 Preset-Pets vorhanden sein');
    const cutePets = PRESET_PETS.filter((p) => p.style === 'cute');
    const progressPets = PRESET_PETS.filter((p) => p.style === 'progress');
    assert.equal(cutePets.length, 5, 'Exakt die Hälfte (5) muss im Cute-Stil sein');
    assert.equal(progressPets.length, 5, 'Exakt die Hälfte (5) muss im Progress/Beast-Stil sein');

    const shiba = PRESET_PETS.find((p) => p.id === 'shiba');
    const axolotl = PRESET_PETS.find((p) => p.id === 'axolotl');
    const cyberwolf = PRESET_PETS.find((p) => p.id === 'cyberwolf');
    assert.ok(shiba && shiba.style === 'cute' && shiba.unlockWorkouts === 50);
    assert.ok(axolotl && axolotl.style === 'cute' && axolotl.unlockWorkouts === 75);
    assert.ok(cyberwolf && cyberwolf.style === 'progress' && cyberwolf.unlockWorkouts === 100);

    // High-Level-Freischaltung über Workouts ODER Gesamt-Level über alle Pets
    assert.equal(isPresetPetUnlocked(shiba, 20, 0, 2, 10), false);
    assert.equal(isPresetPetUnlocked(shiba, 50, 0, 2, 4), true);
    assert.equal(isPresetPetUnlocked(shiba, 15, 0, 3, 12), true);
    assert.equal(isPresetPetUnlocked(cyberwolf, 40, 0, 4, 20), true);

    const totalLvl = calculateTotalPetLevels({
      robot: { xp: 600 }, // Stufe 4
      bear: { xp: 300 },  // Stufe 3
    });
    assert.equal(totalLvl, 7);

    const slots = new Set(ACCESSORIES.map((a) => a.slot));
    assert.equal(slots.has('head'), true);
    assert.equal(slots.has('body'), true);
    assert.equal(slots.has('hand'), true);
    assert.ok(ACCESSORIES.some((a) => a.id === 'shield' && a.slot === 'hand'), 'Trainings-Schild muss als Hand-Accessoire registriert sein');

    // Prüfe exakte Ankerpunkte für alle 10 Pets über alle 4 Evolutionsstufen
    for (const pet of PRESET_PETS) {
      const stages = PET_ACCESSORY_ANCHORS[pet.id];
      assert.ok(stages, `PET_ACCESSORY_ANCHORS muss für ${pet.id} definiert sein`);
      for (const stg of [1, 2, 3, 4] as const) {
        const anchor = stages[stg];
        assert.ok(anchor && anchor.head && anchor.body && anchor.hand, `Ankerpunkte für ${pet.id} Stufe ${stg} müssen head, body und hand enthalten`);
      }
    }
  });

  it('berechnet die 4 Evolutionsstufen und XP-Fortschritt pro Pet korrekt', () => {
    assert.equal(getEvolutionStage(0), 1);
    assert.equal(getEvolutionStage(99), 1);
    assert.equal(getEvolutionStage(100), 2);
    assert.equal(getEvolutionStage(300), 3);
    assert.equal(getEvolutionStage(600), 4);

    // XP steigt durch Dauer und Streak
    const baseXp = calculateWorkoutXpGain(20 * 60, 1);
    const longStreakXp = calculateWorkoutXpGain(60 * 60, 5);
    assert.ok(longStreakXp > baseXp, 'Längeres Workout + Streak muss mehr XP als kurzes Basis-Workout geben');
  });

  it('steuert post_workout (2h nach Training), Tages-Stimmungen und die Schlaf-Automatik (22:00–06:00 Uhr)', () => {
    const daytimeNow = new Date(2026, 9, 27, 14, 0, 0).getTime(); // 14:00 Uhr tagsüber
    const nightNow = new Date(2026, 9, 27, 23, 15, 0).getTime();  // 23:15 Uhr abends
    const earlyMorningNow = new Date(2026, 9, 28, 4, 30, 0).getTime(); // 04:30 Uhr morgens

    assert.equal(isNightSleepWindow(daytimeNow), false);
    assert.equal(isNightSleepWindow(nightNow), true);
    assert.equal(isNightSleepWindow(earlyMorningNow), true);

    // Direkt nach dem Training (bis 2h): post_workout (erschöpft, aber stolz)
    assert.equal(determinePositivePetMood(daytimeNow - 30 * 60 * 1000, daytimeNow), 'post_workout');
    assert.equal(determinePositivePetMood(daytimeNow - 2 * 3600 * 1000, daytimeNow), 'post_workout');
    // Nach > 2h bis 36h tagsüber: happy
    assert.equal(determinePositivePetMood(daytimeNow - 5 * 3600 * 1000, daytimeNow), 'happy');
    assert.equal(determinePositivePetMood(daytimeNow - 48 * 3600 * 1000, daytimeNow), 'idle');
    assert.equal(determinePositivePetMood(daytimeNow - 80 * 3600 * 1000, daytimeNow), 'reading');
    assert.equal(determinePositivePetMood(daytimeNow - 120 * 3600 * 1000, daytimeNow), 'sleep');
    assert.equal(determinePositivePetMood(null, daytimeNow), 'sleep');

    // Zwischen 22:00 und 06:00 Uhr automatisch im Schlaf-Modus (außer unmittelbar im 2h post_workout Fenster)
    const workoutAt16h = new Date(2026, 9, 27, 16, 0, 0).getTime();
    assert.equal(determinePositivePetMood(workoutAt16h, nightNow), 'sleep');
    assert.equal(hasTrainedOnSameDay(workoutAt16h, nightNow), true);
  });

  it('konvertiert Hex <-> HSL für den freien Farbwähler präzise und liefert monochrome Theme-Defaults', () => {
    const hex = '#3B82F6';
    const hsl = hexToHsl(hex);
    const roundtrip = hslToHex(hsl.h, hsl.s, hsl.l);
    assert.ok(roundtrip.startsWith('#') && roundtrip.length === 7);

    assert.equal(getMonochromePetHex(true), '#F2F4F7');
    assert.equal(getMonochromePetHex(false), '#1E232B');
  });

  it('berechnet Trainings-Streaks aus Trainingstagen zuverlässig', () => {
    const dayMs = 24 * 60 * 60 * 1000;
    const now = new Date(2026, 9, 27, 12, 0, 0).getTime();
    assert.equal(calculateWorkoutStreak([now, now - dayMs, now - 2 * dayMs], now), 3);
    assert.equal(calculateWorkoutStreak([now - dayMs, now - 2 * dayMs], now), 2);
    assert.equal(calculateWorkoutStreak([now - 10 * dayMs], now), 0);
  });

  it('validiert und bereinigt Gym-Buddy-Daten beim Backup-Import strikt gegen Manipulation', () => {
    assert.equal(sanitizeGymBuddyBackupRecord(null), null);
    assert.equal(sanitizeGymBuddyBackupRecord('invalid'), null);
    assert.equal(sanitizeGymBuddyBackupRecord({ id: 'wrong' }), null);

    const sanitized = sanitizeGymBuddyBackupRecord({
      id: 'default',
      enabled: false,
      activePetId: 'robot',
      petProgress: {
        robot: {
          customName: '  RoboMax  ',
          colorMode: 'custom',
          customHex: '#00ffaa',
          xp: 450,
          workoutsCompleted: 4,
          totalMinutes: 180,
          equipped: {
            head: 'sunglasses',
            body: 'x'.repeat(100),
            hand: 'dumbbell',
          },
          accessoryColors: {
            head: '#ff0055',
            body: 'javascript:alert(1)',
          },
        },
      },
    });

    assert.ok(sanitized, 'Valider Backup-Datensatz muss akzeptiert werden');
    assert.equal(sanitized.enabled, false);
    assert.equal(sanitized.activePetId, 'robot');
    assert.equal(sanitized.petProgress.robot.customName, 'RoboMax');
    assert.equal(sanitized.petProgress.robot.customHex, '#00FFAA');
    assert.equal(sanitized.petProgress.robot.colorMode, 'custom');
    assert.equal(sanitized.petProgress.robot.xp, 450);
    assert.equal(sanitized.petProgress.robot.equipped.head, 'sunglasses');
    assert.equal(sanitized.petProgress.robot.equipped.body, null);
    assert.equal(sanitized.petProgress.robot.equipped.hand, 'dumbbell');
    assert.equal(sanitized.petProgress.robot.accessoryColors.head, '#FF0055');
    assert.equal(sanitized.petProgress.robot.accessoryColors.body, null);
  });

  it('berechnet alle 4 Zyklus-Phasen, den Phase-1-Streak-Schutz (4 statt 2 Ruhetage) und den Phase-1-Gym-Buddy-Erholungszustand korrekt', () => {
    const cfg = sanitizeCycleTrackingBackupRecord({
      gender: 'female',
      enabled: true,
      lastPeriodStart: '2026-10-01',
      cycleLength: 28,
      periodDuration: 5,
    });
    assert.ok(cfg);
    assert.equal(cfg.enabled, true);
    assert.equal(cfg.gender, 'female');
    assert.equal(cfg.cycleLength, 28);
    assert.equal(cfg.periodDuration, 5);

    // Phase 1: Menstruation (Tag 1..5)
    const p1 = calculateCyclePhaseForDate(cfg, new Date(2026, 9, 3, 12, 0, 0).getTime());
    assert.ok(p1);
    assert.equal(p1.cycleDay, 3);
    assert.equal(p1.phaseNumber, 1);
    assert.equal(p1.phase, 'menstruation');
    assert.equal(p1.streakRestDaysLimit, 4);

    // Phase 2: Follikelphase (Tag 6..12)
    const p2 = calculateCyclePhaseForDate(cfg, new Date(2026, 9, 8, 12, 0, 0).getTime());
    assert.ok(p2);
    assert.equal(p2.cycleDay, 8);
    assert.equal(p2.phaseNumber, 2);
    assert.equal(p2.phase, 'follicular');
    assert.equal(p2.streakRestDaysLimit, 2);

    // Phase 3: Ovulation (Tag 13..16 bei 28-Tage-Zyklus)
    const p3Day13 = calculateCyclePhaseForDate(cfg, new Date(2026, 9, 13, 12, 0, 0).getTime());
    const p3Day16 = calculateCyclePhaseForDate(cfg, new Date(2026, 9, 16, 12, 0, 0).getTime());
    assert.ok(p3Day13 && p3Day16);
    assert.equal(p3Day13.cycleDay, 13);
    assert.equal(p3Day13.phaseNumber, 3);
    assert.equal(p3Day13.phase, 'ovulation');
    assert.equal(p3Day16.cycleDay, 16);
    assert.equal(p3Day16.phaseNumber, 3);
    assert.equal(p3Day16.phase, 'ovulation');

    // Phase 4: Lutealphase (Tag 17..28)
    const p4 = calculateCyclePhaseForDate(cfg, new Date(2026, 9, 17, 12, 0, 0).getTime());
    assert.ok(p4);
    assert.equal(p4.cycleDay, 17);
    assert.equal(p4.phaseNumber, 4);
    assert.equal(p4.phase, 'luteal');

    // Streak-Schutz in Phase 1: 4 volle Pausentage während der Menstruation (z.B. 1.–4. Okt., Trainings am 30. Sept. & 5. Okt.) brechen die Streak nicht!
    const dayMs = 24 * 60 * 60 * 1000;
    const nowOct5 = new Date(2026, 9, 5, 12, 0, 0).getTime(); // Tag 5 = Phase 1 (Menstruation)
    const datesWith4RestDaysInPhase1 = [nowOct5, nowOct5 - 5 * dayMs]; // 5. Okt. und 30. Sept. (4 volle Pausentage dazwischen)
    assert.equal(
      calculateWorkoutStreak(datesWith4RestDaysInPhase1, nowOct5, { ...cfg, enabled: false }),
      1,
      'Standardmäßig (2 Ruhetage Limit) zählt das Training vor 4 Ruhetagen nicht mehr zur aktuellen Streak'
    );
    assert.equal(
      calculateWorkoutStreak(datesWith4RestDaysInPhase1, nowOct5, cfg),
      2,
      'In Phase 1 (Menstruation) schützt das 4-Tage-Rest-Day-Limit die Streak zuverlässig'
    );

    // Gym Buddy Schnittstelle: An Pausentagen in Phase 1 zeigt der Buddy den entspannten Erholungs-Zustand
    const daytimeNow = new Date(2026, 9, 3, 14, 0, 0).getTime();
    const yesterdayWorkout = daytimeNow - 28 * 3600 * 1000;
    assert.equal(
      determinePositivePetMood(yesterdayWorkout, daytimeNow, true),
      'phase1_recovery'
    );
    // Hat man heute bereits trainiert, bleibt der stolze/fröhliche Zustand erhalten
    const todayWorkout = daytimeNow - 4 * 3600 * 1000;
    assert.equal(
      determinePositivePetMood(todayWorkout, daytimeNow, true),
      'happy'
    );

    // Prüfe iOS WebKit SVG-Regeln, Pfoten-Griff und native Web Share API im Bundle
    const gymBuddyAsset = fs.readFileSync(path.resolve('public/assets/gymBuddy.js'), 'utf8');
    assert.ok(
      gymBuddyAsset.includes('renderEquippedAccessoriesSvg') &&
        gymBuddyAsset.includes('gb-accessories-layer') &&
        gymBuddyAsset.includes('gb-eye-wink-arc') &&
        gymBuddyAsset.includes('@-webkit-keyframes gb-eye-right-wink') &&
        gymBuddyAsset.includes('transform-box: fill-box;'),
      'gymBuddy.js muss SVG-Outlines, Pfoten-Griff und -webkit- SVG-Regeln für iOS enthalten'
    );
    assert.ok(
      gymBuddyAsset.includes('cycleState,') &&
        gymBuddyAsset.includes('data-no-swipe') &&
        gymBuddyAsset.includes('GymBuddyErrorBoundary'),
      'gymBuddy.js muss cycleState im Hook bereitstellen, data-no-swipe und GymBuddyErrorBoundary enthalten'
    );
    const indexBundle = fs.readFileSync(path.resolve('public/assets/index-DjUS4W3P.js'), 'utf8');
    assert.ok(
      indexBundle.includes('navigator.canShare') && indexBundle.includes('navigator.share'),
      'index-DjUS4W3P.js muss die native iOS Web Share API für Datei-Exporte unterstützen'
    );
    assert.ok(
      indexBundle.includes('"data-no-swipe":"true"'),
      'index-DjUS4W3P.js muss data-no-swipe auf Sheets setzen, um versehentliche Wisch-Navigation zu verhindern'
    );

    const settingsBundle = fs.readFileSync(
      path.resolve('public/assets/SettingsScreen-DEAqAtbV.js'),
      'utf8'
    );
    assert.ok(
      settingsBundle.includes('GymBuddySpriteCanvas as GymBuddyPreviewCanvas') &&
        settingsBundle.includes('CycleTrackingSettingsToggle as cycToggle') &&
        settingsBundle.includes('e.jsx(GymBuddyPreviewCanvas,') &&
        settingsBundle.includes('e.jsx(cycToggle,{})'),
      'SettingsScreen-DEAqAtbV.js muss GymBuddyPreviewCanvas und CycleTrackingSettingsToggle importieren und rendern'
    );

    // Alle Bundles müssen ./gymBuddy.js kanonisch ohne abweichende Query-Strings importieren
    const historyBundle = fs.readFileSync(
      path.resolve('public/assets/HistoryHome-BqTmz6us.js'),
      'utf8'
    );
    const backupBundle = fs.readFileSync(
      path.resolve('public/assets/backupExport-ByV0wFPi.js'),
      'utf8'
    );
    for (const [name, content] of [
      ['index-DjUS4W3P.js', indexBundle],
      ['SettingsScreen-DEAqAtbV.js', settingsBundle],
      ['HistoryHome-BqTmz6us.js', historyBundle],
      ['backupExport-ByV0wFPi.js', backupBundle],
    ] as const) {
      assert.ok(
        content.includes('./gymBuddy.js"') && !content.includes('./gymBuddy.js?v='),
        `${name} muss ./gymBuddy.js ohne abweichenden ?v= Query-Parameter importieren`
      );
    }

    // Prüfe die 4 hochauflösenden SVG-Mockups unter docs/previews/ und deren Einbindung in README.md
    const expectedPreviews = [
      'docs/previews/preview-dashboard-buddy.svg',
      'docs/previews/preview-cycle-training.svg',
      'docs/previews/preview-workout-tracker.svg',
      'docs/previews/preview-customization.svg',
    ];
    const readmeContent = fs.readFileSync(path.resolve('README.md'), 'utf8');
    for (const previewRelPath of expectedPreviews) {
      const fullPath = path.resolve(previewRelPath);
      assert.ok(fs.existsSync(fullPath), `SVG-Mockup ${previewRelPath} muss existieren`);
      const svgContent = fs.readFileSync(fullPath, 'utf8');
      assert.ok(
        svgContent.startsWith('<svg') && svgContent.includes('</svg>'),
        `${previewRelPath} muss valides SVG sein`
      );
      assert.ok(
        readmeContent.includes(previewRelPath),
        `README.md muss ${previewRelPath} in der Preview-Galerie einbinden`
      );
    }
  });
});

