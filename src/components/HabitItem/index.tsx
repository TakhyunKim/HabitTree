import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { WateringCan } from '../../assets';

import { HabitItemProps } from './HabitItem.types';
import { styles } from './HabitItem.styles';

const HabitItem = ({
  title,
  isComplete,
  onPress,
  onPressCompleteIcon,
}: HabitItemProps) => {
  const style = styles(isComplete);

  return (
    <TouchableOpacity style={style.habitItemContainer} onPress={onPress}>
      <View style={style.habitItemIconTitleWrapper}>
        <View style={style.habitItemIcon} />
        <Text style={style.habitItemTitle}>{title}</Text>
      </View>
      <TouchableOpacity
        style={style.habitItemWateringCanIcon}
        onPress={onPressCompleteIcon}>
        <WateringCan fill="#000000" width={25} height={25} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HabitItem;
