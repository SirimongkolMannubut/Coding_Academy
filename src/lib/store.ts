import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
  xp: number;
  level: number;
  badges: string[];
  progress: {
    javascript: number;
    git: number;
    mysql: number;
  };
  completedLessons: string[];
  addXp: (amount: number) => void;
  addBadge: (badge: string) => void;
  completeLesson: (lessonId: string, course: 'javascript' | 'git' | 'mysql', courseProgress: number) => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      xp: 0,
      level: 1,
      badges: [],
      progress: {
        javascript: 0,
        git: 0,
        mysql: 0,
      },
      completedLessons: [],
      addXp: (amount) =>
        set((state) => {
          const newXp = state.xp + amount;
          const newLevel = Math.floor(newXp / 1000) + 1; // 1000 XP per level
          return { xp: newXp, level: newLevel };
        }),
      addBadge: (badge) =>
        set((state) => ({
          badges: state.badges.includes(badge) ? state.badges : [...state.badges, badge],
        })),
      completeLesson: (lessonId, course, courseProgress) =>
        set((state) => {
          if (state.completedLessons.includes(lessonId)) return state;
          
          return {
            completedLessons: [...state.completedLessons, lessonId],
            progress: {
              ...state.progress,
              [course]: courseProgress,
            },
          };
        }),
    }),
    {
      name: 'academy-storage',
    }
  )
);
