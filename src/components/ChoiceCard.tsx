import { useState } from 'react';
import { ChoiceExercise } from '../lib/exercises';
import { Item } from '../data/items';

// "Show one side, pick the matching side from four options."
export function ChoiceCard({
  exercise,
  onDone,
}: {
  exercise: ChoiceExercise;
  onDone: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<Item | null>(null);
  const [checked, setChecked] = useState(false);

  const heToEn = exercise.direction === 'he-en';
  const promptText = heToEn ? exercise.item.he : exercise.item.en;
  const isCorrect = selected?.id === exercise.item.id;

  function optionLabel(o: Item): string {
    return heToEn ? o.en : o.he;
  }

  function optionState(o: Item): string {
    if (!checked) return selected?.id === o.id ? ' picked' : '';
    if (o.id === exercise.item.id) return ' right';
    if (selected?.id === o.id) return ' wrong';
    return '';
  }

  return (
    <div className="exercise">
      <h2 className="prompt-title">
        {heToEn ? 'What does this mean?' : 'Choose the Hebrew'}
      </h2>

      <div className={`prompt ${heToEn ? 'prompt-he' : ''}`} dir={heToEn ? 'rtl' : 'ltr'} lang={heToEn ? 'he' : undefined}>
        {promptText}
      </div>

      <div className="options">
        {exercise.options.map((o) => (
          <button
            key={o.id}
            className={`option${optionState(o)}`}
            disabled={checked}
            onClick={() => setSelected(o)}
            dir={heToEn ? 'ltr' : 'rtl'}
            lang={heToEn ? undefined : 'he'}
          >
            {optionLabel(o)}
          </button>
        ))}
      </div>

      <div className={`footer ${checked ? (isCorrect ? 'ok' : 'no') : ''}`}>
        {checked && (
          <div className="feedback">
            {isCorrect ? (
              <span className="fb-title">Correct!</span>
            ) : (
              <span className="fb-title">
                Answer: {heToEn ? exercise.item.en : exercise.item.he} · {exercise.item.hint}
              </span>
            )}
          </div>
        )}

        {!checked ? (
          <button
            className="btn btn-primary"
            disabled={!selected}
            onClick={() => setChecked(true)}
          >
            Check
          </button>
        ) : (
          <button
            className={`btn ${isCorrect ? 'btn-ok' : 'btn-no'}`}
            onClick={() => onDone(isCorrect)}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
