import React from 'react';
import { Text } from 'react-native';

import { HabitPlus } from '../';

import { HabitPlusWithTextProps } from './HabitPlusWithText.types';
import { styles } from './HabitPlusWithText.styles';

const HabitPlusWithText = ({
  description,
  backgroundColor,
  onPress,
}: HabitPlusWithTextProps) => {
  return (
    <HabitPlus backgroundColor={backgroundColor} onPress={onPress}>
      <Text style={styles.habitPlusText}>{description}</Text>
    </HabitPlus>
  );
};

export default HabitPlusWithText;
