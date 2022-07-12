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
      <GrowingTreeResultText
        userName="탁현"
        grade="새싹"
        waterNeededForUgrade={30}
      />
    </View>
  );
};

export default GrowingTreeResult;
