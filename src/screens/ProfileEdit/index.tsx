import React from 'react';
import { View } from 'react-native';

import ProfileEditContainer from './ProfileEditContainer';

import { ScreenContainer } from '../';

const ProfileEdit = () => {
  return (
    <ScreenContainer>
      <View style={{ marginTop: 50 }} />
      <ProfileEditContainer />
    </ScreenContainer>
  );
};

export default ProfileEdit;
