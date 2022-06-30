import React from 'react';
import { View, Text } from 'react-native';

import { ProfileProps } from './Profile.types';
import { styles } from './Profile.styles';

const Profile = ({ name, plantGrade, plantHeight }: ProfileProps) => {
  return (
    <View style={styles().profileContainer}>
      <View style={styles(50).profileImage} />
      <View style={styles(45).profileTextContainer}>
        <Text style={styles().profileNameText}>{`${name} 님`}</Text>
        <Text
          style={styles().profilePlantText}>{`${plantGrade} ${plantHeight} ${
          plantGrade === '나무' ? 'm' : 'mm'
        }`}</Text>
      </View>
    </View>
  );
};

export default Profile;
