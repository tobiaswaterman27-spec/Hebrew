// A single pool of learnable "items" — both alphabet letters and vocabulary
// words — so the exercise generator can treat them uniformly. Each item has a
// Hebrew side (`he`) and an English answer (`en`), plus a pronunciation hint.

import { ALPHABET } from './alphabet';
import { VOCABULARY } from './vocabulary';

export type ItemKind = 'letter' | 'word';

export interface Item {
  id: string;
  he: string;
  en: string;
  hint: string; // transliteration / how to say it
  kind: ItemKind;
}

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/(^-|-$)/g, '');
}

// Base letters only (skip the five final forms for the learning pool — they're
// taught as a note rather than as separate flashcard answers).
const letterItems: Item[] = ALPHABET.filter((l) => !l.sofit).map((l) => ({
  id: `ltr-${slug(l.name)}`,
  he: l.char,
  en: l.name,
  hint: l.sound,
  kind: 'letter',
}));

const wordItems: Item[] = VOCABULARY.map((v) => ({
  id: v.id,
  he: v.hebrew,
  en: v.english,
  hint: v.translit,
  kind: 'word',
}));

export const ITEMS: Item[] = [...letterItems, ...wordItems];

const BY_ID = new Map(ITEMS.map((i) => [i.id, i]));

export function itemById(id: string): Item {
  const item = BY_ID.get(id);
  if (!item) throw new Error(`Unknown item id: ${id}`);
  return item;
}

export function itemsByIds(ids: string[]): Item[] {
  return ids.map(itemById);
}
