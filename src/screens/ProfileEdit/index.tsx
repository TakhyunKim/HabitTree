import React from 'react';
import { View } from 'react-native';

import { ProfileHeader } from '../../containers';

import { ScreenContainer } from '../';

const ProfileEdit = () => {
  return (
    <ScreenContainer>
      <View style={{ marginTop: 50 }} />
      <ProfileHeader />
    </ScreenContainer>
  );
};

export default ProfileEdit;
