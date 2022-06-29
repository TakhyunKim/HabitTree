import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { WateringCan } from '../../assets';

import { HabitCompleteParams } from '../../types';

import { HabitItemProps } from './HabitItem.types';
import { styles } from './HabitItem.styles';

const HabitItem = ({ title, isComplete }: HabitItemProps) => {
  const navigation = useNavigation<NavigationProp<HabitCompleteParams>>();

  const style = styles(isComplete);

  const handleHabitItemClick = () => {
    const today = new Date();
    // TODO: 하기 하드 코딩된 값은 추후 HabitItem prop 에 대한 변경 후 함께 변경 필요
    navigation.navigate('habitComplete', {
      habitTitle: title,
      date: today,
      isPrivate: false,
    });
  };

  return (
    <TouchableOpacity
      style={style.habitItemContainer}
      onPress={handleHabitItemClick}>
      <View style={style.habitItemIconTitleWrapper}>
        <View style={style.habitItemIcon} />
        <Text style={style.habitItemTitle}>{title}</Text>
      </View>
      <View style={style.habitItemWateringCanIcon}>
        <WateringCan fill="#000000" width={25} height={25} />
      </View>
    </TouchableOpacity>
  );
};

export default HabitItem;
