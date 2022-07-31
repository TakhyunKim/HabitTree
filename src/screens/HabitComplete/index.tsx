import React from 'react';

import { ScreenContainer } from '@screens';

import {
  ScreenHeader,
  HabitComplete as HabitCompleteContainer,
  HabitCompleteSubmit,
} from '@containers';

import { HabitCompleteProp } from './HabitComplete.types';

const HabitComplete = ({ route }: HabitCompleteProp) => {
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="목표 완료" />
      <HabitCompleteContainer {...route.params} />
      <HabitCompleteSubmit />
    </ScreenContainer>
  );
};

export default HabitComplete;
