import React from 'react';
import { Text, View } from 'react-native';

import { WaterProgressProps } from './WaterProgress.types';
import { styles } from './WaterProgress.styles';

const WaterProgress = ({ totalWater }: WaterProgressProps) => {
  const style = styles(totalWater);

  return (
    <View style={style.waterProgressContainer}>
      <View style={style.waterProgress}>
        <Text style={style.waterProgressText}>{totalWater}L</Text>
      </View>
    </View>
  );
};

export default WaterProgress;
