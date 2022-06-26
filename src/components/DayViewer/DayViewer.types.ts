import { Week } from '../../types';

export interface DayViewerProps {
  day: number;
  dayOfTheWeek: Week;
  isTargetDay: boolean;
}
