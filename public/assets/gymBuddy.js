/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Gym Buddy Modul (Presets, Cute vs. Progress Evolution, SVG/CSS-Keyframe-Animationen für
 * Lächeln, 7s-Zwinkern, Post-Workout-Atmung mit Schweißtropfen, Nachtschlaf-Automatik 22–06 Uhr,
 * High-Level-Meilenstein-Pets, echter HSL/Hex-Farbwähler, Accessoires & Backup-Integration).
 * Vollständig gekapselt, 100 % lokal in IndexedDB, keine externen Assets.
 */
import {
  j as c,
  r as y,
  a5 as pe,
  aK as yS,
  y as useThemeSettings,
  S as Sheet,
  B as Button,
  C as Chip,
  k as Icon,
  Q as useHistoryData,
} from './index-DjUS4W3P.js';

// ---------------------------------------------------------------------------
// 1. Konstanten, Übersetzungen (DE/EN) & Metadaten
// ---------------------------------------------------------------------------

export const GYM_BUDDY_STORE = 'gymBuddy';
export const GYM_BUDDY_RECORD_ID = 'default';

export const LEVEL_XP_THRESHOLDS = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
};

/**
 * 10 Preset-Pets:
 * - 5 × 'cute' (robot, bear, cat, shiba, axolotl): bleiben auf Stufe 1–4 kompakt & extrem niedlich,
 *   bekommen größere/glänzendere Augen, süßes/stolzes Lächeln und funkelnde Sterne auf Stufe 4.
 * - 5 × 'progress' (monster, lifter, dino, gorilla, cyberwolf): werden breiter & muskulöser,
 *   selbstbewusstes Grinsen + pulsierende Energie-Aura auf höheren Stufen.
 */
export const PRESET_PETS = [
  {
    id: 'monster',
    style: 'progress',
    nameDe: 'Pumper-Monster',
    nameEn: 'Pump Monster',
    charDe: 'Fröhliches Gym-Monster, das mit jedem Satz breiter wird und auf Stufe 4 vor Energie glüht.',
    charEn: 'Cheerful gym monster that grows wider with every set and glows with energy at Stage 4.',
    unlockWorkouts: 0,
  },
  {
    id: 'robot',
    style: 'cute',
    nameDe: 'Iron-Bot',
    nameEn: 'Iron Bot',
    charDe: 'Knuffiger kleiner Trainings-Bot mit großen Leuchtaugen und ewigem Motivations-Akku.',
    charEn: 'Cute little workout bot with big glowing eyes and an endless motivation battery.',
    unlockWorkouts: 0,
  },
  {
    id: 'lifter',
    style: 'progress',
    nameDe: 'Lifter-Max',
    nameEn: 'Lifter Max',
    charDe: 'Klassischer Kraftsportler – liebt schwere Grundübungen, breite Schultern und saubere Technik.',
    charEn: 'Classic strength athlete – loves heavy compounds, broad shoulders, and clean form.',
    unlockWorkouts: 0,
  },
  {
    id: 'bear',
    style: 'cute',
    nameDe: 'Kraft-Bär',
    nameEn: 'Power Bear',
    charDe: 'Knuddeliger kleiner Bär mit großen Glanzaugen: bärenstark beim Training, Meister im Power-Nap.',
    charEn: 'Cuddly little bear with glossy eyes: strong under the bar, master of the rest-day power nap.',
    unlockWorkouts: 0,
  },
  {
    id: 'cat',
    style: 'cute',
    nameDe: 'Gym-Katze',
    nameEn: 'Gym Cat',
    charDe: 'Kompakt, flink und extrem niedlich – schnurrt nach jedem Satz und funkelt auf Stufe 4.',
    charEn: 'Compact, agile, and super cute – purrs after every set and sparkles at Stage 4.',
    unlockWorkouts: 3,
  },
  {
    id: 'dino',
    style: 'progress',
    nameDe: 'Reps-Rex',
    nameEn: 'Reps Rex',
    charDe: 'Urzeit-Champion: Je höher das Level, desto mächtiger werden seine Arme und seine Aura!',
    charEn: 'Prehistoric champ: the higher the level, the mightier its arms and aura grow!',
    unlockWorkouts: 15,
    unlockRequireLevel4: true,
  },
  {
    id: 'gorilla',
    style: 'progress',
    nameDe: 'Silberrücken',
    nameEn: 'Silverback',
    charDe: 'Massiver Gym-Titan mit stoischer Ruhe und gewaltiger Präsenz für echte Konstanz.',
    charEn: 'Massive gym titan with stoic calm and immense presence unlocked through consistency.',
    unlockWorkouts: 30,
    unlockMinutes: 600,
  },
  {
    id: 'shiba',
    style: 'cute',
    nameDe: 'Pump-Shiba',
    nameEn: 'Pump Shiba',
    charDe: 'Extrem süßer kleiner Shiba Inu mit glänzenden Kulleraugen und unerschütterlicher Trainingsfreude.',
    charEn: 'Super cute little Shiba Inu with glossy eyes and unshakeable workout joy.',
    unlockWorkouts: 50,
    unlockTotalLevels: 12,
  },
  {
    id: 'axolotl',
    style: 'cute',
    nameDe: 'Gains-Axolotl',
    nameEn: 'Gains Axolotl',
    charDe: 'Seltener kleiner Wasser-Drache – bleibt wunderbar kompakt, strahlt vor Stolz und funkelt voller Sterne.',
    charEn: 'Rare little water dragon – stays wonderfully compact, beams with pride, and sparkles with stars.',
    unlockWorkouts: 75,
    unlockTotalLevels: 16,
  },
  {
    id: 'cyberwolf',
    style: 'progress',
    nameDe: 'Cyber-Wolf',
    nameEn: 'Cyber Wolf',
    charDe: 'Ultimativer Endgame-Phantomwolf mit selbstbewusstem Grinsen und pulsierender Energie-Aura.',
    charEn: 'Ultimate endgame phantom wolf with a confident grin and pulsing energy aura.',
    unlockWorkouts: 100,
    unlockTotalLevels: 20,
  },
];

export const ACCESSORIES = [
  {
    id: 'sweatband',
    slot: 'head',
    nameDe: 'Schweißband',
    nameEn: 'Sweatband',
    unlockWorkouts: 1,
  },
  {
    id: 'beanie',
    slot: 'head',
    nameDe: 'Mütze',
    nameEn: 'Beanie',
    unlockWorkouts: 3,
  },
  {
    id: 'sunglasses',
    slot: 'head',
    nameDe: 'Sonnenbrille',
    nameEn: 'Sunglasses',
    unlockWorkouts: 5,
  },
  {
    id: 'hoodie',
    slot: 'body',
    nameDe: 'Hoodie',
    nameEn: 'Hoodie',
    unlockWorkouts: 8,
    unlockRequireLevel: 3,
  },
  {
    id: 'belt',
    slot: 'body',
    nameDe: 'Hebergürtel',
    nameEn: 'Lifting Belt',
    unlockWorkouts: 12,
  },
  {
    id: 'dumbbell',
    slot: 'hand',
    nameDe: 'Hantel',
    nameEn: 'Dumbbell',
    unlockWorkouts: 2,
  },
  {
    id: 'shaker',
    slot: 'hand',
    nameDe: 'Protein-Shaker',
    nameEn: 'Protein Shaker',
    unlockWorkouts: 6,
  },
  {
    id: 'kettlebell',
    slot: 'hand',
    nameDe: 'Kettlebell',
    nameEn: 'Kettlebell',
    unlockWorkouts: 20,
    unlockRequireLevel: 4,
  },
];

const QUICK_SWATCHES = [
  '#A8DAB5',
  '#38BDF8',
  '#F59E0B',
  '#F43F5E',
  '#A78BFA',
  '#34D399',
  '#FB923C',
  '#E879F9',
];

export function getBuddyTexts(lang) {
  let l = lang;
  if (!l) {
    try {
      l = typeof yS === 'function' ? yS() : 'de';
    } catch {
      l = 'de';
    }
  }
  const isDe = l !== 'en';
  return {
    title: 'Gym Buddy',
    settingsTitle: isDe ? 'Gym Buddy (Trainings-Begleiter)' : 'Gym Buddy (Workout Companion)',
    settingsHint: isDe
      ? 'Optionales, rein positives Tamagotchi-Begleiter-Widget auf dem Startbildschirm. Entwickelt sich durch dein Training weiter, ohne Strafen bei Pausen.'
      : 'Optional, purely positive Tamagotchi companion widget on the home screen. Evolves through your workouts without any penalties on rest days.',
    enableLabel: isDe ? 'Gym Buddy aktivieren' : 'Enable Gym Buddy',
    disableLabel: isDe ? 'Deaktivieren' : 'Disable',
    on: isDe ? 'An' : 'On',
    off: isDe ? 'Aus' : 'Off',
    levelShort: (lvl) => (isDe ? `Stufe ${lvl}` : `Stage ${lvl}`),
    levelNames: isDe
      ? { 1: 'Rookie', 2: 'Aufsteiger', 3: 'Athlet', 4: 'Legende' }
      : { 1: 'Rookie', 2: 'Regular', 3: 'Athlete', 4: 'Legend' },
    styleBadges: {
      cute: isDe ? '✨ Cute' : '✨ Cute',
      progress: isDe ? '⚡ Progress' : '⚡ Progress',
    },
    styleFilter: {
      all: isDe ? 'Alle (10)' : 'All (10)',
      cute: isDe ? '✨ Cute (5)' : '✨ Cute (5)',
      progress: isDe ? '⚡ Progress / Beast (5)' : '⚡ Progress / Beast (5)',
    },
    styleHint: {
      cute: isDe
        ? 'Cute-Stil: Bleibt kompakt & niedlich, bekommt glänzende Augen, stolzes Lächeln & Sterne auf Stufe 4.'
        : 'Cute style: Stays compact & adorable, gets glossy eyes, proud smile & stars at Stage 4.',
      progress: isDe
        ? 'Progress-Stil: Wird mit jeder Stufe breiter & muskulöser + selbstbewusstes Grinsen & Energie-Aura.'
        : 'Progress style: Grows wider & more muscular each stage + confident grin & energy aura.',
    },
    moodLabels: isDe
      ? {
          post_workout: 'Erschöpft, aber überglücklich!',
          happy: 'Voller Trainings-Energie!',
          idle: 'Ausgeruht & motiviert',
          reading: 'Liest am Rest Day ein Trainingsbuch',
          sleep: 'Schläft friedlich & regeneriert',
          sleepTrainedToday: 'Zufriedener Nachtschlaf nach deinem Workout!',
        }
      : {
          post_workout: 'Exhausted, but super happy!',
          happy: 'Full of workout energy!',
          idle: 'Well-rested & motivated',
          reading: 'Reading a training book on Rest Day',
          sleep: 'Sleeping peacefully & recovering',
          sleepTrainedToday: 'Content night sleep after today’s workout!',
        },
    moodDescriptions: isDe
      ? {
          post_workout:
            'Direkt nach dem Workout: Dein Buddy atmet tief durch, hat einen kleinen Schweißtropfen auf der Stirn und lächelt voller Stolz!',
          happy: 'Dein Buddy feiert deine letzte Einheit, hüpft vor Freude und zwinkert dir motivierend zu!',
          idle: 'Entspannt, gut gelaunt und bereit für die nächsten Sätze.',
          reading: 'Pause sinnvoll genutzt: Dein Buddy studiert Hypertrophie-Klassiker.',
          sleep:
            'Schlaf-Automatik (22–06 Uhr) & Erholung: Im Schlaf wachsen die Muskeln – dein Buddy atmet ruhig und lächelt im Traum.',
        }
      : {
          post_workout:
            'Right after your workout: Your buddy breathes deeply with a little forehead sweat drop and a proud smile!',
          happy: 'Your buddy celebrates your session, bounces happily, and winks to keep you motivated!',
          idle: 'Relaxed, in great spirits, and ready for the next sets.',
          reading: 'Rest day well spent: Your buddy is studying hypertrophy classics.',
          sleep:
            'Night sleep (10 PM–6 AM) & recovery: Muscles grow while sleeping – your buddy breathes calmly and smiles in its dreams.',
        },
    nextMilestoneWorkout: (n, nextLvl) =>
      isDe
        ? `Noch ${n} ${n === 1 ? 'Workout' : 'Workouts'} bis zum nächsten Level (Stufe ${nextLvl})!`
        : `${n} more ${n === 1 ? 'workout' : 'workouts'} until the next level (Stage ${nextLvl})!`,
    maxLevelReached: isDe
      ? 'Maximale Evolutionsstufe (Stufe 4) erreicht!'
      : 'Maximum evolution stage (Stage 4) reached!',
    nextGlobalUnlock: (n, itemName) =>
      isDe
        ? `Nächste Freischaltung (${itemName}): noch ${n} ${n === 1 ? 'Workout' : 'Workouts'}`
        : `Next unlock (${itemName}): ${n} more ${n === 1 ? 'workout' : 'workouts'}`,
    tabs: {
      overview: isDe ? 'Status' : 'Status',
      pets: isDe ? 'Pets wählen' : 'Select Pet',
      customize: isDe ? 'Anpassen' : 'Customize',
    },
    stats: {
      streak: isDe ? 'Streak' : 'Streak',
      streakUnit: (n) =>
        isDe
          ? `${n} ${n === 1 ? 'Training' : 'Trainings'}`
          : `${n} ${n === 1 ? 'workout' : 'workouts'}`,
      petWorkouts: isDe ? 'Mit diesem Pet' : 'With this pet',
      petMinutes: isDe ? 'Trainingszeit' : 'Workout time',
      xpProgress: isDe ? 'Entwicklung (XP)' : 'Evolution (XP)',
      totalLevels: (lvl) =>
        isDe ? `Gesamt-Pet-Level: ${lvl}` : `Total Pet Level: ${lvl}`,
    },
    previewStageLabel: isDe ? 'Evolutionsstufen-Vorschau' : 'Evolution Stage Preview',
    previewMoodLabel: isDe ? 'Stimmungs-Vorschau' : 'Mood Preview',
    moodShort: isDe
      ? {
          post_workout: 'Nach Workout',
          happy: 'Happy',
          idle: 'Aktiv',
          reading: 'Buch',
          sleep: 'Schlaf',
        }
      : {
          post_workout: 'Post-Workout',
          happy: 'Happy',
          idle: 'Idle',
          reading: 'Reading',
          sleep: 'Sleep',
        },
    selectPetAction: isDe ? 'Als aktiven Buddy wählen' : 'Select as active buddy',
    activePetBadge: isDe ? 'Aktiv' : 'Active',
    lockedBadge: isDe ? 'Meilenstein' : 'Milestone',
    unlockRequirementWorkouts: (n) =>
      isDe ? `Freischaltung ab ${n} Workouts` : `Unlocks at ${n} workouts`,
    unlockRequirementLvl4OrWorkouts: (n) =>
      isDe
        ? `Freischaltung ab Stufe 4 (beliebiges Pet) oder ${n} Workouts`
        : `Unlocks at Stage 4 (any pet) or ${n} workouts`,
    unlockRequirementWorkoutsOrMinutes: (n, mins) =>
      isDe
        ? `Freischaltung ab ${n} Workouts oder ${mins} Trainingsminuten`
        : `Unlocks at ${n} workouts or ${mins} workout minutes`,
    unlockRequirementWorkoutsOrTotalLevels: (n, totalLvls) =>
      isDe
        ? `High-Level Meilenstein: ab ${n} Workouts oder Gesamt-Level ${totalLvls}`
        : `High-Level Milestone: at ${n} workouts or Total Level ${totalLvls}`,
    unlockRequirementLvlOrWorkouts: (lvl, n) =>
      isDe
        ? `Ab ${n} ${n === 1 ? 'Workout' : 'Workouts'}${lvl ? ` oder Stufe ${lvl}` : ''}`
        : `At ${n} ${n === 1 ? 'workout' : 'workouts'}${lvl ? ` or Stage ${lvl}` : ''}`,
    customizeNameLabel: isDe ? 'Name deines Buddys' : 'Your Buddy’s Name',
    customizeNamePlaceholder: (fallback) =>
      isDe ? `Standard: ${fallback}` : `Default: ${fallback}`,
    colorSectionTitle: isDe ? 'Pet-Farbe (frei wählbar)' : 'Pet Color (freely selectable)',
    colorModeTheme: isDe ? 'Monochrom (Theme-Standard)' : 'Monochrome (Theme Default)',
    colorModeCustom: isDe ? 'Freie Farbe' : 'Custom Color',
    hueLabel: isDe ? 'Farbton (Hue)' : 'Hue',
    satLabel: isDe ? 'Sättigung' : 'Saturation',
    lightLabel: isDe ? 'Helligkeit' : 'Lightness',
    hexLabel: isDe ? 'Hex-Code' : 'Hex Code',
    quickPresetsLabel: isDe ? 'Schnellwahl (optional)' : 'Quick Swatches (optional)',
    accessoriesTitle: isDe ? 'Accessoires (pro Slot)' : 'Accessories (per slot)',
    slotLabels: isDe
      ? { head: 'Kopf', body: 'Körper', hand: 'Hand' }
      : { head: 'Head', body: 'Body', hand: 'Hand' },
    noneEquipped: isDe ? 'Keins' : 'None',
    accessoryColorLabel: (slotName) =>
      isDe ? `Farbe für ${slotName}-Accessoire` : `${slotName} Accessory Color`,
    resetToMonochrome: isDe ? 'Auf Monochrom zurücksetzen' : 'Reset to Monochrome',
    tapForDetails: isDe ? 'Antippen für Details & Auswahl' : 'Tap for details & selection',
    noPenaltyNote: isDe
      ? '100 % positiv: Nach dem Workout atmet dein Buddy stolz durch, zwischen 22 und 06 Uhr schläft er automatisch zur Regeneration, und an Ruhetagen liest er entspannt.'
      : '100% positive: Right after a workout your buddy catches its breath with pride, between 10 PM and 6 AM it sleeps automatically for recovery, and on rest days it reads peacefully.',
  };
}

