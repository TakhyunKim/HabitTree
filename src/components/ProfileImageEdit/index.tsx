import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ProfileImageEditProps } from './ProfileImageEdit.types';
import { styles } from './ProfileImageEdit.styles';

const ProfileImageEdit = ({ onPress }: ProfileImageEditProps) => {
  return (
    <View style={styles.profileImageEditContainer}>
      <View style={styles.profileWrapper} />
      <Pressable onPress={onPress}>
        <Text style={styles.profileEditText}>프로필 사진 변경</Text>
      </Pressable>
    </View>
  );
};

export default ProfileImageEdit;
