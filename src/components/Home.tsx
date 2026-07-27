import { useMemo } from 'react';
import { View } from '../App';
import { VOCABULARY } from '../data/vocabulary';
import { loadProgress, stateFor } from '../storage';
import { isDue } from '../srs';

export function Home({ onNavigate }: { onNavigate: (v: View) => void }) {
  const { dueCount, started } = useMemo(() => {
    const progress = loadProgress();
    const now = Date.now();
    let due = 0;
    for (const card of VOCABULARY) {
      if (isDue(stateFor(progress, card.id), now)) due++;
    }
    return { dueCount: due, started: Object.keys(progress).length };
  }, []);

  return (
    <section className="home">
      <h1>
        Learn to <em>speak</em> Modern Hebrew
      </h1>
      <p className="lede">
        Start with the aleph-bet, then build a vocabulary that sticks with
        spaced repetition.
      </p>

      <div className="cards">
        <button className="tile" onClick={() => onNavigate('alphabet')}>
          <span className="tile-heb">א ב ג</span>
          <span className="tile-title">The Aleph-Bet</span>
          <span className="tile-sub">22 letters &amp; final forms, with sounds</span>
        </button>

        <button className="tile" onClick={() => onNavigate('review')}>
          <span className="tile-heb">שָׁלוֹם</span>
          <span className="tile-title">Vocabulary Review</span>
          <span className="tile-sub">
            {dueCount > 0
              ? `${dueCount} card${dueCount === 1 ? '' : 's'} due now`
              : started > 0
                ? 'All caught up — come back later'
                : `${VOCABULARY.length} words to learn`}
          </span>
        </button>
      </div>
    </section>
  );
}
