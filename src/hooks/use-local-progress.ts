
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { Progress } from '@/lib/types';

const LEVEL_THRESHOLDS: Record<string, number> = {
  'JJC': 0,
  'Learner': 100,
  'Web3 Warrior': 500,
  'Oga-in-Chief': 1000,
};
const LEVELS = Object.keys(LEVEL_THRESHOLDS);

function getLevel(xp: number): string {
  let currentLevel = 'JJC';
  for (const level of LEVELS.slice(1)) {
    if (xp >= LEVEL_THRESHOLDS[level]) {
      currentLevel = level;
    } else {
      break;
    }
  }
  return currentLevel;
}


const useLocalProgress = () => {
  const [progress, setProgress] = useState<Progress>({
    xp: 0,
    streak: 0,
    lastVisit: null,
    finishedLessons: [],
    level: 'JJC',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedProgressJSON = localStorage.getItem('naijaWeb3TutorProgress');
      let currentProgress: Progress;

      if (storedProgressJSON) {
        currentProgress = JSON.parse(storedProgressJSON);
      } else {
        // First visit ever
        currentProgress = { xp: 0, streak: 1, lastVisit: new Date().toISOString(), finishedLessons: [], level: 'JJC' };
        localStorage.setItem('naijaWeb3TutorProgress', JSON.stringify(currentProgress));
      }

      // Check and update streak logic
      const today = new Date();
      const lastVisitDate = currentProgress.lastVisit ? new Date(currentProgress.lastVisit) : null;

      if (!lastVisitDate || lastVisitDate.toDateString() !== today.toDateString()) {
          const yesterday = new Date();
          yesterday.setDate(today.getDate() - 1);
          
          if (lastVisitDate && lastVisitDate.toDateString() === yesterday.toDateString()) {
              // Consecutive day visit
              currentProgress.streak += 1;
          } else if (lastVisitDate) {
              // Not a consecutive day, reset streak
              currentProgress.streak = 1;
          }
          currentProgress.lastVisit = today.toISOString();
          localStorage.setItem('naijaWeb3TutorProgress', JSON.stringify(currentProgress));
      }

      // Ensure level is correct
      currentProgress.level = getLevel(currentProgress.xp);
      setProgress(currentProgress);

    } catch (error) {
      console.error("Failed to access localStorage or parse progress", error);
      // Set default progress on error
      setProgress({ xp: 0, streak: 1, lastVisit: new Date().toISOString(), finishedLessons: [], level: 'JJC' });
    }
    setLoading(false);
  }, []);

  const updateProgress = useCallback((newProgressData: Partial<Progress>) => {
    setProgress(prev => {
      const updated = { ...prev, ...newProgressData };
      if (newProgressData.xp !== undefined) {
        updated.level = getLevel(updated.xp);
      }
      try {
        localStorage.setItem('naijaWeb3TutorProgress', JSON.stringify(updated));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      return updated;
    });
  }, []);

  return { progress, updateProgress, loading };
};

export default useLocalProgress;
