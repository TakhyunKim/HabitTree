import React from 'react';

import { HabitList, WeekViewer } from '../../containers';

import { ScreenContainer } from '../';

const HabitListHome = () => {
  return (
    <ScreenContainer>
      <WeekViewer />
      <HabitList />
    </ScreenContainer>
  );
};

export default HabitListHome;