// ---------------------------------------------------------------------------
// 2. Farb-Mathematik (HSL <-> Hex, Kontrast, Monochrom-Theme)
// ---------------------------------------------------------------------------

export function isValidHexColor(hex) {
  return typeof hex === 'string' && /^#[0-9a-fA-F]{6}$/.test(hex.trim());
}

export function getMonochromePetHex(isDarkTheme) {
  return isDarkTheme ? '#F2F4F7' : '#1E232B';
}

export function hexToHsl(hex) {
  const clean = isValidHexColor(hex) ? hex.trim().slice(1) : 'A8DAB5';
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) {
    return { h: 0, s: 0, l: Math.round(l * 100) };
  }
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) {
    h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
  } else if (max === g) {
    h = ((b - r) / d + 2) * 60;
  } else {
    h = ((r - g) / d + 4) * 60;
  }
  return {
    h: Math.round(h) % 360,
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hue2rgb(p, q, t) {
  let tt = t;
  if (tt < 0) tt += 1;
  if (tt > 1) tt -= 1;
  if (tt < 1 / 6) return p + (q - p) * 6 * tt;
  if (tt < 1 / 2) return q;
  if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
  return p;
}

export function hslToHex(h, s, l) {
  const hn = (((h % 360) + 360) % 360) / 360;
  const sn = Math.min(100, Math.max(0, s)) / 100;
  const ln = Math.min(100, Math.max(0, l)) / 100;
  let r, g, b;
  if (sn === 0) {
    r = g = b = ln;
  } else {
    const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
    const p = 2 * ln - q;
    r = hue2rgb(p, q, hn + 1 / 3);
    g = hue2rgb(p, q, hn);
    b = hue2rgb(p, q, hn - 1 / 3);
  }
  const toHex = (v) =>
    Math.round(Math.min(1, Math.max(0, v)) * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Erzeugt die 6-Slot-Farbpalette für die Pixel-Engine aus einer Basisfarbe.
 * Index 0: Transparent
 * Index 1: Kontur / Tiefer Schatten
 * Index 2: Hauptfarbe (frei gewählt oder Monochrom-Standard)
 * Index 3: Highlight (hellere Schattierung)
 * Index 4: Schattierung / Muskel-Tiefe (dunklere Schattierung)
 * Index 5: Augen / Gesichts-Ausdrucks-Kontrast
 */
export function buildShadedPalette(baseHex, isDarkTheme) {
  const { h, s, l } = hexToHsl(baseHex);
  const outlineL = l < 25 ? (isDarkTheme ? 48 : 8) : Math.max(6, l - 44);
  const highlightL = Math.min(96, l + 16);
  const shadowL = l < 22 ? Math.min(50, l + 12) : Math.max(12, l - 18);
  const eyeHex = l > 52 ? '#11151C' : '#F8FAFC';
  return [
    'transparent',
    hslToHex(h, Math.min(s, 45), outlineL),
    baseHex,
    hslToHex(h, Math.max(0, s - 8), highlightL),
    hslToHex(h, Math.min(100, s + 6), shadowL),
    eyeHex,
  ];
}

// ---------------------------------------------------------------------------
// 3. 16x16 Pixel-Art-Sprites (10 Pets × 4 Stufen: 5 Cute + 5 Progress/Beast)
// ---------------------------------------------------------------------------

const PET_STAGE_SPRITES = {
  // === PROGRESS / BEAST PET 1: Pumper-Monster (wird sichtbar breiter & muskulöser) ===
  monster: {
    1: {
      headY: 4,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '................',
        '................',
        '....1......1....',
        '....13111131....',
        '...1232222321...',
        '...1252222521...',
        '...1252222521...',
        '...1222222221...',
        '...1422222241...',
        '....14422441....',
        '....11111111....',
        '.....121..121...',
        '.....111..111...',
        '................',
        '................',
      ],
    },
    2: {
      headY: 3,
      bodyY: 8,
      handX: 13,
      handY: 8,
      rows: [
        '................',
        '................',
        '...13......31...',
        '...1311111131...',
        '...1332222331...',
        '..122522225221..',
        '..122522225221..',
        '.13222222222231.',
        '.12232222223221.',
        '.14224222242241.',
        '..114224422411..',
        '....14422441....',
        '....12211221....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    3: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '..13........31..',
        '..133111111331..',
        '..123322223321..',
        '..125522225521..',
        '..125522225521..',
        '.13222222222231.',
        '1322232222322231',
        '1242424224242421',
        '1441122442211441',
        '.11..142241..11.',
        '....12211221....',
        '....14211241....',
        '...1111..1111...',
        '................',
        '................',
      ],
    },
    4: {
      headY: 1,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '.13..........31.',
        '.1331..11..1331.',
        '..133222222331..',
        '.12255222255221.',
        '.12255222255221.',
        '1332222222222331',
        '1322232222322231',
        '1242424334242421',
        '1442422442242441',
        '.11114422441111.',
        '....12411421....',
        '...1322112231...',
        '...1422112241...',
        '..11111..11111..',
        '................',
        '................',
      ],
    },
  },

  // === CUTE PET 1: Iron-Bot (bleibt auf Stufe 1–4 kompakt & extrem niedlich) ===
  robot: {
    1: {
      headY: 4,
      bodyY: 10,
      handX: 12,
      handY: 10,
      rows: [
        '................',
        '.......33.......',
        '.......11.......',
        '....11111111....',
        '...1333333331...',
        '...1255225521...',
        '...1255225521...',
        '...1222222221...',
        '....11111111....',
        '....13233231....',
        '...1122332211...',
        '....14222241....',
        '.....11..11.....',
        '.....11..11.....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 4,
      bodyY: 10,
      handX: 12,
      handY: 10,
      rows: [
        '.......33.......',
        '.......33.......',
        '.......11.......',
        '...1111111111...',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..122222222221..',
        '...1111111111...',
        '...1322332231...',
        '..132233332231..',
        '...1442222441...',
        '.....12..21.....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    3: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '......3333......',
        '.......11.......',
        '...1111111111...',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..122222222221..',
        '...1111111111...',
        '...1332332331...',
        '..132233332231..',
        '...1442332441...',
        '....11422411....',
        '....131..131....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    4: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '.....3.33.3.....',
        '.......11.......',
        '..131111111131..',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..132222222231..',
        '...1111111111...',
        '..133233332331..',
        '..132233332231..',
        '...1442332441...',
        '....11422411....',
        '....131..131....',
        '....111..111....',
        '................',
        '................',
      ],
    },
  },

  // === PROGRESS / BEAST PET 2: Lifter-Max ===
  lifter: {
    1: {
      headY: 3,
      bodyY: 8,
      handX: 12,
      handY: 8,
      rows: [
        '................',
        '................',
        '....11111111....',
        '...1444334441...',
        '...1252222521...',
        '...1252222521...',
        '...1222222221...',
        '....14222241....',
        '..113222222311..',
        '..122322223221..',
        '...1142222411...',
        '.....141141.....',
        '.....121121.....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '....11111111....',
        '...1444334441...',
        '...1252222521...',
        '...1252222521...',
        '...1222222221...',
        '....14222241....',
        '.11332222223311.',
        '.13224322342231.',
        '.12424244242421.',
        '..111142241111..',
        '.....141141.....',
        '....12211221....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    3: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '...1111111111...',
        '..144433334441..',
        '..122522225221..',
        '..122522225221..',
        '..122222222221..',
        '...1432222341...',
        '1332243443422331',
        '1322433443342231',
        '.11112444421111.',
        '....14411441....',
        '....13211231....',
        '...1422112241...',
        '...1111..1111...',
        '................',
        '................',
      ],
    },
    4: {
      headY: 1,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '...1111111111...',
        '..144433334441..',
        '..125522225521..',
        '..125522225521..',
        '..132222222231..',
        '.13342222224331.',
        '1332433443342331',
        '1242424334242421',
        '1441122442211441',
        '.11.14422441.11.',
        '...1322112231...',
        '...1422112241...',
        '..11111..11111..',
        '................',
        '................',
      ],
    },
  },

  // === CUTE PET 2: Kraft-Bär (bleibt kompakt, rundlich & extrem knuffig) ===
  bear: {
    1: {
      headY: 4,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '................',
        '...111....111...',
        '..134311113431..',
        '..132222222231..',
        '..122552255221..',
        '..122552255221..',
        '...1223333221...',
        '...1322222231...',
        '...1223333221...',
        '...1422222241...',
        '....11422411....',
        '.....121121.....',
        '.....11..11.....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..111......111..',
        '.13431111113431.',
        '..133222222331..',
        '..122552255221..',
        '..122552255221..',
        '..122233332221..',
        '...1322222231...',
        '..132233332231..',
        '..122333333221..',
        '...1422222241...',
        '....11422411....',
        '....122..221....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    3: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..1111....1111..',
        '.13433111133431.',
        '..133222222331..',
        '..122552255221..',
        '..122552255221..',
        '..132233332231..',
        '...1332222331...',
        '..132233332231..',
        '..132333333231..',
        '...1442222441...',
        '....11422411....',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    4: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '.1111......1111.',
        '.13433111133431.',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..132233332231..',
        '...1332222331...',
        '..133233332331..',
        '..132333333231..',
        '...1442222441...',
        '....11422411....',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
      ],
    },
  },

  // === CUTE PET 3: Gym-Katze (bleibt kompakt, große Kulleraugen, süßer Schweif) ===
  cat: {
    1: {
      headY: 4,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '................',
        '...11......11...',
        '..134111111431..',
        '..132222222231..',
        '..122552255221..',
        '..122552255221..',
        '...1222222221...',
        '....13222231.11.',
        '...1222332221131',
        '....14222241121.',
        '....1142241111..',
        '.....121121.....',
        '.....11..11.....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..11........11..',
        '..134111111431..',
        '..133222222331..',
        '..122552255221..',
        '..122552255221..',
        '...1222222221...',
        '...133222233111.',
        '..13223333223131',
        '...142233224121.',
        '....1142241111..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    3: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..111......111..',
        '..134111111431..',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..132222222231..',
        '...133233233111.',
        '..13223333223131',
        '...142233224121.',
        '....1142241111..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    4: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..111......111..',
        '.13341111114331.',
        '..133322223331..',
        '..122552255221..',
        '..122552255221..',
        '..132233332231..',
        '...133233233111.',
        '..13323333233131',
        '...142233224121.',
        '....1142241111..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
  },

  // === PROGRESS / BEAST PET 3: Reps-Rex (wird breiter & mächtiger) ===
  dino: {
    1: {
      headY: 3,
      bodyY: 8,
      handX: 12,
      handY: 8,
      rows: [
        '................',
        '................',
        '....11111111....',
        '...1332222331...',
        '...1252222521...',
        '...1252222521...',
        '...1222222221...',
        '....14222241....',
        '...1322332231...',
        '..1422222241....',
        '..124224421.....',
        '...11121121.....',
        '.....121121.....',
        '.....111111.....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '....13111131....',
        '...1332222331...',
        '..122522225221..',
        '..122522225221..',
        '..122222222221..',
        '...1432222341...',
        '..132234432231..',
        '.1422242242241..',
        '.124222442211...',
        '..1111221221....',
        '.....1221221....',
        '....11111111....',
        '................',
        '................',
        '................',
      ],
    },
    3: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '...1311111131...',
        '..133322223331..',
        '..125522225521..',
        '..125522225521..',
        '..132222222231..',
        '.13342222224331.',
        '1322432442342231',
        '1242424224242421',
        '.1441224422111..',
        '..11142212241...',
        '....132212231...',
        '...11111.11111..',
        '................',
        '................',
        '................',
      ],
    },
    4: {
      headY: 1,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '..131311113131..',
        '.13332222223331.',
        '.12255222255221.',
        '.12255222255221.',
        '..132222222231..',
        '1333422222243331',
        '1322433443342231',
        '1242424334242421',
        '1442422442242441',
        '.11114422441111.',
        '...1322112231...',
        '...1422112241...',
        '..11111..11111..',
        '................',
        '................',
      ],
    },
  },

  // === PROGRESS / BEAST PET 4: Silberrücken (Gorilla-Titan) ===
  gorilla: {
    1: {
      headY: 3,
      bodyY: 8,
      handX: 13,
      handY: 8,
      rows: [
        '................',
        '................',
        '....11111111....',
        '...1433223341...',
        '...1452222541...',
        '...1452222541...',
        '...1422222241...',
        '..113422224311..',
        '.13223422432231.',
        '.12422444422421.',
        '.14411422411441.',
        '..11..1221..11..',
        '.....142241.....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '....11111111....',
        '...1433333341...',
        '..142522225241..',
        '..142522225241..',
        '..142222222241..',
        '.11334222243311.',
        '1332433443342331',
        '1242424224242421',
        '1442422442242441',
        '.111.142241.111.',
        '....14211241....',
        '....12211221....',
        '...1111..1111...',
        '................',
        '................',
      ],
    },
    3: {
      headY: 2,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '...1111111111...',
        '..133332233331..',
        '..145522225541..',
        '..145522225541..',
        '..142222222241..',
        '1333422222243331',
        '1322433443342231',
        '1242424334242421',
        '1442422442242441',
        '.11114422441111.',
        '....13211231....',
        '...1422112241...',
        '..11111..11111..',
        '................',
        '................',
      ],
    },
    4: {
      headY: 1,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '..111333333111..',
        '.13333322333331.',
        '.14255222255241.',
        '.14255222255241.',
        '.14222222222241.',
        '1333422222243331',
        '1322433443342231',
        '1242424334242421',
        '1442422442242441',
        '1441144224411441',
        '.11.13211231.11.',
        '...1322112231...',
        '..144221122441..',
        '..11111..11111..',
        '................',
      ],
    },
  },

  // === CUTE PET 4 (High-Level 50 Wo.): Pump-Shiba (kompakt, flauschige Ohren, Kulleraugen) ===
  shiba: {
    1: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..11........11..',
        '..131......131..',
        '..123111111321..',
        '..123222222321..',
        '..122552255221..',
        '..122552255221..',
        '..133322223331..',
        '...1333333331...',
        '...122333322111.',
        '...122333322131.',
        '....1422224111..',
        '....131..131....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..111......111..',
        '..132111111231..',
        '.12332222223321.',
        '.12325522552321.',
        '.12225522552221.',
        '..133322223331..',
        '...1333333331...',
        '..1322333322311.',
        '..1223333332231.',
        '...14223322411..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    3: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '..111......111..',
        '.13321111112331.',
        '.12332222223321.',
        '.12325522552321.',
        '.12225522552221.',
        '..133332233331..',
        '...1333333331...',
        '..1322333322311.',
        '..1323333332331.',
        '...14423324411..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    4: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '.1111......1111.',
        '.13321111112331.',
        '.12333222233321.',
        '.12325522552321.',
        '.12225522552221.',
        '..133332233331..',
        '...1333333331...',
        '..1332333323311.',
        '..1323333332331.',
        '...14423324411..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
  },

  // === CUTE PET 5 (High-Level 75 Wo.): Gains-Axolotl (kompakter Wasser-Drache mit Kiemen-Krönchen) ===
  axolotl: {
    1: {
      headY: 4,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '................',
        '.31..111111..13.',
        '..131332233131..',
        '.31232222223213.',
        '..122552255221..',
        '..122552255221..',
        '...1322222231...',
        '....13233231....',
        '...12233332211..',
        '....1422224131..',
        '....114224111...',
        '.....12..21.....',
        '.....11..11.....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '.31..111111..13.',
        '..131332233131..',
        '.31233222233213.',
        '..122552255221..',
        '..122552255221..',
        '..132222222231..',
        '...1332332331...',
        '..1322333322311.',
        '...142333324131.',
        '....1142241111..',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    3: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '................',
        '.31.11111111.13.',
        '.13133322333131.',
        '.31233222233213.',
        '..122552255221..',
        '..122552255221..',
        '..133222222331..',
        '...1332332331...',
        '..1322333322311.',
        '...1423333241331',
        '....11422411111.',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
    4: {
      headY: 3,
      bodyY: 9,
      handX: 12,
      handY: 9,
      rows: [
        '......3..3......',
        '.31.11111111.13.',
        '.13133322333131.',
        '.31233322333213.',
        '..122552255221..',
        '..122552255221..',
        '..133222222331..',
        '...1333333331...',
        '..1332333323311.',
        '...1423333241331',
        '....11422411111.',
        '....132..231....',
        '....111..111....',
        '................',
        '................',
        '................',
      ],
    },
  },

  // === PROGRESS / BEAST PET 5 (Endgame 100 Wo.): Cyber-Wolf (wird massiv + Energie-Aura) ===
  cyberwolf: {
    1: {
      headY: 3,
      bodyY: 8,
      handX: 12,
      handY: 8,
      rows: [
        '................',
        '...11......11...',
        '..1431....1341..',
        '..142311113241..',
        '..142522225241..',
        '..142522225241..',
        '..142222222241..',
        '...1132222311...',
        '..132234432231..',
        '..142242242241..',
        '...1144224411...',
        '....14211241....',
        '....121..121....',
        '....111..111....',
        '................',
        '................',
      ],
    },
    2: {
      headY: 2,
      bodyY: 7,
      handX: 13,
      handY: 7,
      rows: [
        '................',
        '..11........11..',
        '..143111111341..',
        '..132522225231..',
        '..142522225241..',
        '..142222222241..',
        '.11332222223311.',
        '.13224344342231.',
        '.12424244242421.',
        '..111142241111..',
        '....14211241....',
        '....13211231....',
        '...1111..1111...',
        '................',
        '................',
        '................',
      ],
    },
    3: {
      headY: 2,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '.11..........11.',
        '.14311133111341.',
        '..135522225531..',
        '..145522225541..',
        '..142222222241..',
        '.13342222224331.',
        '1322433443342231',
        '1242424334242421',
        '.11114422441111.',
        '...1322112231...',
        '...1422112241...',
        '..11111..11111..',
        '................',
        '................',
        '................',
      ],
    },
    4: {
      headY: 1,
      bodyY: 6,
      handX: 14,
      handY: 6,
      rows: [
        '................',
        '.131........131.',
        '.14331133113341.',
        '.14255222255241.',
        '.14255222255241.',
        '.14222222222241.',
        '1333422222243331',
        '1322433443342231',
        '1242424334242421',
        '1442422442242441',
        '.11114422441111.',
        '...1322112231...',
        '..144221122441..',
        '..11111..11111..',
        '................',
        '................',
      ],
    },
  },
};

