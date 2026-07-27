# Aleph — Learn Modern Hebrew

A browser-based app for learning **Modern conversational Hebrew**, focused on
two things that matter most for a beginner:

1. **The aleph-bet** — all 22 letters plus the 5 final (sofit) forms, with
   pronunciation for English speakers.
2. **Vocabulary that sticks** — flashcards scheduled by a spaced-repetition
   (SM-2) algorithm, so words come back for review right before you'd forget
   them.

Hebrew is rendered right-to-left with nikud (vowel points) as reading aids.
Progress is saved on your device — no account or backend required.

## Running it

```bash
npm install
npm run dev      # start the dev server
npm test         # run the SRS unit tests
npm run build    # type-check and produce a production build
```

## How it's built

- **React + TypeScript + Vite** — fast, no backend needed to start.
- `src/srs.ts` — the spaced-repetition scheduler (unit-tested).
- `src/storage.ts` — progress persistence in `localStorage`. Swap this file
  for an API layer later to add accounts and cross-device sync.
- `src/data/` — the alphabet and vocabulary content.
- `src/components/` — the UI.

## Ideas for next steps

- **Audio** — native-speaker or text-to-speech pronunciation (esp. ח, ע, ר).
- **A nikud toggle** — hide vowel points as the learner advances.
- **More exercise types** — typing, listening, matching, sentence building.
- **Streaks & daily goals** — motivation infrastructure.
- **More vocabulary** — grouped into themed lessons.
- **Accounts & sync** — via the storage layer described above.
