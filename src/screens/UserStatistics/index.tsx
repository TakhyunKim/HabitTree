import React from 'react';

import { ScreenContainer } from '../';

import { ScreenHeader, Statistics } from '../../containers';

const UserStatistics = () => {
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="나의 성공 지표" />
      <Statistics />
    </ScreenContainer>
  );
};

export default UserStatistics;
