import React from 'react';

import HabitList from './HabitList';
import WeekViewer from './WeekViewer';
import HabitPlusButtons from './HabitPlusButtons';

import { ScreenContainer } from '@screens';

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
