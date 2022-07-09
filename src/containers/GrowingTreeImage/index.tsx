import React from 'react';
import { View } from 'react-native';

import { LandIcon, TeaLeatIcon } from '../../assets';

import { styles } from './GrowingTreeImage.styles';

const GrowingTreeImage = () => {
  return (
    <View style={styles.growingTreeImageContainer}>
      <TeaLeatIcon style={styles.teaLeatIcon} width={40} height={40} />
      <LandIcon style={styles.landIcon} width="120%" height="100%" />
    </View>
  );
};

export default GrowingTreeImage;
