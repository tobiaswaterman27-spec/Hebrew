import { useMemo, useState } from 'react';
import { MatchExercise } from '../lib/exercises';
import { Item } from '../data/items';

type Side = 'he' | 'en';

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// "Tap the matching Hebrew and English pairs until they're all matched."
export function MatchCard({
  exercise,
  onDone,
}: {
  exercise: MatchExercise;
  onDone: (correct: boolean) => void;
}) {
  const heCol = useMemo(() => shuffled(exercise.items), [exercise]);
  const enCol = useMemo(() => shuffled(exercise.items), [exercise]);

  const [pickedHe, setPickedHe] = useState<Item | null>(null);
  const [pickedEn, setPickedEn] = useState<Item | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const allMatched = matched.size === exercise.items.length;

  function choose(side: Side, item: Item) {
    if (matched.has(item.id)) return;
    setWrongPair(null);
    const he = side === 'he' ? item : pickedHe;
    const en = side === 'en' ? item : pickedEn;
    if (side === 'he') setPickedHe(item);
    else setPickedEn(item);

    if (he && en) {
      if (he.id === en.id) {
        setMatched((m) => new Set(m).add(he.id));
      } else {
        setWrongPair(he.id + '|' + en.id);
        setMistakes((n) => n + 1);
      }
      setPickedHe(null);
      setPickedEn(null);
    }
  }

  function cellClass(side: Side, item: Item): string {
    if (matched.has(item.id)) return ' matched';
    const picked = side === 'he' ? pickedHe : pickedEn;
    if (picked?.id === item.id) return ' picked';
    if (wrongPair && wrongPair.split('|').includes(item.id)) return ' bad';
    return '';
  }

  return (
    <div className="exercise">
      <h2 className="prompt-title">Match the pairs</h2>

      <div className="match-grid">
        <div className="match-col">
          {heCol.map((it) => (
            <button
              key={it.id}
              className={`match-cell${cellClass('he', it)}`}
              disabled={matched.has(it.id)}
              onClick={() => choose('he', it)}
              dir="rtl"
              lang="he"
            >
              {it.he}
            </button>
          ))}
        </div>
        <div className="match-col">
          {enCol.map((it) => (
            <button
              key={it.id}
              className={`match-cell${cellClass('en', it)}`}
              disabled={matched.has(it.id)}
              onClick={() => choose('en', it)}
            >
              {it.en}
            </button>
          ))}
        </div>
      </div>

      <div className={`footer ${allMatched ? 'ok' : ''}`}>
        {allMatched && (
          <div className="feedback">
            <span className="fb-title">
              {mistakes === 0 ? 'Perfect match!' : 'All matched!'}
            </span>
          </div>
        )}
        <button
          className="btn btn-primary"
          disabled={!allMatched}
          onClick={() => onDone(mistakes === 0)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
