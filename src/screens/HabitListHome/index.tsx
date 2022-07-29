import React from 'react';

import { HabitList, WeekViewer, HabitPlusButtons } from '../../containers';

import { ScreenContainer } from '../';

const HabitListHome = () => {
  return (
    <ScreenContainer>
      <WeekViewer />
      <HabitList />
      <HabitPlusButtons />
    </ScreenContainer>
  );
};

export default HabitListHome;
