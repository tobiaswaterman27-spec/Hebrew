// Turns a lesson's items into a sequence of interactive exercises, the way a
// Duolingo lesson mixes question types. Two kinds:
//   - choice: show one side, pick the matching side from four options
//   - match:  tap Hebrew/English pairs until they're all matched
// Distractors are drawn from a wider pool so wrong options are plausible.

import { Item } from '../data/items';

export type Direction = 'he-en' | 'en-he';

export interface ChoiceExercise {
  kind: 'choice';
  direction: Direction;
  item: Item;
  options: Item[]; // includes the correct item, shuffled
}

export interface MatchExercise {
  kind: 'match';
  items: Item[];
}

export type Exercise = ChoiceExercise | MatchExercise;

// A small seedable PRNG so exercise order is stable within a lesson attempt
// but varies between attempts. (Mulberry32.)
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(
  answer: Item,
  pool: Item[],
  count: number,
  rand: () => number,
): Item[] {
  // Prefer distractors of the same kind (letters vs words) so options feel
  // coherent; fall back to the whole pool if there aren't enough.
  const sameKind = pool.filter((i) => i.id !== answer.id && i.kind === answer.kind);
  const rest = pool.filter((i) => i.id !== answer.id && i.kind !== answer.kind);
  const ordered = [...shuffle(sameKind, rand), ...shuffle(rest, rand)];
  return ordered.slice(0, count);
}

export function generateLesson(
  items: Item[],
  distractorPool: Item[],
  seed: number = Date.now(),
): Exercise[] {
  const rand = rng(seed);
  const exercises: Exercise[] = [];

  // One choice exercise per item, alternating direction.
  const order = shuffle(items, rand);
  order.forEach((item, idx) => {
    const direction: Direction = idx % 2 === 0 ? 'he-en' : 'en-he';
    const distractors = pickDistractors(item, distractorPool, 3, rand);
    const options = shuffle([item, ...distractors], rand);
    exercises.push({ kind: 'choice', direction, item, options });
  });

  // A single matching exercise over the lesson's items (capped at 5 pairs)
  // inserted in the middle to break up the choice questions.
  if (items.length >= 3) {
    const matchItems = shuffle(items, rand).slice(0, Math.min(5, items.length));
    const midpoint = Math.floor(exercises.length / 2);
    exercises.splice(midpoint, 0, { kind: 'match', items: matchItems });
  }

  return exercises;
}
