import React from 'react';
import { View, Text } from 'react-native';

import { HabitAddOptionProps } from './HabitAddOption.types';
import { styles } from './HabitAddOption.styles';

const HabitAddOption = ({
  optionTitle,
  hasborderBottom = false,
  children,
}: HabitAddOptionProps) => {
  const style = styles(hasborderBottom);

  return (
    <View style={style.habitAddOptionContainer}>
      <Text style={style.habitAddOptionTitleText}>{optionTitle}</Text>
      {children}
    </View>
  );
};

export default HabitAddOption;
