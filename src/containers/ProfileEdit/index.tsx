import React from 'react';
import { View } from 'react-native';

import ProfileHeader from '../../components/ProfileHeader';

import { styles } from './ProfileEdit.styles';

const ProfileEdit = () => {
  const handleCancelClick = () => {
    console.log('cancel');
  };

  const handleCompleteClick = () => {
    console.log('complete');
  };

  return (
    <View style={styles.profileHeaderContainer}>
      <ProfileHeader
        onCancelClick={handleCancelClick}
        onCompleteClick={handleCompleteClick}
      />
    </View>
  );
};

export default ProfileEdit;
