import React from 'react';
import { Text } from 'react-native';

import { ScreenContainer } from '../';

import { ScreenHeader } from '../../containers';

const UserStatistics = () => {
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="나의 성공 지표" />
      <Text>UserStatistics</Text>
    </ScreenContainer>
  );
};

export default UserStatistics;
