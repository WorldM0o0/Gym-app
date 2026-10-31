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
 * 7 Preset-Pets:
 * - 3 × 'cute' (robot, bear, cat): bleiben auf Stufe 1–4 kompakt & extrem niedlich,
 *   bekommen größere/glänzendere Augen, süßes/stolzes Lächeln und funkelnde Sterne auf Stufe 4.
 * - 4 × 'progress' (monster, lifter, dino, gorilla): werden breiter & muskulöser,
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
    id: 'shield',
    slot: 'hand',
    nameDe: 'Trainings-Schild',
    nameEn: 'Gym Shield',
    unlockWorkouts: 10,
    unlockRequireLevel: 2,
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

export const PET_ACCESSORY_ANCHORS = {
  monster: {
    1: {
      head: { x: 8, y: 4.1, scale: 0.9, rotate: 0, width: 6.4, eyeY: 5.5 },
      body: { x: 8, y: 9.2, scale: 0.9, rotate: 0, width: 6.4, height: 2.6, beltY: 11.2 },
      hand: { x: 11.9, y: 9.2, scale: 0.92, rotate: -6 },
    },
    2: {
      head: { x: 8, y: 4.1, scale: 0.96, rotate: 0, width: 6.8, eyeY: 5.5 },
      body: { x: 8, y: 9.1, scale: 0.96, rotate: 0, width: 6.8, height: 2.8, beltY: 11.2 },
      hand: { x: 12.1, y: 9.0, scale: 0.96, rotate: -5 },
    },
    3: {
      head: { x: 8, y: 3.2, scale: 1.0, rotate: 0, width: 7.4, eyeY: 5.5 },
      body: { x: 8, y: 9.0, scale: 1.0, rotate: 0, width: 7.4, height: 3.0, beltY: 11.2 },
      hand: { x: 12.6, y: 8.8, scale: 1.0, rotate: -4 },
    },
    4: {
      head: { x: 8, y: 3.1, scale: 1.04, rotate: 0, width: 7.8, eyeY: 5.5 },
      body: { x: 8, y: 9.0, scale: 1.04, rotate: 0, width: 7.8, height: 3.1, beltY: 11.3 },
      hand: { x: 12.9, y: 8.6, scale: 1.05, rotate: -4 },
    },
  },
  robot: {
    1: {
      head: { x: 8, y: 4.1, scale: 0.9, rotate: 0, width: 6.4, eyeY: 5.5 },
      body: { x: 8, y: 9.0, scale: 0.9, rotate: 0, width: 6.4, height: 2.8, beltY: 11.2 },
      hand: { x: 11.9, y: 9.0, scale: 0.92, rotate: 0 },
    },
    2: {
      head: { x: 8, y: 3.2, scale: 0.96, rotate: 0, width: 7.2, eyeY: 4.8 },
      body: { x: 8, y: 8.4, scale: 0.98, rotate: 0, width: 7.8, height: 3.0, beltY: 10.6 },
      hand: { x: 12.8, y: 8.2, scale: 0.98, rotate: -3 },
    },
    3: {
      head: { x: 8, y: 2.3, scale: 1.02, rotate: 0, width: 7.8, eyeY: 3.8 },
      body: { x: 8, y: 7.8, scale: 1.04, rotate: 0, width: 8.6, height: 3.2, beltY: 10.2 },
      hand: { x: 13.6, y: 7.6, scale: 1.04, rotate: -4 },
    },
    4: {
      head: { x: 8, y: 2.2, scale: 1.06, rotate: 0, width: 8.2, eyeY: 3.8 },
      body: { x: 8, y: 7.6, scale: 1.08, rotate: 0, width: 9.2, height: 3.4, beltY: 10.2 },
      hand: { x: 14.1, y: 7.4, scale: 1.08, rotate: -5 },
    },
  },
  lifter: {
    1: {
      head: { x: 8, y: 3.2, scale: 0.92, rotate: 0, width: 6.4, eyeY: 4.5 },
      body: { x: 8, y: 8.2, scale: 0.92, rotate: 0, width: 6.6, height: 2.8, beltY: 10.4 },
      hand: { x: 12.0, y: 8.2, scale: 0.94, rotate: -5 },
    },
    2: {
      head: { x: 8, y: 3.1, scale: 0.98, rotate: 0, width: 7.0, eyeY: 4.5 },
      body: { x: 8, y: 8.2, scale: 0.98, rotate: 0, width: 7.6, height: 3.0, beltY: 10.5 },
      hand: { x: 12.9, y: 8.0, scale: 0.98, rotate: -6 },
    },
    3: {
      head: { x: 8, y: 2.2, scale: 1.02, rotate: 0, width: 7.6, eyeY: 3.8 },
      body: { x: 8, y: 7.6, scale: 1.04, rotate: 0, width: 8.6, height: 3.2, beltY: 10.1 },
      hand: { x: 13.7, y: 7.4, scale: 1.04, rotate: -6 },
    },
    4: {
      head: { x: 8, y: 2.1, scale: 1.06, rotate: 0, width: 8.2, eyeY: 3.8 },
      body: { x: 8, y: 7.5, scale: 1.08, rotate: 0, width: 9.4, height: 3.4, beltY: 10.1 },
      hand: { x: 14.1, y: 7.2, scale: 1.08, rotate: -7 },
    },
  },
  bear: {
    1: {
      head: { x: 8, y: 3.2, scale: 0.92, rotate: 0, width: 6.6, eyeY: 5.5 },
      body: { x: 8, y: 9.1, scale: 0.92, rotate: 0, width: 6.8, height: 2.8, beltY: 11.2 },
      hand: { x: 12.0, y: 9.1, scale: 0.92, rotate: -5 },
    },
    2: {
      head: { x: 8, y: 3.1, scale: 0.96, rotate: 0, width: 7.0, eyeY: 5.5 },
      body: { x: 8, y: 9.0, scale: 0.96, rotate: 0, width: 7.2, height: 2.9, beltY: 11.2 },
      hand: { x: 12.3, y: 8.9, scale: 0.96, rotate: -5 },
    },
    3: {
      head: { x: 8, y: 3.0, scale: 1.0, rotate: 0, width: 7.4, eyeY: 5.5 },
      body: { x: 8, y: 8.9, scale: 1.0, rotate: 0, width: 7.6, height: 3.0, beltY: 11.2 },
      hand: { x: 12.7, y: 8.7, scale: 1.0, rotate: -5 },
    },
    4: {
      head: { x: 8, y: 2.9, scale: 1.04, rotate: 0, width: 7.8, eyeY: 5.5 },
      body: { x: 8, y: 8.8, scale: 1.04, rotate: 0, width: 8.0, height: 3.1, beltY: 11.2 },
      hand: { x: 13.0, y: 8.5, scale: 1.04, rotate: -4 },
    },
  },
  cat: {
    1: {
      head: { x: 8, y: 3.2, scale: 0.92, rotate: 0, width: 6.4, eyeY: 5.5 },
      body: { x: 8, y: 9.1, scale: 0.92, rotate: 0, width: 6.4, height: 2.7, beltY: 11.2 },
      hand: { x: 11.9, y: 9.1, scale: 0.92, rotate: -5 },
    },
    2: {
      head: { x: 8, y: 3.1, scale: 0.96, rotate: 0, width: 6.8, eyeY: 5.5 },
      body: { x: 8, y: 9.0, scale: 0.96, rotate: 0, width: 6.8, height: 2.8, beltY: 11.2 },
      hand: { x: 12.2, y: 8.9, scale: 0.96, rotate: -5 },
    },
    3: {
      head: { x: 8, y: 3.0, scale: 1.0, rotate: 0, width: 7.2, eyeY: 5.5 },
      body: { x: 8, y: 8.9, scale: 1.0, rotate: 0, width: 7.4, height: 3.0, beltY: 11.2 },
      hand: { x: 12.6, y: 8.7, scale: 1.0, rotate: -4 },
    },
    4: {
      head: { x: 8, y: 2.9, scale: 1.04, rotate: 0, width: 7.6, eyeY: 5.5 },
      body: { x: 8, y: 8.8, scale: 1.04, rotate: 0, width: 7.8, height: 3.1, beltY: 11.2 },
      hand: { x: 12.9, y: 8.5, scale: 1.04, rotate: -4 },
    },
  },
  dino: {
    1: {
      head: { x: 8, y: 3.2, scale: 0.92, rotate: 0, width: 6.6, eyeY: 4.5 },
      body: { x: 8, y: 8.2, scale: 0.92, rotate: 0, width: 6.8, height: 2.8, beltY: 10.4 },
      hand: { x: 12.0, y: 8.2, scale: 0.94, rotate: -5 },
    },
    2: {
      head: { x: 8, y: 2.3, scale: 0.98, rotate: 0, width: 7.2, eyeY: 4.5 },
      body: { x: 8, y: 8.1, scale: 0.98, rotate: 0, width: 7.6, height: 3.0, beltY: 10.4 },
      hand: { x: 12.9, y: 8.0, scale: 0.98, rotate: -6 },
    },
    3: {
      head: { x: 8, y: 2.2, scale: 1.02, rotate: 0, width: 7.8, eyeY: 3.8 },
      body: { x: 8, y: 7.6, scale: 1.04, rotate: 0, width: 8.6, height: 3.2, beltY: 10.1 },
      hand: { x: 13.7, y: 7.4, scale: 1.04, rotate: -6 },
    },
    4: {
      head: { x: 8, y: 2.1, scale: 1.06, rotate: 0, width: 8.4, eyeY: 3.8 },
      body: { x: 8, y: 7.5, scale: 1.08, rotate: 0, width: 9.4, height: 3.4, beltY: 10.1 },
      hand: { x: 14.1, y: 7.2, scale: 1.08, rotate: -7 },
    },
  },
  gorilla: {
    1: {
      head: { x: 8, y: 3.2, scale: 0.92, rotate: 0, width: 6.6, eyeY: 4.5 },
      body: { x: 8, y: 8.2, scale: 0.92, rotate: 0, width: 6.8, height: 2.8, beltY: 10.4 },
      hand: { x: 12.0, y: 8.2, scale: 0.94, rotate: -5 },
    },
    2: {
      head: { x: 8, y: 3.1, scale: 0.98, rotate: 0, width: 7.2, eyeY: 4.5 },
      body: { x: 8, y: 8.1, scale: 0.98, rotate: 0, width: 7.8, height: 3.0, beltY: 10.4 },
      hand: { x: 12.9, y: 8.0, scale: 0.98, rotate: -6 },
    },
    3: {
      head: { x: 8, y: 2.2, scale: 1.04, rotate: 0, width: 8.0, eyeY: 3.8 },
      body: { x: 8, y: 7.6, scale: 1.04, rotate: 0, width: 8.8, height: 3.2, beltY: 10.1 },
      hand: { x: 13.7, y: 7.4, scale: 1.04, rotate: -6 },
    },
    4: {
      head: { x: 8, y: 2.1, scale: 1.08, rotate: 0, width: 8.6, eyeY: 3.8 },
      body: { x: 8, y: 7.5, scale: 1.08, rotate: 0, width: 9.6, height: 3.4, beltY: 10.1 },
      hand: { x: 14.2, y: 7.2, scale: 1.08, rotate: -7 },
    },
  },
};

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
      all: isDe ? 'Alle (7)' : 'All (7)',
      cute: isDe ? '✨ Cute (3)' : '✨ Cute (3)',
      progress: isDe ? '⚡ Progress / Beast (4)' : '⚡ Progress / Beast (4)',
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
          phase1_recovery: 'Entspannter Erholungs-Zustand (Phase 1 · Streak-Schutz: 4 Pausentage)',
          sleep: 'Schläft friedlich & regeneriert',
          sleepTrainedToday: 'Zufriedener Nachtschlaf nach deinem Workout!',
        }
      : {
          post_workout: 'Exhausted, but super happy!',
          happy: 'Full of workout energy!',
          idle: 'Well-rested & motivated',
          reading: 'Reading a training book on Rest Day',
          phase1_recovery: 'Relaxed Recovery Mode (Phase 1 · Streak protection: 4 rest days)',
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
          phase1_recovery:
            'Phase 1 (Menstruation): Dein Buddy macht es sich mit dir gemütlich. Dein Streak-Schutz ist automatisch von 2 auf 4 Pausentage erhöht!',
          sleep:
            'Schlaf-Automatik (22–06 Uhr) & Erholung: Im Schlaf wachsen die Muskeln – dein Buddy atmet ruhig und lächelt im Traum.',
        }
      : {
          post_workout:
            'Right after your workout: Your buddy breathes deeply with a little forehead sweat drop and a proud smile!',
          happy: 'Your buddy celebrates your session, bounces happily, and winks to keep you motivated!',
          idle: 'Relaxed, in great spirits, and ready for the next sets.',
          reading: 'Rest day well spent: Your buddy is studying hypertrophy classics.',
          phase1_recovery:
            'Phase 1 (Menstruation): Your buddy is taking a cozy recovery break with you. Your streak protection is automatically increased from 2 to 4 rest days!',
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
          phase1_recovery: 'Erholung (Phase 1)',
          sleep: 'Schlaf',
        }
      : {
          post_workout: 'Post-Workout',
          happy: 'Happy',
          idle: 'Idle',
          reading: 'Reading',
          phase1_recovery: 'Recovery (Phase 1)',
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
    firstOpenTitle: isDe
      ? '💡 Optionaler Trainings-Begleiter'
      : '💡 Optional Workout Companion',
    firstOpenBody: isDe
      ? 'Dein Gym Buddy begleitet dich 100 % positiv ohne Strafen. Wenn du deinen Startbildschirm lieber minimalistisch hältst, kannst du das Pet jederzeit in den Einstellungen oder direkt hier ausblenden.'
      : 'Your Gym Buddy accompanies you 100% positively with zero penalties. If you prefer a minimalist home screen, you can hide the pet anytime in Settings or directly right here.',
    firstOpenDismiss: isDe ? 'Verstanden' : 'Got it',
    firstOpenDisableNow: isDe ? 'Jetzt ausblenden' : 'Hide now',
    hideBuddyButton: isDe
      ? 'Gym Buddy auf dem Startbildschirm ausblenden'
      : 'Hide Gym Buddy on home screen',
    hideBuddyHint: isDe
      ? 'Tipp: Du kannst den Gym Buddy jederzeit in den Einstellungen unter „Gym Buddy“ wieder ein- oder ausschalten.'
      : 'Tip: You can toggle the Gym Buddy back on or off anytime in Settings under "Gym Buddy".',
  };
}

// ---------------------------------------------------------------------------
// 2. Farb-Mathematik (HSL <-> Hex, Kontrast, Monochrom-Theme)
// ---------------------------------------------------------------------------

const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;
const HSL_CACHE = new Map();
const PALETTE_CACHE = new Map();

export function isValidHexColor(hex) {
  return typeof hex === 'string' && HEX_COLOR_RE.test(hex.trim());
}

export function getMonochromePetHex(isDarkTheme) {
  return isDarkTheme ? '#F2F4F7' : '#1E232B';
}

