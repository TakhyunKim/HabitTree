import React from 'react';

import { ScreenContainer } from '@screens';

import { ScreenHeader } from '@containers';

import { HabitCompleteProp } from './HabitComplete.types';

import HabitCompleteSubmit from './HabitCompleteSubmit';
import HabitCompleteContainer from './HabitCompleteContainer';

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
