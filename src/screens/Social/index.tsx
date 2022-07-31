import React from 'react';
import { Text, View } from 'react-native';

import SocialProfiles from './SocialProfiles';
import SocialContentsList from './SocialContentsList';

import { ScreenContainer } from '@screens';

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
