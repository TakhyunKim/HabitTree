import React from 'react';

import { UserInfo, ScreenHeader } from '../../containers';

import { ScreenContainer } from '../';

const MyPage = () => {
  return (
    <ScreenContainer>
      <ScreenHeader headerTitle="마이페이지" />
      <UserInfo />
    </ScreenContainer>
  );
};

export default MyPage;
