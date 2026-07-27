// A lightweight spaced-repetition scheduler based on the SM-2 algorithm.
// Each review returns an updated card state; cards become "due" once the
// current time passes `dueAt`. Grades are simplified to three buttons that
// map onto SM-2 quality scores.

export type Grade = 'again' | 'good' | 'easy';

export interface SrsState {
  // Number of times the card has been recalled correctly in a row.
  repetitions: number;
  // Ease factor — how quickly intervals grow. Never drops below 1.3.
  ease: number;
  // Current interval in days.
  interval: number;
  // Epoch milliseconds when the card is next due.
  dueAt: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;

export function initialState(now: number = Date.now()): SrsState {
  return { repetitions: 0, ease: 2.5, interval: 0, dueAt: now };
}

// SM-2 quality values for our three-button grading.
const QUALITY: Record<Grade, number> = { again: 2, good: 4, easy: 5 };

export function review(
  state: SrsState,
  grade: Grade,
  now: number = Date.now(),
): SrsState {
  const quality = QUALITY[grade];

  // A failed recall resets the learning streak but keeps the card in rotation
  // for the same day (a short 10-minute relearning step).
  if (quality < 3) {
    return {
      repetitions: 0,
      ease: Math.max(MIN_EASE, state.ease - 0.2),
      interval: 0,
      dueAt: now + 10 * 60 * 1000,
    };
  }

  const repetitions = state.repetitions + 1;

  let interval: number;
  if (repetitions === 1) {
    interval = 1;
  } else if (repetitions === 2) {
    interval = 6;
  } else {
    interval = Math.round(state.interval * state.ease);
  }

  // Standard SM-2 ease adjustment, clamped so cards never spiral too fast.
  const ease = Math.max(
    MIN_EASE,
    state.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  return { repetitions, ease, interval, dueAt: now + interval * DAY_MS };
}

export function isDue(state: SrsState, now: number = Date.now()): boolean {
  return state.dueAt <= now;
}
