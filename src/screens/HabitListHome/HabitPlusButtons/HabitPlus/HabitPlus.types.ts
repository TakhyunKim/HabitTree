import { ReactNode } from 'react';

export interface HabitPlusProps {
  children?: ReactNode;
  backgroundColor: string;
  onPress: () => void;
}