function getPetStyle(petId) {
  const found = PRESET_PETS.find((p) => p.id === petId);
  return found?.style === 'cute' ? 'cute' : 'progress';
}

function parseRowsToMatrix(rows) {
  return rows.map((row) =>
    Array.from({ length: 16 }, (_, idx) => {
      const ch = row[idx] || '.';
      if (ch === '.') return 0;
      const n = Number(ch);
      return Number.isInteger(n) && n >= 0 && n <= 5 ? n : 0;
    })
  );
}

/**
 * Liefert die 16x16 Matrix + Ankerpunkte + Stil ('cute' | 'progress').
 */
export function buildMoodMatrix(petId, stage = 1, mood = 'idle') {
  const petSprites = PET_STAGE_SPRITES[petId] || PET_STAGE_SPRITES.monster;
  const stageDef = petSprites[stage] || petSprites[1] || petSprites[Object.keys(petSprites)[0]];
  const matrix = parseRowsToMatrix(stageDef?.rows || []);
  const style = getPetStyle(petId);

  return {
    matrix,
    style,
    anchors: {
      headY: stageDef?.headY ?? 3,
      bodyY: stageDef?.bodyY ?? 8,
      handX: stageDef?.handX ?? 12,
      handY: stageDef?.handY ?? 8,
    },
  };
}

// ---------------------------------------------------------------------------
// 4. Extrem ressourcenschonende SVG/CSS-Keyframe-Engine (GymBuddySpriteCanvas)
// ---------------------------------------------------------------------------

const GYM_BUDDY_CSS_ID = 'gym-buddy-svg-keyframes-v2';
const GYM_BUDDY_KEYFRAMES_CSS = `
@keyframes gb-hop {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-0.75px); }
}
@keyframes gb-idle-bob {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-0.32px); }
}
@keyframes gb-post-workout-breathe {
  0%, 100% { transform: translateY(0px) scale(1, 1); }
  50% { transform: translateY(-0.25px) scale(1.035, 1.065); }
}
@keyframes gb-sleep-breathe {
  0%, 100% { transform: scale(1, 1); }
  50% { transform: scale(1.02, 1.045); }
}
/* 14s Zyklus (= 2 × 7s):
   - Bei 25% (3.5s) und 75% (10.5s): kurzes normales Blinzeln beider Augen (~180ms)
   - Bei 50% (7.0s) und 98% (14.0s): rechtes Auge zwinkert für ~400ms (2.85% von 14s), linkes Auge bleibt offen! */
@keyframes gb-eye-left-blink {
  0%, 23.8%, 26.2%, 73.8%, 76.2%, 100% { transform: scaleY(1); }
  24.6%, 25.4%, 74.6%, 75.4% { transform: scaleY(0.14); }
}
@keyframes gb-eye-right-wink {
  0%, 23.8%, 26.2%, 47.8%, 52.2%, 73.8%, 76.2%, 95.8%, 100% { transform: scaleY(1); }
  24.6%, 25.4%, 74.6%, 75.4% { transform: scaleY(0.14); }
  48.6%, 51.4%, 96.6%, 99.4% { transform: scaleY(0.12); }
}
@keyframes gb-sweat-bob {
  0%, 100% { transform: translateY(0px); opacity: 0.95; }
  50% { transform: translateY(0.55px); opacity: 1; }
}
@keyframes gb-zzz-float-1 {
  0%, 100% { transform: translate(0px, 0px); opacity: 0.35; }
  50% { transform: translate(0.25px, -0.55px); opacity: 1; }
}
@keyframes gb-zzz-float-2 {
  0%, 100% { transform: translate(0px, 0px); opacity: 0.95; }
  50% { transform: translate(0.35px, -0.65px); opacity: 0.3; }
}
@keyframes gb-star-twinkle {
  0%, 100% { opacity: 0.35; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1.12); }
}
@keyframes gb-aura-pulse {
  0%, 100% { opacity: 0.28; transform: translateY(0px) scale(0.98); }
  50% { opacity: 0.68; transform: translateY(-0.35px) scale(1.03); }
}
.gb-anim-happy {
  animation: gb-hop 1.15s ease-in-out infinite;
  transform-origin: 8px 14px;
}
.gb-anim-idle {
  animation: gb-idle-bob 2.5s ease-in-out infinite;
  transform-origin: 8px 14px;
}
.gb-anim-post-workout {
  animation: gb-post-workout-breathe 2.8s ease-in-out infinite;
  transform-origin: 8px 14px;
}
.gb-anim-sleep {
  animation: gb-sleep-breathe 4.0s ease-in-out infinite;
  transform-origin: 8px 14px;
}
.gb-eye-left-awake {
  animation: gb-eye-left-blink 14s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center 78%;
}
.gb-eye-right-awake {
  animation: gb-eye-right-wink 14s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center 78%;
}
.gb-sweat-drop {
  animation: gb-sweat-bob 2.0s ease-in-out infinite;
}
.gb-zzz-1 {
  animation: gb-zzz-float-1 3.2s ease-in-out infinite;
}
.gb-zzz-2 {
  animation: gb-zzz-float-2 3.2s ease-in-out infinite;
}
.gb-star-a {
  animation: gb-star-twinkle 2.2s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.gb-star-b {
  animation: gb-star-twinkle 2.2s ease-in-out 1.1s infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.gb-beast-aura {
  animation: gb-aura-pulse 1.9s ease-in-out infinite;
  transform-origin: 8px 8px;
}
@media (prefers-reduced-motion: reduce) {
  .gb-anim-happy, .gb-anim-idle, .gb-anim-post-workout, .gb-anim-sleep,
  .gb-eye-left-awake, .gb-eye-right-awake, .gb-sweat-drop, .gb-zzz-1, .gb-zzz-2,
  .gb-star-a, .gb-star-b, .gb-beast-aura {
    animation: none !important;
  }
}
`;

function ensureGymBuddyKeyframesInjected() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(GYM_BUDDY_CSS_ID)) return;
  try {
    const styleEl = document.createElement('style');
    styleEl.id = GYM_BUDDY_CSS_ID;
    styleEl.textContent = GYM_BUDDY_KEYFRAMES_CSS;
    document.head.appendChild(styleEl);
  } catch {}
}

/**
 * Erzeugt die SVG-Rechtecke für ausgerüstete Accessoires (Kopf, Körper, Hand) + Buch bei 'reading'.
 */
