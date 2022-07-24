import { startOfWeek } from 'date-fns';

import { DAY_OF_THE_WEEK_LIST } from '../constants/day';

type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const getWeek = (date: Date) => {
  const dateInfo = DAY_OF_THE_WEEK_LIST.map((day, i) => {
    const currentDayIndex = (day === '일' ? 0 : i + 1) as DayIndex;
    return startOfWeek(date, { weekStartsOn: currentDayIndex });
  });

  return dateInfo;
};

export default getWeek;
