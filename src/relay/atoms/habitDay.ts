import { atom } from 'recoil';

export const habitDay = atom<Date>({
  key: 'habitDayState',
  default: new Date(),
});
