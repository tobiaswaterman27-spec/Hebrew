import { useMemo, useState } from 'react';
import { VOCABULARY, VocabCard } from '../data/vocabulary';
import { Grade, review, isDue } from '../srs';
import { loadProgress, saveProgress, stateFor, Progress } from '../storage';

// Build the list of cards due for review right now.
function dueQueue(progress: Progress): VocabCard[] {
  const now = Date.now();
  return VOCABULARY.filter((c) => isDue(stateFor(progress, c.id), now));
}

export function FlashcardReview() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [queue, setQueue] = useState<VocabCard[]>(() => dueQueue(loadProgress()));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  const card = queue[index];
  const total = useMemo(() => queue.length, [queue]);

  function grade(g: Grade) {
    if (!card) return;
    const now = Date.now();
    const next = review(stateFor(progress, card.id), g, now);
    const updated = { ...progress, [card.id]: next };
    setProgress(updated);
    saveProgress(updated);
    setReviewedCount((n) => n + 1);

    // If the card is still due (a failed "again"), keep it at the back of the
    // queue so it comes around again this session.
    if (isDue(next, now)) {
      setQueue((q) => [...q.slice(0, index), ...q.slice(index + 1), card]);
    } else {
      setQueue((q) => [...q.slice(0, index), ...q.slice(index + 1)]);
    }
    setIndex(0);
    setRevealed(false);
  }

  if (!card) {
    return (
      <section className="review done">
        <h2>Nice work! 🎉</h2>
        <p>
          {reviewedCount > 0
            ? `You reviewed ${reviewedCount} card${reviewedCount === 1 ? '' : 's'}.`
            : 'No cards are due right now.'}
        </p>
        <p className="hint">Come back later and spaced repetition will bring the right cards back at the right time.</p>
      </section>
    );
  }

  return (
    <section className="review">
      <div className="review-progress">
        {reviewedCount + 1} · {total} left
      </div>

      <div className="flashcard" onClick={() => setRevealed(true)}>
        <span className="card-hebrew" dir="rtl" lang="he">
          {card.hebrew}
        </span>

        {revealed ? (
          <div className="card-back">
            <span className="card-translit">{card.translit}</span>
            <span className="card-english">{card.english}</span>
            <span className="card-category">{card.category}</span>
          </div>
        ) : (
          <span className="card-tap">tap to reveal</span>
        )}
      </div>

      {revealed ? (
        <div className="grade-buttons">
          <button className="g-again" onClick={() => grade('again')}>
            Again
          </button>
          <button className="g-good" onClick={() => grade('good')}>
            Good
          </button>
          <button className="g-easy" onClick={() => grade('easy')}>
            Easy
          </button>
        </div>
      ) : (
        <button className="reveal-btn" onClick={() => setRevealed(true)}>
          Show answer
        </button>
      )}
    </section>
  );
}
