import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import ProfileHeader from './ProfileHeader';
import ProfileTextInfo from './ProfileTextInfo';
import ProfileImageEdit from './ProfileImageEdit';

import { NavigationProp } from '@types';

import { styles } from './ProfileEdit.styles';

const ProfileEdit = () => {
  const [name, setName] = useState<string>('김탁현');
  const [introduce, setIntroduce] = useState<string>('저는 잠을 좋아합니다');

  const navigation = useNavigation<NavigationProp>();

  const handleCancelPress = () => {
    const popAction = StackActions.pop();

    navigation.dispatch(popAction);
  };

  const handleCompletePress = () => {
    const popAction = StackActions.pop();

    navigation.dispatch(popAction);
  };

  const handleProfileEditPress = () => {
    console.log('profileEdit');
  };

  return (
    <View style={styles.profileEditContainer}>
      <View style={styles.profileHeaderWrapper}>
        <ProfileHeader
          onCancelPress={handleCancelPress}
          onCompletePress={handleCompletePress}
        />
      </View>
      <ProfileImageEdit
        profile="profile_image_url"
        onPress={handleProfileEditPress}
      />
      <ProfileTextInfo
        name="이름"
        value={name}
        placeHolder="이름을 입력해주세요"
        onChange={setName}
      />
      <ProfileTextInfo
        name="나의 습관 소개"
        value={introduce}
        placeHolder="이름을 입력해주세요"
        onChange={setIntroduce}
      />
    </View>
  );
};

export default ProfileEdit;
