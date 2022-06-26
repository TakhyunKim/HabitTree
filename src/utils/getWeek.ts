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
    일: threeDaysAgo.getDate(),
    월: twoDaysAgo.getDate(),
    화: yesterday.getDate(),
    수: today.getDate(),
    목: tomorrow.getDate(),
    금: twoDaysLater.getDate(),
    토: threeDaysLater.getDate(),
  };

  return dateInfo;
};

export default getWeek;
