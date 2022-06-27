import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { PlusIcon } from '../../assets';

import { HabitPlusProps } from './HabitPlus.types';
import { styles } from './HabitPlus.styles';

const HabitPlus = ({ children, backgroundColor, onPress }: HabitPlusProps) => {
  const style = styles(backgroundColor);

  return (
    <View style={style.habitPlusContainer}>
      {children}
      <TouchableOpacity onPress={onPress} style={style.habitPlusIconContanier}>
        <PlusIcon width={15} height={15} fill="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default HabitPlus;
