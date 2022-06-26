import React from 'react';
import { View, Text } from 'react-native';

import { WateringCan } from '../../assets';

import { HabitItemProps } from './HabitItem.types';
import { styles } from './HabitItem.styles';

const HabitItem = ({ title, isComplete }: HabitItemProps) => {
  const style = styles(isComplete);
  return (
    <View style={style.habitItemContainer}>
      <View style={style.habitItemIconTitleWrapper}>
        <View style={style.habitItemIcon} />
        <Text style={style.habitItemTitle}>{title}</Text>
      </View>
      <View style={style.habitItemWateringCanIcon}>
        <WateringCan fill="#000000" width={25} height={25} />
      </View>
    </View>
  );
};

export default HabitItem;
