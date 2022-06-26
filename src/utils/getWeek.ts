import { DateInfo } from '../types';

import { getDateRelativeToToday } from './';

const getWeek = (): DateInfo => {
  const today = new Date();

  const yesterday = getDateRelativeToToday(-1);
  const twoDaysAgo = getDateRelativeToToday(-2);
  const threeDaysAgo = getDateRelativeToToday(-3);

  const tomorrow = getDateRelativeToToday(1);
  const twoDaysLater = getDateRelativeToToday(2);
  const threeDaysLater = getDateRelativeToToday(3);

  const dateInfo: DateInfo = {
    일: threeDaysAgo,
    월: twoDaysAgo,
    화: yesterday,
    수: today,
    목: tomorrow,
    금: twoDaysLater,
    토: threeDaysLater,
  };

  return dateInfo;
};

export default getWeek;
