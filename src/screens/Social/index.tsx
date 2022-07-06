import React from 'react';
import { Text, View } from 'react-native';

import { SocialProfiles, SocialContentsList } from '../../containers';

import { ScreenContainer } from '../';

const Social = () => {
  return (
    <ScreenContainer>
      <View style={{ marginTop: 50 }} />
      <SocialProfiles />
      <SocialContentsList />
      <Text>Social</Text>
    </ScreenContainer>
  );
};

export default Social;
