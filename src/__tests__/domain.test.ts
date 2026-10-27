/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Unit-Tests für die Kern-Domänenlogik (Training, Kalorien-/Makro-Rechner, Ernährungstyp-Erkennung, Backup-Validierung).
 * Läuft ohne zusätzliche Dependencies über Node's eingebauten Test-Runner (`npm test`).
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

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
  });
});
