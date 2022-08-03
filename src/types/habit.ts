export type HabitPlusOption = 'week' | 'day';

export interface HabitItem {
  date: Date;
  isPrivate: boolean;
  isComplete: boolean;
  description: string;
  title: string;
}

export interface Habit {
  date: Date;
  isPrivate: boolean;
  isComplete: boolean;
  description: string;
  title: string;
  user: string;
  mainImage: string;
  images: string[];
}
