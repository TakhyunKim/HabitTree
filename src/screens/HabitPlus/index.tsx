import React from 'react';

import { ScreenContainer } from '../';

import { ScreenHeader, HabitAdd, DayHabitSubmit } from '../../containers';

const HabitPlus = () => {
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="오늘 목표 추가하기" />
      <HabitAdd />
      <DayHabitSubmit />
    </ScreenContainer>
  );
};

export default HabitPlus;
