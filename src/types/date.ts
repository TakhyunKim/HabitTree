export type Week = '일' | '월' | '화' | '수' | '목' | '금' | '토';

export type DateInfo = {
  [dayOfTheWeek in Week]: Date;
};