function buildAccessoryRects(anchors, equipped, accessoryColors, defaultAccHex, mood) {
  const rects = [];
  const pushPx = (x, y, fill, w = 1, h = 1) => {
    if (x < 0 || x >= 16 || y < 0 || y >= 16) return;
    rects.push({ x, y, w, h, fill });
  };

  // 1. Kopf-Accessoire (head)
  const headAcc = equipped?.head;
  if (headAcc) {
    const col = isValidHexColor(accessoryColors?.head) ? accessoryColors.head : defaultAccHex;
    const { h, s, l } = hexToHsl(col);
    const darkCol = hslToHex(h, s, Math.max(10, l - 22));
    const hy = anchors.headY;

    if (headAcc === 'sweatband') {
      for (let x = 4; x <= 11; x++) {
        pushPx(x, hy, x % 2 === 0 ? col : darkCol);
      }
      pushPx(12, hy + 1, col);
    } else if (headAcc === 'beanie') {
      pushPx(7, Math.max(0, hy - 2), col, 2, 1);
      pushPx(5, Math.max(0, hy - 1), darkCol, 6, 1);
      pushPx(4, hy, col, 8, 1);
    } else if (headAcc === 'sunglasses') {
      const ey = hy + 2;
      pushPx(3, ey, '#11151C', 10, 1);
      pushPx(5, ey, col, 2, 1);
      pushPx(9, ey, col, 2, 1);
      pushPx(5, ey + 1, '#11151C', 2, 1);
      pushPx(9, ey + 1, '#11151C', 2, 1);
    }
  }

  // 2. Körper-Accessoire (body)
  const bodyAcc = equipped?.body;
  if (bodyAcc) {
    const col = isValidHexColor(accessoryColors?.body) ? accessoryColors.body : defaultAccHex;
    const { h, s, l } = hexToHsl(col);
    const darkCol = hslToHex(h, s, Math.max(12, l - 20));
    const by = anchors.bodyY;

    if (bodyAcc === 'hoodie') {
      for (let y = by; y <= Math.min(14, by + 2); y++) {
        for (let x = 4; x <= 11; x++) {
          pushPx(x, y, y === by && (x === 6 || x === 9) ? '#F8FAFC' : col);
        }
      }
      pushPx(5, Math.min(14, by + 2), darkCol, 6, 1);
    } else if (bodyAcc === 'belt') {
      const beltY = Math.min(14, by + 2);
      pushPx(4, beltY, darkCol, 8, 1);
      pushPx(7, beltY, col, 2, 1);
    }
  }

  // 3. Hand-Accessoire (hand)
  const handAcc = equipped?.hand;
  if (handAcc) {
    const col = isValidHexColor(accessoryColors?.hand) ? accessoryColors.hand : defaultAccHex;
    const hx = anchors.handX;
    const hy = anchors.handY;

    if (handAcc === 'dumbbell') {
      pushPx(hx - 1, hy, '#94A3B8');
      pushPx(hx, hy, '#CBD5E1');
      pushPx(hx + 1, hy, '#94A3B8');
      pushPx(hx - 1, hy - 1, col);
      pushPx(hx - 1, hy + 1, col);
      pushPx(hx + 1, hy - 1, col);
      pushPx(hx + 1, hy + 1, col);
    } else if (handAcc === 'shaker') {
      pushPx(hx, hy - 1, '#11151C', 2, 1);
      pushPx(hx, hy, col, 2, 2);
    } else if (handAcc === 'kettlebell') {
      pushPx(hx, hy - 1, '#94A3B8', 2, 1);
      pushPx(hx, hy, col, 2, 2);
    }
  }

  // 4. Trainingsbuch bei 'reading'
  if (mood === 'reading') {
    const ry = Math.min(13, anchors.bodyY + 2);
    pushPx(5, ry, '#F8FAFC', 6, 1);
    for (let x = 5; x <= 10; x++) {
      pushPx(x, ry + 1, x === 7 || x === 8 ? '#64748B' : '#38BDF8');
    }
  }

  return rects;
}

/**
 * Erzeugt das freundliche, kompakte Pixel-Art-Lächeln passend zum Pet-Stil ('cute' vs. 'progress') und zur Stimmung.
 * Bleibt bewusst schmal im Zwischenraum zwischen den Augen (x = 6.7..9.3) in der Gesichtszeile rowY = eyeBottomY + 1.
 */
function buildMouthElements(style, stage, mood, eyeBottomY, eyeHex) {
  const rowY = eyeBottomY + 1;
  const elements = [];

  if (mood === 'sleep') {
    // Sanftes, kleines Lächeln im Schlaf (\_/)
    elements.push(
      { x: 6.85, y: rowY + 0.14, w: 0.5, h: 0.44, fill: eyeHex },
      { x: 7.35, y: rowY + 0.42, w: 1.3, h: 0.44, fill: eyeHex },
      { x: 8.65, y: rowY + 0.14, w: 0.5, h: 0.44, fill: eyeHex }
    );
    if (style === 'cute') {
      elements.push(
        { x: 4.3, y: rowY + 0.1, w: 1.0, h: 0.5, fill: '#FB7185', opacity: 0.45 },
        { x: 10.7, y: rowY + 0.1, w: 1.0, h: 0.5, fill: '#FB7185', opacity: 0.45 }
      );
    }
    return elements;
  }

  if (style === 'cute') {
    // Zarte rosige Wangen bei allen Cute-Pets
    elements.push(
      { x: 4.15, y: rowY + 0.08, w: 1.1, h: 0.55, fill: '#FB7185', opacity: 0.58 },
      { x: 10.75, y: rowY + 0.08, w: 1.1, h: 0.55, fill: '#FB7185', opacity: 0.58 }
    );

    if (mood === 'post_workout' || mood === 'happy' || stage >= 4) {
      // Strahlendes, süßes Cute-Lächeln (\_/)
      elements.push(
        { x: 6.65, y: rowY + 0.06, w: 0.55, h: 0.46, fill: eyeHex },
        { x: 7.2, y: rowY + 0.38, w: 1.6, h: 0.48, fill: eyeHex },
        { x: 8.8, y: rowY + 0.06, w: 0.55, h: 0.46, fill: eyeHex }
      );
    } else {
      // Kompaktes Cute-Lächeln (\_/)
      elements.push(
        { x: 6.85, y: rowY + 0.1, w: 0.5, h: 0.45, fill: eyeHex },
        { x: 7.35, y: rowY + 0.38, w: 1.3, h: 0.46, fill: eyeHex },
        { x: 8.65, y: rowY + 0.1, w: 0.5, h: 0.45, fill: eyeHex }
      );
    }
  } else {
    // Progress / Beast Pets: Dezentes, cooles Pixel-Art-Lächeln mittig zwischen den Augen
    if (mood === 'post_workout' || mood === 'happy') {
      // Zufriedenes, sportliches Pixel-Lächeln (\_/)
      elements.push(
        { x: 6.7, y: rowY + 0.08, w: 0.55, h: 0.46, fill: eyeHex },
        { x: 7.25, y: rowY + 0.38, w: 1.5, h: 0.48, fill: eyeHex },
        { x: 8.75, y: rowY + 0.08, w: 0.55, h: 0.46, fill: eyeHex }
      );
    } else {
      // Cooles, dezentes Pixel-Smirk (__/ ) mit leicht angehobenem rechtem Mundwinkel
      elements.push(
        { x: 7.0, y: rowY + 0.36, w: 1.5, h: 0.46, fill: eyeHex },
        { x: 8.5, y: rowY + 0.08, w: 0.55, h: 0.46, fill: eyeHex }
      );
    }
  }

  return elements;
}

