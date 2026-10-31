/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Gym Buddy (Tamagotchi-Feature) – Gekapselte Domänen-, Evolutions-, Farb- und Validierungslogik.
 * Rein positiv (kein Bestrafungssystem), 100 % lokal in IndexedDB, keine externen Assets.
 */

export type PetMood =
  | 'post_workout'
  | 'happy'
  | 'idle'
  | 'reading'
  | 'sleep'
  | 'phase1_recovery';
export type PetStyle = 'cute' | 'progress';
export type EvolutionStage = 1 | 2 | 3 | 4;
export type AccessorySlot = 'head' | 'body' | 'hand';
export type UserGender = 'male' | 'female' | 'unspecified';
export type CyclePhaseId = 'menstruation' | 'follicular' | 'ovulation' | 'luteal';
export type TrainingBreakCategory = 'vacation' | 'sick' | 'other';

export interface TrainingBreakPeriod {
  id: string;
  category: TrainingBreakCategory;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  active: boolean;
  autoDetected: boolean;
  endedByWorkout?: boolean;
  note?: string;
  createdAt: number;
  endedAt?: number;
}

export interface TrainingBreakConfig {
  id: 'default';
  activeBreak: TrainingBreakPeriod | null;
  history: TrainingBreakPeriod[];
  dismissedGapEndMs: number;
  comebackBannerRemainingWorkouts: number;
  comebackBannerBreakDays: number;
  comebackBannerCategory: TrainingBreakCategory | null;
  lastAppOpenedAt?: number;
  updatedAt: number;
}

export interface UnplannedComebackGapInfo {
  lastWorkoutMs: number;
  lastWorkoutDateIso: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  gapDays: number;
  appClosedDays?: number;
  shouldPrompt: boolean;
}

export interface CycleTrackingConfig {
  id: 'default';
  gender: UserGender;
  enabled: boolean;
  lastPeriodStart: string;
  cycleLength: number;
  periodDuration: number;
  updatedAt: number;
}

export interface CyclePhaseInfo {
  phase: CyclePhaseId;
  phaseNumber: 1 | 2 | 3 | 4;
  cycleDay: number;
  cycleLength: number;
  periodDuration: number;
  daysSincePeriodStart: number;
  colorHex: string;
  dotColor: string;
  titleDe: string;
  titleEn: string;
  shortLabelDe: string;
  shortLabelEn: string;
  focusDe: string;
  focusEn: string;
  hintDe: string;
  hintEn: string;
  streakRestDaysLimit: 2 | 4;
}

export interface EquippedAccessories {
  head?: string | null;
  body?: string | null;
  hand?: string | null;
}

export interface AccessoryColors {
  head?: string | null;
  body?: string | null;
  hand?: string | null;
}

export interface PetProgress {
  petId: string;
  customName: string;
  xp: number;
  workoutsCompleted: number;
  totalMinutes: number;
  colorMode: 'theme' | 'custom';
  customHex: string;
  equipped: EquippedAccessories;
  accessoryColors: AccessoryColors;
  updatedAt: number;
}

export interface CustomPetFrames {
  idle: number[][];
  happy?: number[][];
  sleep?: number[][];
}

export interface CustomPetDefinition {
  id: string;
  name: string;
  palette: string[]; // max 6 hex colors
  frames: CustomPetFrames;
  createdAt: number;
}

export interface GymBuddyStoreState {
  id: 'default';
  enabled: boolean;
  activePetId: string;
  processedSessionIds: string[];
  petProgress: Record<string, PetProgress>;
  customPets: CustomPetDefinition[];
  updatedAt: number;
}

export interface PresetPetMetadata {
  id: string;
  style: PetStyle;
  nameDe: string;
  nameEn: string;
  charDe: string;
  charEn: string;
  unlockWorkouts: number;
  unlockRequireLevel4?: boolean;
  unlockMinutes?: number;
  unlockTotalLevels?: number;
}

export interface AccessoryMetadata {
  id: string;
  slot: AccessorySlot;
  nameDe: string;
  nameEn: string;
  unlockWorkouts: number;
  unlockRequireLevel?: EvolutionStage;
}

export const LEVEL_XP_THRESHOLDS: Record<EvolutionStage, number> = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
};

/**
 * 7 Preset-Pets: 3 × 'cute' (robot, bear, cat: kompakt, glänzende Augen, süßes Lächeln, Sterne auf Stufe 4)
 * und 4 × 'progress' (monster, lifter, dino, gorilla: breiter, muskulöser, selbstbewusstes Grinsen, pulsierende Energie-Aura).
 */
