import React from 'react';

import { ScreenContainer } from '../';

import { ScreenHeader, HabitAdd, DayHabitSubmit } from '../../containers';

import { HabitPlusProp } from './HabitPlus.types';

const HabitPlus = ({ route }: HabitPlusProp) => {
  const { habitPlusOption } = route.params;

  return (
    <ScreenContainer>
      <ScreenHeader
        headerTitle={
          habitPlusOption === 'day'
            ? '오늘 목표 추가하기'
            : '주간 목표 추가하기'
        }
      />
      <HabitAdd habitAddOption={habitPlusOption} />
      <DayHabitSubmit />
    </ScreenContainer>
  );
};

export default HabitPlus;
