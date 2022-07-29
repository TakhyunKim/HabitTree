import React from 'react';
import { View } from 'react-native';

import { ProfileEdit as ProfileEditContainer } from '../../containers';

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