export function hexToHsl(hex) {
  const clean = isValidHexColor(hex) ? hex.trim().slice(1).toUpperCase() : 'A8DAB5';
  const cached = HSL_CACHE.get(clean);
  if (cached) return { ...cached };

  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let result;
  if (max === min) {
    result = { h: 0, s: 0, l: Math.round(l * 100) };
  } else {
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
    result = {
      h: Math.round(h) % 360,
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }
  if (HSL_CACHE.size >= 256) {
    const oldestKey = HSL_CACHE.keys().next().value;
    if (oldestKey !== undefined) HSL_CACHE.delete(oldestKey);
  }
  HSL_CACHE.set(clean, result);
  return { ...result };
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
  const safeH = Number.isFinite(h) ? h : 0;
  const safeS = Number.isFinite(s) ? s : 0;
  const safeL = Number.isFinite(l) ? l : 50;
  const hn = (((safeH % 360) + 360) % 360) / 360;
  const sn = Math.min(100, Math.max(0, safeS)) / 100;
  const ln = Math.min(100, Math.max(0, safeL)) / 100;
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
 * Erzeugt die 6-Slot-Farbpalette für die Pixel-Engine aus einer Basisfarbe (mit LRU-Cache).
 */
export function buildShadedPalette(baseHex, isDarkTheme) {
  const normHex = isValidHexColor(baseHex) ? baseHex.trim().toUpperCase() : '#A8DAB5';
  const cacheKey = `${normHex}:${isDarkTheme ? 1 : 0}`;
  const cached = PALETTE_CACHE.get(cacheKey);
  if (cached) return cached;

  const { h, s, l } = hexToHsl(normHex);
  const outlineL = l < 25 ? (isDarkTheme ? 48 : 8) : Math.max(6, l - 44);
  const highlightL = Math.min(96, l + 16);
  const shadowL = l < 22 ? Math.min(50, l + 12) : Math.max(12, l - 18);
  const eyeHex = l > 52 ? '#11151C' : '#F8FAFC';
  const palette = [
    'transparent',
    hslToHex(h, Math.min(s, 45), outlineL),
    normHex,
    hslToHex(h, Math.max(0, s - 8), highlightL),
    hslToHex(h, Math.min(100, s + 6), shadowL),
    eyeHex,
  ];
  if (PALETTE_CACHE.size >= 128) {
    const oldestKey = PALETTE_CACHE.keys().next().value;
    if (oldestKey !== undefined) PALETTE_CACHE.delete(oldestKey);
  }
  PALETTE_CACHE.set(cacheKey, palette);
  return palette;
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
};

const PET_STYLE_MAP = new Map(PRESET_PETS.map((p) => [p.id, p.style === 'cute' ? 'cute' : 'progress']));
const PARSED_MATRIX_CACHE = new Map();

function getPetStyle(petId) {
  return PET_STYLE_MAP.get(petId) || 'progress';
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
 * Liefert die 16x16 Matrix + Ankerpunkte + Stil ('cute' | 'progress') aus dem O(1)-Matrix-Cache.
 */
export function buildMoodMatrix(petId, stage = 1, _mood = 'idle') {
  const safeId = PET_STAGE_SPRITES[petId] ? petId : 'monster';
  const cacheKey = `${safeId}:${stage}`;
  const cached = PARSED_MATRIX_CACHE.get(cacheKey);
  if (cached) return cached;

  const petSprites = PET_STAGE_SPRITES[safeId];
  const stageDef = petSprites[stage] || petSprites[1] || petSprites[Object.keys(petSprites)[0]];
  const matrix = parseRowsToMatrix(stageDef?.rows || []);
  const style = getPetStyle(safeId);
  const result = {
    matrix,
    style,
    anchors: {
      headY: stageDef?.headY ?? 3,
      bodyY: stageDef?.bodyY ?? 8,
      handX: stageDef?.handX ?? 12,
      handY: stageDef?.handY ?? 8,
    },
  };
  PARSED_MATRIX_CACHE.set(cacheKey, result);
  return result;
}

// ---------------------------------------------------------------------------
// 4. Extrem ressourcenschonende SVG/CSS-Keyframe-Engine (GymBuddySpriteCanvas)
// ---------------------------------------------------------------------------

const GYM_BUDDY_CSS_ID = 'gym-buddy-svg-keyframes-v3';
const GYM_BUDDY_KEYFRAMES_CSS = `
@-webkit-keyframes gb-hop {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); }
  50% { -webkit-transform: translateY(-0.78px); transform: translateY(-0.78px); }
}
@keyframes gb-hop {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); }
  50% { -webkit-transform: translateY(-0.78px); transform: translateY(-0.78px); }
}
@-webkit-keyframes gb-idle-bob {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); }
  50% { -webkit-transform: translateY(-0.34px); transform: translateY(-0.34px); }
}
@keyframes gb-idle-bob {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); }
  50% { -webkit-transform: translateY(-0.34px); transform: translateY(-0.34px); }
}
@-webkit-keyframes gb-post-workout-breathe {
  0%, 100% { -webkit-transform: translateY(0px) scale(1, 1); transform: translateY(0px) scale(1, 1); }
  50% { -webkit-transform: translateY(-0.26px) scale(1.035, 1.065); transform: translateY(-0.26px) scale(1.035, 1.065); }
}
@keyframes gb-post-workout-breathe {
  0%, 100% { -webkit-transform: translateY(0px) scale(1, 1); transform: translateY(0px) scale(1, 1); }
  50% { -webkit-transform: translateY(-0.26px) scale(1.035, 1.065); transform: translateY(-0.26px) scale(1.035, 1.065); }
}
@-webkit-keyframes gb-sleep-breathe {
  0%, 100% { -webkit-transform: scale(1, 1); transform: scale(1, 1); }
  50% { -webkit-transform: scale(1.02, 1.045); transform: scale(1.02, 1.045); }
}
@keyframes gb-sleep-breathe {
  0%, 100% { -webkit-transform: scale(1, 1); transform: scale(1, 1); }
  50% { -webkit-transform: scale(1.02, 1.045); transform: scale(1.02, 1.045); }
}
/* 12s Zyklus:
   - Bei 25% (3.0s) und 75% (9.0s): klares, deutliches Blinzeln beider Augen (~200ms)
   - Bei 48%–52.5% (5.8s) und 95.5%–99.5% (11.5s): rechtes Auge zwinkert unübersehbar (~500ms), linkes Auge bleibt offen! */
@-webkit-keyframes gb-eye-left-blink {
  0%, 23.5%, 26.5%, 73.5%, 76.5%, 100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
  24.5%, 25.5%, 74.5%, 75.5% { -webkit-transform: scaleY(0.11); transform: scaleY(0.11); }
}
@keyframes gb-eye-left-blink {
  0%, 23.5%, 26.5%, 73.5%, 76.5%, 100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
  24.5%, 25.5%, 74.5%, 75.5% { -webkit-transform: scaleY(0.11); transform: scaleY(0.11); }
}
@-webkit-keyframes gb-eye-right-wink {
  0%, 23.5%, 26.5%, 46.8%, 53.2%, 73.5%, 76.5%, 94.5%, 100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
  24.5%, 25.5%, 74.5%, 75.5% { -webkit-transform: scaleY(0.11); transform: scaleY(0.11); }
  48.0%, 52.0%, 95.8%, 99.2% { -webkit-transform: scaleY(0.08); transform: scaleY(0.08); }
}
@keyframes gb-eye-right-wink {
  0%, 23.5%, 26.5%, 46.8%, 53.2%, 73.5%, 76.5%, 94.5%, 100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
  24.5%, 25.5%, 74.5%, 75.5% { -webkit-transform: scaleY(0.11); transform: scaleY(0.11); }
  48.0%, 52.0%, 95.8%, 99.2% { -webkit-transform: scaleY(0.08); transform: scaleY(0.08); }
}
@-webkit-keyframes gb-wink-arc {
  0%, 46.8%, 53.2%, 94.5%, 100% { opacity: 0; }
  48.0%, 52.0%, 95.8%, 99.2% { opacity: 1; }
}
@keyframes gb-wink-arc {
  0%, 46.8%, 53.2%, 94.5%, 100% { opacity: 0; }
  48.0%, 52.0%, 95.8%, 99.2% { opacity: 1; }
}
@-webkit-keyframes gb-sweat-bob {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); opacity: 0.95; }
  50% { -webkit-transform: translateY(0.55px); transform: translateY(0.55px); opacity: 1; }
}
@keyframes gb-sweat-bob {
  0%, 100% { -webkit-transform: translateY(0px); transform: translateY(0px); opacity: 0.95; }
  50% { -webkit-transform: translateY(0.55px); transform: translateY(0.55px); opacity: 1; }
}
@-webkit-keyframes gb-zzz-float-1 {
  0%, 100% { -webkit-transform: translate(0px, 0px); transform: translate(0px, 0px); opacity: 0.35; }
  50% { -webkit-transform: translate(0.25px, -0.55px); transform: translate(0.25px, -0.55px); opacity: 1; }
}
@keyframes gb-zzz-float-1 {
  0%, 100% { -webkit-transform: translate(0px, 0px); transform: translate(0px, 0px); opacity: 0.35; }
  50% { -webkit-transform: translate(0.25px, -0.55px); transform: translate(0.25px, -0.55px); opacity: 1; }
}
@-webkit-keyframes gb-zzz-float-2 {
  0%, 100% { -webkit-transform: translate(0px, 0px); transform: translate(0px, 0px); opacity: 0.95; }
  50% { -webkit-transform: translate(0.35px, -0.65px); transform: translate(0.35px, -0.65px); opacity: 0.3; }
}
@keyframes gb-zzz-float-2 {
  0%, 100% { -webkit-transform: translate(0px, 0px); transform: translate(0px, 0px); opacity: 0.95; }
  50% { -webkit-transform: translate(0.35px, -0.65px); transform: translate(0.35px, -0.65px); opacity: 0.3; }
}
@-webkit-keyframes gb-star-twinkle {
  0%, 100% { opacity: 0.35; -webkit-transform: scale(0.85); transform: scale(0.85); }
  50% { opacity: 1; -webkit-transform: scale(1.12); transform: scale(1.12); }
}
@keyframes gb-star-twinkle {
  0%, 100% { opacity: 0.35; -webkit-transform: scale(0.85); transform: scale(0.85); }
  50% { opacity: 1; -webkit-transform: scale(1.12); transform: scale(1.12); }
}
@-webkit-keyframes gb-aura-pulse {
  0%, 100% { opacity: 0.28; -webkit-transform: translateY(0px) scale(0.98); transform: translateY(0px) scale(0.98); }
  50% { opacity: 0.68; -webkit-transform: translateY(-0.35px) scale(1.03); transform: translateY(-0.35px) scale(1.03); }
}
@keyframes gb-aura-pulse {
  0%, 100% { opacity: 0.28; -webkit-transform: translateY(0px) scale(0.98); transform: translateY(0px) scale(0.98); }
  50% { opacity: 0.68; -webkit-transform: translateY(-0.35px) scale(1.03); transform: translateY(-0.35px) scale(1.03); }
}
.gb-anim-happy {
  -webkit-animation: gb-hop 1.15s ease-in-out infinite;
  animation: gb-hop 1.15s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-anim-idle {
  -webkit-animation: gb-idle-bob 2.5s ease-in-out infinite;
  animation: gb-idle-bob 2.5s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-anim-post-workout {
  -webkit-animation: gb-post-workout-breathe 2.8s ease-in-out infinite;
  animation: gb-post-workout-breathe 2.8s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-anim-sleep {
  -webkit-animation: gb-sleep-breathe 4.0s ease-in-out infinite;
  animation: gb-sleep-breathe 4.0s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-eye-left-awake {
  -webkit-animation: gb-eye-left-blink 12s ease-in-out infinite;
  animation: gb-eye-left-blink 12s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-eye-right-awake {
  -webkit-animation: gb-eye-right-wink 12s ease-in-out infinite;
  animation: gb-eye-right-wink 12s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-eye-wink-arc {
  -webkit-animation: gb-wink-arc 12s ease-in-out infinite;
  animation: gb-wink-arc 12s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-sweat-drop {
  -webkit-animation: gb-sweat-bob 2.0s ease-in-out infinite;
  animation: gb-sweat-bob 2.0s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-zzz-1 {
  -webkit-animation: gb-zzz-float-1 3.2s ease-in-out infinite;
  animation: gb-zzz-float-1 3.2s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-zzz-2 {
  -webkit-animation: gb-zzz-float-2 3.2s ease-in-out infinite;
  animation: gb-zzz-float-2 3.2s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-star-a {
  -webkit-animation: gb-star-twinkle 2.2s ease-in-out infinite;
  animation: gb-star-twinkle 2.2s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-star-b {
  -webkit-animation: gb-star-twinkle 2.2s ease-in-out 1.1s infinite;
  animation: gb-star-twinkle 2.2s ease-in-out 1.1s infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.gb-beast-aura {
  -webkit-animation: gb-aura-pulse 1.9s ease-in-out infinite;
  animation: gb-aura-pulse 1.9s ease-in-out infinite;
  transform-box: fill-box;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@media (prefers-reduced-motion: reduce) {
  .gb-anim-happy, .gb-anim-idle, .gb-anim-post-workout, .gb-anim-sleep,
  .gb-eye-left-awake, .gb-eye-right-awake, .gb-eye-wink-arc, .gb-sweat-drop, .gb-zzz-1, .gb-zzz-2,
  .gb-star-a, .gb-star-b, .gb-beast-aura {
    -webkit-animation: none !important;
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
 * Liefert die stufen- und pet-spezifischen Ankerpunkte (head, body, hand) für alle 10 Pets & 4 Stufen.
 */
export function getPetStageAccessoryAnchors(petId, stage = 1) {
  const safePet = PET_ACCESSORY_ANCHORS[petId] ? petId : 'monster';
  const petMap = PET_ACCESSORY_ANCHORS[safePet];
  return petMap[stage] || petMap[1];
}

/**
 * Rendert alle ausgerüsteten Accessoires (Kopf, Körper, Hand + sichtbar greifende Pfote/Hand)
 * als hochauflösende, kontrastreiche SVG-Elemente mit sauberer Außenkontur (`stroke`)
 * und nativen SVG-Schattenpfaden (ohne CSS `drop-shadow` für 100 % flüssigen 30Hz iPhone-Stromsparmodus).
 */
function renderEquippedAccessoriesSvg(
  petId,
  stage,
  mood,
  equipped,
  accessoryColors,
  defaultAccHex,
  palette
) {
  const stageAnchors = getPetStageAccessoryAnchors(petId, stage);
  const headAcc = equipped?.head || null;
  const bodyAcc = equipped?.body || null;
  const handAcc = equipped?.hand || null;

  const outlineHex = '#0F172A';
  const pawFill = palette?.[2] || '#CBD5E1';
  const pawStroke = palette?.[1] || outlineHex;

  const nodes = [];

  // 1. KÖRPER-ACCESSOIRE (Hoodie oder Gewichthebergürtel)
  if (bodyAcc) {
    const col = isValidHexColor(accessoryColors?.body) ? accessoryColors.body : defaultAccHex;
    const { h, s, l } = hexToHsl(col);
    const darkCol = hslToHex(h, s, Math.max(12, l - 22));
    const lightCol = hslToHex(h, Math.max(20, s - 8), Math.min(92, l + 18));
    const bAnchor = stageAnchors.body;
    const bw = bAnchor.width || 7.2;
    const bh = bAnchor.height || 3.0;
    const bx = bAnchor.x - bw / 2;
    const by = bAnchor.y - bh * 0.28;

    if (bodyAcc === 'hoodie') {
      nodes.push(
        c.jsxs(
          'g',
          {
            className: 'gb-acc-body-hoodie',
            style: { transformBox: 'fill-box', transformOrigin: 'center', WebkitTransformOrigin: 'center' },
            children: [
              // Nativer SVG-Schatten (kein drop-shadow Filter)
              c.jsx('rect', {
                x: bx - 0.15,
                y: by + 0.25,
                width: bw + 0.3,
                height: bh + 0.2,
                rx: 0.75,
                fill: '#090D16',
                opacity: 0.35,
              }),
              // Hauptkörper des Pump-Covers / Hoodies mit klarer Kontur
              c.jsx('rect', {
                x: bx,
                y: by,
                width: bw,
                height: bh,
                rx: 0.65,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.42,
                strokeLinejoin: 'round',
              }),
              // Gerippter Saum unten
              c.jsx('rect', {
                x: bx + 0.2,
                y: by + bh - 0.72,
                width: bw - 0.4,
                height: 0.68,
                rx: 0.25,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.3,
              }),
              // Känguru-Tasche in der Mitte
              c.jsx('path', {
                d: `M ${ (bAnchor.x - bw * 0.24).toFixed(2) } ${ (by + bh - 0.72).toFixed(2) } L ${ (bAnchor.x - bw * 0.18).toFixed(2) } ${ (by + bh * 0.48).toFixed(2) } L ${ (bAnchor.x + bw * 0.18).toFixed(2) } ${ (by + bh * 0.48).toFixed(2) } L ${ (bAnchor.x + bw * 0.24).toFixed(2) } ${ (by + bh - 0.72).toFixed(2) } Z`,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.28,
                strokeLinejoin: 'round',
              }),
              // Kragen-V-Ausschnitt + helle Kordeln mit Kontrast
              c.jsx('path', {
                d: `M ${ (bAnchor.x - 1.1).toFixed(2) } ${ by.toFixed(2) } L ${ bAnchor.x.toFixed(2) } ${ (by + 0.95).toFixed(2) } L ${ (bAnchor.x + 1.1).toFixed(2) } ${ by.toFixed(2) }`,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.32,
                strokeLinejoin: 'round',
              }),
              c.jsx('line', {
                x1: bAnchor.x - 0.85,
                y1: by + 0.15,
                x2: bAnchor.x - 0.85,
                y2: by + 1.45,
                stroke: '#F8FAFC',
                strokeWidth: 0.42,
                strokeLinecap: 'round',
              }),
              c.jsx('line', {
                x1: bAnchor.x + 0.85,
                y1: by + 0.15,
                x2: bAnchor.x + 0.85,
                y2: by + 1.45,
                stroke: '#F8FAFC',
                strokeWidth: 0.42,
                strokeLinecap: 'round',
              }),
              // Oberes Schulter-Highlight
              c.jsx('line', {
                x1: bx + 0.55,
                y1: by + 0.35,
                x2: bx + bw * 0.3,
                y2: by + 0.35,
                stroke: lightCol,
                strokeWidth: 0.32,
                strokeLinecap: 'round',
              }),
            ],
          },
          'acc-body-hoodie'
        )
      );
    } else if (bodyAcc === 'belt') {
      const beltY = bAnchor.beltY || by + bh * 0.65;
      const beltH = 1.35;
      nodes.push(
        c.jsxs(
          'g',
          {
            className: 'gb-acc-body-belt',
            style: { transformBox: 'fill-box', transformOrigin: 'center', WebkitTransformOrigin: 'center' },
            children: [
              // Schatten unter dem Gürtel
              c.jsx('rect', {
                x: bx - 0.1,
                y: beltY + 0.22,
                width: bw + 0.2,
                height: beltH,
                rx: 0.4,
                fill: '#090D16',
                opacity: 0.38,
              }),
              // Leder-/Lever-Gürtel-Riemen
              c.jsx('rect', {
                x: bx,
                y: beltY,
                width: bw,
                height: beltH,
                rx: 0.38,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.42,
              }),
              // Innere Naht-Steppung
              c.jsx('line', {
                x1: bx + 0.5,
                y1: beltY + beltH / 2,
                x2: bx + bw - 0.5,
                y2: beltY + beltH / 2,
                stroke: col,
                strokeWidth: 0.35,
              }),
              // Markante Metall-Schnalle (Lever Buckle) in der Mitte
              c.jsx('rect', {
                x: bAnchor.x - 1.15,
                y: beltY - 0.18,
                width: 2.3,
                height: beltH + 0.36,
                rx: 0.32,
                fill: '#F8FAFC',
                stroke: outlineHex,
                strokeWidth: 0.42,
              }),
              c.jsx('rect', {
                x: bAnchor.x - 0.62,
                y: beltY + 0.18,
                width: 1.24,
                height: beltH - 0.36,
                rx: 0.16,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.28,
              }),
            ],
          },
          'acc-body-belt'
        )
      );
    }
  }

  // 2. KOPF-ACCESSOIRE (Stirnband, Beanie, Sport-Sonnenbrille)
  if (headAcc) {
    const col = isValidHexColor(accessoryColors?.head) ? accessoryColors.head : defaultAccHex;
    const { h, s, l } = hexToHsl(col);
    const darkCol = hslToHex(h, s, Math.max(12, l - 22));
    const lightCol = hslToHex(h, Math.max(20, s - 8), Math.min(94, l + 22));
    const hAnchor = stageAnchors.head;
    const hw = hAnchor.width || 7.2;
    const hx = hAnchor.x - hw / 2;
    const hy = hAnchor.y;

    if (headAcc === 'sweatband') {
      const bandY = hy - 0.35;
      const bandH = 1.35;
      nodes.push(
        c.jsxs(
          'g',
          {
            className: 'gb-acc-head-sweatband',
            style: { transformBox: 'fill-box', transformOrigin: 'center', WebkitTransformOrigin: 'center' },
            children: [
              // Seitlich wehende Knoten-Bänder rechts
              c.jsx('path', {
                d: `M ${ (hx + hw - 0.2).toFixed(2) } ${ (bandY + 0.4).toFixed(2) } L ${ (hx + hw + 1.25).toFixed(2) } ${ (bandY + 0.1).toFixed(2) } L ${ (hx + hw + 1.05).toFixed(2) } ${ (bandY + 0.85).toFixed(2) } Z`,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.36,
                strokeLinejoin: 'round',
              }),
              c.jsx('path', {
                d: `M ${ (hx + hw - 0.2).toFixed(2) } ${ (bandY + 0.7).toFixed(2) } L ${ (hx + hw + 1.35).toFixed(2) } ${ (bandY + 1.35).toFixed(2) } L ${ (hx + hw + 0.75).toFixed(2) } ${ (bandY + 1.65).toFixed(2) } Z`,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.36,
                strokeLinejoin: 'round',
              }),
              // Schatten unter dem Stirnband
              c.jsx('rect', {
                x: hx - 0.1,
                y: bandY + 0.22,
                width: hw + 0.2,
                height: bandH,
                rx: 0.45,
                fill: '#090D16',
                opacity: 0.35,
              }),
              // Haupt-Stirnband mit Kontur
              c.jsx('rect', {
                x: hx,
                y: bandY,
                width: hw,
                height: bandH,
                rx: 0.45,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.42,
              }),
              // Sportlicher Mittelstreifen (Weiß/Hell)
              c.jsx('line', {
                x1: hx + 0.55,
                y1: bandY + bandH / 2,
                x2: hx + hw - 0.55,
                y2: bandY + bandH / 2,
                stroke: '#F8FAFC',
                strokeWidth: 0.42,
                strokeLinecap: 'round',
              }),
            ],
          },
          'acc-head-sweatband'
        )
      );
    } else if (headAcc === 'beanie') {
      const cuffY = hy - 0.45;
      const cuffW = hw + 0.4;
      const cuffX = hAnchor.x - cuffW / 2;
      const domeTopY = Math.max(0.35, cuffY - 2.1);
      nodes.push(
        c.jsxs(
          'g',
          {
            className: 'gb-acc-head-beanie',
            style: { transformBox: 'fill-box', transformOrigin: 'center', WebkitTransformOrigin: 'center' },
            children: [
              // Beanie-Kuppel mit klarer Outline
              c.jsx('path', {
                d: `M ${ (cuffX + 0.35).toFixed(2) } ${ (cuffY + 0.3).toFixed(2) } C ${ (cuffX + 0.5).toFixed(2) } ${ domeTopY.toFixed(2) }, ${ (cuffX + cuffW - 0.5).toFixed(2) } ${ domeTopY.toFixed(2) }, ${ (cuffX + cuffW - 0.35).toFixed(2) } ${ (cuffY + 0.3).toFixed(2) } Z`,
                fill: darkCol,
                stroke: outlineHex,
                strokeWidth: 0.42,
                strokeLinejoin: 'round',
              }),
              // Bommel oben
              c.jsx('circle', {
                cx: hAnchor.x,
                cy: Math.max(0.65, domeTopY - 0.1),
                r: 0.85,
                fill: lightCol,
                stroke: outlineHex,
                strokeWidth: 0.4,
              }),
              // Umgeschlagener Strick-Rand (Cuff)
              c.jsx('rect', {
                x: cuffX,
                y: cuffY,
                width: cuffW,
                height: 1.3,
                rx: 0.48,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.42,
              }),
              // Vertikale Strick-Rippen auf dem Rand
              c.jsx('line', {
                x1: hAnchor.x - 1.6,
                y1: cuffY + 0.25,
                x2: hAnchor.x - 1.6,
                y2: cuffY + 1.05,
                stroke: darkCol,
                strokeWidth: 0.32,
              }),
              c.jsx('line', {
                x1: hAnchor.x,
                y1: cuffY + 0.25,
                x2: hAnchor.x,
                y2: cuffY + 1.05,
                stroke: darkCol,
                strokeWidth: 0.32,
              }),
              c.jsx('line', {
                x1: hAnchor.x + 1.6,
                y1: cuffY + 0.25,
                x2: hAnchor.x + 1.6,
                y2: cuffY + 1.05,
                stroke: darkCol,
                strokeWidth: 0.32,
              }),
            ],
          },
          'acc-head-beanie'
        )
      );
    } else if (headAcc === 'sunglasses') {
      const eyeY = hAnchor.eyeY || hy + 1.5;
      const glassW = hw + 0.6;
      const glassX = hAnchor.x - glassW / 2;
      const lensW = glassW * 0.43;
      const lensH = 1.65;
      nodes.push(
        c.jsxs(
          'g',
          {
            className: 'gb-acc-head-sunglasses',
            style: { transformBox: 'fill-box', transformOrigin: 'center', WebkitTransformOrigin: 'center' },
            children: [
              // Durchgehender oberer Brillenrahmen + Bügel
              c.jsx('line', {
                x1: glassX - 0.2,
                y1: eyeY - 0.35,
                x2: glassX + glassW + 0.2,
                y2: eyeY - 0.35,
                stroke: outlineHex,
                strokeWidth: 0.52,
                strokeLinecap: 'round',
              }),
              // Linkes Glas
              c.jsx('rect', {
                x: glassX + 0.15,
                y: eyeY - 0.35,
                width: lensW,
                height: lensH,
                rx: 0.38,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.44,
              }),
              // Rechtes Glas
              c.jsx('rect', {
                x: glassX + glassW - lensW - 0.15,
                y: eyeY - 0.35,
                width: lensW,
                height: lensH,
                rx: 0.38,
                fill: col,
                stroke: outlineHex,
                strokeWidth: 0.44,
              }),
              // Weiße Spiegel-Glanzstreifen auf beiden Gläsern
              c.jsx('line', {
                x1: glassX + 0.6,
                y1: eyeY - 0.05,
                x2: glassX + 1.35,
                y2: eyeY + 0.75,
                stroke: '#FFFFFF',
                strokeWidth: 0.38,
                strokeLinecap: 'round',
              }),
              c.jsx('line', {
                x1: glassX + glassW - lensW + 0.3,
                y1: eyeY - 0.05,
                x2: glassX + glassW - lensW + 1.05,
                y2: eyeY + 0.75,
                stroke: '#FFFFFF',
                strokeWidth: 0.38,
                strokeLinecap: 'round',
              }),
            ],
          },
          'acc-head-sunglasses'
        )
      );
    }
  }

  // 3. HAND-ACCESSOIRE (Hantel, Shaker, Trainings-Schild, Kettlebell) + SICHTBARER PFOTEN-/HAND-GRIFF VOR DEM GRIFFSTÜCK
  if (handAcc) {
    const col = isValidHexColor(accessoryColors?.hand) ? accessoryColors.hand : defaultAccHex;
    const { h, s, l } = hexToHsl(col);
    const darkCol = hslToHex(h, s, Math.max(12, l - 22));
    const lightCol = hslToHex(h, Math.max(20, s - 10), Math.min(95, l + 22));
    const handAnchor = stageAnchors.hand;
    const hx = handAnchor.x;
    const hy = handAnchor.y;
    const hScale = handAnchor.scale || 1;
    const hRot = handAnchor.rotate || 0;

    let itemChildren = null;
    let pawCenter = { x: 0, y: 0, r: 0.72 };

    if (handAcc === 'dumbbell') {
      // Hex-Kurzhantel mit verchromter Stange, 2 Hantelscheiben-Paaren und Pfotengriff in der Mitte
      pawCenter = { x: 0, y: 0.1, r: 0.72 };
      itemChildren = [
        // Nativer SVG-Schatten
        c.jsx(
          'rect',
          { x: -1.9, y: -1.45, width: 3.8, height: 3.1, rx: 0.5, fill: '#090D16', opacity: 0.25 },
          'db-sh'
        ),
        // Chrom-Griffstange in der Mitte
        c.jsx(
          'rect',
          {
            x: -1.65,
            y: -0.35,
            width: 3.3,
            height: 0.7,
            rx: 0.2,
            fill: '#E2E8F0',
            stroke: outlineHex,
            strokeWidth: 0.38,
          },
          'db-bar'
        ),
        // Linke äußere & innere Hantelscheibe
        c.jsx(
          'rect',
          {
            x: -2.05,
            y: -1.45,
            width: 0.9,
            height: 2.9,
            rx: 0.3,
            fill: darkCol,
            stroke: outlineHex,
            strokeWidth: 0.42,
          },
          'db-pl-l1'
        ),
        c.jsx(
          'rect',
          {
            x: -1.45,
            y: -1.2,
            width: 0.7,
            height: 2.4,
            rx: 0.25,
            fill: col,
            stroke: outlineHex,
            strokeWidth: 0.38,
          },
          'db-pl-l2'
        ),
        // Rechte innere & äußere Hantelscheibe
        c.jsx(
          'rect',
          {
            x: 0.75,
            y: -1.2,
            width: 0.7,
            height: 2.4,
            rx: 0.25,
            fill: col,
            stroke: outlineHex,
            strokeWidth: 0.38,
          },
          'db-pl-r2'
        ),
        c.jsx(
          'rect',
          {
            x: 1.15,
            y: -1.45,
            width: 0.9,
            height: 2.9,
            rx: 0.3,
            fill: darkCol,
            stroke: outlineHex,
            strokeWidth: 0.42,
          },
          'db-pl-r1'
        ),
        // Glanzpunkte auf den Scheiben
        c.jsx(
          'line',
          {
            x1: -1.7,
            y1: -1.0,
            x2: -1.7,
            y2: -0.3,
            stroke: lightCol,
            strokeWidth: 0.28,
            strokeLinecap: 'round',
          },
          'db-hi-l'
        ),
        c.jsx(
          'line',
          {
            x1: 1.6,
            y1: -1.0,
            x2: 1.6,
            y2: -0.3,
            stroke: lightCol,
            strokeWidth: 0.28,
            strokeLinecap: 'round',
          },
          'db-hi-r'
        ),
      ];
    } else if (handAcc === 'shaker') {
      // Klar erkennbarer Gym Protein-Shaker mit Klappdeckel, Trinkverschluss, Füllstand-Skala und Pfotengriff
      pawCenter = { x: -0.85, y: 0.25, r: 0.7 };
      itemChildren = [
        // Nativer SVG-Schatten
        c.jsx(
          'path',
          {
            d: 'M -1.25 -0.95 L 1.45 -0.95 L 1.15 2.25 L -0.95 2.25 Z',
            fill: '#090D16',
            opacity: 0.32,
          },
          'shk-sh'
        ),
        // Becher-Körper (leicht konisch nach unten)
        c.jsx(
          'path',
          {
            d: 'M -1.25 -1.05 L 1.25 -1.05 L 0.98 2.05 L -0.98 2.05 Z',
            fill: col,
            stroke: outlineHex,
            strokeWidth: 0.44,
            strokeLinejoin: 'round',
          },
        'shk-cup'
        ),
        // Vertikaler Glanzstreifen + Mess-Skala-Striche
        c.jsx(
          'line',
          {
            x1: -0.55,
            y1: -0.55,
            x2: -0.42,
            y2: 1.55,
            stroke: lightCol,
            strokeWidth: 0.34,
            strokeLinecap: 'round',
          },
          'shk-hi'
        ),
        c.jsx(
          'line',
          { x1: 0.25, y1: -0.3, x2: 0.68, y2: -0.3, stroke: outlineHex, strokeWidth: 0.32, strokeLinecap: 'round' },
          'shk-m1'
        ),
        c.jsx(
          'line',
          { x1: 0.2, y1: 0.45, x2: 0.62, y2: 0.45, stroke: outlineHex, strokeWidth: 0.32, strokeLinecap: 'round' },
          'shk-m2'
        ),
        c.jsx(
          'line',
          { x1: 0.15, y1: 1.2, x2: 0.56, y2: 1.2, stroke: outlineHex, strokeWidth: 0.32, strokeLinecap: 'round' },
          'shk-m3'
        ),
        // Schraubdeckel-Ring (dunkel abgesetzt)
        c.jsx(
          'rect',
          {
            x: -1.45,
            y: -1.75,
            width: 2.9,
            height: 0.8,
            rx: 0.3,
            fill: '#1E293B',
            stroke: outlineHex,
            strokeWidth: 0.42,
          },
          'shk-lid'
        ),
        // Kuppelförmige Deckel-Kappe + Trinkstutzen (Spout)
        c.jsx(
          'path',
          {
            d: 'M -1.1 -1.75 C -0.9 -2.35, 0.9 -2.35, 1.1 -1.75 Z',
            fill: darkCol,
            stroke: outlineHex,
            strokeWidth: 0.38,
          },
          'shk-dome'
        ),
        c.jsx(
          'rect',
          {
            x: 0.25,
            y: -2.55,
            width: 0.72,
            height: 0.75,
            rx: 0.22,
            fill: '#F8FAFC',
            stroke: outlineHex,
            strokeWidth: 0.38,
          },
          'shk-spout'
        ),
      ];
    } else if (handAcc === 'shield') {
      // Wappenförmiges Trainings-Schild mit Metallrahmen, Emblem und sichtbarer Halte-Pfote
      pawCenter = { x: -1.05, y: 0.05, r: 0.72 };
      itemChildren = [
        // Nativer SVG-Schatten
        c.jsx(
          'path',
          {
            d: 'M -1.55 -1.65 L 1.75 -1.65 L 1.75 0.35 C 1.75 1.55, 0.1 2.35, 0.1 2.55 C 0.1 2.35, -1.55 1.55, -1.55 0.35 Z',
            fill: '#090D16',
            opacity: 0.35,
          },
          'shd-sh'
        ),
        // Äußerer metallischer Schild-Rahmen
        c.jsx(
          'path',
          {
            d: 'M -1.65 -1.8 L 1.65 -1.8 L 1.65 0.2 C 1.65 1.45, 0 2.25, 0 2.45 C 0 2.25, -1.65 1.45, -1.65 0.2 Z',
            fill: '#E2E8F0',
            stroke: outlineHex,
            strokeWidth: 0.45,
            strokeLinejoin: 'round',
          },
          'shd-rim'
        ),
        // Farbiges Schild-Innenfeld
        c.jsx(
          'path',
          {
            d: 'M -1.18 -1.32 L 1.18 -1.32 L 1.18 0.12 C 1.18 1.05, 0 1.68, 0 1.85 C 0 1.68, -1.18 1.05, -1.18 0.12 Z',
            fill: col,
            stroke: outlineHex,
            strokeWidth: 0.34,
            strokeLinejoin: 'round',
          },
          'shd-core'
        ),
        // Diagonale Glanz-Facette + Mittel-Emblem (Kreuz/Stern)
        c.jsx(
          'path',
          {
            d: 'M 0 -1.28 L 1.12 -1.28 L 1.12 0.12 C 1.12 0.98, 0 1.58, 0 1.78 Z',
            fill: darkCol,
            opacity: 0.45,
          },
          'shd-half'
        ),
        c.jsx(
          'line',
          { x1: 0, y1: -0.85, x2: 0, y2: 1.05, stroke: '#F8FAFC', strokeWidth: 0.42, strokeLinecap: 'round' },
          'shd-cr-v'
        ),
        c.jsx(
          'line',
          { x1: -0.72, y1: -0.05, x2: 0.72, y2: -0.05, stroke: '#F8FAFC', strokeWidth: 0.42, strokeLinecap: 'round' },
          'shd-cr-h'
        ),
      ];
    } else if (handAcc === 'kettlebell') {
      // Kugelhantel (Kettlebell) mit Bügelgriff oben, Pfote um den Bügel und glänzender Kugel
      pawCenter = { x: 0, y: -1.35, r: 0.72 };
      itemChildren = [
        // Nativer SVG-Schatten
        c.jsx('circle', { cx: 0.15, cy: 0.68, r: 1.55, fill: '#090D16', opacity: 0.35 }, 'kb-sh'),
        // U-förmiger Stahl-Griffbügel oben
        c.jsx(
          'path',
          {
            d: 'M -1.05 -0.25 L -1.05 -1.45 C -1.05 -2.05, 1.05 -2.05, 1.05 -1.45 L 1.05 -0.25',
            fill: 'none',
            stroke: '#CBD5E1',
            strokeWidth: 0.78,
            strokeLinecap: 'round',
          },
          'kb-handle-fill'
        ),
        c.jsx(
          'path',
          {
            d: 'M -1.05 -0.25 L -1.05 -1.45 C -1.05 -2.05, 1.05 -2.05, 1.05 -1.45 L 1.05 -0.25',
            fill: 'none',
            stroke: outlineHex,
            strokeWidth: 0.36,
            strokeLinecap: 'round',
          },
          'kb-handle-out'
        ),
        // Schwere Kettlebell-Kugel mit klarer Kontur
        c.jsx(
          'circle',
          {
            cx: 0,
            cy: 0.55,
            r: 1.52,
            fill: col,
            stroke: outlineHex,
            strokeWidth: 0.45,
          },
          'kb-ball'
        ),
        // Abgeflachter Boden + Glanzpunkt + Gewichts-Streifen
        c.jsx(
          'line',
          {
            x1: -0.95,
            y1: 1.92,
            x2: 0.95,
            y2: 1.92,
            stroke: outlineHex,
            strokeWidth: 0.45,
            strokeLinecap: 'round',
          },
          'kb-flat'
        ),
        c.jsx(
          'circle',
          { cx: -0.52, cy: 0.05, r: 0.38, fill: lightCol },
          'kb-hi'
        ),
        c.jsx(
          'rect',
          {
            x: -0.65,
            y: 0.55,
            width: 1.3,
            height: 0.55,
            rx: 0.2,
            fill: darkCol,
            stroke: outlineHex,
            strokeWidth: 0.28,
          },
          'kb-badge'
        ),
      ];
    }

    if (itemChildren) {
      nodes.push(
        c.jsxs(
          'g',
          {
            className: `gb-acc-hand gb-acc-hand-${handAcc}`,
            transform: `translate(${hx.toFixed(2)}, ${hy.toFixed(2)}) scale(${hScale.toFixed(2)}) rotate(${hRot})`,
            children: [
              ...itemChildren,
              // Sichtbare Pfote/Hand des Pets VOR dem Griffstück (hält das Item sichtbar fest!)
              c.jsx(
                'circle',
                {
                  cx: pawCenter.x,
                  cy: pawCenter.y,
                  r: pawCenter.r,
                  fill: pawFill,
                  stroke: pawStroke,
                  strokeWidth: 0.46,
                },
                'gb-paw-grip'
              ),
              c.jsx(
                'circle',
                {
                  cx: pawCenter.x - 0.18,
                  cy: pawCenter.y - 0.18,
                  r: 0.22,
                  fill: '#FFFFFF',
                  opacity: 0.45,
                },
                'gb-paw-hi'
              ),
            ],
          },
          `acc-hand-${handAcc}`
        )
      );
    }
  }

  // 4. TRAININGSBUCH BEI 'reading' (inkl. haltender Pfoten links & rechts)
  if (mood === 'reading') {
    const bAnchor = stageAnchors.body;
    const bookX = bAnchor.x;
    const bookY = Math.min(13.2, (bAnchor.beltY || bAnchor.y + 1.8) + 0.3);
    nodes.push(
      c.jsxs(
        'g',
        {
          className: 'gb-acc-reading-book',
          children: [
            // Buch-Schatten
            c.jsx('rect', {
              x: bookX - 3.1,
              y: bookY - 0.85,
              width: 6.2,
              height: 2.5,
              rx: 0.4,
              fill: '#090D16',
              opacity: 0.35,
            }),
            // Buch-Cover (Blau) mit Kontur
            c.jsx('rect', {
              x: bookX - 3.0,
              y: bookY - 1.0,
              width: 6.0,
              height: 2.35,
              rx: 0.38,
              fill: '#0284C7',
              stroke: outlineHex,
              strokeWidth: 0.42,
            }),
            // Weiße Buchseiten oben sichtbar
            c.jsx('rect', {
              x: bookX - 2.65,
              y: bookY - 1.35,
              width: 5.3,
              height: 0.75,
              rx: 0.2,
              fill: '#F8FAFC',
              stroke: outlineHex,
              strokeWidth: 0.34,
            }),
            // Buchrücken in der Mitte
            c.jsx('rect', {
              x: bookX - 0.45,
              y: bookY - 1.35,
              width: 0.9,
              height: 2.7,
              rx: 0.2,
              fill: '#1E293B',
              stroke: outlineHex,
              strokeWidth: 0.34,
            }),
            // Haltende Pfoten links & rechts am Buchrand
            c.jsx('circle', {
              cx: bookX - 2.85,
              cy: bookY + 0.2,
              r: 0.62,
              fill: pawFill,
              stroke: pawStroke,
              strokeWidth: 0.42,
            }),
            c.jsx('circle', {
              cx: bookX + 2.85,
              cy: bookY + 0.2,
              r: 0.62,
              fill: pawFill,
              stroke: pawStroke,
              strokeWidth: 0.42,
            }),
          ],
        },
        'acc-reading-book'
      )
    );
  }

  return nodes;
}

/**
 * Erzeugt das freundliche, klar erkennbare Lächeln passend zum Pet-Stil ('cute' vs. 'progress') und zur Stimmung.
 * Mit deutlich gezeichneten Mundwinkeln und Wangen-Akzenten für eine sympathische, lebendige Mimik.
 */
function buildMouthElements(style, stage, mood, eyeBottomY, eyeHex) {
  const rowY = eyeBottomY + 1;
  const elements = [];

  if (mood === 'sleep' || mood === 'phase1_recovery') {
    // Sanftes, entspanntes Lächeln im Schlaf / Erholungsmodus (\_/)
    elements.push(
      { x: 6.55, y: rowY + 0.02, w: 0.62, h: 0.52, fill: eyeHex },
      { x: 7.12, y: rowY + 0.42, w: 1.76, h: 0.54, fill: eyeHex },
      { x: 8.83, y: rowY + 0.02, w: 0.62, h: 0.52, fill: eyeHex }
    );
    if (style === 'cute' || mood === 'phase1_recovery') {
      elements.push(
        { x: 4.1, y: rowY + 0.05, w: 1.2, h: 0.6, fill: '#FB7185', opacity: 0.65 },
        { x: 10.7, y: rowY + 0.05, w: 1.2, h: 0.6, fill: '#FB7185', opacity: 0.65 }
      );
    }
    return elements;
  }

  if (style === 'cute') {
    // Klar sichtbare, sympathische rosige Wangen bei allen Cute-Pets
    elements.push(
      { x: 4.0, y: rowY + 0.02, w: 1.25, h: 0.62, fill: '#FB7185', opacity: 0.72 },
      { x: 10.75, y: rowY + 0.02, w: 1.25, h: 0.62, fill: '#FB7185', opacity: 0.72 }
    );

    if (mood === 'post_workout' || mood === 'happy' || stage >= 3) {
      // Strahlendes, glückliches Cute-Lächeln (\_/) mit kleiner rosa Zunge in der Mitte
      elements.push(
        { x: 6.35, y: rowY - 0.08, w: 0.65, h: 0.56, fill: eyeHex },
        { x: 6.95, y: rowY + 0.36, w: 2.1, h: 0.58, fill: eyeHex },
        { x: 9.0, y: rowY - 0.08, w: 0.65, h: 0.56, fill: eyeHex },
        { x: 7.45, y: rowY + 0.55, w: 1.1, h: 0.42, fill: '#FB7185', opacity: 0.92 }
      );
    } else {
      // Klar gezeichnetes, freundliches Cute-Lächeln (\_/)
      elements.push(
        { x: 6.5, y: rowY - 0.02, w: 0.62, h: 0.54, fill: eyeHex },
        { x: 7.08, y: rowY + 0.38, w: 1.84, h: 0.56, fill: eyeHex },
        { x: 8.88, y: rowY - 0.02, w: 0.62, h: 0.54, fill: eyeHex }
      );
    }
  } else {
    // Progress / Beast Pets: Ausdrucksstarkes, sportliches Lächeln / Grinsen
    if (mood === 'post_workout' || mood === 'happy') {
      // Breites, stolzes Sieger-Lächeln (\_/) mit hellem Zahn-Akzent
      elements.push(
        { x: 6.4, y: rowY - 0.06, w: 0.65, h: 0.56, fill: eyeHex },
        { x: 7.0, y: rowY + 0.36, w: 2.0, h: 0.58, fill: eyeHex },
        { x: 8.95, y: rowY - 0.06, w: 0.65, h: 0.56, fill: eyeHex },
        { x: 7.35, y: rowY + 0.18, w: 1.3, h: 0.28, fill: '#F8FAFC', opacity: 0.9 }
      );
    } else {
      // Selbstbewusstes, sympathisches Sportler-Grinsen (\__/) mit höher gezogenem rechtem Mundwinkel
      elements.push(
        { x: 6.6, y: rowY + 0.08, w: 0.58, h: 0.5, fill: eyeHex },
        { x: 7.12, y: rowY + 0.38, w: 1.72, h: 0.54, fill: eyeHex },
        { x: 8.8, y: rowY - 0.08, w: 0.65, h: 0.58, fill: eyeHex }
      );
    }
  }

  return elements;
}

function GymBuddySpriteCanvasInner({
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

  const themeCtx = typeof useThemeSettings === 'function' ? useThemeSettings() : null;
  const themeSettings = themeCtx?.settings;

  let isDarkTheme = true;
  let defaultAccHex = '#A8DAB5';

  if (typeof document !== 'undefined') {
    isDarkTheme =
      document.documentElement.classList.contains('dark') ||
      Boolean(document.body?.classList.contains('dark'));
  }
  if (themeSettings) {
    if (themeSettings.themeMode === 'light') isDarkTheme = false;
    else if (themeSettings.themeMode === 'dark') isDarkTheme = true;
    else if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq && typeof mq.matches === 'boolean') {
        isDarkTheme = mq.matches;
      }
    }
    if (isValidHexColor(themeSettings.accentHex)) defaultAccHex = themeSettings.accentHex;
  }

  const effectiveHex =
    colorMode === 'custom' && isValidHexColor(customHex)
      ? customHex
      : getMonochromePetHex(isDarkTheme);

  const headEq = equipped?.head || '';
  const bodyEq = equipped?.body || '';
  const handEq = equipped?.hand || '';
  const headCol = accessoryColors?.head || '';
  const bodyCol = accessoryColors?.body || '';
  const handCol = accessoryColors?.hand || '';

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
    const accessoryNodes = renderEquippedAccessoriesSvg(
      petId,
      stage,
      mood,
      { head: headEq || null, body: bodyEq || null, hand: handEq || null },
      { head: headCol || null, body: bodyCol || null, hand: handCol || null },
      defaultAccHex,
      palette
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
      accessoryNodes,
    };
  }, [
    petId,
    stage,
    mood,
    effectiveHex,
    isDarkTheme,
    headEq,
    bodyEq,
    handEq,
    headCol,
    bodyCol,
    handCol,
    defaultAccHex,
  ]);

  const bodyAnimClass =
    mood === 'post_workout'
      ? 'gb-anim-post-workout'
      : mood === 'happy'
        ? 'gb-anim-happy'
        : mood === 'sleep' || mood === 'phase1_recovery'
          ? 'gb-anim-sleep'
          : 'gb-anim-idle';

  const isAwake = mood !== 'sleep' && mood !== 'phase1_recovery';
  const auraColor = colorMode === 'custom' && isValidHexColor(customHex) ? customHex : defaultAccHex;

  return c.jsx('div', {
    className: `relative inline-flex shrink-0 items-center justify-center select-none ${className}`,
    style: { width: `${size}px`, height: `${size}px` },
    children: c.jsxs('svg', {
      viewBox: '0 0 16 16',
      width: size,
      height: size,
      shapeRendering: 'geometricPrecision',
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
        // Alle Accessoires liegen direkt innerhalb dieser <g>-Gruppe, sodass sie sich zu 100 % synchron mitbewegen!
        c.jsxs('g', {
          className: bodyAnimClass,
          children: [
            // Basis-Körper-Pixel (mit crispEdges für gestochen scharfen Pixel-Look des Pets)
            c.jsx('g', {
              shapeRendering: 'crispEdges',
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

            // Augen: Im Wachzustand mit klar erkennbarer Zwinker-Animation (Wink) & Blinzeln; im Schlaf friedlich geschlossen
            isAwake
              ? c.jsxs(c.Fragment, {
                  children: [
                    // Linkes Auge (blinzelt normal)
                    c.jsxs('g', {
                      className: 'gb-eye-left-awake',
                      shapeRendering: 'crispEdges',
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
                                  x: spriteData.leftEyeMinX + 0.08,
                                  y: spriteData.leftEyeMinY + 0.08,
                                  width: stage >= 3 ? 1.0 : 0.85,
                                  height: stage >= 3 ? 1.0 : 0.85,
                                  fill: '#FFFFFF',
                                }),
                                stage >= 2
                                  ? c.jsx('rect', {
                                      x: spriteData.leftEyeMinX + 1.12,
                                      y: spriteData.leftEyeMinY + 1.12,
                                      width: 0.6,
                                      height: 0.6,
                                      fill: '#FFFFFF',
                                      opacity: 0.92,
                                    })
                                  : null,
                              ],
                            })
                          : c.jsx('rect', {
                              x: spriteData.leftEyeMinX + 0.12,
                              y: spriteData.leftEyeMinY + 0.12,
                              width: 0.62,
                              height: 0.62,
                              fill: '#FFFFFF',
                              opacity: 0.9,
                            }),
                      ],
                    }),

                    // Rechtes Auge (zwinkert unübersehbar + freundlicher Zwinker-Bogen während des Winks)
                    c.jsxs('g', {
                      className: 'gb-eye-right-awake',
                      shapeRendering: 'crispEdges',
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
                                  x: spriteData.rightEyeMinX + 0.08,
                                  y: spriteData.rightEyeMinY + 0.08,
                                  width: stage >= 3 ? 1.0 : 0.85,
                                  height: stage >= 3 ? 1.0 : 0.85,
                                  fill: '#FFFFFF',
                                }),
                                stage >= 2
                                  ? c.jsx('rect', {
                                      x: spriteData.rightEyeMinX + 1.12,
                                      y: spriteData.rightEyeMinY + 1.12,
                                      width: 0.6,
                                      height: 0.6,
                                      fill: '#FFFFFF',
                                      opacity: 0.92,
                                    })
                                  : null,
                              ],
                            })
                          : c.jsx('rect', {
                              x: spriteData.rightEyeMinX + 0.12,
                              y: spriteData.rightEyeMinY + 0.12,
                              width: 0.62,
                              height: 0.62,
                              fill: '#FFFFFF',
                              opacity: 0.9,
                            }),
                      ],
                    }),

                    // Ausdrucksstarker fröhlicher Zwinker-Bogen (^), der exakt während des Zwinkerns erscheint
                    c.jsxs('g', {
                      className: 'gb-eye-wink-arc',
                      shapeRendering: 'crispEdges',
                      children: [
                        c.jsx('rect', {
                          x: spriteData.rightEyeMinX - 0.1,
                          y: spriteData.maxEyeY - 0.35,
                          width: 0.55,
                          height: 0.5,
                          fill: spriteData.eyeHex,
                        }),
                        c.jsx('rect', {
                          x: spriteData.rightEyeMinX + 0.4,
                          y: spriteData.maxEyeY - 0.72,
                          width: 1.2,
                          height: 0.52,
                          fill: spriteData.eyeHex,
                        }),
                        c.jsx('rect', {
                          x: spriteData.rightEyeMinX + 1.55,
                          y: spriteData.maxEyeY - 0.35,
                          width: 0.55,
                          height: 0.5,
                          fill: spriteData.eyeHex,
                        }),
                      ],
                    }),
                  ],
                })
              : // Geschlossene, friedliche Schlaf-Augen
                c.jsxs('g', {
                  shapeRendering: 'crispEdges',
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
              shapeRendering: 'crispEdges',
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

            // 4. Ausgerüstete SVG-Accessoires (mit sauberer Outline, stufengenauen Ankern & greifender Pfote) + Buch
            c.jsx('g', {
              className: 'gb-accessories-layer',
              children: spriteData.accessoryNodes,
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

        // 8. Phase-1-Erholungsmodus ('phase1_recovery'): Sanftes Rose-Herzsymbol für entspannte Regeneration
        mood === 'phase1_recovery'
          ? c.jsxs('g', {
              className: 'gb-zzz-1',
              children: [
                c.jsx('rect', { x: 11.6, y: 1.8, width: 0.9, height: 0.8, fill: '#F43F5E' }),
                c.jsx('rect', { x: 13.1, y: 1.8, width: 0.9, height: 0.8, fill: '#F43F5E' }),
                c.jsx('rect', { x: 11.2, y: 2.4, width: 3.2, height: 0.9, fill: '#FB7185' }),
                c.jsx('rect', { x: 11.7, y: 3.2, width: 2.2, height: 0.8, fill: '#F43F5E' }),
                c.jsx('rect', { x: 12.3, y: 3.9, width: 1.0, height: 0.7, fill: '#E11D48' }),
              ],
            })
          : null,
      ],
    }),
  });
}

export const GymBuddySpriteCanvas = y.memo(GymBuddySpriteCanvasInner);

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
  const safeXp = Number.isFinite(xp) ? xp : 0;
  if (safeXp >= LEVEL_XP_THRESHOLDS[4]) return 4;
  if (safeXp >= LEVEL_XP_THRESHOLDS[3]) return 3;
  if (safeXp >= LEVEL_XP_THRESHOLDS[2]) return 2;
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
  const safeDuration = Number.isFinite(durationSec) && durationSec > 0 ? durationSec : 0;
  const safeStreak = Number.isFinite(streakCount) && streakCount > 0 ? streakCount : 1;
  const minutes = Math.max(1, Math.round(safeDuration / 60));
  const durationBonus = Math.min(60, minutes);
  const streakBonus = Math.min(5, Math.max(1, safeStreak)) * 10;
  return base + durationBonus + streakBonus;
}

const MAX_STREAK_GAP_MS = 3 * 24 * 60 * 60 * 1000; // Standard: 2 Pausentage = 3 Kalendertage Abstand
const PHASE1_STREAK_GAP_MS = 5 * 24 * 60 * 60 * 1000; // Phase 1 (Menstruation): 4 Pausentage = 5 Kalendertage Abstand

export const DEFAULT_CYCLE_CONFIG = {
  id: 'default',
  gender: 'unspecified',
  enabled: false,
  lastPeriodStart: '',
  cycleLength: 28,
  periodDuration: 5,
  updatedAt: 0,
};

export function normalizeUserGender(raw) {
  if (raw === 'male' || raw === 'female' || raw === 'unspecified') return raw;
  return 'unspecified';
}

export function clampCycleLength(len) {
  const n = typeof len === 'number' ? len : Number(len);
  if (!Number.isFinite(n)) return 28;
  return Math.min(45, Math.max(20, Math.round(n)));
}

export function clampPeriodDuration(dur) {
  const n = typeof dur === 'number' ? dur : Number(dur);
  if (!Number.isFinite(n)) return 5;
  return Math.min(10, Math.max(2, Math.round(n)));
}

export function isValidIsoDateString(val) {
  if (typeof val !== 'string') return false;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(val.trim());
  if (!m) return false;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (year < 1970 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return false;
  const d = new Date(year, month - 1, day, 12, 0, 0, 0);
  return (
    !Number.isNaN(d.getTime()) &&
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}

export function parseIsoDateLocalNoon(iso) {
  if (!isValidIsoDateString(iso)) return null;
  const [y, m, d] = iso.trim().split('-').map(Number);
  return new Date(y, m - 1, d, 12, 0, 0, 0).getTime();
}

export function applyOnboardingGenderSelection(gender, prev = {}) {
  const g = normalizeUserGender(gender);
  return {
    id: 'default',
    gender: g,
    enabled: g === 'female',
    lastPeriodStart: isValidIsoDateString(prev?.lastPeriodStart) ? prev.lastPeriodStart.trim() : '',
    cycleLength: clampCycleLength(prev?.cycleLength ?? 28),
    periodDuration: clampPeriodDuration(prev?.periodDuration ?? 5),
    updatedAt: Date.now(),
  };
}

export const CYCLE_PHASE_META = {
  menstruation: {
    phaseNumber: 1,
    colorHex: '#F43F5E',
    dotColor: '#F43F5E',
    titleDe: 'Phase 1: Menstruation',
    titleEn: 'Phase 1: Menstruation',
    shortLabelDe: 'Menstruation',
    shortLabelEn: 'Menstruation',
    focusDe: 'Erholung, Technik & Mobility',
    focusEn: 'Recovery, Technique & Mobility',
    hintDe:
      'Fokus auf Erholung, saubere Technik & Mobility – kein Leistungsdruck. Dein Streak-Schutz (bis zu 4 Pausentage) ist automatisch aktiv.',
    hintEn:
      'Focus on recovery, clean technique & mobility — zero performance pressure. Your streak protection (up to 4 rest days) is automatically active.',
    streakRestDaysLimit: 4,
  },
  follicular: {
    phaseNumber: 2,
    colorHex: '#10B981',
    dotColor: '#10B981',
    titleDe: 'Phase 2: Follikelphase',
    titleEn: 'Phase 2: Follicular Phase',
    shortLabelDe: 'Follikelphase',
    shortLabelEn: 'Follicular',
    focusDe: 'Steigende Energie & Aufbau',
    focusEn: 'Rising Energy & Muscle Building',
    hintDe:
      'Steigende Energie & beste Regeneration – ideal für Muskelaufbau, Progression und höheres Trainingsvolumen.',
    hintEn:
      'Rising energy & optimal recovery — ideal for muscle building, progression, and higher training volume.',
    streakRestDaysLimit: 2,
  },
  ovulation: {
    phaseNumber: 3,
    colorHex: '#F59E0B',
    dotColor: '#F59E0B',
    titleDe: 'Phase 3: Ovulation / Power-Peak',
    titleEn: 'Phase 3: Ovulation / Power Peak',
    shortLabelDe: 'Ovulation',
    shortLabelEn: 'Ovulation',
    focusDe: 'Maximalkraft-Peak & PRs',
    focusEn: 'Max Strength Peak & PRs',
    hintDe:
      'Maximalkraft-Peak (Tag 13–16 im Standardzyklus) – grünes Licht für schwere Gewichte und persönliche Rekorde (PRs)!',
    hintEn:
      'Max strength peak (Days 13–16 in a standard cycle) — green light for heavy weights and personal records (PRs)!',
    streakRestDaysLimit: 2,
  },
  luteal: {
    phaseNumber: 4,
    colorHex: '#A78BFA',
    dotColor: '#A78BFA',
    titleDe: 'Phase 4: Lutealphase',
    titleEn: 'Phase 4: Luteal Phase',
    shortLabelDe: 'Lutealphase',
    shortLabelEn: 'Luteal',
    focusDe: 'Anti-Frust & Konstanz',
    focusEn: 'Anti-Frustration & Consistency',
    hintDe:
      'Anti-Frust-Hinweis: 1–2 Wdh. weniger im Satz oder +1–2 kg auf der Waage durch hormonelle Wassereinlagerung sind völlig normal – kein echter Kraftverlust!',
    hintEn:
      'Anti-frustration note: 1–2 fewer reps per set or +1–2 kg on the scale due to hormonal water retention are completely normal — not real strength loss!',
    streakRestDaysLimit: 2,
  },
};

export function calculateCyclePhaseForDate(config, targetDate = Date.now()) {
  if (!config || config.enabled !== true) return null;
  if (!isValidIsoDateString(config.lastPeriodStart)) return null;

  const startNoon = parseIsoDateLocalNoon(config.lastPeriodStart);
  if (startNoon === null) return null;

  let targetNoon = null;
  if (typeof targetDate === 'string') {
    targetNoon = parseIsoDateLocalNoon(targetDate);
  } else if (targetDate instanceof Date) {
    targetNoon = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      targetDate.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
  } else if (typeof targetDate === 'number' && Number.isFinite(targetDate)) {
    const d = new Date(targetDate);
    targetNoon = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0, 0).getTime();
  }
  if (targetNoon === null || Number.isNaN(targetNoon)) return null;

  const cycleLength = clampCycleLength(config.cycleLength ?? 28);
  const periodDuration = Math.min(clampPeriodDuration(config.periodDuration ?? 5), cycleLength - 6);
  const daysSincePeriodStart = Math.round((targetNoon - startNoon) / (24 * 60 * 60 * 1000));
  const cycleDay = (((daysSincePeriodStart % cycleLength) + cycleLength) % cycleLength) + 1;

  // Standard 28-Tage-Zyklus: Phase 1 (1..periodDuration), Phase 2 (Ende Periode..Tag 12), Phase 3 (Tag 13..16), Phase 4 (Tag 17..Zyklusende)
  const ovulationCenter = Math.round(cycleLength / 2);
  const ovulationStart = Math.max(periodDuration + 2, ovulationCenter - 1);
  const ovulationEnd = Math.min(cycleLength - 3, ovulationCenter + 2);

  let phase;
  if (cycleDay <= periodDuration) {
    phase = 'menstruation';
  } else if (cycleDay < ovulationStart) {
    phase = 'follicular';
  } else if (cycleDay <= ovulationEnd) {
    phase = 'ovulation';
  } else {
    phase = 'luteal';
  }

  const meta = CYCLE_PHASE_META[phase];
  return {
    phase,
    phaseNumber: meta.phaseNumber,
    cycleDay,
    cycleLength,
    periodDuration,
    daysSincePeriodStart,
    colorHex: meta.colorHex,
    dotColor: meta.dotColor,
    titleDe: meta.titleDe,
    titleEn: meta.titleEn,
    shortLabelDe: meta.shortLabelDe,
    shortLabelEn: meta.shortLabelEn,
    focusDe: meta.focusDe,
    focusEn: meta.focusEn,
    hintDe: meta.hintDe,
    hintEn: meta.hintEn,
    streakRestDaysLimit: meta.streakRestDaysLimit,
  };
}

export function sanitizeCycleTrackingBackupRecord(raw) {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const gender = normalizeUserGender(raw.gender ?? raw.sex);
  const enabled =
    typeof raw.enabled === 'boolean'
      ? raw.enabled
      : typeof raw.cycleTrackingEnabled === 'boolean'
        ? raw.cycleTrackingEnabled
        : false;
  const lastPeriodStart = isValidIsoDateString(raw.lastPeriodStart)
    ? raw.lastPeriodStart.trim()
    : '';
  const cycleLength = clampCycleLength(raw.cycleLength ?? 28);
  const periodDuration = clampPeriodDuration(raw.periodDuration ?? 5);
  const updatedAt =
    typeof raw.updatedAt === 'number' && Number.isFinite(raw.updatedAt) ? raw.updatedAt : Date.now();

  return {
    id: 'default',
    gender,
    enabled,
    lastPeriodStart,
    cycleLength,
    periodDuration,
    updatedAt,
  };
}

export function calculateWorkoutStreak(
  completedDatesMs,
  nowMs = Date.now(),
  cycleProtection = null,
  breakConfig = null
) {
  if (!Array.isArray(completedDatesMs) || completedDatesMs.length === 0) return 0;

  const validTimestamps = [];
  for (let i = 0; i < completedDatesMs.length; i++) {
    const v = completedDatesMs[i];
    if (typeof v === 'number' && Number.isFinite(v) && v > 0) {
      validTimestamps.push(v);
    }
  }
  if (validTimestamps.length === 0) return 0;

  validTimestamps.sort((a, b) => b - a);

  const dayMs = 24 * 60 * 60 * 1000;
  const isPhase1GapProtected = (laterMs, earlierMs) => {
    if (cycleProtection === true) return true;
    const cfg =
      cycleProtection && typeof cycleProtection === 'object'
        ? cycleProtection
        : cachedCycleConfig?.enabled
          ? cachedCycleConfig
          : null;
    if (!cfg || !cfg.enabled || !isValidIsoDateString(cfg.lastPeriodStart)) return false;
    const steps = Math.min(6, Math.max(0, Math.round((laterMs - earlierMs) / dayMs)));
    for (let d = 0; d <= steps; d++) {
      const checkMs = laterMs - d * dayMs;
      const info = calculateCyclePhaseForDate(cfg, checkMs);
      if (info && info.phase === 'menstruation') return true;
    }
    return false;
  };

  const effBreakCfg = breakConfig !== null ? breakConfig : cachedBreakConfig;
  const subtractBreakDaysMs = (laterMs, earlierMs) => {
    if (!effBreakCfg) return laterMs - earlierMs;
    const breakDays = countBreakDaysInInterval(earlierMs, laterMs, effBreakCfg, nowMs);
    if (breakDays <= 0) return laterMs - earlierMs;
    return Math.max(0, laterMs - earlierMs - breakDays * dayMs);
  };

  const todayIso = toLocalIsoDate(nowMs);
  const hasBreakCoveringToday = Boolean(
    effBreakCfg && getBreakForDate(effBreakCfg, todayIso, nowMs) !== null
  );

  const initialMaxGapMs = isPhase1GapProtected(nowMs, validTimestamps[0])
    ? PHASE1_STREAK_GAP_MS
    : MAX_STREAK_GAP_MS;
  const effectiveInitialGapMs = subtractBreakDaysMs(nowMs, validTimestamps[0]);
  if (!hasBreakCoveringToday && effectiveInitialGapMs > initialMaxGapMs) return 0;

  let streak = 0;
  let lastDayMidnightMs = null;
  let lastDayKey = -1;

  for (let i = 0; i < validTimestamps.length; i++) {
    const d = new Date(validTimestamps[i]);
    const yr = d.getFullYear();
    const mo = d.getMonth();
    const dy = d.getDate();
    const dayKey = yr * 10000 + mo * 100 + dy;
    if (dayKey === lastDayKey) continue;

    const midnightMs = new Date(yr, mo, dy).getTime();
    if (lastDayMidnightMs === null) {
      streak = 1;
      lastDayMidnightMs = midnightMs;
      lastDayKey = dayKey;
      continue;
    }

    const allowedGapMs = isPhase1GapProtected(lastDayMidnightMs, midnightMs)
      ? PHASE1_STREAK_GAP_MS
      : MAX_STREAK_GAP_MS;

    const effectiveGapMs = subtractBreakDaysMs(lastDayMidnightMs, midnightMs);
    if (effectiveGapMs <= allowedGapMs) {
      streak += 1;
      lastDayMidnightMs = midnightMs;
      lastDayKey = dayKey;
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
  if (typeof lastWorkoutAtMs !== 'number' || !Number.isFinite(lastWorkoutAtMs) || lastWorkoutAtMs <= 0) {
    return false;
  }
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

export function determinePositivePetMood(
  lastWorkoutAtMs,
  nowMs = Date.now(),
  isPhase1Menstruation = false
) {
  if (typeof lastWorkoutAtMs === 'number' && Number.isFinite(lastWorkoutAtMs) && lastWorkoutAtMs > 0) {
    const hoursSince = Math.max(0, (nowMs - lastWorkoutAtMs) / (1000 * 60 * 60));
    if (hoursSince <= 2) return 'post_workout';
  }
  if (isNightSleepWindow(nowMs)) return 'sleep';
  if (isPhase1Menstruation && !hasTrainedOnSameDay(lastWorkoutAtMs, nowMs)) {
    return 'phase1_recovery';
  }
  if (typeof lastWorkoutAtMs !== 'number' || !Number.isFinite(lastWorkoutAtMs) || lastWorkoutAtMs <= 0) {
    return 'sleep';
  }
  const hoursSince = Math.max(0, (nowMs - lastWorkoutAtMs) / (1000 * 60 * 60));
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
  if (!preset) return false;
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
  if (!acc) return false;
  if (totalWorkouts >= acc.unlockWorkouts) return true;
  if (acc.unlockRequireLevel !== undefined && maxPetLevelReached >= acc.unlockRequireLevel) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// 6. Reaktiver Store & Debounced IndexedDB-Persistenz (Zero-Jank & Race-Free)
// ---------------------------------------------------------------------------

let cachedState = createDefaultGymBuddyState();
let stateLoaded = false;
const listeners = new Set();
let persistTimerId = null;
let pendingWriteChain = Promise.resolve();
let unloadFlushRegistered = false;

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

function writeStateToStorageNow(snapshotToSave) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('gym-buddy-fallback-v1', JSON.stringify(snapshotToSave));
    }
  } catch {}
  pendingWriteChain = pendingWriteChain
    .then(() =>
      pe('Gym Buddy speichern', async (db) => {
        if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
          await db.put(GYM_BUDDY_STORE, snapshotToSave);
        }
      })
    )
    .catch(() => {});
  return pendingWriteChain;
}

function flushPendingGymBuddyPersist() {
  if (persistTimerId !== null) {
    clearTimeout(persistTimerId);
    persistTimerId = null;
    void writeStateToStorageNow(cachedState);
  }
}

function ensureUnloadFlushRegistered() {
  if (unloadFlushRegistered || typeof window === 'undefined') return;
  unloadFlushRegistered = true;
  window.addEventListener('pagehide', flushPendingGymBuddyPersist);
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        flushPendingGymBuddyPersist();
      }
    });
  }
}

async function persistGymBuddyState(nextState, options = {}) {
  ensureUnloadFlushRegistered();
  cachedState = { ...nextState, updatedAt: Date.now() };
  notifyListeners();

  if (options.immediate) {
    if (persistTimerId !== null) {
      clearTimeout(persistTimerId);
      persistTimerId = null;
    }
    await writeStateToStorageNow(cachedState);
    return;
  }

  if (persistTimerId !== null) {
    clearTimeout(persistTimerId);
  }
  persistTimerId = setTimeout(() => {
    persistTimerId = null;
    void writeStateToStorageNow(cachedState);
  }, 150);
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
    await persistGymBuddyState(cachedState, { immediate: true });
    return cachedState;
  })();
  return initPromise;
}

export function useGymBuddy() {
  const state = y.useSyncExternalStore(subscribeGymBuddy, getGymBuddySnapshot, getGymBuddySnapshot);
  const [nowMs, setNowMs] = y.useState(() => Date.now());
  const hist = typeof useHistoryData === 'function' ? useHistoryData() : null;
  const sessions = hist && Array.isArray(hist.sessions) ? hist.sessions : [];

  y.useEffect(() => {
    ensureGymBuddyLoaded().catch(() => {});
    const tick = () => {
      if (typeof document === 'undefined' || document.visibilityState === 'visible') {
        setNowMs(Date.now());
      }
    };
    const onVisChange = () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
        setNowMs(Date.now());
      }
    };
    const timer = window.setInterval(tick, 60000);
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVisChange);
    }
    return () => {
      window.clearInterval(timer);
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVisChange);
      }
    };
  }, []);

  // Synchronisiere neu abgeschlossene Workouts automatisch und atomar mit dem aktiven Pet
  const completedSessions = y.useMemo(
    () =>
      sessions
        .map((s) => s?.session)
        .filter((s) => s && s.completedAt !== null && s.completedAt !== undefined)
        .sort((a, b) => (Number(a.date) || 0) - (Number(b.date) || 0)),
    [sessions]
  );

  y.useEffect(() => {
    if (!stateLoaded || completedSessions.length === 0) return;
    const processedSet = new Set(cachedState?.processedSessionIds || []);
    const newSessions = completedSessions.filter((s) => s && s.id && !processedSet.has(s.id));
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

    void persistGymBuddyState(
      {
        ...cachedState,
        processedSessionIds: Array.from(processedSet),
        petProgress: {
          ...(cachedState?.petProgress || {}),
          [activeId]: updatedPet,
        },
      },
      { immediate: true }
    );
  }, [completedSessions, state.updatedAt]);

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

  const cycleState = y.useSyncExternalStore(
    subscribeCycleTracking,
    getCycleTrackingSnapshot,
    getCycleTrackingSnapshot
  );

  const breakState = y.useSyncExternalStore(
    subscribeTrainingBreaks,
    getTrainingBreaksSnapshot,
    getTrainingBreaksSnapshot
  );

  y.useEffect(() => {
    ensureCycleTrackingLoaded().catch(() => {});
    ensureTrainingBreaksLoaded().catch(() => {});
  }, []);

  const currentPhaseInfo = y.useMemo(
    () => calculateCyclePhaseForDate(cycleState, nowMs),
    [cycleState, nowMs]
  );

  const isPhase1Menstruation = Boolean(
    currentPhaseInfo && currentPhaseInfo.phase === 'menstruation'
  );

  const workoutDates = y.useMemo(
    () => completedSessions.map((s) => s?.completedAt || s?.date).filter(Boolean),
    [completedSessions]
  );

  const currentStreak = y.useMemo(
    () =>
      calculateWorkoutStreak(
        workoutDates,
        nowMs,
        cycleState,
        breakState
      ),
    [workoutDates, nowMs, cycleState, breakState]
  );

  const comebackGap = y.useMemo(
    () =>
      detectUnplannedComebackGap(
        workoutDates,
        breakState,
        nowMs,
        cycleState,
        SESSION_PREVIOUS_APP_OPEN_MS
      ),
    [workoutDates, breakState, nowMs, cycleState]
  );

  const currentMood = y.useMemo(
    () =>
      determinePositivePetMood(
        lastWorkoutAtMs,
        nowMs,
        isPhase1Menstruation
      ),
    [lastWorkoutAtMs, nowMs, isPhase1Menstruation]
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
    void persistGymBuddyState(
      {
        ...cachedState,
        enabled: Boolean(enabled),
      },
      { immediate: true }
    );
  }, []);

  const selectPet = y.useCallback((petId) => {
    const existing =
      cachedState.petProgress?.[petId] || createDefaultPetProgress(petId);
    void persistGymBuddyState(
      {
        ...cachedState,
        activePetId: petId,
        petProgress: {
          ...cachedState.petProgress,
          [petId]: existing,
        },
      },
      { immediate: true }
    );
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
    void persistGymBuddyState({
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
    cycleState,
    breakState,
    comebackGap,
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

const FIRST_OPEN_HINT_STORAGE_KEY = 'gym-buddy-first-open-hint-dismissed-v1';

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
    cycleState,
    state,
    setEnabled,
    selectPet,
    updateActivePetCustomization,
  } = useGymBuddy();

  const [tab, setTab] = y.useState('overview');
  const [previewMood, setPreviewMood] = y.useState(null);
  const [activeAccSlot, setActiveAccSlot] = y.useState('head');
  const [petStyleFilter, setPetStyleFilter] = y.useState('all');
  const [showFirstOpenHint, setShowFirstOpenHint] = y.useState(() => {
    try {
      return typeof localStorage !== 'undefined'
        ? localStorage.getItem(FIRST_OPEN_HINT_STORAGE_KEY) !== '1'
        : false;
    } catch {
      return false;
    }
  });

  const dismissFirstOpenHint = y.useCallback(() => {
    setShowFirstOpenHint(false);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(FIRST_OPEN_HINT_STORAGE_KEY, '1');
      }
    } catch {}
  }, []);

  const handleDisableBuddy = y.useCallback(() => {
    dismissFirstOpenHint();
    setEnabled(false);
    if (typeof onClose === 'function') onClose();
  }, [dismissFirstOpenHint, setEnabled, onClose]);

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
      'data-no-swipe': 'true',
      className: 'flex flex-col gap-4',
      children: [
        // Beim ersten Öffnen: Freundlicher Hinweis, dass das Pet optional ist & jederzeit deaktiviert werden kann
        showFirstOpenHint
          ? c.jsxs('div', {
              role: 'status',
              className:
                'flex flex-col gap-2.5 rounded-xl2 border border-primary/40 bg-primary-soft/60 p-3.5',
              children: [
                c.jsx('p', {
                  className: 'text-titleS font-semibold text-onSurface',
                  children: texts.firstOpenTitle,
                }),
                c.jsx('p', {
                  className: 'text-caption leading-relaxed text-onSurfaceVariant',
                  children: texts.firstOpenBody,
                }),
                c.jsxs('div', {
                  className: 'flex flex-wrap items-center gap-2 pt-0.5',
                  children: [
                    c.jsx(Button, {
                      variant: 'filled',
                      className: '!px-3.5 !py-1.5 !text-caption',
                      onClick: dismissFirstOpenHint,
                      children: texts.firstOpenDismiss,
                    }),
                    c.jsx(Button, {
                      variant: 'outlined',
                      className: '!px-3.5 !py-1.5 !text-caption',
                      onClick: handleDisableBuddy,
                      children: texts.firstOpenDisableNow,
                    }),
                  ],
                }),
              ],
            })
          : null,

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

                // Stimmungs-Vorschau (inklusive 'post_workout', 'phase1_recovery' & 'sleep')
                c.jsxs('div', {
                  className: 'flex flex-col gap-2',
                  children: [
                    c.jsx('span', {
                      className: 'text-label uppercase text-onSurfaceVariant',
                      children: texts.previewMoodLabel,
                    }),
                    c.jsx('div', {
                      className: 'flex flex-wrap gap-2',
                      children: [
                        'post_workout',
                        'happy',
                        'idle',
                        'reading',
                        ...(cycleState?.enabled ? ['phase1_recovery'] : []),
                        'sleep',
                      ].map((m) =>
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

        // Dauerhafter, dezenter Deaktivieren-Bereich am unteren Rand des Menüs
        c.jsxs('div', {
          className:
            'mt-1 flex flex-col gap-2 rounded-xl2 border border-line2/70 bg-surface-containerHigh p-3',
          children: [
            c.jsx('p', {
              className: 'text-caption text-onSurfaceVariant',
              children: texts.hideBuddyHint,
            }),
            c.jsx(Button, {
              variant: 'outlined',
              fullWidth: true,
              className: '!py-2 !text-caption',
              onClick: handleDisableBuddy,
              children: texts.hideBuddyButton,
            }),
          ],
        }),
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
  const [greetingVisible, setGreetingVisible] = y.useState(false);

  y.useEffect(() => {
    let greetTimer = null;
    const onGreet = () => {
      setSheetOpen(false);
      setGreetingVisible(true);
      if (greetTimer) window.clearTimeout(greetTimer);
      greetTimer = window.setTimeout(() => setGreetingVisible(false), 6500);
    };
    const onToggleSheet = (ev) => {
      const nextOpen =
        ev && ev.detail && typeof ev.detail.open === 'boolean' ? ev.detail.open : true;
      setSheetOpen(nextOpen);
    };
    window.addEventListener('gym-buddy-tutorial-greet', onGreet);
    window.addEventListener('gym-buddy-tutorial-sheet', onToggleSheet);
    try {
      if (sessionStorage.getItem('gym_buddy_pending_greet') === '1') {
        sessionStorage.removeItem('gym_buddy_pending_greet');
        onGreet();
      }
    } catch {}
    return () => {
      window.removeEventListener('gym-buddy-tutorial-greet', onGreet);
      window.removeEventListener('gym-buddy-tutorial-sheet', onToggleSheet);
      if (greetTimer) window.clearTimeout(greetTimer);
    };
  }, []);

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
      greetingVisible
        ? c.jsxs('div', {
            role: 'status',
            onClick: () => setGreetingVisible(false),
            className:
              'animate-step-slide flex cursor-pointer items-center justify-between gap-3 rounded-xl2 border border-primary/40 bg-primary-container px-3.5 py-2.5 text-primary-onContainer shadow-lg',
            children: [
              c.jsxs('div', {
                className: 'flex items-center gap-2.5 min-w-0',
                children: [
                  c.jsx('span', {
                    'aria-hidden': 'true',
                    className: 'text-base leading-none shrink-0',
                    children: '👋',
                  }),
                  c.jsxs('p', {
                    className: 'text-caption font-medium leading-snug',
                    children: [
                      c.jsx('strong', {
                        className: 'font-semibold',
                        children: `${displayName}: `,
                      }),
                      isDe
                        ? 'Schön, dass du da bist! Lass uns gemeinsam stark werden – tippe mich jederzeit an. 💪'
                        : "Great to have you here! Let's get strong together — tap me anytime. 💪",
                    ],
                  }),
                ],
              }),
              c.jsx('span', {
                'aria-hidden': 'true',
                className: 'shrink-0 text-xs opacity-70',
                children: '✕',
              }),
            ],
          })
        : null,

      c.jsxs('button', {
        type: 'button',
        'data-no-swipe': 'true',
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
              mood: greetingVisible ? 'happy' : currentMood,
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
        ? c.jsx(GymBuddyErrorBoundary, {
            children: c.jsx(GymBuddySheet, {
              open: sheetOpen,
              onClose: () => setSheetOpen(false),
            }),
          })
        : null,
    ],
  });
}

export function GymBuddyWidget() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsxs("div", {
      "data-no-swipe": "true",
      "data-tutorial-target": "gym-buddy",
      className: "flex flex-col gap-3",
      children: [
        c.jsx(GymBuddyWidgetInternal, {}),
        c.jsx(CycleDashboardWidgetInternal, {}),
        c.jsx(ComebackWelcomeModal, {}),
      ],
    }),
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
    ? Array.from(
        new Set(
          raw.processedSessionIds.filter((x) => typeof x === 'string' && x.length > 0 && x.length <= 80)
        )
      ).slice(0, 5000)
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
  flushPendingGymBuddyPersist();
  try {
    if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
      const records = await db.getAll(GYM_BUDDY_STORE);
      const onlyBuddy = records.filter((r) => r && r.id === GYM_BUDDY_RECORD_ID);
      if (onlyBuddy.length > 0) return onlyBuddy;
    }
  } catch {}
  return [cachedState];
}

export async function restoreGymBuddyFromBackup(records) {
  if (!Array.isArray(records) || records.length === 0) return;
  const buddyRec = records.find((r) => r && r.id === GYM_BUDDY_RECORD_ID) || records[0];
  const valid = sanitizeGymBuddyBackupRecord(buddyRec);
  if (valid) {
    await persistGymBuddyState(valid, { immediate: true });
  }
}

// ---------------------------------------------------------------------------
// 12. Cycle-Synced Training (Zyklus-/Perioden-Tracking) Store & UI Components
// ---------------------------------------------------------------------------

export const CYCLE_STORAGE_KEY = 'gym-cycle-tracking-v1';
export const CYCLE_IDB_RECORD_ID = 'cycle-tracking';

function readInitialCycleConfigFromLocalStorage() {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(CYCLE_STORAGE_KEY);
      if (raw) {
        const parsed = sanitizeCycleTrackingBackupRecord(JSON.parse(raw));
        if (parsed) return parsed;
      }
    }
  } catch {}
  return { ...DEFAULT_CYCLE_CONFIG };
}

let cachedCycleConfig = readInitialCycleConfigFromLocalStorage();
let cycleLoaded = false;
let cycleInitPromise = null;
const cycleListeners = new Set();

function notifyCycleListeners() {
  for (const fn of cycleListeners) fn();
}

export function subscribeCycleTracking(listener) {
  cycleListeners.add(listener);
  return () => cycleListeners.delete(listener);
}

export function getCycleTrackingSnapshot() {
  return cachedCycleConfig;
}

export async function persistCycleTrackingConfig(patchOrFull, options = {}) {
  const merged = sanitizeCycleTrackingBackupRecord({
    ...cachedCycleConfig,
    ...(patchOrFull || {}),
    updatedAt: Date.now(),
  }) || { ...DEFAULT_CYCLE_CONFIG, updatedAt: Date.now() };

  cachedCycleConfig = merged;
  cycleLoaded = true;

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CYCLE_STORAGE_KEY, JSON.stringify(merged));
    }
  } catch {}

  notifyCycleListeners();
  notifyListeners();

  try {
    await pe('Zyklus-Einstellungen speichern', async (db) => {
      if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
        await db.put(GYM_BUDDY_STORE, {
          ...merged,
          id: CYCLE_IDB_RECORD_ID,
        });
        await db.put(GYM_BUDDY_STORE, {
          ...merged,
          id: 'cycleTracking',
        });
      }
      if (db.objectStoreNames.contains('trainingSettings')) {
        const ts = (await db.get('trainingSettings', 'default')) || { id: 'default' };
        await db.put('trainingSettings', {
          ...ts,
          gender: merged.gender,
          cycleTrackingEnabled: merged.enabled,
          lastPeriodStart: merged.lastPeriodStart,
          cycleLength: merged.cycleLength,
          periodDuration: merged.periodDuration,
        });
      }
      if (options.syncUserProfile !== false && db.objectStoreNames.contains('userProfile')) {
        const existingProfile = await db.get('userProfile', 'default');
        if (existingProfile) {
          await db.put('userProfile', {
            ...existingProfile,
            sex: merged.gender,
          });
        }
      }
    });
  } catch {}

  return merged;
}

export async function ensureCycleTrackingLoaded() {
  if (cycleLoaded) return cachedCycleConfig;
  if (cycleInitPromise) return cycleInitPromise;

  cycleInitPromise = (async () => {
    try {
      const loaded = await pe('Zyklus-Einstellungen laden', async (db) => {
        if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
          const recPrimary = await db.get(GYM_BUDDY_STORE, CYCLE_IDB_RECORD_ID);
          const recLegacy = await db.get(GYM_BUDDY_STORE, 'cycleTracking');
          if (recPrimary && recLegacy) {
            return (recLegacy.updatedAt || 0) > (recPrimary.updatedAt || 0) ? recLegacy : recPrimary;
          }
          if (recPrimary) return recPrimary;
          if (recLegacy) return recLegacy;
        }
        if (db.objectStoreNames.contains('trainingSettings')) {
          const ts = await db.get('trainingSettings', 'default');
          if (
            ts &&
            (ts.gender !== undefined ||
              ts.cycleTrackingEnabled !== undefined ||
              ts.lastPeriodStart !== undefined)
          ) {
            return {
              id: 'default',
              gender: ts.gender,
              enabled: ts.cycleTrackingEnabled,
              lastPeriodStart: ts.lastPeriodStart,
              cycleLength: ts.cycleLength,
              periodDuration: ts.periodDuration,
            };
          }
        }
        if (db.objectStoreNames.contains('userProfile')) {
          const prof = await db.get('userProfile', 'default');
          if (prof && prof.sex) {
            return {
              id: 'default',
              gender: prof.sex,
              enabled: false,
              lastPeriodStart: '',
              cycleLength: 28,
              periodDuration: 5,
            };
          }
        }
        return null;
      });

      if (loaded) {
        const sanitized = sanitizeCycleTrackingBackupRecord(loaded);
        if (sanitized) {
          cachedCycleConfig = sanitized;
          try {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem(CYCLE_STORAGE_KEY, JSON.stringify(sanitized));
            }
          } catch {}
          cycleLoaded = true;
          notifyCycleListeners();
          notifyListeners();
          return cachedCycleConfig;
        }
      }
    } catch {}

    cycleLoaded = true;
    return cachedCycleConfig;
  })();

  return cycleInitPromise;
}

export function getCycleTexts(lang) {
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
    isDe,
    sectionTitle: isDe
      ? 'Zyklus- & Perioden-Tracking (Cycle-Synced Training)'
      : 'Cycle & Period Tracking (Cycle-Synced Training)',
    sectionHint: isDe
      ? 'Passt Trainings-Hinweise in 4 Zyklus-Phasen, Kalender-Markierungen und den Streak-Schutz beim Gym Buddy (4 statt 2 Pausentage in Phase 1) fair an deinen Körper an. Jederzeit ohne Datenverlust ausblendbar.'
      : 'Fairly adapts workout hints across 4 cycle phases, calendar phase markers, and Gym Buddy streak protection (4 instead of 2 rest days in Phase 1) to your body. Can be hidden anytime without losing data.',
    genderLabel: isDe ? 'Geschlecht / Hormonprofil' : 'Gender / Hormone Profile',
    genderOptions: {
      male: isDe ? 'Mann' : 'Male',
      female: isDe ? 'Frau' : 'Female',
      unspecified: isDe ? 'Keine Angabe' : 'Prefer not to say',
    },
    whyWeAskTitle: isDe ? 'Warum fragen wir das?' : 'Why do we ask this?',
    whyWeAskBody: isDe
      ? 'Der männliche (24h) und weibliche (~28 Tage) Hormonzyklus beeinflussen Kraft, Regeneration und Wassereinlagerungen unterschiedlich. Die App passt das Training sowie die Streaks dadurch fair an – und alle Daten bleiben zu 100 % lokal auf deinem Gerät.'
      : 'The male (24h) and female (~28-day) hormone cycles affect strength, recovery, and water retention differently. This allows the app to fairly adapt your training and streaks — and 100% of your data stays locally on your device.',
    toggleActiveLabel: isDe ? 'Zyklus-Tracking aktiv' : 'Cycle tracking active',
    toggleOffHint: isDe
      ? 'Zyklus-Tracking ist aktuell ausgeblendet (deine gespeicherten Daten bleiben im Hintergrund erhalten).'
      : 'Cycle tracking is currently hidden (your saved data stays preserved in the background).',
    lastPeriodStartLabel: isDe
      ? '1. Tag der letzten Periode (optional)'
      : '1st day of last period (optional)',
    setTodayButton: isDe ? 'Heute setzen' : 'Set to today',
    periodStartedTodayBtn: isDe ? 'Periode hat heute begonnen' : 'Period started today',
    clearDateButton: isDe ? 'Datum leeren' : 'Clear date',
    cycleLengthLabel: isDe ? 'Zykluslänge (Standard: 28 Tage)' : 'Cycle length (default: 28 days)',
    periodDurationLabel: isDe
      ? 'Periodendauer (Standard: 5 Tage)'
      : 'Period duration (default: 5 days)',
    daysUnit: isDe ? 'Tage' : 'days',
    onboardingAutoActiveHint: isDe
      ? 'Automatisch aktiviert – du kannst den Schalter direkt ausstellen oder die Daten später in den Einstellungen eintragen.'
      : 'Automatically enabled — you can turn this switch off right now or enter your dates later in Settings.',
    dashboardTitle: isDe ? 'Cycle-Synced Training' : 'Cycle-Synced Training',
    cycleDayBadge: (day, total) =>
      isDe ? `Zyklustag ${day} / ${total}` : `Cycle day ${day} / ${total}`,
    dayLabel: (day, total) =>
      isDe ? `Zyklustag ${day} von ${total}` : `Cycle day ${day} of ${total}`,
    phases: {
      menstruation: {
        short: isDe ? 'Phase 1 · Menstruation' : 'Phase 1 · Menstruation',
        name: isDe ? 'Phase 1: Menstruation' : 'Phase 1: Menstruation',
      },
      follicular: {
        short: isDe ? 'Phase 2 · Follikelphase' : 'Phase 2 · Follicular',
        name: isDe ? 'Phase 2: Follikelphase' : 'Phase 2: Follicular Phase',
      },
      ovulation: {
        short: isDe ? 'Phase 3 · Ovulation' : 'Phase 3 · Ovulation',
        name: isDe ? 'Phase 3: Ovulation / Power-Peak' : 'Phase 3: Ovulation / Power Peak',
      },
      luteal: {
        short: isDe ? 'Phase 4 · Lutealphase' : 'Phase 4 · Luteal',
        name: isDe ? 'Phase 4: Lutealphase' : 'Phase 4: Luteal Phase',
      },
    },
    streakProtectionBadge: isDe
      ? '🛡️ Streak-Schutz aktiv (bis zu 4 Pausentage)'
      : '🛡️ Streak protection active (up to 4 rest days)',
    missingDateTitle: isDe
      ? 'Zyklus-Tracking aktiv – Startdatum ergänzen'
      : 'Cycle tracking active — add start date',
    missingDateBody: isDe
      ? 'Trage optional den 1. Tag deiner letzten Periode ein, um deine aktuelle Trainings-Phase (Menstruation, Follikelphase, Ovulation, Lutealphase) und den Streak-Schutz zu berechnen.'
      : 'Optionally enter the 1st day of your last period to calculate your current training phase (Menstruation, Follicular, Ovulation, Luteal) and streak protection.',
    editCycleButton: isDe ? 'Zyklus anpassen' : 'Adjust cycle',
    newPeriodTodayButton: isDe ? 'Periode hat heute begonnen' : 'Period started today',
    calendarLegendTitle: isDe ? 'Zyklus-Phasen im Kalender' : 'Cycle phases in calendar',
  };
}

export function useCycleTracking() {
  const config = y.useSyncExternalStore(
    subscribeCycleTracking,
    getCycleTrackingSnapshot,
    getCycleTrackingSnapshot
  );

  y.useEffect(() => {
    ensureCycleTrackingLoaded().catch(() => {});
  }, []);

  const currentPhase = y.useMemo(() => calculateCyclePhaseForDate(config, Date.now()), [config]);

  const updateCycleConfig = y.useCallback((patch, options) => {
    return persistCycleTrackingConfig(patch, options);
  }, []);

  const selectOnboardingGender = y.useCallback((gender) => {
    const next = applyOnboardingGenderSelection(gender, cachedCycleConfig);
    return persistCycleTrackingConfig(next);
  }, []);

  const setGender = y.useCallback((gender) => {
    const g = normalizeUserGender(gender);
    const autoEnable =
      g === 'female' && !cachedCycleConfig?.enabled && !cachedCycleConfig?.lastPeriodStart
        ? true
        : cachedCycleConfig?.enabled;
    return persistCycleTrackingConfig({ gender: g, enabled: autoEnable });
  }, []);

  return {
    config,
    enabled: Boolean(config?.enabled),
    gender: config?.gender || 'unspecified',
    currentPhase,
    updateCycleConfig,
    selectOnboardingGender,
    setGender,
  };
}

function getTodayIsoString() {
  const d = new Date();
  const yStr = String(d.getFullYear());
  const mStr = String(d.getMonth() + 1).padStart(2, '0');
  const dStr = String(d.getDate()).padStart(2, '0');
  return `${yStr}-${mStr}-${dStr}`;
}

export function CycleEditSheet({ open, onClose }) {
  const texts = getCycleTexts();
  const { config, currentPhase, updateCycleConfig } = useCycleTracking();

  return c.jsx(Sheet, {
    open,
    onClose,
    title: texts.sectionTitle,
    children: c.jsxs('div', {
      className: 'flex flex-col gap-4',
      children: [
        c.jsx(CycleConfigFields, {
          config,
          currentPhase,
          onUpdate: updateCycleConfig,
          showGenderSelector: true,
          showWhyWeAsk: true,
        }),
        c.jsx(Button, {
          variant: 'filled',
          fullWidth: true,
          onClick: onClose,
          children: texts.isDe ? 'Fertig' : 'Done',
        }),
      ],
    }),
  });
}

export function CycleConfigFields({
  config,
  currentPhase,
  onUpdate,
  showGenderSelector = true,
  showWhyWeAsk = true,
  isOnboarding = false,
}) {
  const texts = getCycleTexts();
  const isDe = texts.isDe;
  const todayIso = getTodayIsoString();

  const handleGenderClick = (g) => {
    if (isOnboarding) {
      const next = applyOnboardingGenderSelection(g, config);
      onUpdate(next);
    } else {
      const autoEnable = g === 'female' && !config.enabled && !config.lastPeriodStart ? true : config.enabled;
      onUpdate({ gender: g, enabled: autoEnable });
    }
  };

  return c.jsxs('div', {
    className: 'flex flex-col gap-3.5',
    children: [
      showGenderSelector
        ? c.jsxs('div', {
            className: 'flex flex-col gap-2',
            children: [
              c.jsx('span', {
                className: 'text-label uppercase text-onSurfaceVariant',
                children: texts.genderLabel,
              }),
              c.jsx('div', {
                className: 'grid grid-cols-3 gap-2',
                children: ['male', 'female', 'unspecified'].map((g) => {
                  const selected = (config?.gender || 'unspecified') === g;
                  return c.jsx(
                    'button',
                    {
                      type: 'button',
                      'aria-pressed': selected,
                      onClick: () => handleGenderClick(g),
                      className: [
                        'press-feedback flex min-h-touch items-center justify-center rounded-xl2 border px-2.5 py-2.5 text-center text-titleS transition-colors',
                        selected
                          ? 'border-primary bg-primary-soft font-semibold text-primary'
                          : 'border-line2 bg-surface-containerHigh text-onSurfaceVariant',
                      ].join(' '),
                      children: texts.genderOptions[g],
                    },
                    g
                  );
                }),
              }),
            ],
          })
        : null,

      showWhyWeAsk
        ? c.jsxs('div', {
            className:
              'flex flex-col gap-1 rounded-xl2 border border-primary/25 bg-surface-containerHigh p-3',
            children: [
              c.jsxs('p', {
                className: 'flex items-center gap-1.5 text-caption font-semibold text-onSurface',
                children: [
                  c.jsx('span', { 'aria-hidden': 'true', children: '🔒' }),
                  texts.whyWeAskTitle,
                ],
              }),
              c.jsx('p', {
                className: 'text-caption leading-relaxed text-onSurfaceVariant',
                children: texts.whyWeAskBody,
              }),
            ],
          })
        : null,

      // An/Aus-Schalter für das Zyklus-/Perioden-Tracking
      (!isOnboarding || config?.gender === 'female' || config?.enabled)
        ? c.jsxs('div', {
            className:
              'flex flex-col gap-3 rounded-xl2 border border-line2 bg-surface-containerHigh p-3.5',
            children: [
              c.jsxs('div', {
                className: 'flex items-center justify-between gap-3',
                children: [
                  c.jsxs('div', {
                    className: 'flex flex-col gap-0.5',
                    children: [
                      c.jsx('span', {
                        className: 'text-titleS font-semibold text-onSurface',
                        children: texts.toggleActiveLabel,
                      }),
                      isOnboarding && config?.gender === 'female'
                        ? c.jsx('span', {
                            className: 'text-caption text-onSurfaceVariant',
                            children: texts.onboardingAutoActiveHint,
                          })
                        : null,
                    ],
                  }),
                  c.jsx('button', {
                    type: 'button',
                    role: 'switch',
                    'aria-checked': Boolean(config?.enabled),
                    'aria-label': texts.toggleActiveLabel,
                    onClick: () => onUpdate({ enabled: !config?.enabled }),
                    className: [
                      'relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors',
                      config?.enabled ? 'bg-primary' : 'bg-surface-containerHighest',
                    ].join(' '),
                    children: c.jsx('span', {
                      className: [
                        'inline-block h-5 w-5 transform rounded-full transition-transform',
                        config?.enabled
                          ? 'translate-x-6 bg-primary-on'
                          : 'translate-x-1 bg-onSurfaceVariant',
                      ].join(' '),
                    }),
                  }),
                ],
              }),

              config?.enabled
                ? c.jsxs('div', {
                    className: 'flex flex-col gap-3 border-t border-line2/60 pt-3',
                    children: [
                      // 1. Tag der letzten Periode
                      c.jsxs('div', {
                        className: 'flex flex-col gap-1.5',
                        children: [
                          c.jsx('label', {
                            htmlFor: 'cycle-last-period-input',
                            className: 'text-caption font-medium text-onSurface',
                            children: texts.lastPeriodStartLabel,
                          }),
                          c.jsxs('div', {
                            className: 'flex flex-wrap items-center gap-2',
                            children: [
                              c.jsx('input', {
                                id: 'cycle-last-period-input',
                                type: 'date',
                                max: todayIso,
                                value: config?.lastPeriodStart || '',
                                onChange: (e) =>
                                  onUpdate({ lastPeriodStart: e.target.value || '' }),
                                className:
                                  'h-10 flex-1 rounded-xl border border-line2 bg-surface-container px-3 font-mono text-body text-onSurface focus:outline-none focus:ring-2 focus:ring-primary',
                              }),
                              c.jsx('button', {
                                type: 'button',
                                onClick: () => onUpdate({ lastPeriodStart: todayIso }),
                                className:
                                  'press-feedback h-10 rounded-xl border border-primary/40 bg-primary-soft px-3 text-caption font-semibold text-primary',
                                children: texts.periodStartedTodayBtn,
                              }),
                              config?.lastPeriodStart
                                ? c.jsx('button', {
                                    type: 'button',
                                    onClick: () => onUpdate({ lastPeriodStart: '' }),
                                    className:
                                      'press-feedback h-10 rounded-xl border border-line2 bg-surface-container px-2.5 text-caption text-onSurfaceVariant',
                                    children: texts.clearDateButton,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),

                      // Zykluslänge (Standard: 28 Tage, Slider 21–35) & Periodendauer (Standard: 5 Tage, Slider 3–7)
                      c.jsxs('div', {
                        className: 'grid grid-cols-1 gap-3 sm:grid-cols-2',
                        children: [
                          c.jsxs('div', {
                            className:
                              'flex flex-col gap-2 rounded-xl bg-surface-container p-2.5',
                            children: [
                              c.jsxs('div', {
                                className: 'flex items-center justify-between gap-2',
                                children: [
                                  c.jsx('span', {
                                    className: 'text-caption text-onSurfaceVariant',
                                    children: texts.cycleLengthLabel,
                                  }),
                                  c.jsxs('span', {
                                    className: 'font-mono text-titleS font-semibold text-primary',
                                    children: [config?.cycleLength || 28, ' ', texts.daysUnit],
                                  }),
                                ],
                              }),
                              c.jsx('input', {
                                type: 'range',
                                min: 21,
                                max: 35,
                                step: 1,
                                value: Math.min(35, Math.max(21, config?.cycleLength || 28)),
                                'aria-label': texts.cycleLengthLabel,
                                onChange: (e) =>
                                  onUpdate({
                                    cycleLength: clampCycleLength(Number(e.target.value)),
                                  }),
                                className: 'w-full accent-primary cursor-pointer',
                              }),
                              c.jsxs('div', {
                                className: 'flex items-center justify-between gap-2',
                                children: [
                                  c.jsx('button', {
                                    type: 'button',
                                    'aria-label': '-1',
                                    onClick: () =>
                                      onUpdate({
                                        cycleLength: clampCycleLength(
                                          (config?.cycleLength || 28) - 1
                                        ),
                                      }),
                                    className:
                                      'press-feedback h-8 w-8 rounded-full bg-surface-containerHigh font-mono text-caption text-onSurface',
                                    children: '−',
                                  }),
                                  c.jsx('span', {
                                    className: 'font-mono text-[11px] text-onSurfaceVariant',
                                    children: '21 – 35',
                                  }),
                                  c.jsx('button', {
                                    type: 'button',
                                    'aria-label': '+1',
                                    onClick: () =>
                                      onUpdate({
                                        cycleLength: clampCycleLength(
                                          (config?.cycleLength || 28) + 1
                                        ),
                                      }),
                                    className:
                                      'press-feedback h-8 w-8 rounded-full bg-surface-containerHigh font-mono text-caption text-onSurface',
                                    children: '+',
                                  }),
                                ],
                              }),
                            ],
                          }),

                          c.jsxs('div', {
                            className:
                              'flex flex-col gap-2 rounded-xl bg-surface-container p-2.5',
                            children: [
                              c.jsxs('div', {
                                className: 'flex items-center justify-between gap-2',
                                children: [
                                  c.jsx('span', {
                                    className: 'text-caption text-onSurfaceVariant',
                                    children: texts.periodDurationLabel,
                                  }),
                                  c.jsxs('span', {
                                    className: 'font-mono text-titleS font-semibold text-primary',
                                    children: [config?.periodDuration || 5, ' ', texts.daysUnit],
                                  }),
                                ],
                              }),
                              c.jsx('input', {
                                type: 'range',
                                min: 3,
                                max: 7,
                                step: 1,
                                value: Math.min(7, Math.max(3, config?.periodDuration || 5)),
                                'aria-label': texts.periodDurationLabel,
                                onChange: (e) =>
                                  onUpdate({
                                    periodDuration: clampPeriodDuration(Number(e.target.value)),
                                  }),
                                className: 'w-full accent-primary cursor-pointer',
                              }),
                              c.jsxs('div', {
                                className: 'flex items-center justify-between gap-2',
                                children: [
                                  c.jsx('button', {
                                    type: 'button',
                                    'aria-label': '-1',
                                    onClick: () =>
                                      onUpdate({
                                        periodDuration: clampPeriodDuration(
                                          (config?.periodDuration || 5) - 1
                                        ),
                                      }),
                                    className:
                                      'press-feedback h-8 w-8 rounded-full bg-surface-containerHigh font-mono text-caption text-onSurface',
                                    children: '−',
                                  }),
                                  c.jsx('span', {
                                    className: 'font-mono text-[11px] text-onSurfaceVariant',
                                    children: '3 – 7',
                                  }),
                                  c.jsx('button', {
                                    type: 'button',
                                    'aria-label': '+1',
                                    onClick: () =>
                                      onUpdate({
                                        periodDuration: clampPeriodDuration(
                                          (config?.periodDuration || 5) + 1
                                        ),
                                      }),
                                    className:
                                      'press-feedback h-8 w-8 rounded-full bg-surface-containerHigh font-mono text-caption text-onSurface',
                                    children: '+',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),

                      // Live-Vorschau der berechneten Phase, falls Datum gesetzt
                      currentPhase
                        ? c.jsxs('div', {
                            className:
                              'flex items-center justify-between gap-2 rounded-xl bg-surface-container px-3 py-2 text-caption',
                            children: [
                              c.jsxs('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  c.jsx('span', {
                                    className: 'h-2.5 w-2.5 shrink-0 rounded-full',
                                    style: { backgroundColor: currentPhase.colorHex },
                                  }),
                                  c.jsx('span', {
                                    className: 'font-semibold text-onSurface',
                                    children: isDe ? currentPhase.titleDe : currentPhase.titleEn,
                                  }),
                                ],
                              }),
                              c.jsx('span', {
                                className: 'font-mono text-onSurfaceVariant',
                                children: texts.cycleDayBadge(
                                  currentPhase.cycleDay,
                                  currentPhase.cycleLength
                                ),
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : c.jsx('p', {
                    className: 'text-caption text-onSurfaceVariant',
                    children: texts.toggleOffHint,
                  }),
            ],
          })
        : null,
    ],
  });
}

function CycleDashboardWidgetInternal() {
  const texts = getCycleTexts();
  const isDe = texts.isDe;
  const { config, enabled, currentPhase, updateCycleConfig } = useCycleTracking();
  const [editOpen, setEditOpen] = y.useState(false);

  if (!enabled) return null;

  const todayIso = getTodayIsoString();

  return c.jsxs(c.Fragment, {
    children: [
      currentPhase
        ? c.jsxs('section', {
            'aria-label': texts.dashboardTitle,
            className:
              'flex flex-col gap-2.5 rounded-xl2 border border-line2/80 bg-surface-container p-3.5',
            children: [
              c.jsxs('div', {
                className: 'flex flex-wrap items-center justify-between gap-2',
                children: [
                  c.jsxs('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      c.jsx('span', {
                        'aria-hidden': 'true',
                        className: 'h-3 w-3 shrink-0 rounded-full',
                        style: { backgroundColor: currentPhase.colorHex },
                      }),
                      c.jsx('span', {
                        className: 'text-titleS font-semibold text-onSurface',
                        children: isDe ? currentPhase.titleDe : currentPhase.titleEn,
                      }),
                    ],
                  }),
                  c.jsxs('div', {
                    className: 'flex flex-wrap items-center gap-1.5',
                    children: [
                      c.jsx('span', {
                        className:
                          'rounded-full bg-surface-containerHigh px-2.5 py-0.5 font-mono text-[11px] font-semibold text-onSurface',
                        children: texts.cycleDayBadge(
                          currentPhase.cycleDay,
                          currentPhase.cycleLength
                        ),
                      }),
                      config?.lastPeriodStart !== todayIso
                        ? c.jsx('button', {
                            type: 'button',
                            onClick: () => updateCycleConfig({ lastPeriodStart: todayIso }),
                            className:
                              'press-feedback rounded-full border border-primary/35 bg-primary-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary',
                            children: texts.periodStartedTodayBtn,
                          })
                        : null,
                      c.jsx('button', {
                        type: 'button',
                        onClick: () => setEditOpen(true),
                        className:
                          'press-feedback rounded-full bg-surface-containerHigh px-2.5 py-0.5 text-[11px] font-medium text-primary',
                        children: texts.editCycleButton,
                      }),
                    ],
                  }),
                ],
              }),

              // 4-Phasen Fortschrittsleiste
              c.jsx('div', {
                className: 'grid grid-cols-4 gap-1.5',
                'aria-hidden': 'true',
                children: [
                  { id: 'menstruation', num: 1, col: '#F43F5E' },
                  { id: 'follicular', num: 2, col: '#10B981' },
                  { id: 'ovulation', num: 3, col: '#F59E0B' },
                  { id: 'luteal', num: 4, col: '#A78BFA' },
                ].map((p) => {
                  const active = currentPhase.phaseNumber === p.num;
                  return c.jsx(
                    'div',
                    {
                      className: 'h-1.5 rounded-full transition-all',
                      style: {
                        backgroundColor: p.col,
                        opacity: active ? 1 : 0.25,
                      },
                    },
                    p.id
                  );
                }),
              }),

              c.jsxs('div', {
                className: 'flex flex-wrap items-center gap-1.5',
                children: [
                  c.jsx('span', {
                    className:
                      'rounded-md bg-surface-containerHigh px-2 py-0.5 text-caption font-semibold text-onSurface',
                    children: isDe ? currentPhase.focusDe : currentPhase.focusEn,
                  }),
                  currentPhase.phase === 'menstruation'
                    ? c.jsx('span', {
                        className:
                          'rounded-md bg-primary-soft px-2 py-0.5 text-caption font-semibold text-primary',
                        children: texts.streakProtectionBadge,
                      })
                    : null,
                ],
              }),

              c.jsx('p', {
                className: 'text-caption leading-relaxed text-onSurfaceVariant',
                children: isDe ? currentPhase.hintDe : currentPhase.hintEn,
              }),
            ],
          })
        : c.jsxs('section', {
            'aria-label': texts.dashboardTitle,
            className:
              'flex flex-col gap-2.5 rounded-xl2 border border-line2/80 bg-surface-container p-3.5',
            children: [
              c.jsxs('div', {
                className: 'flex items-center justify-between gap-2',
                children: [
                  c.jsx('span', {
                    className: 'text-titleS font-semibold text-onSurface',
                    children: texts.missingDateTitle,
                  }),
                  c.jsx('button', {
                    type: 'button',
                    onClick: () => setEditOpen(true),
                    className:
                      'press-feedback rounded-full bg-surface-containerHigh px-2.5 py-1 text-caption font-medium text-primary',
                    children: texts.editCycleButton,
                  }),
                ],
              }),
              c.jsx('p', {
                className: 'text-caption text-onSurfaceVariant',
                children: texts.missingDateBody,
              }),
              c.jsxs('div', {
                className: 'flex flex-wrap items-center gap-2',
                children: [
                  c.jsx('input', {
                    type: 'date',
                    max: todayIso,
                    value: config?.lastPeriodStart || '',
                    'aria-label': texts.lastPeriodStartLabel,
                    onChange: (e) => updateCycleConfig({ lastPeriodStart: e.target.value || '' }),
                    className:
                      'h-9 flex-1 rounded-xl border border-line2 bg-surface-containerHigh px-3 font-mono text-caption text-onSurface',
                  }),
                  c.jsx('button', {
                    type: 'button',
                    onClick: () => updateCycleConfig({ lastPeriodStart: todayIso }),
                    className:
                      'press-feedback h-9 rounded-xl bg-primary px-3 text-caption font-semibold text-primary-on',
                    children: texts.periodStartedTodayBtn,
                  }),
                ],
              }),
            ],
          }),

      editOpen
        ? c.jsx(CycleEditSheet, {
            open: editOpen,
            onClose: () => setEditOpen(false),
          })
        : null,
    ],
  });
}

export function CycleDashboardWidget() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsx(CycleDashboardWidgetInternal, {}),
  });
}

function CycleTrackingSettingsToggleInternal() {
  const texts = getCycleTexts();
  const { config, currentPhase, updateCycleConfig } = useCycleTracking();

  return c.jsxs('div', {
    className: 'flex flex-col gap-3',
    children: [
      c.jsxs('div', {
        className: 'flex flex-col gap-1',
        children: [
          c.jsx('p', {
            className: 'text-titleS text-onSurface',
            children: texts.sectionTitle,
          }),
          c.jsx('p', {
            className: 'text-caption text-onSurfaceVariant',
            children: texts.sectionHint,
          }),
        ],
      }),
      c.jsx(CycleConfigFields, {
        config,
        currentPhase,
        onUpdate: updateCycleConfig,
        showGenderSelector: true,
        showWhyWeAsk: true,
        isOnboarding: false,
      }),
    ],
  });
}

export function CycleTrackingSettingsToggle() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsx(CycleTrackingSettingsToggleInternal, {}),
  });
}

export async function exportCycleTrackingForBackup(db) {
  await ensureCycleTrackingLoaded();
  try {
    if (db && db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
      const rec =
        (await db.get(GYM_BUDDY_STORE, CYCLE_IDB_RECORD_ID)) ||
        (await db.get(GYM_BUDDY_STORE, 'cycleTracking'));
      if (rec) {
        const sanitized = sanitizeCycleTrackingBackupRecord(rec);
        if (sanitized) return sanitized;
      }
    }
  } catch {}
  return cachedCycleConfig;
}

export async function restoreCycleTrackingFromBackup(cycleRaw, trainingSettingsArr, userProfileArr) {
  let candidate = cycleRaw;
  if (!candidate && Array.isArray(trainingSettingsArr) && trainingSettingsArr.length > 0) {
    const ts = trainingSettingsArr[0];
    if (
      ts &&
      (ts.gender !== undefined ||
        ts.cycleTrackingEnabled !== undefined ||
        ts.lastPeriodStart !== undefined)
    ) {
      candidate = {
        gender: ts.gender,
        enabled: ts.cycleTrackingEnabled,
        lastPeriodStart: ts.lastPeriodStart,
        cycleLength: ts.cycleLength,
        periodDuration: ts.periodDuration,
      };
    }
  }
  if (!candidate && Array.isArray(userProfileArr) && userProfileArr.length > 0) {
    const prof = userProfileArr[0];
    if (prof && prof.sex) {
      candidate = {
        gender: prof.sex,
        enabled: false,
        lastPeriodStart: '',
        cycleLength: 28,
        periodDuration: 5,
      };
    }
  }
  if (!candidate) return;
  const sanitized = sanitizeCycleTrackingBackupRecord(candidate);
  if (sanitized) {
    await persistCycleTrackingConfig(sanitized);
  }
}

// ---------------------------------------------------------------------------
// 13. Automatische Pausen- & Comeback-Erkennung (Ohne manuelle Pausen-Buttons)
// ---------------------------------------------------------------------------

export const TRAINING_BREAK_STORAGE_KEY = 'gym-training-breaks-v1';
export const TRAINING_BREAK_IDB_RECORD_ID = 'training-breaks';
export const LAST_APP_OPEN_STORAGE_KEY = 'gym-last-app-open-v1';

// Capture previous app open timestamp before updating it for the current session
const SESSION_PREVIOUS_APP_OPEN_MS = (() => {
  try {
    if (typeof localStorage !== 'undefined') {
      const prevRaw = localStorage.getItem(LAST_APP_OPEN_STORAGE_KEY);
      const now = Date.now();
      localStorage.setItem(LAST_APP_OPEN_STORAGE_KEY, String(now));
      const parsed = Number(prevRaw);
      if (Number.isFinite(parsed) && parsed > 0) return parsed;
    }
  } catch {}
  return null;
})();

export const DEFAULT_TRAINING_BREAK_CONFIG = {
  id: 'default',
  activeBreak: null,
  history: [],
  dismissedGapEndMs: 0,
  comebackBannerRemainingWorkouts: 0,
  comebackBannerBreakDays: 0,
  comebackBannerCategory: null,
  updatedAt: 0,
};

export const COMEBACK_GAP_MIN_DAYS = 4;
export const COMEBACK_BANNER_MIN_BREAK_DAYS = 7;
export const COMEBACK_BANNER_WORKOUT_COUNT = 2;
export const DELOAD_RESET_MIN_BREAK_DAYS = 7;
export const DELOAD_FREEZE_MIN_BREAK_DAYS = 3;

export function toLocalIsoDate(ms = Date.now()) {
  const d = new Date(ms);
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  return `${yr}-${mo}-${dy}`;
}

export function isoDateToLocalMidnightMs(iso) {
  if (!isValidIsoDateString(iso)) return null;
  const [yr, mo, dy] = iso.trim().split('-').map(Number);
  return new Date(yr, mo - 1, dy, 0, 0, 0, 0).getTime();
}

export function isoDateToLocalEndOfDayMs(iso) {
  if (!isValidIsoDateString(iso)) return null;
  const [yr, mo, dy] = iso.trim().split('-').map(Number);
  return new Date(yr, mo - 1, dy, 23, 59, 59, 999).getTime();
}

export function calculateBreakDays(startDateIso, endDateIso, nowMs = Date.now()) {
  const startMidnight = isoDateToLocalMidnightMs(startDateIso);
  if (startMidnight === null) return 0;
  const effectiveEndIso =
    endDateIso && isValidIsoDateString(endDateIso) ? endDateIso : toLocalIsoDate(nowMs);
  const endMidnight = isoDateToLocalMidnightMs(effectiveEndIso);
  if (endMidnight === null || endMidnight < startMidnight) return 0;
  return Math.round((endMidnight - startMidnight) / (24 * 60 * 60 * 1000)) + 1;
}

export function getAllEffectiveBreakPeriods(config, nowMs = Date.now()) {
  if (!config) return [];
  const result = [];
  if (Array.isArray(config.history)) {
    for (const item of config.history) {
      if (item && isValidIsoDateString(item.startDate)) {
        result.push(item);
      }
    }
  }
  if (config.activeBreak && isValidIsoDateString(config.activeBreak.startDate)) {
    const act = config.activeBreak;
    const todayIso = toLocalIsoDate(nowMs);
    const effectiveEnd =
      isValidIsoDateString(act.endDate) && act.endDate >= act.startDate
        ? act.endDate
        : todayIso >= act.startDate
          ? todayIso
          : act.startDate;
    result.push({
      ...act,
      endDate: effectiveEnd,
    });
  }
  return result;
}

export function getBreakForDate(config, dateIso, nowMs = Date.now()) {
  if (!config || !isValidIsoDateString(dateIso)) return null;
  const target = dateIso.trim();
  const periods = getAllEffectiveBreakPeriods(config, nowMs);
  for (let i = periods.length - 1; i >= 0; i--) {
    const p = periods[i];
    const endIso = isValidIsoDateString(p.endDate) ? p.endDate : toLocalIsoDate(nowMs);
    if (target >= p.startDate && target <= endIso) {
      return p;
    }
  }
  return null;
}

export function countBreakDaysInInterval(earlierMs, laterMs, config, nowMs = Date.now()) {
  if (!config || laterMs <= earlierMs) return 0;
  const periods = getAllEffectiveBreakPeriods(config, nowMs);
  if (periods.length === 0) return 0;

  const dStart = new Date(earlierMs);
  const startMidnight = new Date(dStart.getFullYear(), dStart.getMonth(), dStart.getDate()).getTime();
  const dEnd = new Date(laterMs);
  const endMidnight = new Date(dEnd.getFullYear(), dEnd.getMonth(), dEnd.getDate()).getTime();
  if (endMidnight <= startMidnight) return 0;

  const dayMs = 24 * 60 * 60 * 1000;
  const intervalStartIso = toLocalIsoDate(startMidnight);
  const intervalEndIso = toLocalIsoDate(endMidnight);
  const coveredDays = new Set();

  for (const p of periods) {
    const pStart = p.startDate;
    const pEnd = isValidIsoDateString(p.endDate) ? p.endDate : toLocalIsoDate(nowMs);
    if (pEnd < intervalStartIso || pStart > intervalEndIso) continue;
    const clampedStartIso = pStart > intervalStartIso ? pStart : intervalStartIso;
    const clampedEndIso = pEnd < intervalEndIso ? pEnd : intervalEndIso;
    const sMs = isoDateToLocalMidnightMs(clampedStartIso);
    const eMs = isoDateToLocalMidnightMs(clampedEndIso);
    if (sMs === null || eMs === null || eMs < sMs) continue;
    for (let cur = sMs; cur <= eMs; cur += dayMs) {
      coveredDays.add(toLocalIsoDate(cur));
    }
  }
  return coveredDays.size;
}

export function detectUnplannedComebackGap(
  completedSessionDatesMs,
  config,
  nowMs = Date.now(),
  cycleProtection = null,
  lastAppOpenedMs = null
) {
  if (!Array.isArray(completedSessionDatesMs) || completedSessionDatesMs.length === 0) return null;
  if (config?.activeBreak) return null;

  const valid = completedSessionDatesMs.filter(
    (v) => typeof v === 'number' && Number.isFinite(v) && v > 0 && v <= nowMs
  );
  if (valid.length === 0) return null;
  const lastWorkoutMs = Math.max(...valid);

  const lastD = new Date(lastWorkoutMs);
  const lastMidnight = new Date(lastD.getFullYear(), lastD.getMonth(), lastD.getDate()).getTime();
  const nowD = new Date(nowMs);
  const nowMidnight = new Date(nowD.getFullYear(), nowD.getMonth(), nowD.getDate()).getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const gapDays = Math.round((nowMidnight - lastMidnight) / dayMs);

  let minGapDays = COMEBACK_GAP_MIN_DAYS;
  const effCycle =
    cycleProtection && typeof cycleProtection === 'object'
      ? cycleProtection
      : cachedCycleConfig?.enabled
        ? cachedCycleConfig
        : null;
  if (effCycle && effCycle.enabled) {
    const phaseInfo = calculateCyclePhaseForDate(effCycle, nowMs);
    if (phaseInfo && phaseInfo.phase === 'menstruation') {
      minGapDays = 5;
    }
  }

  if (gapDays < minGapDays) return null;

  const suggestedStartMs = lastMidnight + dayMs;
  const suggestedStartDate = toLocalIsoDate(suggestedStartMs);
  const suggestedEndDate = toLocalIsoDate(nowMidnight);

  const coveredDays = countBreakDaysInInterval(suggestedStartMs, nowMidnight, config, nowMs);
  const uncoveredGapDays = Math.max(0, gapDays - coveredDays);
  if (uncoveredGapDays < minGapDays) return null;

  const dismissedMark = config?.dismissedGapEndMs ?? 0;
  if (dismissedMark >= lastWorkoutMs && nowMidnight - dismissedMark < 3 * dayMs) {
    return null;
  }

  let appClosedDays;
  const effectiveLastOpen = lastAppOpenedMs ?? config?.lastAppOpenedAt;
  if (
    typeof effectiveLastOpen === 'number' &&
    Number.isFinite(effectiveLastOpen) &&
    effectiveLastOpen > 0 &&
    effectiveLastOpen < nowMs
  ) {
    const openD = new Date(effectiveLastOpen);
    const openMidnight = new Date(openD.getFullYear(), openD.getMonth(), openD.getDate()).getTime();
    const diffOpen = Math.round((nowMidnight - openMidnight) / dayMs);
    if (diffOpen >= 1) appClosedDays = diffOpen;
  }

  return {
    lastWorkoutMs,
    lastWorkoutDateIso: toLocalIsoDate(lastMidnight),
    suggestedStartDate,
    suggestedEndDate,
    gapDays,
    ...(appClosedDays !== undefined ? { appClosedDays } : {}),
    shouldPrompt: true,
  };
}

export function confirmRetroactiveComebackBreak(prev, params, nowMs = Date.now()) {
  const category =
    params.category === 'vacation' || params.category === 'sick' || params.category === 'other'
      ? params.category
      : 'other';
  const todayIso = toLocalIsoDate(nowMs);
  const startDate = isValidIsoDateString(params.startDate) ? params.startDate.trim() : todayIso;
  const endDate =
    isValidIsoDateString(params.endDate) && params.endDate.trim() >= startDate
      ? params.endDate.trim()
      : todayIso >= startDate
        ? todayIso
        : startDate;

  const breakDays = calculateBreakDays(startDate, endDate, nowMs);
  const entry = {
    id: `brk-auto-${nowMs}`,
    category,
    startDate,
    endDate,
    active: false,
    autoDetected: true,
    note: typeof params.note === 'string' ? params.note.trim().slice(0, 80) : undefined,
    createdAt: nowMs,
    endedAt: nowMs,
  };

  const history = [...(prev?.history ?? []), entry].slice(-60);
  const shouldShowComeback = breakDays >= COMEBACK_BANNER_MIN_BREAK_DAYS;

  return {
    id: 'default',
    activeBreak: null,
    history,
    dismissedGapEndMs: nowMs,
    comebackBannerRemainingWorkouts: shouldShowComeback
      ? COMEBACK_BANNER_WORKOUT_COUNT
      : prev?.comebackBannerRemainingWorkouts ?? 0,
    comebackBannerBreakDays: shouldShowComeback ? breakDays : prev?.comebackBannerBreakDays ?? 0,
    comebackBannerCategory: shouldShowComeback ? category : prev?.comebackBannerCategory ?? null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export function dismissComebackPromptForGap(prev, lastWorkoutMs, gapDays = 0, nowMs = Date.now()) {
  const shouldShowComeback = gapDays >= COMEBACK_BANNER_MIN_BREAK_DAYS;
  return {
    ...(prev || DEFAULT_TRAINING_BREAK_CONFIG),
    id: 'default',
    activeBreak: null,
    dismissedGapEndMs: Math.max(nowMs, lastWorkoutMs || 0),
    comebackBannerRemainingWorkouts: shouldShowComeback
      ? COMEBACK_BANNER_WORKOUT_COUNT
      : prev?.comebackBannerRemainingWorkouts ?? 0,
    comebackBannerBreakDays: shouldShowComeback ? gapDays : prev?.comebackBannerBreakDays ?? 0,
    comebackBannerCategory: shouldShowComeback ? 'other' : prev?.comebackBannerCategory ?? null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export function onWorkoutCompletedForBreakConfig(prev, nowMs = Date.now()) {
  const base = prev || DEFAULT_TRAINING_BREAK_CONFIG;
  const nextRemaining = Math.max(0, (base.comebackBannerRemainingWorkouts ?? 0) - 1);
  return {
    ...base,
    id: 'default',
    activeBreak: null,
    comebackBannerRemainingWorkouts: nextRemaining,
    comebackBannerBreakDays: nextRemaining > 0 ? base.comebackBannerBreakDays : 0,
    comebackBannerCategory: nextRemaining > 0 ? base.comebackBannerCategory : null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export function sanitizeTrainingBreakPeriod(raw) {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  if (!isValidIsoDateString(raw.startDate)) return null;
  const startDate = raw.startDate.trim();
  const endDate =
    isValidIsoDateString(raw.endDate) && raw.endDate.trim() >= startDate
      ? raw.endDate.trim()
      : startDate;
  const category =
    raw.category === 'vacation' || raw.category === 'sick' || raw.category === 'other'
      ? raw.category
      : 'other';
  const id =
    typeof raw.id === 'string' && raw.id.trim().length > 0
      ? raw.id.trim().slice(0, 64)
      : `brk-${startDate}`;
  const createdAt =
    typeof raw.createdAt === 'number' && Number.isFinite(raw.createdAt) ? raw.createdAt : Date.now();
  const endedAt =
    typeof raw.endedAt === 'number' && Number.isFinite(raw.endedAt) ? raw.endedAt : undefined;
  const note = typeof raw.note === 'string' ? raw.note.trim().slice(0, 80) : undefined;

  return {
    id,
    category,
    startDate,
    endDate,
    active: false,
    autoDetected: Boolean(raw.autoDetected ?? true),
    endedByWorkout: typeof raw.endedByWorkout === 'boolean' ? raw.endedByWorkout : undefined,
    note,
    createdAt,
    endedAt,
  };
}

export function sanitizeTrainingBreakConfig(raw) {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const history = [];
  if (Array.isArray(raw.history)) {
    for (const item of raw.history) {
      const clean = sanitizeTrainingBreakPeriod(item);
      if (clean) history.push(clean);
    }
  }
  const migratedActive = sanitizeTrainingBreakPeriod(raw.activeBreak);
  if (migratedActive) {
    history.push(migratedActive);
  }
  const dismissedGapEndMs =
    typeof raw.dismissedGapEndMs === 'number' &&
    Number.isFinite(raw.dismissedGapEndMs) &&
    raw.dismissedGapEndMs >= 0
      ? raw.dismissedGapEndMs
      : 0;
  const comebackBannerRemainingWorkouts =
    typeof raw.comebackBannerRemainingWorkouts === 'number' &&
    Number.isFinite(raw.comebackBannerRemainingWorkouts)
      ? Math.min(5, Math.max(0, Math.round(raw.comebackBannerRemainingWorkouts)))
      : 0;
  const comebackBannerBreakDays =
    typeof raw.comebackBannerBreakDays === 'number' && Number.isFinite(raw.comebackBannerBreakDays)
      ? Math.min(365, Math.max(0, Math.round(raw.comebackBannerBreakDays)))
      : 0;
  const comebackBannerCategory =
    raw.comebackBannerCategory === 'vacation' ||
    raw.comebackBannerCategory === 'sick' ||
    raw.comebackBannerCategory === 'other'
      ? raw.comebackBannerCategory
      : null;
  const lastAppOpenedAt =
    typeof raw.lastAppOpenedAt === 'number' && Number.isFinite(raw.lastAppOpenedAt)
      ? raw.lastAppOpenedAt
      : undefined;
  const updatedAt =
    typeof raw.updatedAt === 'number' && Number.isFinite(raw.updatedAt) ? raw.updatedAt : Date.now();

  return {
    id: 'default',
    activeBreak: null,
    history: history.slice(-60),
    dismissedGapEndMs,
    comebackBannerRemainingWorkouts,
    comebackBannerBreakDays,
    comebackBannerCategory,
    ...(lastAppOpenedAt !== undefined ? { lastAppOpenedAt } : {}),
    updatedAt,
  };
}

function readInitialBreakConfigFromLocalStorage() {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(TRAINING_BREAK_STORAGE_KEY);
      if (raw) {
        const parsed = sanitizeTrainingBreakConfig(JSON.parse(raw));
        if (parsed) return parsed;
      }
    }
  } catch {}
  return { ...DEFAULT_TRAINING_BREAK_CONFIG };
}

let cachedBreakConfig = readInitialBreakConfigFromLocalStorage();
let breakLoaded = false;
let breakInitPromise = null;
const breakListeners = new Set();

function notifyBreakListeners() {
  for (const fn of breakListeners) fn();
}

export function subscribeTrainingBreaks(listener) {
  breakListeners.add(listener);
  return () => breakListeners.delete(listener);
}

export function getTrainingBreaksSnapshot() {
  return cachedBreakConfig;
}

export async function persistTrainingBreakConfig(nextOrPatch) {
  const merged = sanitizeTrainingBreakConfig({
    ...cachedBreakConfig,
    ...(nextOrPatch || {}),
    updatedAt: Date.now(),
  }) || { ...DEFAULT_TRAINING_BREAK_CONFIG, updatedAt: Date.now() };

  cachedBreakConfig = merged;
  breakLoaded = true;

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(TRAINING_BREAK_STORAGE_KEY, JSON.stringify(merged));
    }
  } catch {}

  notifyBreakListeners();
  notifyListeners();

  try {
    await pe('Trainingspausen speichern', async (db) => {
      if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
        await db.put(GYM_BUDDY_STORE, {
          ...merged,
          id: TRAINING_BREAK_IDB_RECORD_ID,
        });
      }
    });
  } catch {}

  return merged;
}

export async function ensureTrainingBreaksLoaded() {
  if (breakLoaded) return cachedBreakConfig;
  if (breakInitPromise) return breakInitPromise;

  breakInitPromise = (async () => {
    try {
      const loaded = await pe('Trainingspausen laden', async (db) => {
        if (db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
          return await db.get(GYM_BUDDY_STORE, TRAINING_BREAK_IDB_RECORD_ID);
        }
        return null;
      });
      if (loaded) {
        const sanitized = sanitizeTrainingBreakConfig(loaded);
        if (sanitized) {
          cachedBreakConfig = sanitized;
          try {
            if (typeof localStorage !== 'undefined') {
              localStorage.setItem(TRAINING_BREAK_STORAGE_KEY, JSON.stringify(sanitized));
            }
          } catch {}
          breakLoaded = true;
          notifyBreakListeners();
          notifyListeners();
          return cachedBreakConfig;
        }
      }
    } catch {}
    breakLoaded = true;
    return cachedBreakConfig;
  })();

  return breakInitPromise;
}

export async function notifyWorkoutCompletedForBreaks(nowMs = Date.now()) {
  await ensureTrainingBreaksLoaded();
  const next = onWorkoutCompletedForBreakConfig(cachedBreakConfig, nowMs);
  await persistTrainingBreakConfig(next);
  return next;
}

export function useTrainingBreaks() {
  const config = y.useSyncExternalStore(
    subscribeTrainingBreaks,
    getTrainingBreaksSnapshot,
    getTrainingBreaksSnapshot
  );

  y.useEffect(() => {
    ensureTrainingBreaksLoaded().catch(() => {});
  }, []);

  const confirmRetroactive = y.useCallback((params) => {
    const next = confirmRetroactiveComebackBreak(cachedBreakConfig, params, Date.now());
    return persistTrainingBreakConfig(next);
  }, []);

  const dismissComebackGap = y.useCallback((lastWorkoutMs, gapDays) => {
    const next = dismissComebackPromptForGap(cachedBreakConfig, lastWorkoutMs, gapDays, Date.now());
    return persistTrainingBreakConfig(next);
  }, []);

  const dismissComebackBanner = y.useCallback(() => {
    return persistTrainingBreakConfig({
      comebackBannerRemainingWorkouts: 0,
      comebackBannerBreakDays: 0,
      comebackBannerCategory: null,
    });
  }, []);

  return {
    config,
    confirmRetroactive,
    dismissComebackGap,
    dismissComebackBanner,
  };
}

export function ComebackWelcomeModal() {
  const isDe = typeof yS === 'function' ? yS() !== 'en' : true;
  const { comebackGap } = useGymBuddy();
  const { confirmRetroactive, dismissComebackGap } = useTrainingBreaks();

  const [category, setCategory] = y.useState('vacation');
  const [startDate, setStartDate] = y.useState('');
  const [endDate, setEndDate] = y.useState('');

  y.useEffect(() => {
    if (comebackGap) {
      setStartDate(comebackGap.suggestedStartDate);
      setEndDate(comebackGap.suggestedEndDate);
    }
  }, [comebackGap?.suggestedStartDate, comebackGap?.suggestedEndDate]);

  if (!comebackGap || !comebackGap.shouldPrompt) return null;

  const todayIso = toLocalIsoDate();
  const effectiveStart = startDate || comebackGap.suggestedStartDate;
  const effectiveEnd = endDate || comebackGap.suggestedEndDate;
  const breakDaysCount = calculateBreakDays(effectiveStart, effectiveEnd);

  const handleConfirm = async () => {
    await confirmRetroactive({
      category,
      startDate: effectiveStart,
      endDate: effectiveEnd,
      lastWorkoutMs: comebackGap.lastWorkoutMs,
    });
  };

  const handleDismiss = async () => {
    await dismissComebackGap(comebackGap.lastWorkoutMs, comebackGap.gapDays);
  };

  const categories = [
    {
      key: 'vacation',
      icon: '🏖️',
      label: isDe ? 'Urlaub / Reise' : 'Vacation / Travel',
    },
    {
      key: 'sick',
      icon: '🍵',
      label: isDe ? 'Krank / Erholung' : 'Sick / Recovery',
    },
    {
      key: 'other',
      icon: '⏸️',
      label: isDe ? 'Trainingspause' : 'Training Break',
    },
  ];

  return c.jsx(Sheet, {
    open: true,
    onClose: handleDismiss,
    title: isDe ? 'Willkommen zurück! 👋' : 'Welcome back! 👋',
    children: c.jsxs('div', {
      'data-no-swipe': 'true',
      className: 'flex flex-col gap-4',
      children: [
        c.jsxs('div', {
          className:
            'flex flex-col gap-1.5 rounded-xl2 border border-primary/30 bg-primary-container/20 p-3.5',
          children: [
            c.jsx('p', {
              className: 'text-titleS font-semibold text-onSurface',
              children: isDe
                ? `Seit ${comebackGap.gapDays} Tagen kein Training geloggt`
                : `No workout logged for ${comebackGap.gapDays} days`,
            }),
            c.jsx('p', {
              className: 'text-caption leading-relaxed text-onSurfaceVariant',
              children: isDe
                ? 'Warst du im Urlaub, krank oder hattest du eine Trainingspause? Wenn du den Zeitraum kurz bestätigst, bleibt deine Trainings-Streak geschützt (❄️) und dein Deload-Zyklus wird automatisch angepasst.'
                : 'Were you on vacation, sick, or taking a training break? Confirming the period protects your workout streak (❄️) and automatically adjusts your deload cycle.',
            }),
          ],
        }),

        c.jsxs('div', {
          className: 'flex flex-col gap-2',
          children: [
            c.jsx('span', {
              className: 'text-label uppercase text-onSurfaceVariant',
              children: isDe ? 'Grund der Pause' : 'Reason for break',
            }),
            c.jsx('div', {
              className: 'grid grid-cols-3 gap-2',
              children: categories.map((cat) => {
                const selected = category === cat.key;
                return c.jsxs(
                  'button',
                  {
                    type: 'button',
                    'aria-pressed': selected,
                    onClick: () => setCategory(cat.key),
                    className: [
                      'press-feedback flex flex-col items-center justify-center gap-1 rounded-xl2 border p-2.5 text-center transition-all',
                      selected
                        ? 'border-primary bg-primary-soft font-semibold text-primary ring-1 ring-primary/30'
                        : 'border-line2 bg-surface-containerHigh text-onSurfaceVariant',
                    ].join(' '),
                    children: [
                      c.jsx('span', {
                        'aria-hidden': 'true',
                        className: 'text-lg leading-none',
                        children: cat.icon,
                      }),
                      c.jsx('span', {
                        className: 'text-caption leading-tight',
                        children: cat.label,
                      }),
                    ],
                  },
                  cat.key
                );
              }),
            }),
          ],
        }),

        c.jsxs('div', {
          className: 'grid grid-cols-2 gap-2.5',
          children: [
            c.jsxs('label', {
              className: 'flex flex-col gap-1',
              children: [
                c.jsx('span', {
                  className: 'text-caption font-medium text-onSurfaceVariant',
                  children: isDe ? 'Von' : 'From',
                }),
                c.jsx('input', {
                  type: 'date',
                  max: todayIso,
                  value: effectiveStart,
                  onChange: (e) => setStartDate(e.target.value),
                  className:
                    'h-10 w-full rounded-xl border border-line2 bg-surface-containerHigh px-3 font-mono text-caption text-onSurface',
                }),
              ],
            }),
            c.jsxs('label', {
              className: 'flex flex-col gap-1',
              children: [
                c.jsx('span', {
                  className: 'text-caption font-medium text-onSurfaceVariant',
                  children: isDe ? 'Bis' : 'Until',
                }),
                c.jsx('input', {
                  type: 'date',
                  min: effectiveStart,
                  max: todayIso,
                  value: effectiveEnd,
                  onChange: (e) => setEndDate(e.target.value),
                  className:
                    'h-10 w-full rounded-xl border border-line2 bg-surface-containerHigh px-3 font-mono text-caption text-onSurface',
                }),
              ],
            }),
          ],
        }),

        c.jsxs('div', {
          className: 'flex flex-col gap-2 pt-1',
          children: [
            c.jsx(Button, {
              variant: 'filled',
              fullWidth: true,
              onClick: () => {
                void handleConfirm();
              },
              children: isDe
                ? `❄️ Pause bestätigen (${breakDaysCount} Tage) & Streak schützen`
                : `❄️ Confirm break (${breakDaysCount}d) & protect streak`,
            }),
            c.jsx(Button, {
              variant: 'outlined',
              fullWidth: true,
              onClick: () => {
                void handleDismiss();
              },
              children: isDe
                ? 'Nein, einfach weitertrainieren'
                : 'No, just continue training',
            }),
          ],
        }),
      ],
    }),
  });
}

function ComebackWorkoutBannerInternal() {
  const isDe = typeof yS === 'function' ? yS() !== 'en' : true;
  const { config, dismissComebackBanner } = useTrainingBreaks();
  const remaining = config?.comebackBannerRemainingWorkouts ?? 0;
  if (remaining <= 0) return null;

  const days = config?.comebackBannerBreakDays || 7;

  return c.jsxs('div', {
    role: 'status',
    className:
      'animate-step-slide flex items-start justify-between gap-3 rounded-xl2 border border-primary/35 bg-primary-container/25 p-3.5 text-onSurface',
    children: [
      c.jsxs('div', {
        className: 'flex min-w-0 flex-1 flex-col gap-1',
        children: [
          c.jsxs('div', {
            className: 'flex flex-wrap items-center gap-2',
            children: [
              c.jsx('span', {
                className: 'text-titleS font-semibold text-primary',
                children: isDe ? '💪 Comeback-Workout' : '💪 Comeback Workout',
              }),
              c.jsx('span', {
                className:
                  'rounded-full bg-surface-containerHigh px-2 py-0.5 font-mono text-[11px] font-semibold text-onSurfaceVariant',
                children: isDe
                  ? `Nach ${days} Tagen Pause`
                  : `After ${days} days off`,
              }),
            ],
          }),
          c.jsx('p', {
            className: 'text-caption leading-relaxed text-onSurfaceVariant',
            children: isDe
              ? 'Sanfter Wiedereinstieg: Starte heute mit ca. 5–10 % weniger Gewicht oder 1–2 RIR mehr Reserve, um starken Muskelkater zu vermeiden. Dein Deload-Zyklus wurde automatisch auf Woche 1 zurückgesetzt.'
              : 'Gentle return: Start today with ~5–10% less weight or 1–2 more RIR in reserve to avoid heavy soreness. Your deload cycle was automatically reset to Week 1.',
          }),
        ],
      }),
      c.jsx('button', {
        type: 'button',
        'aria-label': isDe ? 'Hinweis schließen' : 'Dismiss hint',
        onClick: () => {
          void dismissComebackBanner();
        },
        className:
          'press-feedback flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-containerHigh text-caption text-onSurfaceVariant',
        children: '✕',
      }),
    ],
  });
}

export function ComebackWorkoutBanner() {
  return c.jsx(GymBuddyErrorBoundary, {
    children: c.jsx(ComebackWorkoutBannerInternal, {}),
  });
}

export async function exportTrainingBreaksForBackup(db) {
  await ensureTrainingBreaksLoaded();
  try {
    if (db && db.objectStoreNames.contains(GYM_BUDDY_STORE)) {
      const rec = await db.get(GYM_BUDDY_STORE, TRAINING_BREAK_IDB_RECORD_ID);
      if (rec) {
        const sanitized = sanitizeTrainingBreakConfig(rec);
        if (sanitized) return sanitized;
      }
    }
  } catch {}
  return cachedBreakConfig;
}

export async function restoreTrainingBreaksFromBackup(raw) {
  if (!raw) return;
  const sanitized = sanitizeTrainingBreakConfig(raw);
  if (sanitized) {
    await persistTrainingBreakConfig(sanitized);
  }
}

