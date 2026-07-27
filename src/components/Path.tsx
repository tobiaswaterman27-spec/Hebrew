import { CURRICULUM, Lesson } from '../data/curriculum';
import { Progress, isLessonUnlocked, isLessonComplete } from '../lib/progress';

export function Path({
  progress,
  onStartLesson,
}: {
  progress: Progress;
  onStartLesson: (lesson: Lesson) => void;
}) {
  return (
    <div className="screen">
      <header className="stats">
        <div className="stat">
          <span className="stat-icon">🔥</span>
          <span className="stat-num">{progress.streak}</span>
        </div>
        <div className="brand">
          <span className="brand-heb">א</span> Aleph
        </div>
        <div className="stat">
          <span className="stat-icon">⭐</span>
          <span className="stat-num">{progress.xp}</span>
        </div>
      </header>

      <main className="path">
        {CURRICULUM.map((unit) => (
          <section key={unit.id} className="unit">
            <div className="unit-banner" style={{ background: unit.color }}>
              {unit.title}
            </div>

            <div className="lessons">
              {unit.lessons.map((lesson, i) => {
                const done = isLessonComplete(progress, lesson.id);
                const unlocked = isLessonUnlocked(progress, lesson.id);
                // Gentle left/right offset so the path reads as a winding trail.
                const offset = [0, 34, 48, 34, 0, -34, -48, -34][i % 8];
                return (
                  <div
                    className="lesson-row"
                    key={lesson.id}
                    style={{ transform: `translateX(${offset}px)` }}
                  >
                    <button
                      className={`node ${done ? 'done' : unlocked ? 'open' : 'locked'}`}
                      style={done || unlocked ? { background: unit.color } : undefined}
                      disabled={!unlocked}
                      onClick={() => onStartLesson(lesson)}
                      aria-label={lesson.title}
                    >
                      {done ? '✓' : unlocked ? '★' : '🔒'}
                    </button>
                    <span className="lesson-label">{lesson.title}</span>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
        <div className="path-end">More coming soon · keep your streak alive!</div>
      </main>
    </div>
  );
}
