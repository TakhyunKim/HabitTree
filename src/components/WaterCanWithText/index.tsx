import React from 'react';
import { View, Text } from 'react-native';

import { WateringCan } from '../../assets';

import { WaterCanWithTextProps } from './WaterCanWithText.types';
import { styles } from './WaterCanWithText.styles';

const WaterCanWithText = ({ value }: WaterCanWithTextProps) => {
  return (
    <View style={styles.waterCanWithTextContainer}>
      <WateringCan fill="#000000" width={40} height={40} />
      <Text style={styles.waterText}>{value}리터</Text>
    </View>
  );
};

export default WaterCanWithText;
