import { selector } from 'recoil';

import { habitDay } from '../atoms';

import { habitList as mockHabitList } from '../../mocks/habitList';

export const filteredHabitListState = selector({
  key: 'filteredHabitListState',
  get: ({ get }) => {
    const today = get(habitDay);
    const date = today.getDate();

    const filteredHabitList = mockHabitList[date];

    return filteredHabitList;
  },
});
