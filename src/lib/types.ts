
export type Track = {
  id: string;
  title: string;
  description: string;
  imageId: string;
};

export type Lesson = {
  id: string;
  trackId: string;
  title: string;
  subtitle: string;
  duration: number;
  xp: number;
  imageId: string;
};

export type Progress = {
  xp: number;
  streak: number;
  lastVisit: string | null;
  finishedLessons: string[];
  level: string;
};
