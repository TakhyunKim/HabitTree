import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { ProfileHeaderProps } from './ProfileHeader.types';
import { styles } from './ProfileHeader.styles';

const ProfileHeader = ({
  onCancelPress,
  onCompletePress,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeaderContainer}>
      <View style={styles.profileHeaderWrapper}>
        <Pressable onPress={onCancelPress}>
          <Text style={styles.cancelText}>취소</Text>
        </Pressable>
        <Text style={styles.profileTitleText}>프로필 수정</Text>
        <Pressable onPress={onCompletePress}>
          <Text style={styles.completeText}>완료</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileHeader;
