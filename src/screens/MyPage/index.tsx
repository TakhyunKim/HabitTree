import React from 'react';
import { View } from 'react-native';

import UserInfo from './UserInfo';

import { ScreenContainer } from '@screens';

const MyPage = () => {
  return (
    <ScreenContainer>
      <View style={{ marginTop: 50 }} />
      <UserInfo />
    </ScreenContainer>
  );
};

export default MyPage;
