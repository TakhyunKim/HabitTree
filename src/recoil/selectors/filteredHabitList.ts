import { selector } from 'recoil';

import { habitDay } from '../atoms';

import {
  habitList as mockHabitList,
  mockHabitItemList,
} from '../../mocks/habitList';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const filteredHabitListState = selector({
  key: 'filteredHabitListState',
  get: ({ get }) => {
    const today = get(habitDay);
    const date = today.getDate();

    const filteredHabitList =
      mockHabitList[date] ?? mockHabitItemList[getRandomInt(6)];

    return filteredHabitList;
  },
});
