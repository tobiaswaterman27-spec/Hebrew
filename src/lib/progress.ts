// Player progress: which lessons are done, total XP, and a daily streak.
// Persisted in localStorage so there's no backend. Swap this module for an API
// layer later to add accounts and sync.

import { LESSONS_IN_ORDER } from '../data/curriculum';

const KEY = 'aleph.progress.v2';
const XP_PER_LESSON = 10;

export interface Progress {
  completed: string[]; // lesson ids
  xp: number;
  streak: number;
  lastDay: string; // YYYY-MM-DD of last completed lesson
}

const EMPTY: Progress = { completed: [], xp: 0, streak: 0, lastDay: '' };

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...EMPTY, ...(JSON.parse(raw) as Progress) } : { ...EMPTY };
  } catch {
    return { ...EMPTY };
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // Storage unavailable — progress simply isn't persisted.
  }
}

function dayString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function dayDiff(a: string, b: string): number {
  const ms = new Date(b + 'T00:00:00Z').getTime() - new Date(a + 'T00:00:00Z').getTime();
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

// Returns updated progress after finishing a lesson. Pure so it can be tested.
export function completeLesson(
  p: Progress,
  lessonId: string,
  now: Date = new Date(),
): Progress {
  const today = dayString(now);
  const alreadyDone = p.completed.includes(lessonId);

  let streak = p.streak;
  if (p.lastDay === '') {
    streak = 1;
  } else {
    const diff = dayDiff(p.lastDay, today);
    if (diff === 1) streak = p.streak + 1;
    else if (diff > 1) streak = 1;
    // diff === 0 (same day) leaves the streak unchanged.
  }

  return {
    completed: alreadyDone ? p.completed : [...p.completed, lessonId],
    xp: p.xp + XP_PER_LESSON,
    streak,
    lastDay: today,
  };
}

// A lesson is unlocked if it's the first, or the previous lesson is complete.
export function isLessonUnlocked(p: Progress, lessonId: string): boolean {
  const idx = LESSONS_IN_ORDER.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;
  return p.completed.includes(LESSONS_IN_ORDER[idx - 1].id);
}

export function isLessonComplete(p: Progress, lessonId: string): boolean {
  return p.completed.includes(lessonId);
}
