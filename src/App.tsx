import { useState } from 'react';
import { AlphabetView } from './components/AlphabetView';
import { FlashcardReview } from './components/FlashcardReview';
import { Home } from './components/Home';

export type View = 'home' | 'alphabet' | 'review';

export function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')}>
          <span className="brand-heb">א</span> Aleph
        </button>
        <nav>
          <button
            className={view === 'alphabet' ? 'active' : ''}
            onClick={() => setView('alphabet')}
          >
            Aleph-Bet
          </button>
          <button
            className={view === 'review' ? 'active' : ''}
            onClick={() => setView('review')}
          >
            Review
          </button>
        </nav>
      </header>

      <main>
        {view === 'home' && <Home onNavigate={setView} />}
        {view === 'alphabet' && <AlphabetView />}
        {view === 'review' && <FlashcardReview />}
      </main>

      <footer className="foot">
        Modern Hebrew · spaced-repetition practice · progress saved on this device
      </footer>
    </div>
  );
}
