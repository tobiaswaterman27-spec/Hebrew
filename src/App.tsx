import { useState } from 'react';
import { Path } from './components/Path';
import { LessonRunner } from './components/LessonRunner';
import { Lesson } from './data/curriculum';
import { loadProgress, saveProgress, completeLesson, Progress } from './lib/progress';

export function App() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  function handleFinish(lesson: Lesson) {
    const updated = completeLesson(progress, lesson.id);
    setProgress(updated);
    saveProgress(updated);
    setActiveLesson(null);
  }

  if (activeLesson) {
    return (
      <LessonRunner
        lesson={activeLesson}
        onFinish={() => handleFinish(activeLesson)}
        onQuit={() => setActiveLesson(null)}
      />
    );
  }

  return <Path progress={progress} onStartLesson={setActiveLesson} />;
}
