import React from 'react';
import { View } from 'react-native';

import { HabitPlus, HabitPlusWithText } from '../../components';

import { styles } from './HabitPlusButtons.styles';

const HabitPlusButtons = () => {
  return (
    <View style={styles.habitPlusButtonsContainer}>
      <HabitPlusWithText
        description="주간 목표 추가"
        backgroundColor="#AFA800"
        onPress={() => console.log('주간 목표 추가')}
      />
      <HabitPlusWithText
        description="오늘 목표 추가"
        backgroundColor="#EDE636"
        onPress={() => console.log('오늘 목표 추가')}
      />
      <View style={styles.habitPlusButton}>
        <HabitPlus
          backgroundColor="#FCF664"
          onPress={() => console.log('plus')}
        />
      </View>
    </View>
  );
};

export default HabitPlusButtons;
