import { describe, it, expect } from 'vitest';
import {
  completeLesson,
  isLessonUnlocked,
  isLessonComplete,
  Progress,
} from './progress';
import { LESSONS_IN_ORDER } from '../data/curriculum';

const fresh: Progress = { completed: [], xp: 0, streak: 0, lastDay: '' };

describe('progress', () => {
  it('only the first lesson is unlocked initially', () => {
    expect(isLessonUnlocked(fresh, LESSONS_IN_ORDER[0].id)).toBe(true);
    expect(isLessonUnlocked(fresh, LESSONS_IN_ORDER[1].id)).toBe(false);
  });

  it('completing a lesson awards XP and unlocks the next', () => {
    const p = completeLesson(fresh, LESSONS_IN_ORDER[0].id, new Date('2026-01-01'));
    expect(p.xp).toBe(10);
    expect(isLessonComplete(p, LESSONS_IN_ORDER[0].id)).toBe(true);
    expect(isLessonUnlocked(p, LESSONS_IN_ORDER[1].id)).toBe(true);
  });

  it('starts a streak at 1 on the first day', () => {
    const p = completeLesson(fresh, 'x', new Date('2026-01-01'));
    expect(p.streak).toBe(1);
  });

  it('increments the streak on a consecutive day', () => {
    let p = completeLesson(fresh, 'a', new Date('2026-01-01'));
    p = completeLesson(p, 'b', new Date('2026-01-02'));
    expect(p.streak).toBe(2);
  });

  it('resets the streak after a missed day', () => {
    let p = completeLesson(fresh, 'a', new Date('2026-01-01'));
    p = completeLesson(p, 'b', new Date('2026-01-05'));
    expect(p.streak).toBe(1);
  });

  it('does not double-count the same lesson', () => {
    let p = completeLesson(fresh, 'a', new Date('2026-01-01'));
    p = completeLesson(p, 'a', new Date('2026-01-01'));
    expect(p.completed.filter((id) => id === 'a')).toHaveLength(1);
  });
});
