import { addWeeks, subWeeks } from 'date-fns';

import { getWeek } from '@utils';

export const getThreeWeeks = (date: Date) => {
  const prevWeek = getWeek(subWeeks(date, 1));
  const currentWeek = getWeek(date);
  const nextWeek = getWeek(addWeeks(date, 1));

  return [prevWeek, currentWeek, nextWeek];
};