export const PRESET_PETS: PresetPetMetadata[] = [
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

export const ACCESSORIES: AccessoryMetadata[] = [
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
    nameDe: 'Gym-Mütze',
    nameEn: 'Gym Beanie',
    unlockWorkouts: 3,
  },
  {
    id: 'sunglasses',
    slot: 'head',
    nameDe: 'Sonnenbrille',
    nameEn: 'Shades',
    unlockWorkouts: 5,
  },
  {
    id: 'hoodie',
    slot: 'body',
    nameDe: 'Pump-Hoodie',
    nameEn: 'Pump Hoodie',
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
    nameDe: 'Kurzhantel',
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

export interface AccessoryAnchorPoint {
  x: number;
  y: number;
  scale: number;
  rotate: number;
  width?: number;
  height?: number;
  eyeY?: number;
  beltY?: number;
}

export interface PetStageAnchors {
  head: AccessoryAnchorPoint;
  body: AccessoryAnchorPoint;
  hand: AccessoryAnchorPoint;
}

export const PET_ACCESSORY_ANCHORS: Record<string, Record<EvolutionStage, PetStageAnchors>> = {
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

export function createDefaultPetProgress(petId: string, now = Date.now()): PetProgress {
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

export function createDefaultGymBuddyState(now = Date.now()): GymBuddyStoreState {
  return {
    id: 'default',
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

export function getEvolutionStage(xp: number): EvolutionStage {
  const safeXp = Number.isFinite(xp) ? xp : 0;
  if (safeXp >= LEVEL_XP_THRESHOLDS[4]) return 4;
  if (safeXp >= LEVEL_XP_THRESHOLDS[3]) return 3;
  if (safeXp >= LEVEL_XP_THRESHOLDS[2]) return 2;
  return 1;
}

export function calculateTotalPetLevels(
  petProgress: Record<string, { xp?: number }> | undefined | null
): number {
  if (!petProgress || typeof petProgress !== 'object') return 4;
  let total = 0;
  for (const p of Object.values(petProgress)) {
    if (p && typeof p === 'object') {
      total += getEvolutionStage(Number(p.xp) || 0);
    }
  }
  return Math.max(4, total);
}

export function calculateWorkoutXpGain(durationSec: number, streakCount: number): number {
  const base = 50;
  const safeDuration = Number.isFinite(durationSec) && durationSec > 0 ? durationSec : 0;
  const safeStreak = Number.isFinite(streakCount) && streakCount > 0 ? streakCount : 1;
  const minutes = Math.max(1, Math.round(safeDuration / 60));
  const durationBonus = Math.min(60, minutes);
  const streakBonus = Math.min(5, Math.max(1, safeStreak)) * 10;
  return base + durationBonus + streakBonus;
}

const MAX_STREAK_GAP_MS = 3 * 24 * 60 * 60 * 1000; // 2 rest days max gap (3 calendar days) for standard active streak

export function calculateWorkoutStreak(
  completedSessionDatesMs: number[],
  nowMs = Date.now(),
  cycleProtection?: boolean | CycleTrackingConfig | null,
  breakConfig?: Partial<TrainingBreakConfig> | null
): number {
  if (!Array.isArray(completedSessionDatesMs) || completedSessionDatesMs.length === 0) return 0;

  const validTimestamps: number[] = [];
  for (let i = 0; i < completedSessionDatesMs.length; i++) {
    const v = completedSessionDatesMs[i];
    if (typeof v === 'number' && Number.isFinite(v) && v > 0) {
      validTimestamps.push(v);
    }
  }
  if (validTimestamps.length === 0) return 0;

  validTimestamps.sort((a, b) => b - a);

  const dayMs = 24 * 60 * 60 * 1000;
  const PHASE1_Protected_GAP_MS = 5 * dayMs; // 4 rest days = 5 calendar days gap
  const isPhase1GapProtected = (laterMs: number, earlierMs: number): boolean => {
    if (cycleProtection === true) return true;
    if (!cycleProtection || typeof cycleProtection !== 'object') return false;
    if (!cycleProtection.enabled || !isValidIsoDateString(cycleProtection.lastPeriodStart)) return false;
    const steps = Math.min(6, Math.max(0, Math.round((laterMs - earlierMs) / dayMs)));
    for (let d = 0; d <= steps; d++) {
      const checkMs = laterMs - d * dayMs;
      const info = calculateCyclePhaseForDate(cycleProtection, checkMs);
      if (info && info.phase === 'menstruation') return true;
    }
    return false;
  };

  const subtractBreakDaysMs = (laterMs: number, earlierMs: number): number => {
    if (!breakConfig) return laterMs - earlierMs;
    const breakDays = countBreakDaysInInterval(earlierMs, laterMs, breakConfig, nowMs);
    if (breakDays <= 0) return laterMs - earlierMs;
    return Math.max(0, laterMs - earlierMs - breakDays * dayMs);
  };

  const todayIso = toLocalIsoDate(nowMs);
  const hasBreakCoveringToday = Boolean(
    breakConfig && getBreakForDate(breakConfig, todayIso, nowMs) !== null
  );

  const initialMaxGapMs = isPhase1GapProtected(nowMs, validTimestamps[0])
    ? PHASE1_Protected_GAP_MS
    : MAX_STREAK_GAP_MS;
  const effectiveInitialGapMs = subtractBreakDaysMs(nowMs, validTimestamps[0]);
  if (!hasBreakCoveringToday && effectiveInitialGapMs > initialMaxGapMs) return 0;

  // Short-circuiting single-pass calendar-day streak computation
  let streak = 0;
  let lastDayMidnightMs: number | null = null;
  let lastDayKey = -1;

  for (let i = 0; i < validTimestamps.length; i++) {
    const d = new Date(validTimestamps[i]);
    const y = d.getFullYear();
    const m = d.getMonth();
    const day = d.getDate();
    const dayKey = y * 10000 + m * 100 + day;
    if (dayKey === lastDayKey) continue;

    const midnightMs = new Date(y, m, day).getTime();
    if (lastDayMidnightMs === null) {
      streak = 1;
      lastDayMidnightMs = midnightMs;
      lastDayKey = dayKey;
      continue;
    }

    const allowedGapMs = isPhase1GapProtected(lastDayMidnightMs, midnightMs)
      ? PHASE1_Protected_GAP_MS
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

export function isNightSleepWindow(nowMs = Date.now()): boolean {
  const hour = new Date(nowMs).getHours();
  return hour >= 22 || hour < 6;
}

export function hasTrainedOnSameDay(
  lastWorkoutAtMs: number | null,
  nowMs = Date.now()
): boolean {
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
  // Falls es nach Mitternacht (00:00–05:59) ist, zählt auch das Training vom gestrigen Tag als "heute trainiert"
  if (nowD.getHours() < 6 && nowMs - lastWorkoutAtMs <= 18 * 3600 * 1000) {
    return true;
  }
  return false;
}

/**
 * Bestimmt die rein positive Stimmung des Gym Buddys:
 * 1. Direkt nach einem Workout (<= 2 Stunden): 'post_workout' (erschöpft, tiefes Atmen, Schweißtropfen, stolzes Lächeln).
 * 2. Nachtschlaf-Automatik (22:00 bis 06:00 Uhr): 'sleep' (friedliches Atmen, geschlossene Augen, Zzz & Lächeln im Schlaf).
 * 3. Phase 1 (Menstruation) an Pausentagen: 'phase1_recovery' (entspannter Erholungs-Zustand mit Streak-Schutz).
 * 4. Tagsüber je nach Abstand zum letzten Workout: 'happy' (<= 36h), 'idle' (<= 68h), 'reading' (<= 108h), sonst 'sleep'.
 */
export function determinePositivePetMood(
  lastWorkoutAtMs: number | null,
  nowMs = Date.now(),
  isPhase1Menstruation = false
): PetMood {
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
  preset: PresetPetMetadata,
  totalWorkouts: number,
  totalMinutes: number,
  maxPetLevelReached: EvolutionStage,
  totalPetLevels = 0
): boolean {
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

export function isAccessoryUnlocked(
  acc: AccessoryMetadata,
  totalWorkouts: number,
  maxPetLevelReached: EvolutionStage
): boolean {
  if (!acc) return false;
  if (totalWorkouts >= acc.unlockWorkouts) return true;
  if (acc.unlockRequireLevel !== undefined && maxPetLevelReached >= acc.unlockRequireLevel) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Color Utilities (HSL <-> Hex & Theme Monochrome) with bounded caches
// ---------------------------------------------------------------------------

const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;
const HSL_CACHE = new Map<string, { h: number; s: number; l: number }>();

export function isValidHexColor(hex: unknown): hex is string {
  return typeof hex === 'string' && HEX_COLOR_RE.test(hex.trim());
}

export function getMonochromePetHex(isDarkTheme: boolean): string {
  return isDarkTheme ? '#F2F4F7' : '#1E232B';
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const clean = isValidHexColor(hex) ? hex.trim().slice(1).toUpperCase() : 'A8DAB5';
  const cached = HSL_CACHE.get(clean);
  if (cached) return { ...cached };

  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let result: { h: number; s: number; l: number };

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
    const firstKey = HSL_CACHE.keys().next().value;
    if (firstKey !== undefined) HSL_CACHE.delete(firstKey);
  }
  HSL_CACHE.set(clean, result);
  return { ...result };
}

function hue2rgb(p: number, q: number, t: number): number {
  let tt = t;
  if (tt < 0) tt += 1;
  if (tt > 1) tt -= 1;
  if (tt < 1 / 6) return p + (q - p) * 6 * tt;
  if (tt < 1 / 2) return q;
  if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
  return p;
}

export function hslToHex(h: number, s: number, l: number): string {
  const safeH = Number.isFinite(h) ? h : 0;
  const safeS = Number.isFinite(s) ? s : 0;
  const safeL = Number.isFinite(l) ? l : 50;
  const hn = (((safeH % 360) + 360) % 360) / 360;
  const sn = Math.min(100, Math.max(0, safeS)) / 100;
  const ln = Math.min(100, Math.max(0, safeL)) / 100;
  let r: number, g: number, b: number;
  if (sn === 0) {
    r = g = b = ln;
  } else {
    const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
    const p = 2 * ln - q;
    r = hue2rgb(p, q, hn + 1 / 3);
    g = hue2rgb(p, q, hn);
    b = hue2rgb(p, q, hn - 1 / 3);
  }
  const toHex = (v: number) =>
    Math.round(Math.min(1, Math.max(0, v)) * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ---------------------------------------------------------------------------
// Strict Backup Validation for Gym Buddy Data
// ---------------------------------------------------------------------------

export function sanitizeGymBuddyBackupRecord(raw: unknown): GymBuddyStoreState | null {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  if (obj.id !== 'default') return null;

  const fallback = createDefaultGymBuddyState();
  const enabled = typeof obj.enabled === 'boolean' ? obj.enabled : fallback.enabled;
  const activePetId =
    typeof obj.activePetId === 'string' && obj.activePetId.trim().length > 0 && obj.activePetId.length <= 64
      ? obj.activePetId.trim()
      : fallback.activePetId;

  const processedSessionIds = Array.isArray(obj.processedSessionIds)
    ? Array.from(
        new Set(
          obj.processedSessionIds.filter(
            (x): x is string => typeof x === 'string' && x.length > 0 && x.length <= 80
          )
        )
      ).slice(0, 5000)
    : [];

  const petProgress: Record<string, PetProgress> = { ...fallback.petProgress };
  if (typeof obj.petProgress === 'object' && obj.petProgress !== null && !Array.isArray(obj.petProgress)) {
    for (const [key, val] of Object.entries(obj.petProgress as Record<string, unknown>)) {
      if (key.length === 0 || key.length > 64 || typeof val !== 'object' || val === null) continue;
      const p = val as Record<string, unknown>;
      const eqRaw = typeof p.equipped === 'object' && p.equipped !== null ? (p.equipped as Record<string, unknown>) : {};
      const colRaw =
        typeof p.accessoryColors === 'object' && p.accessoryColors !== null
          ? (p.accessoryColors as Record<string, unknown>)
          : {};
      petProgress[key] = {
        petId: key,
        customName: typeof p.customName === 'string' ? p.customName.trim().slice(0, 32) : '',
        xp: typeof p.xp === 'number' && Number.isFinite(p.xp) && p.xp >= 0 ? Math.min(1000000, Math.floor(p.xp)) : 0,
        workoutsCompleted:
          typeof p.workoutsCompleted === 'number' && Number.isFinite(p.workoutsCompleted) && p.workoutsCompleted >= 0
            ? Math.min(100000, Math.floor(p.workoutsCompleted))
            : 0,
        totalMinutes:
          typeof p.totalMinutes === 'number' && Number.isFinite(p.totalMinutes) && p.totalMinutes >= 0
            ? Math.min(10000000, Math.floor(p.totalMinutes))
            : 0,
        colorMode: p.colorMode === 'custom' ? 'custom' : 'theme',
        customHex: isValidHexColor(p.customHex) ? p.customHex.toUpperCase() : '#A8DAB5',
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
        updatedAt: typeof p.updatedAt === 'number' && Number.isFinite(p.updatedAt) ? p.updatedAt : Date.now(),
      };
    }
  }

  return {
    id: 'default',
    enabled,
    activePetId,
    processedSessionIds,
    petProgress,
    customPets: [],
    updatedAt: typeof obj.updatedAt === 'number' && Number.isFinite(obj.updatedAt) ? obj.updatedAt : Date.now(),
  };
}

// ---------------------------------------------------------------------------
// Cycle-Synced Training (Zyklus-/Perioden-Tracking) Domain & Validation
// ---------------------------------------------------------------------------

export const DEFAULT_CYCLE_CONFIG: CycleTrackingConfig = {
  id: 'default',
  gender: 'unspecified',
  enabled: false,
  lastPeriodStart: '',
  cycleLength: 28,
  periodDuration: 5,
  updatedAt: 0,
};

export function normalizeUserGender(raw: unknown): UserGender {
  if (raw === 'male' || raw === 'female' || raw === 'unspecified') return raw;
  return 'unspecified';
}

export function clampCycleLength(len: unknown): number {
  const n = typeof len === 'number' ? len : Number(len);
  if (!Number.isFinite(n)) return 28;
  return Math.min(45, Math.max(20, Math.round(n)));
}

export function clampPeriodDuration(dur: unknown): number {
  const n = typeof dur === 'number' ? dur : Number(dur);
  if (!Number.isFinite(n)) return 5;
  return Math.min(10, Math.max(2, Math.round(n)));
}

export function isValidIsoDateString(val: unknown): val is string {
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

export function parseIsoDateLocalNoon(iso: string): number | null {
  if (!isValidIsoDateString(iso)) return null;
  const [y, m, d] = iso.trim().split('-').map(Number);
  return new Date(y, m - 1, d, 12, 0, 0, 0).getTime();
}

/**
 * Automatische Onboarding-Logik:
 * - Wird 'female' ('Frau') gewählt -> Zyklus-Tracking wird automatisch auf Aktiv (enabled: true) geschaltet
 *   mit Standardwerten (Zykluslänge: 28 Tage, Periodendauer: 5 Tage).
 * - Wird 'male' ('Mann') oder 'unspecified' ('Keine Angabe') gewählt -> bleibt standardmäßig deaktiviert (enabled: false).
 */
export function applyOnboardingGenderSelection(
  gender: UserGender,
  prev?: Partial<CycleTrackingConfig>
): CycleTrackingConfig {
  const g = normalizeUserGender(gender);
  return {
    id: 'default',
    gender: g,
    enabled: g === 'female',
    lastPeriodStart: isValidIsoDateString(prev?.lastPeriodStart) ? prev!.lastPeriodStart.trim() : '',
    cycleLength: clampCycleLength(prev?.cycleLength ?? 28),
    periodDuration: clampPeriodDuration(prev?.periodDuration ?? 5),
    updatedAt: Date.now(),
  };
}

export const CYCLE_PHASE_META: Record<
  CyclePhaseId,
  {
    phaseNumber: 1 | 2 | 3 | 4;
    colorHex: string;
    dotColor: string;
    titleDe: string;
    titleEn: string;
    shortLabelDe: string;
    shortLabelEn: string;
    focusDe: string;
    focusEn: string;
    hintDe: string;
    hintEn: string;
    streakRestDaysLimit: 2 | 4;
  }
> = {
  menstruation: {
    phaseNumber: 1,
    colorHex: '#F43F5E',
    dotColor: '#F43F5E',
    titleDe: 'Phase 1: Menstruation',
    titleEn: 'Phase 1: Menstruation',
    shortLabelDe: 'Menstruation',
    shortLabelEn: 'Menstruation',
    focusDe: 'Fokus auf Erholung, Technik & Mobility · Kein Leistungsdruck',
    focusEn: 'Focus on Recovery, Technique & Mobility · Zero performance pressure',
    hintDe:
      'Hormonspiegel am Tiefpunkt: Fokus auf Erholung, saubere Technik & Mobility ohne Leistungsdruck. Dein Streak-Schutz (bis zu 4 Pausentage) ist automatisch aktiv.',
    hintEn:
      'Hormone levels are at their lowest: Focus on recovery, clean technique & mobility with zero performance pressure. Your streak protection (up to 4 rest days) is automatically active.',
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
    focusDe: 'Steigende Energie & beste Regeneration – ideal für Aufbau & Volumen',
    focusEn: 'Rising energy & peak recovery — ideal for muscle building & volume',
    hintDe:
      'Steigendes Östrogen unterstützt Energie, Regeneration und Trainingskapazität: Ideal für Muskelaufbau, höheres Trainingsvolumen und intensive Sätze.',
    hintEn:
      'Rising estrogen supports energy, recovery, and work capacity: Ideal for muscle building, higher training volume, and intense working sets.',
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
    focusDe: 'Maximalkraft-Peak – grünes Licht für schwere Gewichte & PRs',
    focusEn: 'Max Strength Peak — green light for heavy weights & PRs',
    hintDe:
      'Maximalkraft-Peak in der Zyklusmitte (Tag 13–16): Grünes Licht für schwere Grundübungen und persönliche Rekorde (PRs) bei gründlichem Aufwärmen.',
    hintEn:
      'Mid-cycle max-strength peak (Days 13–16): Green light for heavy compound lifts and personal records (PRs) with a thorough warm-up.',
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

export function calculateCyclePhaseForDate(
  config: Partial<CycleTrackingConfig> | null | undefined,
  targetDate: string | number | Date = Date.now()
): CyclePhaseInfo | null {
  if (!config || config.enabled !== true) return null;
  if (!isValidIsoDateString(config.lastPeriodStart)) return null;

  const startNoon = parseIsoDateLocalNoon(config.lastPeriodStart);
  if (startNoon === null) return null;

  let targetNoon: number | null = null;
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

  // Bei 28-Tage-Standardzyklus: Tag 13 bis 16 Ovulation / Power-Peak
  const ovulationCenter = Math.round(cycleLength / 2);
  const ovulationStart = Math.max(periodDuration + 2, ovulationCenter - 1);
  const ovulationEnd = Math.min(cycleLength - 3, ovulationCenter + 2);

  let phase: CyclePhaseId;
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

export function sanitizeCycleTrackingBackupRecord(raw: unknown): CycleTrackingConfig | null {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  const gender = normalizeUserGender(obj.gender ?? obj.sex);
  const enabled =
    typeof obj.enabled === 'boolean'
      ? obj.enabled
      : typeof obj.cycleTrackingEnabled === 'boolean'
        ? obj.cycleTrackingEnabled
        : false;
  const lastPeriodStart = isValidIsoDateString(obj.lastPeriodStart)
    ? obj.lastPeriodStart.trim()
    : '';
  const cycleLength = clampCycleLength(obj.cycleLength ?? 28);
  const periodDuration = clampPeriodDuration(obj.periodDuration ?? 5);
  const updatedAt =
    typeof obj.updatedAt === 'number' && Number.isFinite(obj.updatedAt) ? obj.updatedAt : Date.now();

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

// ---------------------------------------------------------------------------
// Automatic Break & Comeback Detection (No Manual Pause UI)
// ---------------------------------------------------------------------------

export const DEFAULT_TRAINING_BREAK_CONFIG: TrainingBreakConfig = {
  id: 'default',
  activeBreak: null,
  history: [],
  dismissedGapEndMs: 0,
  comebackBannerRemainingWorkouts: 0,
  comebackBannerBreakDays: 0,
  comebackBannerCategory: null,
  updatedAt: 0,
};

export function toLocalIsoDate(ms: number): string {
  const d = new Date(ms);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function isoDateToLocalMidnightMs(iso: string): number | null {
  if (!isValidIsoDateString(iso)) return null;
  const [y, m, d] = iso.trim().split('-').map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0).getTime();
}

export function isoDateToLocalEndOfDayMs(iso: string): number | null {
  if (!isValidIsoDateString(iso)) return null;
  const [y, m, d] = iso.trim().split('-').map(Number);
  return new Date(y, m - 1, d, 23, 59, 59, 999).getTime();
}

export function calculateBreakDays(
  startDateIso: string,
  endDateIso?: string | null,
  nowMs = Date.now()
): number {
  const startMidnight = isoDateToLocalMidnightMs(startDateIso);
  if (startMidnight === null) return 0;
  const effectiveEndIso =
    endDateIso && isValidIsoDateString(endDateIso) ? endDateIso : toLocalIsoDate(nowMs);
  const endMidnight = isoDateToLocalMidnightMs(effectiveEndIso);
  if (endMidnight === null || endMidnight < startMidnight) return 0;
  return Math.round((endMidnight - startMidnight) / (24 * 60 * 60 * 1000)) + 1;
}

export function getAllEffectiveBreakPeriods(
  config?: Partial<TrainingBreakConfig> | null,
  nowMs = Date.now()
): TrainingBreakPeriod[] {
  if (!config) return [];
  const result: TrainingBreakPeriod[] = [];
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

export function getBreakForDate(
  config: Partial<TrainingBreakConfig> | null | undefined,
  dateIso: string,
  nowMs = Date.now()
): TrainingBreakPeriod | null {
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

export function countBreakDaysInInterval(
  earlierMs: number,
  laterMs: number,
  config?: Partial<TrainingBreakConfig> | null,
  nowMs = Date.now()
): number {
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
  const coveredDays = new Set<string>();

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

export const COMEBACK_GAP_MIN_DAYS = 4; // >= 4 calendar days (> 3 full days without a workout) triggers automatic comeback inquiry
export const COMEBACK_BANNER_MIN_BREAK_DAYS = 7;
export const COMEBACK_BANNER_WORKOUT_COUNT = 2;
export const DELOAD_RESET_MIN_BREAK_DAYS = 7;
export const DELOAD_FREEZE_MIN_BREAK_DAYS = 3;

export function detectUnplannedComebackGap(
  completedSessionDatesMs: number[],
  config?: Partial<TrainingBreakConfig> | null,
  nowMs = Date.now(),
  cycleProtection?: boolean | CycleTrackingConfig | null,
  lastAppOpenedMs?: number | null
): UnplannedComebackGapInfo | null {
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

  // Respect Cycle Phase 1 4-day rest limit (5 calendar days) before prompting
  let minGapDays = COMEBACK_GAP_MIN_DAYS;
  if (cycleProtection && typeof cycleProtection === 'object' && cycleProtection.enabled) {
    const phaseInfo = calculateCyclePhaseForDate(cycleProtection, nowMs);
    if (phaseInfo && phaseInfo.phase === 'menstruation') {
      minGapDays = 5;
    }
  }

  if (gapDays < minGapDays) return null;

  const suggestedStartMs = lastMidnight + dayMs;
  const suggestedStartDate = toLocalIsoDate(suggestedStartMs);
  const suggestedEndDate = toLocalIsoDate(nowMidnight);

  // Check how many days in the gap are not yet covered by a confirmed break
  const coveredDays = countBreakDaysInInterval(suggestedStartMs, nowMidnight, config, nowMs);
  const uncoveredGapDays = Math.max(0, gapDays - coveredDays);
  if (uncoveredGapDays < minGapDays) return null;

  const dismissedMark = config?.dismissedGapEndMs ?? 0;
  if (dismissedMark >= lastWorkoutMs && nowMidnight - dismissedMark < 3 * dayMs) {
    return null;
  }

  let appClosedDays: number | undefined;
  const effectiveLastOpen = lastAppOpenedMs ?? config?.lastAppOpenedAt;
  if (typeof effectiveLastOpen === 'number' && Number.isFinite(effectiveLastOpen) && effectiveLastOpen > 0 && effectiveLastOpen < nowMs) {
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

export function confirmRetroactiveComebackBreak(
  prev: TrainingBreakConfig,
  params: {
    category: TrainingBreakCategory;
    startDate: string;
    endDate: string;
    lastWorkoutMs: number;
    note?: string;
  },
  nowMs = Date.now()
): TrainingBreakConfig {
  const category: TrainingBreakCategory =
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
  const entry: TrainingBreakPeriod = {
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

  const history = [...(prev.history ?? []), entry].slice(-60);
  const shouldShowComeback = breakDays >= COMEBACK_BANNER_MIN_BREAK_DAYS;

  return {
    id: 'default',
    activeBreak: null,
    history,
    dismissedGapEndMs: nowMs,
    comebackBannerRemainingWorkouts: shouldShowComeback
      ? COMEBACK_BANNER_WORKOUT_COUNT
      : prev.comebackBannerRemainingWorkouts ?? 0,
    comebackBannerBreakDays: shouldShowComeback ? breakDays : prev.comebackBannerBreakDays ?? 0,
    comebackBannerCategory: shouldShowComeback ? category : prev.comebackBannerCategory ?? null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export function dismissComebackPromptForGap(
  prev: TrainingBreakConfig,
  lastWorkoutMs: number,
  gapDays = 0,
  nowMs = Date.now()
): TrainingBreakConfig {
  const shouldShowComeback = gapDays >= COMEBACK_BANNER_MIN_BREAK_DAYS;
  return {
    ...prev,
    id: 'default',
    dismissedGapEndMs: Math.max(nowMs, lastWorkoutMs),
    comebackBannerRemainingWorkouts: shouldShowComeback
      ? COMEBACK_BANNER_WORKOUT_COUNT
      : prev.comebackBannerRemainingWorkouts ?? 0,
    comebackBannerBreakDays: shouldShowComeback ? gapDays : prev.comebackBannerBreakDays ?? 0,
    comebackBannerCategory: shouldShowComeback ? 'other' : prev.comebackBannerCategory ?? null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export function onWorkoutCompletedForBreakConfig(
  prev: TrainingBreakConfig,
  nowMs = Date.now()
): TrainingBreakConfig {
  const nextRemaining = Math.max(0, (prev.comebackBannerRemainingWorkouts ?? 0) - 1);
  return {
    ...prev,
    id: 'default',
    activeBreak: null,
    comebackBannerRemainingWorkouts: nextRemaining,
    comebackBannerBreakDays: nextRemaining > 0 ? prev.comebackBannerBreakDays : 0,
    comebackBannerCategory: nextRemaining > 0 ? prev.comebackBannerCategory : null,
    lastAppOpenedAt: nowMs,
    updatedAt: nowMs,
  };
}

export interface BreakAdjustedDeloadInfo {
  suppressDeloadSuggestion: boolean;
  effectiveReferenceStartMs: number | undefined;
  effectiveWeeksElapsed: number | null;
  resetToWeekOne: boolean;
  frozenBreakDays: number;
}

export function calculateBreakAdjustedDeloadInfo(
  completedSessionDatesMs: number[],
  deloadActiveUntilMs: number | undefined,
  firstSessionDateMs: number | undefined,
  breakConfig?: Partial<TrainingBreakConfig> | null,
  nowMs = Date.now()
): BreakAdjustedDeloadInfo {
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const dayMs = 24 * 60 * 60 * 1000;
  const baseStart = deloadActiveUntilMs ?? firstSessionDateMs;
  if (baseStart === undefined) {
    return {
      suppressDeloadSuggestion: false,
      effectiveReferenceStartMs: undefined,
      effectiveWeeksElapsed: null,
      resetToWeekOne: false,
      frozenBreakDays: 0,
    };
  }

  const periods = getAllEffectiveBreakPeriods(breakConfig, nowMs);
  const todayIso = toLocalIsoDate(nowMs);

  let latestLongBreakEndMs: number | null = null;
  for (const p of periods) {
    const endIso = isValidIsoDateString(p.endDate) && p.endDate <= todayIso ? p.endDate : todayIso;
    const days = calculateBreakDays(p.startDate, endIso, nowMs);
    if (days >= DELOAD_RESET_MIN_BREAK_DAYS) {
      const endMs = isoDateToLocalEndOfDayMs(endIso);
      if (endMs !== null && endMs <= nowMs + dayMs) {
        if (latestLongBreakEndMs === null || endMs > latestLongBreakEndMs) {
          latestLongBreakEndMs = endMs;
        }
      }
    }
  }

  const validWorkouts = [...(completedSessionDatesMs ?? [])]
    .filter((v) => typeof v === 'number' && Number.isFinite(v) && v > 0 && v <= nowMs)
    .sort((a, b) => a - b);

  for (let i = 1; i < validWorkouts.length; i++) {
    const prevD = new Date(validWorkouts[i - 1]);
    const currD = new Date(validWorkouts[i]);
    const prevMid = new Date(prevD.getFullYear(), prevD.getMonth(), prevD.getDate()).getTime();
    const currMid = new Date(currD.getFullYear(), currD.getMonth(), currD.getDate()).getTime();
    const restDaysBetween = Math.round((currMid - prevMid) / dayMs) - 1;
    if (restDaysBetween >= DELOAD_RESET_MIN_BREAK_DAYS) {
      const gapEndMs = currMid - 1;
      if (latestLongBreakEndMs === null || gapEndMs > latestLongBreakEndMs) {
        latestLongBreakEndMs = gapEndMs;
      }
    }
  }

  if (validWorkouts.length > 0) {
    const lastW = new Date(validWorkouts[validWorkouts.length - 1]);
    const lastMid = new Date(lastW.getFullYear(), lastW.getMonth(), lastW.getDate()).getTime();
    const nowD = new Date(nowMs);
    const nowMid = new Date(nowD.getFullYear(), nowD.getMonth(), nowD.getDate()).getTime();
    const ongoingRestDays = Math.round((nowMid - lastMid) / dayMs);
    if (ongoingRestDays >= DELOAD_RESET_MIN_BREAK_DAYS) {
      if (latestLongBreakEndMs === null || nowMs > latestLongBreakEndMs) {
        latestLongBreakEndMs = nowMs;
      }
    }
  }

  let referenceStartMs = baseStart;
  let resetToWeekOne = false;

  if (latestLongBreakEndMs !== null && latestLongBreakEndMs >= baseStart) {
    resetToWeekOne = true;
    const firstWorkoutAfterBreak = validWorkouts.find((ms) => ms > latestLongBreakEndMs!);
    referenceStartMs = firstWorkoutAfterBreak !== undefined ? firstWorkoutAfterBreak : nowMs;
  }

  let frozenBreakDays = 0;
  const refIso = toLocalIsoDate(referenceStartMs);
  for (const p of periods) {
    const endIso = isValidIsoDateString(p.endDate) && p.endDate <= todayIso ? p.endDate : todayIso;
    const days = calculateBreakDays(p.startDate, endIso, nowMs);
    if (days >= DELOAD_FREEZE_MIN_BREAK_DAYS && days < DELOAD_RESET_MIN_BREAK_DAYS) {
      if (endIso >= refIso) {
        const clampedStartIso = p.startDate >= refIso ? p.startDate : refIso;
        frozenBreakDays += calculateBreakDays(clampedStartIso, endIso, nowMs);
      }
    }
  }

  const shiftedStartMs = Math.min(nowMs, referenceStartMs + frozenBreakDays * dayMs);
  const effectiveWeeksElapsed = Math.max(0, (nowMs - shiftedStartMs) / weekMs);

  return {
    suppressDeloadSuggestion: effectiveWeeksElapsed < 6,
    effectiveReferenceStartMs: shiftedStartMs,
    effectiveWeeksElapsed,
    resetToWeekOne,
    frozenBreakDays,
  };
}

export function sanitizeTrainingBreakPeriod(raw: unknown): TrainingBreakPeriod | null {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  if (!isValidIsoDateString(obj.startDate)) return null;
  const startDate = obj.startDate.trim();
  const endDate =
    isValidIsoDateString(obj.endDate) && obj.endDate.trim() >= startDate
      ? obj.endDate.trim()
      : startDate;
  const category: TrainingBreakCategory =
    obj.category === 'vacation' || obj.category === 'sick' || obj.category === 'other'
      ? obj.category
      : 'other';
  const id =
    typeof obj.id === 'string' && obj.id.trim().length > 0
      ? obj.id.trim().slice(0, 64)
      : `brk-${startDate}`;
  const createdAt =
    typeof obj.createdAt === 'number' && Number.isFinite(obj.createdAt) ? obj.createdAt : Date.now();
  const endedAt =
    typeof obj.endedAt === 'number' && Number.isFinite(obj.endedAt) ? obj.endedAt : undefined;
  const note = typeof obj.note === 'string' ? obj.note.trim().slice(0, 80) : undefined;

  return {
    id,
    category,
    startDate,
    endDate,
    active: false,
    autoDetected: Boolean(obj.autoDetected ?? true),
    endedByWorkout: typeof obj.endedByWorkout === 'boolean' ? obj.endedByWorkout : undefined,
    note,
    createdAt,
    endedAt,
  };
}

export function sanitizeTrainingBreakConfig(raw: unknown): TrainingBreakConfig | null {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return null;
  const obj = raw as Record<string, unknown>;
  const history: TrainingBreakPeriod[] = [];
  if (Array.isArray(obj.history)) {
    for (const item of obj.history) {
      const clean = sanitizeTrainingBreakPeriod(item);
      if (clean) history.push(clean);
    }
  }
  // If an old backup had an activeBreak, migrate it into history so streak protection is preserved without manual pause UI
  const migratedActive = sanitizeTrainingBreakPeriod(obj.activeBreak);
  if (migratedActive) {
    history.push(migratedActive);
  }
  const dismissedGapEndMs =
    typeof obj.dismissedGapEndMs === 'number' && Number.isFinite(obj.dismissedGapEndMs) && obj.dismissedGapEndMs >= 0
      ? obj.dismissedGapEndMs
      : 0;
  const comebackBannerRemainingWorkouts =
    typeof obj.comebackBannerRemainingWorkouts === 'number' &&
    Number.isFinite(obj.comebackBannerRemainingWorkouts)
      ? Math.min(5, Math.max(0, Math.round(obj.comebackBannerRemainingWorkouts)))
      : 0;
  const comebackBannerBreakDays =
    typeof obj.comebackBannerBreakDays === 'number' && Number.isFinite(obj.comebackBannerBreakDays)
      ? Math.min(365, Math.max(0, Math.round(obj.comebackBannerBreakDays)))
      : 0;
  const comebackBannerCategory: TrainingBreakCategory | null =
    obj.comebackBannerCategory === 'vacation' ||
    obj.comebackBannerCategory === 'sick' ||
    obj.comebackBannerCategory === 'other'
      ? obj.comebackBannerCategory
      : null;
  const lastAppOpenedAt =
    typeof obj.lastAppOpenedAt === 'number' && Number.isFinite(obj.lastAppOpenedAt)
      ? obj.lastAppOpenedAt
      : undefined;
  const updatedAt =
    typeof obj.updatedAt === 'number' && Number.isFinite(obj.updatedAt) ? obj.updatedAt : Date.now();

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




