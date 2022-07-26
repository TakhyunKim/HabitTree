import { startOfWeek, addDays } from 'date-fns';

import { DAY_OF_THE_WEEK_LIST } from '../constants/day';

const getWeek = (date: Date) => {
  let targetDate: Date = startOfWeek(date, { weekStartsOn: 1 }); // 월

  const dateInfo = DAY_OF_THE_WEEK_LIST.map((_, i) => {
    targetDate = i === 0 ? targetDate : addDays(targetDate, 1);

    return targetDate;
  });

  return dateInfo;
};

export default getWeek;
