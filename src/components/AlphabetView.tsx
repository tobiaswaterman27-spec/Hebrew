import { useState } from 'react';
import { ALPHABET, Letter } from '../data/alphabet';

export function AlphabetView() {
  const [selected, setSelected] = useState<Letter | null>(null);

  return (
    <section className="alphabet">
      <h2>The Aleph-Bet</h2>
      <p className="hint">
        Hebrew reads right to left. Tap a letter to hear how it sounds. The five
        highlighted letters are <strong>final forms</strong> — used only at the
        end of a word.
      </p>

      <div className="letter-grid" dir="rtl">
        {ALPHABET.map((letter) => (
          <button
            key={letter.name}
            className={`letter-cell${letter.sofit ? ' sofit' : ''}${
              selected?.name === letter.name ? ' selected' : ''
            }`}
            onClick={() => setSelected(letter)}
          >
            <span className="letter-char">{letter.char}</span>
            <span className="letter-name">{letter.name}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="letter-detail">
          <span className="letter-detail-char">{selected.char}</span>
          <div>
            <h3>{selected.name}</h3>
            <p>
              <strong>Sound:</strong> {selected.sound}
            </p>
            <p>
              <strong>Transliteration:</strong> {selected.transliteration}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
