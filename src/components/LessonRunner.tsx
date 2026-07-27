import { useMemo, useState } from 'react';
import { Lesson } from '../data/curriculum';
import { ITEMS, itemsByIds } from '../data/items';
import { generateLesson, Exercise } from '../lib/exercises';
import { ChoiceCard } from './ChoiceCard';
import { MatchCard } from './MatchCard';

interface Step {
  id: number;
  ex: Exercise;
}

export function LessonRunner({
  lesson,
  onFinish,
  onQuit,
}: {
  lesson: Lesson;
  onFinish: () => void;
  onQuit: () => void;
}) {
  const initial = useMemo<Step[]>(() => {
    const items = itemsByIds(lesson.itemIds);
    return generateLesson(items, ITEMS).map((ex, id) => ({ id, ex }));
  }, [lesson]);

  const [queue, setQueue] = useState<Step[]>(initial);
  const [mastered, setMastered] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  const total = initial.length;
  const percent = Math.round((mastered.size / total) * 100);
  const step = queue[0];

  function handleDone(correct: boolean) {
    if (!step) return;
    if (correct) {
      const nextMastered = new Set(mastered).add(step.id);
      const rest = queue.slice(1);
      setMastered(nextMastered);
      setQueue(rest);
      if (rest.length === 0) setFinished(true);
    } else {
      // Send the missed exercise to the back so it comes around again.
      setQueue([...queue.slice(1), step]);
    }
  }

  if (finished) {
    return (
      <div className="screen lesson-done">
        <div className="done-emoji">🎉</div>
        <h2>Lesson complete!</h2>
        <p className="done-xp">+10 XP</p>
        <button className="btn btn-primary" onClick={onFinish}>
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="screen lesson">
      <header className="lesson-head">
        <button className="quit" onClick={onQuit} aria-label="Quit lesson">
          ✕
        </button>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${percent}%` }} />
        </div>
      </header>

      <div className="lesson-body">
        {step.ex.kind === 'choice' ? (
          <ChoiceCard key={step.id} exercise={step.ex} onDone={handleDone} />
        ) : (
          <MatchCard key={step.id} exercise={step.ex} onDone={handleDone} />
        )}
      </div>
    </div>
  );
}
