import { describe, it, expect } from 'vitest';
import { initialState, review, isDue } from './srs';

describe('srs', () => {
  const now = 1_000_000_000_000;

  it('a new card is due immediately', () => {
    expect(isDue(initialState(now), now)).toBe(true);
  });

  it('grades "good" schedule growing intervals', () => {
    let s = initialState(now);
    s = review(s, 'good', now);
    expect(s.interval).toBe(1);
    s = review(s, 'good', now);
    expect(s.interval).toBe(6);
    s = review(s, 'good', now);
    expect(s.interval).toBeGreaterThan(6);
  });

  it('"again" resets the streak and re-shows the card soon', () => {
    let s = initialState(now);
    s = review(s, 'good', now);
    s = review(s, 'again', now);
    expect(s.repetitions).toBe(0);
    expect(s.interval).toBe(0);
    // Due again in about 10 minutes, not a full day.
    expect(s.dueAt - now).toBeLessThan(60 * 60 * 1000);
  });

  it('ease never drops below the floor', () => {
    let s = initialState(now);
    for (let i = 0; i < 20; i++) s = review(s, 'again', now);
    expect(s.ease).toBeGreaterThanOrEqual(1.3);
  });

  it('"easy" grows ease faster than "good"', () => {
    const good = review(initialState(now), 'good', now);
    const easy = review(initialState(now), 'easy', now);
    expect(easy.ease).toBeGreaterThan(good.ease);
  });
});
