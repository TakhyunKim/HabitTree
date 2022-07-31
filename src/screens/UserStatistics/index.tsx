import React from 'react';
import { View } from 'react-native';

import { ScreenContainer } from '@screens';

import Statistics from './Statistics';

import { styles } from './UserStatistics.styles';

const UserStatistics = () => {
  return (
    <ScreenContainer>
      <View style={styles.growingTreeContainer}>
        <Statistics />
      </View>
    </ScreenContainer>
  );
};

export default UserStatistics;
