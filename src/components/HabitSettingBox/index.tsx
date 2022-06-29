import React from 'react';
import { View, Text } from 'react-native';

import { HabitSettingBoxProps } from './HabitSettingBox.types';
import { styles } from './HabitSettingBox.styles';

const HabitSettingBox = ({ children, settingTitle }: HabitSettingBoxProps) => {
  return (
    <View style={styles.habitSettingBoxContainer}>
      <Text style={styles.settingTitleText}>{settingTitle}</Text>
      <View style={styles.habitSettingOptionBox}>{children}</View>
    </View>
  );
};

export default HabitSettingBox;
