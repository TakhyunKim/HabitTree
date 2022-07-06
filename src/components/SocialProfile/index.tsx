import React from 'react';
import { View, Text } from 'react-native';

import { SocialProfileProps } from './SocialProfile.types';

import { styles } from './SocialProfile.styles';

const SocialProfile = ({ userName }: SocialProfileProps) => {
  return (
    <View style={styles.socialProfileContainer}>
      <View style={styles.profile} />
      <Text style={styles.userNameText}>{userName}님</Text>
    </View>
  );
};

export default SocialProfile;
