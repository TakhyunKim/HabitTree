import React from 'react';
import { Text } from 'react-native';

import { WeekViewer } from '../../containers';

import { ScreenContainer } from '../';

const HabitListHome = () => {
  return (
    <ScreenContainer>
      <WeekViewer />
      <Text>HabitListHome</Text>
    </ScreenContainer>
  );
};

export default HabitListHome;
