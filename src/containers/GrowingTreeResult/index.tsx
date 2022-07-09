import React from 'react';
import { View } from 'react-native';

import {
  WaterProgressWithGrade,
  GrowingTreeResultText,
} from '../../components';

import { styles } from './GrowingTreeResult.styles';

const GrowingTreeResult = () => {
  return (
    <View style={styles.growingTreeResultContainer}>
      <WaterProgressWithGrade totalWater={30} grade="새싹" />
      <GrowingTreeResultText />
    </View>
  );
};

export default GrowingTreeResult;
