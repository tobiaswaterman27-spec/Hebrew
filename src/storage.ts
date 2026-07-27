// Persistence for SRS progress. Progress lives in localStorage keyed by card
// id, so there is no backend and everything works offline. Swapping this file
// for an API layer later would add account sync without touching the UI.

import { SrsState, initialState } from './srs';

const KEY = 'aleph.progress.v1';

export type Progress = Record<string, SrsState>;

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    // Storage full or unavailable — progress simply isn't persisted.
  }
}

export function stateFor(progress: Progress, id: string): SrsState {
  return progress[id] ?? initialState();
}
