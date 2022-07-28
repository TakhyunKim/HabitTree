import React from 'react';
import { View, Text, Pressable, Button } from 'react-native';

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
      <Button title="완료" onPress={onCompleteClick} />
    </View>
  );
};

export default ProfileHeader;
