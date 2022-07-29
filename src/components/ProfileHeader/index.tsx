import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ProfileHeaderProps } from './ProfileHeader.types';
import { styles } from './ProfileHeader.styles';

const ProfileHeader = ({
  onCancelClick,
  onCompleteClick,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeaderContainer}>
      <Pressable onPress={onCancelClick}>
        <Text style={styles.cancelText}>취소</Text>
      </Pressable>
      <Text style={styles.profileTitleText}>프로필 수정</Text>
      <Pressable onPress={onCompleteClick}>
        <Text style={styles.completeText}>완료</Text>
      </Pressable>
    </View>
  );
};

export default ProfileHeader;