export function GymBuddySpriteCanvas({
  petId,
  stage = 1,
  mood = 'idle',
  colorMode = 'theme',
  customHex = '#A8DAB5',
  equipped = {},
  accessoryColors = {},
  size = 64,
  className = '',
}) {
  y.useEffect(() => {
    ensureGymBuddyKeyframesInjected();
  }, []);

  let isDarkTheme = true;
  let defaultAccHex = '#A8DAB5';

  try {
    if (typeof document !== 'undefined') {
      isDarkTheme =
        document.documentElement.classList.contains('dark') ||
        Boolean(document.body?.classList.contains('dark'));
    }
    const themeCtx = typeof useThemeSettings === 'function' ? useThemeSettings() : null;
    const s = themeCtx?.settings;
    if (s) {
      if (s.themeMode === 'light') isDarkTheme = false;
      else if (s.themeMode === 'dark') isDarkTheme = true;
      else if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        if (mq && typeof mq.matches === 'boolean') {
          isDarkTheme = mq.matches;
        }
      }
      if (isValidHexColor(s.accentHex)) defaultAccHex = s.accentHex;
    }
  } catch {}

  const effectiveHex =
    colorMode === 'custom' && isValidHexColor(customHex)
      ? customHex
      : getMonochromePetHex(isDarkTheme);

  const spriteData = y.useMemo(() => {
    const palette = buildShadedPalette(effectiveHex, isDarkTheme);
    const { matrix, style, anchors } = buildMoodMatrix(petId, stage, mood);
    const bodyRects = [];
    const leftEyePixels = [];
    const rightEyePixels = [];
    let maxEyeY = anchors.headY + 3;

    // Run-length encode body rows and extract left/right eye pixels
    for (let py = 0; py < 16; py++) {
      let runSlot = 0;
      let runStart = 0;
      for (let px = 0; px <= 16; px++) {
        const rawSlot = px < 16 ? matrix[py]?.[px] || 0 : 0;
        if (rawSlot === 5) {
          if (py > maxEyeY) maxEyeY = py;
          if (px < 8) leftEyePixels.push({ x: px, y: py });
          else rightEyePixels.push({ x: px, y: py });
        }
        // Fill face behind eyes with main body color (slot 2) so blinking/winking shows face seamlessly
        const effectiveBodySlot = rawSlot === 5 ? 2 : rawSlot;
        if (effectiveBodySlot !== runSlot) {
          if (runSlot > 0 && palette[runSlot]) {
            bodyRects.push({
              x: runStart,
              y: py,
              w: px - runStart,
              h: 1,
              fill: palette[runSlot],
            });
          }
          runSlot = effectiveBodySlot;
          runStart = px;
        }
      }
    }

    const eyeHex = palette[5] || '#11151C';
    const mouthRects = buildMouthElements(style, stage, mood, maxEyeY, eyeHex);
    const accRects = buildAccessoryRects(
      anchors,
      equipped || {},
      accessoryColors || {},
      defaultAccHex,
      mood
    );

    const leftEyeMinX = leftEyePixels.length ? Math.min(...leftEyePixels.map((p) => p.x)) : 4;
    const leftEyeMinY = leftEyePixels.length ? Math.min(...leftEyePixels.map((p) => p.y)) : 5;
    const rightEyeMinX = rightEyePixels.length ? Math.min(...rightEyePixels.map((p) => p.x)) : 9;
    const rightEyeMinY = rightEyePixels.length ? Math.min(...rightEyePixels.map((p) => p.y)) : 5;

    return {
      palette,
      style,
      anchors,
      bodyRects,
      leftEyePixels,
      rightEyePixels,
      leftEyeMinX,
      leftEyeMinY,
      rightEyeMinX,
      rightEyeMinY,
      maxEyeY,
      eyeHex,
      mouthRects,
      accRects,
    };
  }, [petId, stage, mood, effectiveHex, isDarkTheme, equipped, accessoryColors, defaultAccHex]);

  const bodyAnimClass =
    mood === 'post_workout'
      ? 'gb-anim-post-workout'
      : mood === 'happy'
        ? 'gb-anim-happy'
        : mood === 'sleep'
          ? 'gb-anim-sleep'
          : 'gb-anim-idle';

  const isAwake = mood !== 'sleep';
  const auraColor = colorMode === 'custom' && isValidHexColor(customHex) ? customHex : defaultAccHex;

  return c.jsx('div', {
    className: `relative inline-flex shrink-0 items-center justify-center select-none ${className}`,
    style: { width: `${size}px`, height: `${size}px` },
    children: c.jsxs('svg', {
      viewBox: '0 0 16 16',
      width: size,
      height: size,
      shapeRendering: 'crispEdges',
      className: 'overflow-visible',
      'aria-hidden': 'true',
      children: [
        // 1. Progress/Beast Energie-Aura (ab Stufe 3, besonders intensiv auf Stufe 4)
        spriteData.style === 'progress' && stage >= 3
          ? c.jsxs('g', {
              className: 'gb-beast-aura',
              children: [
                c.jsx('rect', {
                  x: 1.2,
                  y: 2.5,
                  width: 13.6,
                  height: 11.5,
                  fill: auraColor,
                  opacity: stage === 4 ? 0.22 : 0.14,
                }),
                c.jsx('rect', {
                  x: 0.4,
                  y: 5.0,
                  width: 1.0,
                  height: 6.0,
                  fill: auraColor,
                  opacity: 0.55,
                }),
                c.jsx('rect', {
                  x: 14.6,
                  y: 5.0,
                  width: 1.0,
                  height: 6.0,
                  fill: auraColor,
                  opacity: 0.55,
                }),
                stage === 4
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsx('rect', { x: 2.0, y: 0.6, width: 1.2, height: 1.2, fill: auraColor, opacity: 0.75 }),
                        c.jsx('rect', { x: 12.8, y: 0.6, width: 1.2, height: 1.2, fill: auraColor, opacity: 0.75 }),
                        c.jsx('rect', { x: 0.2, y: 2.8, width: 0.9, height: 1.8, fill: '#FDE047', opacity: 0.7 }),
                        c.jsx('rect', { x: 14.9, y: 2.8, width: 0.9, height: 1.8, fill: '#FDE047', opacity: 0.7 }),
                      ],
                    })
                  : null,
              ],
            })
          : null,

        // 2. Animierte Haupt-Körpergruppe (Hüpfen / Tiefes Post-Workout-Atmen / Friedliches Schlaf-Atmen)
        c.jsxs('g', {
          className: bodyAnimClass,
          children: [
            // Basis-Körper-Pixel
            c.jsx('g', {
              children: spriteData.bodyRects.map((r, i) =>
                c.jsx(
                  'rect',
                  {
                    x: r.x,
                    y: r.y,
                    width: r.w,
                    height: r.h,
                    fill: r.fill,
                  },
                  i
                )
              ),
            }),

            // Augen: Im Wachzustand mit 7s-Zwinker-Animation (Wink) & Blinzeln; im Schlaf friedlich geschlossen
            isAwake
              ? c.jsxs(c.Fragment, {
                  children: [
                    // Linkes Auge (blinzelt normal)
                    c.jsxs('g', {
                      className: 'gb-eye-left-awake',
                      children: [
                        ...spriteData.leftEyePixels.map((p, i) =>
                          c.jsx(
                            'rect',
                            {
                              x: p.x,
                              y: p.y,
                              width: 1,
                              height: 1,
                              fill: spriteData.eyeHex,
                            },
                            `le-${i}`
                          )
                        ),
                        // Glänzende Cute-Augen-Highlights (größer & glänzender auf höheren Stufen)
                        spriteData.style === 'cute'
                          ? c.jsxs(c.Fragment, {
                              children: [
                                c.jsx('rect', {
                                  x: spriteData.leftEyeMinX + 0.1,
                                  y: spriteData.leftEyeMinY + 0.1,
                                  width: stage >= 3 ? 0.95 : 0.8,
                                  height: stage >= 3 ? 0.95 : 0.8,
                                  fill: '#FFFFFF',
                                }),
                                stage >= 2
                                  ? c.jsx('rect', {
                                      x: spriteData.leftEyeMinX + 1.15,
                                      y: spriteData.leftEyeMinY + 1.15,
                                      width: 0.55,
                                      height: 0.55,
                                      fill: '#FFFFFF',
                                      opacity: 0.9,
                                    })
                                  : null,
                              ],
                            })
                          : c.jsx('rect', {
                              x: spriteData.leftEyeMinX + 0.15,
                              y: spriteData.leftEyeMinY + 0.15,
                              width: 0.55,
                              height: 0.55,
                              fill: '#FFFFFF',
                              opacity: 0.85,
                            }),
                      ],
                    }),

                    // Rechtes Auge (zwinkert alle 7s für ~400ms motivierend zu + normales Blinzeln!)
                    c.jsxs('g', {
                      className: 'gb-eye-right-awake',
                      children: [
                        ...spriteData.rightEyePixels.map((p, i) =>
                          c.jsx(
                            'rect',
                            {
                              x: p.x,
                              y: p.y,
                              width: 1,
                              height: 1,
                              fill: spriteData.eyeHex,
                            },
                            `re-${i}`
                          )
                        ),
                        spriteData.style === 'cute'
                          ? c.jsxs(c.Fragment, {
                              children: [
                                c.jsx('rect', {
                                  x: spriteData.rightEyeMinX + 0.1,
                                  y: spriteData.rightEyeMinY + 0.1,
                                  width: stage >= 3 ? 0.95 : 0.8,
                                  height: stage >= 3 ? 0.95 : 0.8,
                                  fill: '#FFFFFF',
                                }),
                                stage >= 2
                                  ? c.jsx('rect', {
                                      x: spriteData.rightEyeMinX + 1.15,
                                      y: spriteData.rightEyeMinY + 1.15,
                                      width: 0.55,
                                      height: 0.55,
                                      fill: '#FFFFFF',
                                      opacity: 0.9,
                                    })
                                  : null,
                              ],
                            })
                          : c.jsx('rect', {
                              x: spriteData.rightEyeMinX + 0.15,
                              y: spriteData.rightEyeMinY + 0.15,
                              width: 0.55,
                              height: 0.55,
                              fill: '#FFFFFF',
                              opacity: 0.85,
                            }),
                      ],
                    }),
                  ],
                })
              : // Geschlossene, friedliche Schlaf-Augen
                c.jsxs('g', {
                  children: [
                    c.jsx('rect', {
                      x: spriteData.leftEyeMinX,
                      y: spriteData.maxEyeY,
                      width: Math.max(1.6, spriteData.style === 'cute' ? 2.0 : 1.7),
                      height: 0.65,
                      fill: spriteData.eyeHex,
                    }),
                    c.jsx('rect', {
                      x: spriteData.rightEyeMinX,
                      y: spriteData.maxEyeY,
                      width: Math.max(1.6, spriteData.style === 'cute' ? 2.0 : 1.7),
                      height: 0.65,
                      fill: spriteData.eyeHex,
                    }),
                  ],
                }),

            // 3. Klar sichtbares, freundliches Lächeln (Cute-Lächeln vs. Progress-Grinsen)
            c.jsx('g', {
              children: spriteData.mouthRects.map((m, i) =>
                c.jsx(
                  'rect',
                  {
                    x: m.x,
                    y: m.y,
                    width: m.w,
                    height: m.h,
                    fill: m.fill,
                    opacity: m.opacity ?? 1,
                  },
                  `m-${i}`
                )
              ),
            }),

            // 4. Ausgerüstete Accessoires + Buch
            c.jsx('g', {
              children: spriteData.accRects.map((a, i) =>
                c.jsx(
                  'rect',
                  {
                    x: a.x,
                    y: a.y,
                    width: a.w,
                    height: a.h,
                    fill: a.fill,
                  },
                  `acc-${i}`
                )
              ),
            }),

            // 5. Kleiner Schweißtropfen an der Stirn direkt nach dem Training ('post_workout')
            mood === 'post_workout'
              ? c.jsxs('g', {
                  className: 'gb-sweat-drop',
                  children: [
                    c.jsx('rect', {
                      x: 11.4,
                      y: Math.max(1.2, spriteData.anchors.headY - 0.2),
                      width: 0.9,
                      height: 0.8,
                      fill: '#38BDF8',
                    }),
                    c.jsx('rect', {
                      x: 11.1,
                      y: Math.max(2.0, spriteData.anchors.headY + 0.5),
                      width: 1.5,
                      height: 1.3,
                      fill: '#0284C7',
                    }),
                    c.jsx('rect', {
                      x: 11.25,
                      y: Math.max(2.1, spriteData.anchors.headY + 0.65),
                      width: 0.65,
                      height: 0.65,
                      fill: '#E0F2FE',
                    }),
                  ],
                })
              : null,
          ],
        }),

        // 6. Cute-Pets Stufe 3–4 (oder 'happy'): Funkelnde kleine Sterne
        (spriteData.style === 'cute' && stage >= 3) || mood === 'happy'
          ? c.jsxs('g', {
              children: [
                c.jsxs('g', {
                  className: 'gb-star-a',
                  children: [
                    c.jsx('rect', { x: 1.2, y: 1.8, width: 1.6, height: 0.6, fill: '#FBBF24' }),
                    c.jsx('rect', { x: 1.7, y: 1.3, width: 0.6, height: 1.6, fill: '#FBBF24' }),
                  ],
                }),
                stage === 4 || mood === 'happy'
                  ? c.jsxs('g', {
                      className: 'gb-star-b',
                      children: [
                        c.jsx('rect', { x: 13.2, y: 2.2, width: 1.6, height: 0.6, fill: '#FDE047' }),
                        c.jsx('rect', { x: 13.7, y: 1.7, width: 0.6, height: 1.6, fill: '#FDE047' }),
                        c.jsx('rect', { x: 1.6, y: 10.5, width: 1.1, height: 0.5, fill: '#FDE047' }),
                        c.jsx('rect', { x: 1.85, y: 10.25, width: 0.6, height: 1.0, fill: '#FDE047' }),
                      ],
                    })
                  : null,
              ],
            })
          : null,

        // 7. Schlaf-Modus ('sleep'): Animierte Zzz-Symbole
        mood === 'sleep'
          ? c.jsxs('g', {
              children: [
                c.jsxs('g', {
                  className: 'gb-zzz-1',
                  children: [
                    c.jsx('rect', { x: 11.4, y: 2.6, width: 1.8, height: 0.45, fill: defaultAccHex }),
                    c.jsx('rect', { x: 12.0, y: 3.05, width: 0.6, height: 0.45, fill: defaultAccHex }),
                    c.jsx('rect', { x: 11.4, y: 3.5, width: 1.8, height: 0.45, fill: defaultAccHex }),
                  ],
                }),
                c.jsxs('g', {
                  className: 'gb-zzz-2',
                  children: [
                    c.jsx('rect', { x: 13.2, y: 0.7, width: 2.2, height: 0.5, fill: defaultAccHex }),
                    c.jsx('rect', { x: 13.9, y: 1.2, width: 0.7, height: 0.5, fill: defaultAccHex }),
                    c.jsx('rect', { x: 13.2, y: 1.7, width: 2.2, height: 0.5, fill: defaultAccHex }),
                  ],
                }),
              ],
            })
          : null,
      ],
    }),
  });
}

// ---------------------------------------------------------------------------
// 5. Domänen- & Fortschritts-Berechnungen (XP, Level, Streak, Meilensteine)
// ---------------------------------------------------------------------------

export function createDefaultPetProgress(petId, now = Date.now()) {
  return {
    petId,
    customName: '',
    xp: 0,
    workoutsCompleted: 0,
    totalMinutes: 0,
    colorMode: 'theme',
    customHex: '#A8DAB5',
    equipped: { head: null, body: null, hand: null },
    accessoryColors: { head: null, body: null, hand: null },
    updatedAt: now,
  };
}

export function createDefaultGymBuddyState(now = Date.now()) {
  return {
    id: GYM_BUDDY_RECORD_ID,
    enabled: true,
    activePetId: 'monster',
    processedSessionIds: [],
    petProgress: {
      monster: createDefaultPetProgress('monster', now),
      robot: createDefaultPetProgress('robot', now),
      lifter: createDefaultPetProgress('lifter', now),
      bear: createDefaultPetProgress('bear', now),
    },
    customPets: [],
    updatedAt: now,
  };
}

export function getEvolutionStage(xp) {
  if (xp >= LEVEL_XP_THRESHOLDS[4]) return 4;
  if (xp >= LEVEL_XP_THRESHOLDS[3]) return 3;
  if (xp >= LEVEL_XP_THRESHOLDS[2]) return 2;
  return 1;
}

export function calculateTotalPetLevels(petProgress) {
  if (!petProgress || typeof petProgress !== 'object') return 4;
  let total = 0;
  for (const p of Object.values(petProgress)) {
    if (p && typeof p === 'object') {
      total += getEvolutionStage(Number(p.xp) || 0);
    }
  }
  return Math.max(4, total);
}

export function calculateWorkoutXpGain(durationSec, streakCount) {
  const base = 50;
  const minutes = Math.max(1, Math.round((durationSec || 0) / 60));
  const durationBonus = Math.min(60, minutes);
  const streakBonus = Math.min(5, Math.max(1, streakCount || 1)) * 10;
  return base + durationBonus + streakBonus;
}

