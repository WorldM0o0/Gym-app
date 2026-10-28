/**
 * © 2026 Julian – Alle Rechte vorbehalten.
 * Gym Buddy (Tamagotchi-Feature) – Gekapselte Domänen-, Evolutions-, Farb- und Validierungslogik.
 * Rein positiv (kein Bestrafungssystem), 100 % lokal in IndexedDB, keine externen Assets.
 */

export type PetMood = 'post_workout' | 'happy' | 'idle' | 'reading' | 'sleep';
export type PetStyle = 'cute' | 'progress';
export type EvolutionStage = 1 | 2 | 3 | 4;
export type AccessorySlot = 'head' | 'body' | 'hand';

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
 * 10 Preset-Pets: Exakt 50 % 'cute' (kompakt, glänzende Augen, süßes Lächeln, Sterne auf Stufe 4)
 * und 50 % 'progress' (breiter, muskulöser, selbstbewusstes Grinsen, pulsierende Energie-Aura).
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
    id: 'kettlebell',
    slot: 'hand',
    nameDe: 'Kettlebell',
    nameEn: 'Kettlebell',
    unlockWorkouts: 20,
    unlockRequireLevel: 4,
  },
];

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
  if (xp >= LEVEL_XP_THRESHOLDS[4]) return 4;
  if (xp >= LEVEL_XP_THRESHOLDS[3]) return 3;
  if (xp >= LEVEL_XP_THRESHOLDS[2]) return 2;
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
  const minutes = Math.max(1, Math.round(durationSec / 60));
  const durationBonus = Math.min(60, minutes);
  const streakBonus = Math.min(5, Math.max(1, streakCount)) * 10;
  return base + durationBonus + streakBonus;
}

export function calculateWorkoutStreak(
  completedSessionDatesMs: number[],
  nowMs = Date.now()
): number {
  if (completedSessionDatesMs.length === 0) return 0;
  const sortedDesc = [...completedSessionDatesMs].sort((a, b) => b - a);
  const maxGapMs = 4 * 24 * 60 * 60 * 1000; // 4 days max rest gap for active streak
  if (nowMs - sortedDesc[0] > maxGapMs) return 0;

  // Deduplicate by calendar day (YYYY-MM-DD local)
  const dayStamps: number[] = [];
  const seenDays = new Set<string>();
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
    const diff = dayStamps[i] - dayStamps[i + 1];
    if (diff <= maxGapMs) {
      streak += 1;
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
 * 3. Tagsüber je nach Abstand zum letzten Workout: 'happy' (<= 36h), 'idle' (<= 68h), 'reading' (<= 108h), sonst 'sleep'.
 */
export function determinePositivePetMood(
  lastWorkoutAtMs: number | null,
  nowMs = Date.now()
): PetMood {
  if (lastWorkoutAtMs === null) return 'sleep';
  const hoursSince = Math.max(0, (nowMs - lastWorkoutAtMs) / (1000 * 60 * 60));
  if (hoursSince <= 2) return 'post_workout';
  if (isNightSleepWindow(nowMs)) return 'sleep';
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
  if (totalWorkouts >= acc.unlockWorkouts) return true;
  if (acc.unlockRequireLevel !== undefined && maxPetLevelReached >= acc.unlockRequireLevel) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Color Utilities (HSL <-> Hex & Theme Monochrome)
// ---------------------------------------------------------------------------

export function isValidHexColor(hex: unknown): hex is string {
  return typeof hex === 'string' && /^#[0-9a-fA-F]{6}$/.test(hex.trim());
}

export function getMonochromePetHex(isDarkTheme: boolean): string {
  return isDarkTheme ? '#F2F4F7' : '#1E232B';
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
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
  const hn = (((h % 360) + 360) % 360) / 360;
  const sn = Math.min(100, Math.max(0, s)) / 100;
  const ln = Math.min(100, Math.max(0, l)) / 100;
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
    ? obj.processedSessionIds
        .filter((x): x is string => typeof x === 'string' && x.length > 0 && x.length <= 80)
        .slice(0, 5000)
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
