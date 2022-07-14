import React from 'react';
import { View } from 'react-native';

import { ScreenContainer } from '../';

import { Statistics } from '../../containers';

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
