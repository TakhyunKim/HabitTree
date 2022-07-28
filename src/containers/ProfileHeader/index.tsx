import React from 'react';
import { View } from 'react-native';

import ProfileHeaderComponent from '../../components/ProfileHeader';

import { styles } from './ProfileHeader.styles';

const ProfileHeader = () => {
  const handleCancelClick = () => {
    console.log('cancel');
  };

  const handleCompleteClick = () => {
    console.log('complete');
  };

  return (
    <View style={styles.profileHeaderContainer}>
      <ProfileHeaderComponent
        onCancelClick={handleCancelClick}
        onCompleteClick={handleCompleteClick}
      />
    </View>
  );
};

export default ProfileHeader;