export function calculateWorkoutStreak(completedDatesMs, nowMs = Date.now()) {
  if (!Array.isArray(completedDatesMs) || completedDatesMs.length === 0) return 0;
  const sortedDesc = [...completedDatesMs].sort((a, b) => b - a);
  const maxGapMs = 4 * 24 * 60 * 60 * 1000;
  if (nowMs - sortedDesc[0] > maxGapMs) return 0;

  const dayStamps = [];
  const seenDays = new Set();
  for (const ts of sortedDesc) {
    const d = new Date(ts);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (!seenDays.has(key)) {
      seenDays.add(key);
      dayStamps.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime());
    }
  }

  let streak = 1;
  for (let i = 0; i < dayStamps.length - 1; i++) {
    if (dayStamps[i] - dayStamps[i + 1] <= maxGapMs) {
      streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

export function isNightSleepWindow(nowMs = Date.now()) {
  const hour = new Date(nowMs).getHours();
  return hour >= 22 || hour < 6;
}

export function hasTrainedOnSameDay(lastWorkoutAtMs, nowMs = Date.now()) {
  if (!lastWorkoutAtMs) return false;
  const lastD = new Date(lastWorkoutAtMs);
  const nowD = new Date(nowMs);
  if (
    lastD.getFullYear() === nowD.getFullYear() &&
    lastD.getMonth() === nowD.getMonth() &&
    lastD.getDate() === nowD.getDate()
  ) {
    return true;
  }
  if (nowD.getHours() < 6 && nowMs - lastWorkoutAtMs <= 18 * 3600 * 1000) {
    return true;
  }
  return false;
}

export function determinePositivePetMood(lastWorkoutAtMs, nowMs = Date.now()) {
  if (!lastWorkoutAtMs) return 'sleep';
  const hoursSince = Math.max(0, (nowMs - lastWorkoutAtMs) / (1000 * 60 * 60));
  if (hoursSince <= 2) return 'post_workout';
  if (isNightSleepWindow(nowMs)) return 'sleep';
  if (hoursSince <= 36) return 'happy';
  if (hoursSince <= 68) return 'idle';
  if (hoursSince <= 108) return 'reading';
  return 'sleep';
}

export function isPresetPetUnlocked(
  preset,
  totalWorkouts,
  totalMinutes,
  maxPetLevelReached,
  totalPetLevels = 0
) {
  if (preset.unlockWorkouts <= 0) return true;
  if (totalWorkouts >= preset.unlockWorkouts) return true;
  if (preset.unlockRequireLevel4 && maxPetLevelReached >= 4) return true;
  if (preset.unlockMinutes !== undefined && totalMinutes >= preset.unlockMinutes) return true;
  if (preset.unlockTotalLevels !== undefined && totalPetLevels >= preset.unlockTotalLevels) {
    return true;
  }
  return false;
}

export function isAccessoryUnlocked(acc, totalWorkouts, maxPetLevelReached) {
  if (totalWorkouts >= acc.unlockWorkouts) return true;
  if (acc.unlockRequireLevel !== undefined && maxPetLevelReached >= acc.unlockRequireLevel) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// 6. Reaktiver Store & IndexedDB-Persistenz
// ---------------------------------------------------------------------------

let cachedState = createDefaultGymBuddyState();
let stateLoaded = false;
const listeners = new Set();

function notifyListeners() {
  for (const fn of listeners) fn();
}

function subscribeGymBuddy(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getGymBuddySnapshot() {
  return cachedState;
}

async function persistGymBuddyState(nextState) {
  cachedState = { ...nextState, updatedAt: Date.now() };
  notifyListeners();
  try {
    await pe('Gym Buddy speichern', async (db) => {
      if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
        await db.put(GYM_BUDDY_STORE, cachedState);
      }
    });
  } catch {
    // Fallback auf localStorage falls DB noch im Upgrade ist
  }
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('gym-buddy-fallback-v1', JSON.stringify(cachedState));
    }
  } catch {}
}

let initPromise = null;
async function ensureGymBuddyLoaded() {
  if (stateLoaded) return cachedState;
  if (initPromise) return initPromise;
  initPromise = (async () => {
    try {
      const fromDb = await pe('Gym Buddy laden', async (db) => {
        if (!db.objectStoreNames.contains(GYM_BUDDY_STORE)) return null;
        return await db.get(GYM_BUDDY_STORE, GYM_BUDDY_RECORD_ID);
      });
      if (fromDb) {
        const sanitized = sanitizeGymBuddyBackupRecord(fromDb);
        if (sanitized) {
          cachedState = sanitized;
          stateLoaded = true;
          notifyListeners();
          return cachedState;
        }
      }
    } catch {}

    try {
      const raw =
        typeof localStorage !== 'undefined' ? localStorage.getItem('gym-buddy-fallback-v1') : null;
      if (raw) {
        const parsed = sanitizeGymBuddyBackupRecord(JSON.parse(raw));
        if (parsed) {
          cachedState = parsed;
          stateLoaded = true;
          notifyListeners();
          return cachedState;
        }
      }
    } catch {}

    stateLoaded = true;
    await persistGymBuddyState(cachedState);
    return cachedState;
  })();
  return initPromise;
}

export function useGymBuddy() {
  const state = y.useSyncExternalStore(subscribeGymBuddy, getGymBuddySnapshot, getGymBuddySnapshot);
  const [nowMs, setNowMs] = y.useState(() => Date.now());
  let sessions = [];
  try {
    const hist = typeof useHistoryData === 'function' ? useHistoryData() : null;
    if (hist && Array.isArray(hist.sessions)) {
      sessions = hist.sessions;
    }
  } catch {
    sessions = [];
  }

  y.useEffect(() => {
    ensureGymBuddyLoaded().catch(() => {});
    const timer = window.setInterval(() => setNowMs(Date.now()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  // Synchronisiere neu abgeschlossene Workouts automatisch mit dem aktiven Pet
  const completedSessions = y.useMemo(
    () =>
      (sessions || [])
        .map((s) => s?.session)
        .filter((s) => s && s.completedAt !== null && s.completedAt !== undefined)
        .sort((a, b) => (Number(a.date) || 0) - (Number(b.date) || 0)),
    [sessions]
  );

  y.useEffect(() => {
    if (!stateLoaded || completedSessions.length === 0) return;
    const processedSet = new Set(cachedState?.processedSessionIds || []);
    const newSessions = completedSessions.filter((s) => s && !processedSet.has(s.id));
    if (newSessions.length === 0) return;

    const activeId = cachedState?.activePetId || 'monster';
    const currentProg =
      cachedState?.petProgress?.[activeId] || createDefaultPetProgress(activeId);

    let addedXp = 0;
    let addedWorkouts = 0;
    let addedMinutes = 0;
    const runningDates = completedSessions
      .filter((s) => s && processedSet.has(s.id))
      .map((s) => s.completedAt || s.date);

    for (const sess of newSessions) {
      const ts = sess.completedAt || sess.date;
      runningDates.push(ts);
      const streakAtSession = calculateWorkoutStreak(runningDates, ts);
      addedXp += calculateWorkoutXpGain(sess.durationSec, streakAtSession);
      addedWorkouts += 1;
      addedMinutes += Math.max(1, Math.round((sess.durationSec || 0) / 60));
      processedSet.add(sess.id);
    }

    const updatedPet = {
      ...currentProg,
      xp: (currentProg?.xp || 0) + addedXp,
      workoutsCompleted: (currentProg?.workoutsCompleted || 0) + addedWorkouts,
      totalMinutes: (currentProg?.totalMinutes || 0) + addedMinutes,
      updatedAt: Date.now(),
    };

    persistGymBuddyState({
      ...cachedState,
      processedSessionIds: Array.from(processedSet),
      petProgress: {
        ...(cachedState?.petProgress || {}),
        [activeId]: updatedPet,
      },
    });
  }, [completedSessions]);

  const totalWorkouts = completedSessions.length;
  const totalMinutes = y.useMemo(
    () =>
      completedSessions.reduce(
        (sum, s) => sum + Math.max(1, Math.round((s?.durationSec || 0) / 60)),
        0
      ),
    [completedSessions]
  );

  const lastWorkoutAtMs = y.useMemo(() => {
    if (completedSessions.length === 0) return null;
    const last = completedSessions[completedSessions.length - 1];
    return last ? last.completedAt || last.date : null;
  }, [completedSessions]);

  const currentStreak = y.useMemo(
    () =>
      calculateWorkoutStreak(
        completedSessions.map((s) => s?.completedAt || s?.date).filter(Boolean),
        nowMs
      ),
    [completedSessions, nowMs]
  );

  const currentMood = y.useMemo(
    () => determinePositivePetMood(lastWorkoutAtMs, nowMs),
    [lastWorkoutAtMs, nowMs]
  );

  const trainedToday = y.useMemo(
    () => hasTrainedOnSameDay(lastWorkoutAtMs, nowMs),
    [lastWorkoutAtMs, nowMs]
  );

  const maxPetLevelReached = y.useMemo(() => {
    let maxLvl = 1;
    for (const p of Object.values(state?.petProgress || {})) {
      const lvl = getEvolutionStage(p?.xp || 0);
      if (lvl > maxLvl) maxLvl = lvl;
    }
    return maxLvl;
  }, [state?.petProgress]);

  const totalPetLevels = y.useMemo(
    () => calculateTotalPetLevels(state?.petProgress),
    [state?.petProgress]
  );

  const activePetId = state?.activePetId || 'monster';
  const activePreset =
    PRESET_PETS.find((p) => p.id === activePetId) || PRESET_PETS[0];
  const activeProgress =
    state?.petProgress?.[activePetId] || createDefaultPetProgress(activePetId);
  const activeStage = getEvolutionStage(activeProgress?.xp || 0);

  const setEnabled = y.useCallback((enabled) => {
    persistGymBuddyState({
      ...cachedState,
      enabled: Boolean(enabled),
    });
  }, []);

  const selectPet = y.useCallback((petId) => {
    const existing =
      cachedState.petProgress?.[petId] || createDefaultPetProgress(petId);
    persistGymBuddyState({
      ...cachedState,
      activePetId: petId,
      petProgress: {
        ...cachedState.petProgress,
        [petId]: existing,
      },
    });
  }, []);

  const updateActivePetCustomization = y.useCallback((patch) => {
    const petId = cachedState.activePetId || 'monster';
    const current =
      cachedState.petProgress?.[petId] || createDefaultPetProgress(petId);
    const updated = {
      ...current,
      ...patch,
      equipped: patch.equipped
        ? { ...current.equipped, ...patch.equipped }
        : current.equipped,
      accessoryColors: patch.accessoryColors
        ? { ...current.accessoryColors, ...patch.accessoryColors }
        : current.accessoryColors,
      updatedAt: Date.now(),
    };
    persistGymBuddyState({
      ...cachedState,
      petProgress: {
        ...cachedState.petProgress,
        [petId]: updated,
      },
    });
  }, []);

  return {
    state,
    enabled: state.enabled !== false,
    activePetId,
    activePreset,
    activeProgress,
    activeStage,
    currentMood,
    trainedToday,
    currentStreak,
    totalWorkouts,
    totalMinutes,
    maxPetLevelReached,
    totalPetLevels,
    setEnabled,
    selectPet,
    updateActivePetCustomization,
  };
}

// ---------------------------------------------------------------------------
// 7. Echter HSL + Hex Farbwähler (Hue / Sättigung / Helligkeit + Hex-Input)
// ---------------------------------------------------------------------------

function TrueColorPicker({
  isThemeMode,
  hexValue,
  onSelectThemeMode,
  onChangeHex,
  showThemeToggle = true,
}) {
  const texts = getBuddyTexts();
  const hsl = y.useMemo(() => hexToHsl(hexValue), [hexValue]);
  const [hexDraft, setHexDraft] = y.useState(hexValue);

  y.useEffect(() => {
    setHexDraft(hexValue);
  }, [hexValue]);

  const handleSliderChange = (nextH, nextS, nextL) => {
    const nextHex = hslToHex(nextH, nextS, nextL);
    onChangeHex(nextHex);
  };

  const handleHexInput = (val) => {
    const raw = val.startsWith('#') ? val : `#${val}`;
    setHexDraft(raw);
    if (isValidHexColor(raw)) {
      onChangeHex(raw.toUpperCase());
    }
  };

  return c.jsxs('div', {
    className: 'flex flex-col gap-3 rounded-xl2 bg-surface-containerHigh p-3.5',
    children: [
      showThemeToggle
        ? c.jsxs('div', {
            className: 'flex flex-wrap gap-2',
            children: [
              c.jsx(Chip, {
                compact: true,
                selected: isThemeMode,
                onClick: onSelectThemeMode,
                children: texts.colorModeTheme,
              }),
              c.jsx(Chip, {
                compact: true,
                selected: !isThemeMode,
                onClick: () => onChangeHex(hexValue || '#A8DAB5'),
                children: texts.colorModeCustom,
              }),
            ],
          })
        : null,

      // Farb-Vorschau + Hex-Eingabe
      c.jsxs('div', {
        className: 'flex items-center gap-3',
        children: [
          c.jsx('span', {
            className: 'h-10 w-10 shrink-0 rounded-xl border border-line2 shadow-inner',
            style: { backgroundColor: hexValue },
          }),
          c.jsxs('label', {
            className: 'flex flex-1 flex-col gap-1',
            children: [
              c.jsx('span', {
                className: 'text-label uppercase text-onSurfaceVariant',
                children: texts.hexLabel,
              }),
              c.jsx('input', {
                type: 'text',
                maxLength: 7,
                value: hexDraft,
                onChange: (e) => handleHexInput(e.target.value),
                placeholder: '#A8DAB5',
                className:
                  'h-9 w-full rounded-lg border border-line2 bg-surface-container px-3 font-mono text-body text-onSurface focus:outline-none focus:ring-2 focus:ring-primary',
              }),
            ],
          }),
        ],
      }),

      // Hue Slider (0 - 360)
      c.jsxs('label', {
        className: 'flex flex-col gap-1',
        children: [
          c.jsxs('div', {
            className: 'flex justify-between text-caption text-onSurfaceVariant',
            children: [
              c.jsx('span', { children: texts.hueLabel }),
              c.jsxs('span', { className: 'font-mono', children: [hsl.h, '°'] }),
            ],
          }),
          c.jsx('input', {
            type: 'range',
            min: 0,
            max: 360,
            value: hsl.h,
            onChange: (e) => handleSliderChange(Number(e.target.value), Math.max(hsl.s, 15), hsl.l),
            style: {
              background:
                'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
            },
            className: 'h-2.5 w-full cursor-pointer appearance-none rounded-lg',
          }),
        ],
      }),

      // Saturation Slider (0 - 100)
      c.jsxs('label', {
        className: 'flex flex-col gap-1',
        children: [
          c.jsxs('div', {
            className: 'flex justify-between text-caption text-onSurfaceVariant',
            children: [
              c.jsx('span', { children: texts.satLabel }),
              c.jsxs('span', { className: 'font-mono', children: [hsl.s, '%'] }),
            ],
          }),
          c.jsx('input', {
            type: 'range',
            min: 0,
            max: 100,
            value: hsl.s,
            onChange: (e) => handleSliderChange(hsl.h, Number(e.target.value), hsl.l),
            style: {
              background: `linear-gradient(to right, ${hslToHex(hsl.h, 0, hsl.l)}, ${hslToHex(hsl.h, 100, hsl.l)})`,
            },
            className: 'h-2.5 w-full cursor-pointer appearance-none rounded-lg',
          }),
        ],
      }),

      // Lightness Slider (10 - 95)
      c.jsxs('label', {
        className: 'flex flex-col gap-1',
        children: [
          c.jsxs('div', {
            className: 'flex justify-between text-caption text-onSurfaceVariant',
            children: [
              c.jsx('span', { children: texts.lightLabel }),
              c.jsxs('span', { className: 'font-mono', children: [hsl.l, '%'] }),
            ],
          }),
          c.jsx('input', {
            type: 'range',
            min: 10,
            max: 95,
            value: hsl.l,
            onChange: (e) => handleSliderChange(hsl.h, hsl.s, Number(e.target.value)),
            style: {
              background: `linear-gradient(to right, #14171c 0%, ${hslToHex(hsl.h, hsl.s, 50)} 50%, #f8fafc 100%)`,
            },
            className: 'h-2.5 w-full cursor-pointer appearance-none rounded-lg',
          }),
        ],
      }),

      // Optionale Schnellwahl-Swatches
      c.jsxs('div', {
        className: 'flex flex-col gap-1.5 pt-1',
        children: [
          c.jsx('span', {
            className: 'text-caption text-onSurfaceVariant',
            children: texts.quickPresetsLabel,
          }),
          c.jsx('div', {
            className: 'flex flex-wrap items-center gap-2',
            children: QUICK_SWATCHES.map((swatch) =>
              c.jsx(
                'button',
                {
                  type: 'button',
                  'aria-label': swatch,
                  onClick: () => onChangeHex(swatch),
                  style: { backgroundColor: swatch },
                  className: [
                    'h-7 w-7 rounded-full border-2 transition-transform active:scale-95',
                    !isThemeMode && hexValue.toUpperCase() === swatch.toUpperCase()
                      ? 'border-onSurface scale-110'
                      : 'border-transparent',
                  ].join(' '),
                },
                swatch
              )
            ),
          }),
        ],
      }),
    ],
  });
}

// ---------------------------------------------------------------------------
// 8. Detail-, Auswahl- & Anpassungs-Sheet (GymBuddySheet)
// ---------------------------------------------------------------------------

export function GymBuddySheet({ open, onClose }) {
  const isDe = yS() === 'de';
  const texts = getBuddyTexts();
  const {
    activePetId,
    activePreset,
    activeProgress,
    activeStage,
    currentMood,
    trainedToday,
    currentStreak,
    totalWorkouts,
    totalMinutes,
    maxPetLevelReached,
    totalPetLevels,
    state,
    selectPet,
    updateActivePetCustomization,
  } = useGymBuddy();

  const [tab, setTab] = y.useState('overview');
  const [previewMood, setPreviewMood] = y.useState(null);
  const [activeAccSlot, setActiveAccSlot] = y.useState('head');
  const [petStyleFilter, setPetStyleFilter] = y.useState('all');

  y.useEffect(() => {
    if (open) {
      setPreviewMood(null);
    }
  }, [open, activePetId]);

  const defaultName = isDe ? activePreset.nameDe : activePreset.nameEn;
  const displayName = activeProgress.customName?.trim() || defaultName;
  const displayedStage = activeStage;
  const displayedMood = previewMood || currentMood;

  const activeStyle = activePreset.style === 'cute' ? 'cute' : 'progress';
  const moodHeadline =
    displayedMood === 'sleep' && trainedToday && !previewMood
      ? texts.moodLabels.sleepTrainedToday
      : texts.moodLabels[displayedMood] || texts.moodLabels.idle;

  // Berechne nächsten Meilenstein für das aktuelle Pet
  const nextStage = activeStage < 4 ? activeStage + 1 : null;
  const nextThreshold = nextStage ? LEVEL_XP_THRESHOLDS[nextStage] : LEVEL_XP_THRESHOLDS[4];
  const prevThreshold = LEVEL_XP_THRESHOLDS[activeStage];
  const xpProgressRatio = nextStage
    ? Math.min(1, Math.max(0, (activeProgress.xp - prevThreshold) / (nextThreshold - prevThreshold)))
    : 1;
  const remainingXp = nextStage ? Math.max(0, nextThreshold - activeProgress.xp) : 0;
  const workoutsUntilNextLevel = nextStage ? Math.max(1, Math.ceil(remainingXp / 85)) : 0;

  const filteredPresets = y.useMemo(
    () =>
      petStyleFilter === 'all'
        ? PRESET_PETS
        : PRESET_PETS.filter((p) => p.style === petStyleFilter),
    [petStyleFilter]
  );

  return c.jsx(Sheet, {
    open,
    onClose,
    title: texts.title,
    children: c.jsxs('div', {
      className: 'flex flex-col gap-4',
      children: [
        // Top Preview Hero Card
        c.jsxs('div', {
          className:
            'flex flex-col items-center gap-3 rounded-xl2 border border-line2 bg-surface-containerHigh p-4 text-center',
          children: [
            c.jsxs('div', {
              className: 'flex flex-wrap items-center justify-center gap-1.5',
              children: [
                c.jsx('span', {
                  className:
                    'rounded-full bg-primary-container px-2.5 py-0.5 font-mono text-label font-semibold text-primary-onContainer',
                  children: `${texts.levelShort(displayedStage)} · ${texts.levelNames[displayedStage]}`,
                }),
                c.jsx('span', {
                  className:
                    'rounded-full bg-surface-containerHighest px-2.5 py-0.5 text-caption font-medium text-onSurface',
                  children: texts.styleBadges[activeStyle],
                }),
                c.jsx('span', {
                  className:
                    'rounded-full bg-surface-containerHighest px-2.5 py-0.5 text-caption text-onSurfaceVariant',
                  children: texts.moodShort[displayedMood] || texts.moodShort.idle,
                }),
              ],
            }),

            c.jsx('div', {
              className:
                'my-1 flex h-24 w-24 items-center justify-center rounded-2xl border border-line2/60 bg-surface-container p-2 shadow-inner',
              children: c.jsx(GymBuddySpriteCanvas, {
                petId: activePetId,
                stage: displayedStage,
                mood: displayedMood,
                colorMode: activeProgress.colorMode,
                customHex: activeProgress.customHex,
                equipped: activeProgress.equipped,
                accessoryColors: activeProgress.accessoryColors,
                size: 80,
              }),
            }),

            c.jsxs('div', {
              className: 'flex flex-col gap-0.5',
              children: [
                c.jsx('p', {
                  className: 'text-titleM font-semibold text-onSurface',
                  children: displayName,
                }),
                c.jsx('p', {
                  className: 'text-caption text-primary font-medium',
                  children: moodHeadline,
                }),
                c.jsx('p', {
                  className: 'text-caption text-onSurfaceVariant',
                  children:
                    texts.moodDescriptions[displayedMood] || texts.moodDescriptions.idle,
                }),
              ],
            }),
          ],
        }),

        // Tab Switcher
        c.jsx('div', {
          role: 'tablist',
          className: 'grid grid-cols-3 gap-1 rounded-full bg-surface-containerHigh p-1',
          children: ['overview', 'pets', 'customize'].map((key) =>
            c.jsx(
              'button',
              {
                type: 'button',
                role: 'tab',
                'aria-selected': tab === key,
                onClick: () => setTab(key),
                className: [
                  'press-feedback h-9 rounded-full px-2 text-caption font-semibold transition-all',
                  tab === key
                    ? 'bg-primary text-primary-on'
                    : 'text-onSurfaceVariant',
                ].join(' '),
                children: texts.tabs[key],
              },
              key
            )
          ),
        }),

        // TAB 1: STATUS & MEILENSTEINE
        tab === 'overview'
          ? c.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                // XP & Nächster Meilenstein
                c.jsxs('div', {
                  className: 'flex flex-col gap-2 rounded-xl2 bg-surface-containerHigh p-3.5',
                  children: [
                    c.jsxs('div', {
                      className: 'flex items-center justify-between text-caption',
                      children: [
                        c.jsx('span', {
                          className: 'font-semibold text-onSurface',
                          children: texts.stats.xpProgress,
                        }),
                        c.jsx('span', {
                          className: 'font-mono text-onSurfaceVariant',
                          children: nextStage
                            ? `${activeProgress.xp} / ${nextThreshold} XP`
                            : `${activeProgress.xp} XP (MAX)`,
                        }),
                      ],
                    }),
                    c.jsx('div', {
                      className: 'h-2.5 w-full overflow-hidden rounded-full bg-surface-containerHighest',
                      children: c.jsx('div', {
                        className: 'h-full rounded-full bg-primary transition-all duration-300',
                        style: { width: `${Math.round(xpProgressRatio * 100)}%` },
                      }),
                    }),
                    c.jsx('p', {
                      className: 'text-caption font-medium text-primary',
                      children: nextStage
                        ? texts.nextMilestoneWorkout(workoutsUntilNextLevel, nextStage)
                        : texts.maxLevelReached,
                    }),
                  ],
                }),

                // 3 Stat-Karten (Streak, Workouts, Minuten)
                c.jsxs('div', {
                  className: 'grid grid-cols-3 gap-2',
                  children: [
                    c.jsxs('div', {
                      className: 'flex flex-col rounded-xl2 bg-surface-containerHigh p-3',
                      children: [
                        c.jsx('span', {
                          className: 'font-mono text-titleM font-bold text-primary',
                          children: String(currentStreak),
                        }),
                        c.jsx('span', {
                          className: 'text-caption text-onSurfaceVariant',
                          children: texts.stats.streak,
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: 'flex flex-col rounded-xl2 bg-surface-containerHigh p-3',
                      children: [
                        c.jsx('span', {
                          className: 'font-mono text-titleM font-bold text-onSurface',
                          children: String(activeProgress.workoutsCompleted),
                        }),
                        c.jsx('span', {
                          className: 'text-caption text-onSurfaceVariant',
                          children: texts.stats.petWorkouts,
                        }),
                      ],
                    }),
                    c.jsxs('div', {
                      className: 'flex flex-col rounded-xl2 bg-surface-containerHigh p-3',
                      children: [
                        c.jsxs('span', {
                          className: 'font-mono text-titleM font-bold text-onSurface',
                          children: [activeProgress.totalMinutes, 'm'],
                        }),
                        c.jsx('span', {
                          className: 'text-caption text-onSurfaceVariant',
                          children: texts.stats.petMinutes,
                        }),
                      ],
                    }),
                  ],
                }),

                // Stimmungs-Vorschau (inklusive neuem 'post_workout' & 'sleep')
                c.jsxs('div', {
                  className: 'flex flex-col gap-2',
                  children: [
                    c.jsx('span', {
                      className: 'text-label uppercase text-onSurfaceVariant',
                      children: texts.previewMoodLabel,
                    }),
                    c.jsx('div', {
                      className: 'flex flex-wrap gap-2',
                      children: ['post_workout', 'happy', 'idle', 'reading', 'sleep'].map((m) =>
                        c.jsx(
                          Chip,
                          {
                            compact: true,
                            selected: displayedMood === m,
                            onClick: () => setPreviewMood(m === currentMood ? null : m),
                            children: texts.moodShort[m],
                          },
                          m
                        )
                      ),
                    }),
                  ],
                }),

                c.jsx('p', {
                  className: 'rounded-xl2 bg-surface-containerHigh p-3 text-caption text-onSurfaceVariant',
                  children: texts.noPenaltyNote,
                }),
              ],
            })
          : null,

        // TAB 2: PETS WÄHLEN (5 CUTE vs. 5 PROGRESS/BEAST + HIGH-LEVEL MEILENSTEINE)
        tab === 'pets'
          ? c.jsxs('div', {
              className: 'flex flex-col gap-3',
              children: [
                // Stil-Filter (Alle / Cute / Progress) + Gesamt-Pet-Level Anzeige
                c.jsxs('div', {
                  className: 'flex flex-wrap items-center justify-between gap-2',
                  children: [
                    c.jsx('div', {
                      className: 'flex flex-wrap gap-1.5',
                      children: ['all', 'cute', 'progress'].map((flt) =>
                        c.jsx(
                          Chip,
                          {
                            compact: true,
                            selected: petStyleFilter === flt,
                            onClick: () => setPetStyleFilter(flt),
                            children: texts.styleFilter[flt],
                          },
                          flt
                        )
                      ),
                    }),
                    c.jsx('span', {
                      className:
                        'rounded-full bg-surface-containerHigh px-2.5 py-1 font-mono text-[11px] font-semibold text-onSurfaceVariant',
                      children: texts.stats.totalLevels(totalPetLevels),
                    }),
                  ],
                }),

                c.jsx('div', {
                  className: 'flex flex-col gap-2.5',
                  children: filteredPresets.map((preset) => {
                    const unlocked = isPresetPetUnlocked(
                      preset,
                      totalWorkouts,
                      totalMinutes,
                      maxPetLevelReached,
                      totalPetLevels
                    );
                    const prog =
                      state.petProgress?.[preset.id] || createDefaultPetProgress(preset.id);
                    const stg = getEvolutionStage(prog.xp);
                    const isSelected = preset.id === activePetId;
                    const pName =
                      prog.customName?.trim() || (isDe ? preset.nameDe : preset.nameEn);
                    const pDesc = isDe ? preset.charDe : preset.charEn;
                    const pStyle = preset.style === 'cute' ? 'cute' : 'progress';
                    const unlockHint = preset.unlockRequireLevel4
                      ? texts.unlockRequirementLvl4OrWorkouts(preset.unlockWorkouts)
                      : preset.unlockMinutes
                        ? texts.unlockRequirementWorkoutsOrMinutes(
                            preset.unlockWorkouts,
                            preset.unlockMinutes
                          )
                        : preset.unlockTotalLevels
                          ? texts.unlockRequirementWorkoutsOrTotalLevels(
                              preset.unlockWorkouts,
                              preset.unlockTotalLevels
                            )
                          : texts.unlockRequirementWorkouts(preset.unlockWorkouts);

                    return c.jsxs(
                      'div',
                      {
                        className: [
                          'flex items-center gap-3.5 rounded-xl2 border p-3 transition-colors',
                          isSelected
                            ? 'border-primary bg-primary-soft/50'
                            : 'border-line2 bg-surface-containerHigh',
                          unlocked ? '' : 'opacity-65',
                        ].join(' '),
                        children: [
                          c.jsx('div', {
                            className:
                              'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-surface-container p-1.5',
                            children: c.jsx(GymBuddySpriteCanvas, {
                              petId: preset.id,
                              stage: stg,
                              mood: unlocked ? 'idle' : 'sleep',
                              colorMode: prog.colorMode,
                              customHex: prog.customHex,
                              equipped: prog.equipped,
                              accessoryColors: prog.accessoryColors,
                              size: 48,
                            }),
                          }),
                          c.jsxs('div', {
                            className: 'flex min-w-0 flex-1 flex-col gap-0.5',
                            children: [
                              c.jsxs('div', {
                                className: 'flex flex-wrap items-center gap-1.5',
                                children: [
                                  c.jsx('span', {
                                    className: 'text-titleS font-semibold text-onSurface truncate',
                                    children: pName,
                                  }),
                                  c.jsx('span', {
                                    className:
                                      'rounded-full bg-surface-container px-2 py-0.5 text-[11px] font-medium text-onSurfaceVariant',
                                    children: texts.styleBadges[pStyle],
                                  }),
                                  c.jsx('span', {
                                    className:
                                      'rounded-full bg-surface-container px-2 py-0.5 font-mono text-[11px] text-onSurfaceVariant',
                                    children: `${texts.levelShort(stg)} · ${prog.xp} XP`,
                                  }),
                                ],
                              }),
                              c.jsx('p', {
                                className: 'text-caption text-onSurfaceVariant',
                                children: pDesc,
                              }),
                              unlocked
                                ? null
                                : c.jsx('p', {
                                    className: 'text-caption font-medium text-primary',
                                    children: `🔒 ${unlockHint}`,
                                  }),
                            ],
                          }),
                          unlocked
                            ? isSelected
                              ? c.jsx('span', {
                                  className:
                                    'shrink-0 rounded-full bg-primary px-3 py-1 text-caption font-semibold text-primary-on',
                                  children: texts.activePetBadge,
                                })
                              : c.jsx(Button, {
                                  variant: 'outlined',
                                  className: 'shrink-0 !px-3 !py-1.5 !text-caption',
                                  onClick: () => selectPet(preset.id),
                                  children: isDe ? 'Wählen' : 'Select',
                                })
                            : null,
                        ],
                      },
                      preset.id
                    );
                  }),
                }),
              ],
            })
          : null,

        // TAB 3: ANPASSEN (NAME, FREIE FARBE, ACCESSOIRES + FARBEN)
        tab === 'customize'
          ? c.jsxs('div', {
              className: 'flex flex-col gap-4',
              children: [
                // 1. Name vergeben
                c.jsxs('label', {
                  className: 'flex flex-col gap-1.5',
                  children: [
                    c.jsx('span', {
                      className: 'text-label uppercase text-onSurfaceVariant',
                      children: texts.customizeNameLabel,
                    }),
                    c.jsx('input', {
                      type: 'text',
                      maxLength: 28,
                      value: activeProgress.customName || '',
                      onChange: (e) =>
                        updateActivePetCustomization({ customName: e.target.value }),
                      placeholder: texts.customizeNamePlaceholder(defaultName),
                      className:
                        'h-touch w-full rounded-full border border-line2 bg-surface-containerHigh px-4 text-body text-onSurface focus:outline-none focus:ring-2 focus:ring-primary',
                    }),
                  ],
                }),

                // 2. Echter Farbwähler für Pet-Farbe
                c.jsxs('div', {
                  className: 'flex flex-col gap-1.5',
                  children: [
                    c.jsx('span', {
                      className: 'text-label uppercase text-onSurfaceVariant',
                      children: texts.colorSectionTitle,
                    }),
                    c.jsx(TrueColorPicker, {
                      isThemeMode: activeProgress.colorMode !== 'custom',
                      hexValue: activeProgress.customHex || '#A8DAB5',
                      onSelectThemeMode: () =>
                        updateActivePetCustomization({ colorMode: 'theme' }),
                      onChangeHex: (hex) =>
                        updateActivePetCustomization({
                          colorMode: 'custom',
                          customHex: hex,
                        }),
                      showThemeToggle: true,
                    }),
                  ],
                }),

                // 3. Accessoires pro Slot (Kopf / Körper / Hand) + freie Farbwahl
                c.jsxs('div', {
                  className: 'flex flex-col gap-2.5',
                  children: [
                    c.jsx('span', {
                      className: 'text-label uppercase text-onSurfaceVariant',
                      children: texts.accessoriesTitle,
                    }),
                    c.jsx('div', {
                      className: 'flex gap-2',
                      children: ['head', 'body', 'hand'].map((slot) =>
                        c.jsx(
                          Chip,
                          {
                            compact: true,
                            selected: activeAccSlot === slot,
                            onClick: () => setActiveAccSlot(slot),
                            children: texts.slotLabels[slot],
                          },
                          slot
                        )
                      ),
                    }),
                    c.jsxs('div', {
                      className: 'flex flex-wrap gap-2',
                      children: [
                        c.jsx(Chip, {
                          compact: true,
                          selected: !activeProgress.equipped?.[activeAccSlot],
                          onClick: () =>
                            updateActivePetCustomization({
                              equipped: { [activeAccSlot]: null },
                            }),
                          children: texts.noneEquipped,
                        }),
                        ...ACCESSORIES.filter((a) => a.slot === activeAccSlot).map((acc) => {
                          const unlocked = isAccessoryUnlocked(
                            acc,
                            totalWorkouts,
                            maxPetLevelReached
                          );
                          const isEq = activeProgress.equipped?.[activeAccSlot] === acc.id;
                          const label = isDe ? acc.nameDe : acc.nameEn;
                          return c.jsx(
                            Chip,
                            {
                              compact: true,
                              selected: isEq,
                              disabled: !unlocked,
                              onClick: () =>
                                unlocked &&
                                updateActivePetCustomization({
                                  equipped: {
                                    [activeAccSlot]: isEq ? null : acc.id,
                                  },
                                }),
                              children: unlocked
                                ? label
                                : `🔒 ${label} (${texts.unlockRequirementLvlOrWorkouts(
                                    acc.unlockRequireLevel,
                                    acc.unlockWorkouts
                                  )})`,
                            },
                            acc.id
                          );
                        }),
                      ],
                    }),

                    // Wenn in diesem Slot ein Accessoire ausgerüstet ist -> frei wählbare Accessoire-Farbe!
                    activeProgress.equipped?.[activeAccSlot]
                      ? c.jsxs('div', {
                          className: 'mt-1 flex flex-col gap-1.5',
                          children: [
                            c.jsx('span', {
                              className: 'text-label uppercase text-onSurfaceVariant',
                              children: texts.accessoryColorLabel(
                                texts.slotLabels[activeAccSlot]
                              ),
                            }),
                            c.jsx(TrueColorPicker, {
                              isThemeMode: !activeProgress.accessoryColors?.[activeAccSlot],
                              hexValue:
                                activeProgress.accessoryColors?.[activeAccSlot] || '#A8DAB5',
                              onSelectThemeMode: () =>
                                updateActivePetCustomization({
                                  accessoryColors: { [activeAccSlot]: null },
                                }),
                              onChangeHex: (hex) =>
                                updateActivePetCustomization({
                                  accessoryColors: { [activeAccSlot]: hex },
                                }),
                              showThemeToggle: true,
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null,
      ],
    }),
  });
}

// ---------------------------------------------------------------------------
// 8.5 Lokale Error-Boundary für den Gym Buddy
// ---------------------------------------------------------------------------

class GymBuddyErrorBoundary extends y.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn('[GymBuddyErrorBoundary] caught internal error:', err);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ---------------------------------------------------------------------------
// 9. Dezentes Dashboard-Widget für den Trainings-Startscreen
// ---------------------------------------------------------------------------

function GymBuddyWidgetInternal() {
  let isDe = true;
  try {
    isDe = typeof yS === 'function' ? yS() !== 'en' : true;
  } catch {
    isDe = true;
  }
  const texts = getBuddyTexts();
  const {
    enabled,
    activePetId,
    activePreset,
    activeProgress,
    activeStage,
    currentMood,
    trainedToday,
    currentStreak,
  } = useGymBuddy();

  const [sheetOpen, setSheetOpen] = y.useState(false);

  // Wenn in den Einstellungen deaktiviert -> verschwindet komplett aus der UI!
  if (!enabled) return null;

  const defaultName = isDe ? activePreset?.nameDe : activePreset?.nameEn;
  const displayName = activeProgress?.customName?.trim() || defaultName || 'Gym Buddy';
  const nextStage = activeStage < 4 ? activeStage + 1 : null;
  const nextThreshold = nextStage ? LEVEL_XP_THRESHOLDS[nextStage] : LEVEL_XP_THRESHOLDS[4];
  const prevThreshold = LEVEL_XP_THRESHOLDS[activeStage] || 0;
  const xp = activeProgress?.xp || 0;
  const xpRatio = nextStage
    ? Math.min(1, Math.max(0, (xp - prevThreshold) / Math.max(1, nextThreshold - prevThreshold)))
    : 1;
  const remainingXp = nextStage ? Math.max(0, nextThreshold - xp) : 0;
  const workoutsUntilNextLevel = nextStage ? Math.max(1, Math.ceil(remainingXp / 85)) : 0;

  const moodLabel =
    currentMood === 'sleep' && trainedToday
      ? texts.moodLabels.sleepTrainedToday
      : texts.moodLabels[currentMood] || texts.moodLabels.idle;

  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs('button', {
        type: 'button',
        onClick: () => setSheetOpen(true),
        'aria-label': `${texts.title}: ${displayName}`,
        className:
          'press-feedback flex w-full items-center gap-3.5 rounded-xl2 border border-line2/70 bg-surface-container p-3.5 text-left transition-colors active:bg-surface-containerHigh',
        children: [
          c.jsx('div', {
            className:
              'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line2/50 bg-surface-containerHigh p-1',
            children: c.jsx(GymBuddySpriteCanvas, {
              petId: activePetId,
              stage: activeStage,
              mood: currentMood,
              colorMode: activeProgress?.colorMode,
              customHex: activeProgress?.customHex,
              equipped: activeProgress?.equipped,
              accessoryColors: activeProgress?.accessoryColors,
              size: 48,
            }),
          }),

          c.jsxs('div', {
            className: 'flex min-w-0 flex-1 flex-col gap-1',
            children: [
              c.jsxs('div', {
                className: 'flex items-center justify-between gap-2',
                children: [
                  c.jsxs('div', {
                    className: 'flex min-w-0 items-center gap-2',
                    children: [
                      c.jsx('span', {
                        className: 'truncate text-titleS font-semibold text-onSurface',
                        children: displayName,
                      }),
                      c.jsx('span', {
                        className:
                          'shrink-0 rounded-full bg-primary-container px-2 py-0.5 font-mono text-[11px] font-semibold text-primary-onContainer',
                        children: texts.levelShort(activeStage),
                      }),
                    ],
                  }),
                  currentStreak > 0
                    ? c.jsxs('span', {
                        className: 'shrink-0 font-mono text-caption font-semibold text-primary',
                        children: ['🔥 ', String(currentStreak)],
                      })
                    : null,
                ],
              }),

              c.jsx('p', {
                className: 'truncate text-caption text-onSurfaceVariant',
                children: moodLabel,
              }),

              c.jsxs('div', {
                className: 'mt-0.5 flex items-center gap-2',
                children: [
                  c.jsx('div', {
                    className: 'h-1.5 flex-1 overflow-hidden rounded-full bg-surface-containerHighest',
                    children: c.jsx('div', {
                      className: 'h-full rounded-full bg-primary transition-all duration-300',
                      style: { width: `${Math.round(xpRatio * 100)}%` },
                    }),
                  }),
                  c.jsx('span', {
                    className: 'shrink-0 text-[11px] font-medium text-onSurfaceFaint',
                    children: nextStage
                      ? isDe
                        ? `Noch ${workoutsUntilNextLevel} Wo.`
                        : `${workoutsUntilNextLevel} left`
                      : 'MAX',
                  }),
                ],
              }),
            ],
          }),

          c.jsx(Icon, {
            name: 'arrowRight',
            size: 'sm',
            className: 'shrink-0 text-onSurfaceFaint',
          }),
        ],
      }),

      sheetOpen
        ? c.jsx(GymBuddySheet, {
            open: sheetOpen,
            onClose: () => setSheetOpen(false),
          })
        : null,
    ],
  });
}

export function GymBuddyWidget() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsx(GymBuddyWidgetInternal, {}),
  });
}

// ---------------------------------------------------------------------------
// 10. Einstellungs-Toggle-Komponente für den SettingsScreen
// ---------------------------------------------------------------------------

function GymBuddySettingsToggleInternal() {
  const texts = getBuddyTexts();
  const { enabled, setEnabled } = useGymBuddy();
  const [sheetOpen, setSheetOpen] = y.useState(false);

  return c.jsxs('div', {
    className: 'flex flex-col gap-2',
    children: [
      c.jsx('p', {
        className: 'text-titleS text-onSurface',
        children: texts.settingsTitle,
      }),
      c.jsx('p', {
        className: 'text-caption text-onSurfaceVariant',
        children: texts.settingsHint,
      }),
      c.jsxs('div', {
        className: 'flex flex-wrap items-center gap-2',
        children: [
          c.jsx(Chip, {
            selected: enabled,
            onClick: () => setEnabled(true),
            children: texts.on,
          }),
          c.jsx(Chip, {
            selected: !enabled,
            onClick: () => setEnabled(false),
            children: texts.off,
          }),
          enabled
            ? c.jsx(Button, {
                variant: 'outlined',
                className: '!px-3.5 !py-2 !text-caption',
                onClick: () => setSheetOpen(true),
                children:
                  typeof yS === 'function' && yS() === 'en'
                    ? 'Open & customize buddy'
                    : 'Buddy öffnen & anpassen',
              })
            : null,
        ],
      }),
      sheetOpen
        ? c.jsx(GymBuddySheet, {
            open: sheetOpen,
            onClose: () => setSheetOpen(false),
          })
        : null,
    ],
  });
}

export function GymBuddySettingsToggle() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsx(GymBuddySettingsToggleInternal, {}),
  });
}

// ---------------------------------------------------------------------------
// 11. Strikte Backup-Validierung & Export/Import-Helfer
// ---------------------------------------------------------------------------

export function sanitizeGymBuddyBackupRecord(raw) {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  if (raw.id !== GYM_BUDDY_RECORD_ID) return null;

  const fallback = createDefaultGymBuddyState();
  const enabled = typeof raw.enabled === 'boolean' ? raw.enabled : fallback.enabled;
  const activePetId =
    typeof raw.activePetId === 'string' &&
    raw.activePetId.trim().length > 0 &&
    raw.activePetId.length <= 64
      ? raw.activePetId.trim()
      : fallback.activePetId;

  const processedSessionIds = Array.isArray(raw.processedSessionIds)
    ? raw.processedSessionIds
        .filter((x) => typeof x === 'string' && x.length > 0 && x.length <= 80)
        .slice(0, 5000)
    : [];

  const petProgress = { ...fallback.petProgress };
  if (
    typeof raw.petProgress === 'object' &&
    raw.petProgress !== null &&
    !Array.isArray(raw.petProgress)
  ) {
    for (const [key, val] of Object.entries(raw.petProgress)) {
      if (key.length === 0 || key.length > 64 || typeof val !== 'object' || val === null) continue;
      const eqRaw = typeof val.equipped === 'object' && val.equipped !== null ? val.equipped : {};
      const colRaw =
        typeof val.accessoryColors === 'object' && val.accessoryColors !== null
          ? val.accessoryColors
          : {};
      petProgress[key] = {
        petId: key,
        customName: typeof val.customName === 'string' ? val.customName.trim().slice(0, 32) : '',
        xp:
          typeof val.xp === 'number' && Number.isFinite(val.xp) && val.xp >= 0
            ? Math.min(1000000, Math.floor(val.xp))
            : 0,
        workoutsCompleted:
          typeof val.workoutsCompleted === 'number' &&
          Number.isFinite(val.workoutsCompleted) &&
          val.workoutsCompleted >= 0
            ? Math.min(100000, Math.floor(val.workoutsCompleted))
            : 0,
        totalMinutes:
          typeof val.totalMinutes === 'number' &&
          Number.isFinite(val.totalMinutes) &&
          val.totalMinutes >= 0
            ? Math.min(10000000, Math.floor(val.totalMinutes))
            : 0,
        colorMode: val.colorMode === 'custom' ? 'custom' : 'theme',
        customHex: isValidHexColor(val.customHex) ? val.customHex.toUpperCase() : '#A8DAB5',
        equipped: {
          head: typeof eqRaw.head === 'string' && eqRaw.head.length <= 32 ? eqRaw.head : null,
          body: typeof eqRaw.body === 'string' && eqRaw.body.length <= 32 ? eqRaw.body : null,
          hand: typeof eqRaw.hand === 'string' && eqRaw.hand.length <= 32 ? eqRaw.hand : null,
        },
        accessoryColors: {
          head: isValidHexColor(colRaw.head) ? colRaw.head.toUpperCase() : null,
          body: isValidHexColor(colRaw.body) ? colRaw.body.toUpperCase() : null,
          hand: isValidHexColor(colRaw.hand) ? colRaw.hand.toUpperCase() : null,
        },
        updatedAt:
          typeof val.updatedAt === 'number' && Number.isFinite(val.updatedAt)
            ? val.updatedAt
            : Date.now(),
      };
    }
  }

  return {
    id: GYM_BUDDY_RECORD_ID,
    enabled,
    activePetId,
    processedSessionIds,
    petProgress,
    customPets: [],
    updatedAt:
      typeof raw.updatedAt === 'number' && Number.isFinite(raw.updatedAt)
        ? raw.updatedAt
        : Date.now(),
  };
}

export async function exportGymBuddyForBackup(db) {
  await ensureGymBuddyLoaded();
  try {
    if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
      const records = await db.getAll(GYM_BUDDY_STORE);
      if (records.length > 0) return records;
    }
  } catch {}
  return [cachedState];
}

export async function restoreGymBuddyFromBackup(records) {
  if (!Array.isArray(records) || records.length === 0) return;
  const valid = sanitizeGymBuddyBackupRecord(records[0]);
  if (valid) {
    await persistGymBuddyState(valid);
  }
}
