import React from 'react';
import { View, Text } from 'react-native';

import { TeaLeatIcon } from '../../assets/';

import { WaterProgress } from '../';

import { WaterProgressWithGradeProps } from './WaterProgressWithGrade.types';
import { styles } from './WaterProgressWithGrade.styles';

const WaterProgressWithGrade = ({
  grade,
  totalWater,
}: WaterProgressWithGradeProps) => {
  return (
    <View style={styles.waterProgressWithGradeContainer}>
      <WaterProgress totalWater={totalWater} />
      <View style={styles.iconContainer}>
        <TeaLeatIcon width={20} height={20} />
        <Text style={styles.gradeText}>{grade}</Text>
      </View>
    </View>
  );
};

export default WaterProgressWithGrade;
