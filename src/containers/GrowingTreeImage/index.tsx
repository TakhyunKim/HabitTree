import React from 'react';
import { View } from 'react-native';

import {
  LandIcon,
  CloudIcon,
  CloudsIcon,
  TeaLeatIcon,
  WateringCan,
} from '../../assets';

import { styles } from './GrowingTreeImage.styles';

const GrowingTreeImage = () => {
  return (
    <View style={styles.growingTreeImageContainer}>
      <TeaLeatIcon style={styles.teaLeatIcon} width={40} height={40} />
      <LandIcon style={styles.landIcon} width="120%" height="100%" />
      <CloudIcon style={styles.cloudIcon} width="30%" height="30%" />
      <CloudsIcon style={styles.cloudsIcon} width="30%" height="30%" />
      <View style={styles.waterIconWrapper}>
        <WateringCan width={30} height={30} fill="#000000" />
      </View>
    </View>
  );
};

export default GrowingTreeImage;
