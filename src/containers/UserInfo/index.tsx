import React from 'react';
import { View } from 'react-native';

import { Profile, Button } from '../../components';

import { styles } from './UserInfo.styles';

const UserInfo = () => {
  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.userInfoProfileContainer}>
        <Profile name="김탁현" plantGrade="나무" plantHeight={7} image="none" />
      </View>
      <Button title="프로필 편집" onPress={() => console.log('프로필 편집')} />
      <Button title="나의 사진첩" onPress={() => console.log('나의 사진첩')} />
      <Button
        textColor="#C62B2B"
        title="로그아웃"
        onPress={() => console.log('로그아웃')}
      />
    </View>
  );
};

export default UserInfo;
