import React from 'react';
import { View } from 'react-native';

import SocialProfile from './SocialProfile';

import { styles } from './SocialProfiles.styles';

const SocialProfiles = () => {
  return (
    <View style={styles.socialContainer}>
      <SocialProfile userName="승빈" />
      <SocialProfile userName="탁현" />
      <SocialProfile userName="종헌" />
      <SocialProfile userName="원" />
      <SocialProfile userName="호섭" />
    </View>
  );
};

export default SocialProfiles;
