import { describe, it, expect } from 'vitest';
import { generateLesson, ChoiceExercise } from './exercises';
import { ITEMS, itemsByIds } from '../data/items';

const lessonItems = itemsByIds(['shalom', 'toda', 'ken', 'lo']);

describe('generateLesson', () => {
  it('creates a choice exercise for every item', () => {
    const ex = generateLesson(lessonItems, ITEMS, 1);
    const choices = ex.filter((e) => e.kind === 'choice') as ChoiceExercise[];
    expect(choices).toHaveLength(lessonItems.length);
  });

  it('includes a matching exercise when there are enough items', () => {
    const ex = generateLesson(lessonItems, ITEMS, 1);
    expect(ex.some((e) => e.kind === 'match')).toBe(true);
  });

  it('every choice includes its correct answer among four options', () => {
    const ex = generateLesson(lessonItems, ITEMS, 42);
    for (const e of ex) {
      if (e.kind !== 'choice') continue;
      expect(e.options).toHaveLength(4);
      expect(e.options.map((o) => o.id)).toContain(e.item.id);
    }
  });

  it('choice options are all distinct', () => {
    const ex = generateLesson(lessonItems, ITEMS, 7);
    for (const e of ex) {
      if (e.kind !== 'choice') continue;
      const ids = e.options.map((o) => o.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});
