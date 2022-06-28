import React, { useState } from 'react';
import { View, Animated } from 'react-native';

import { HabitPlus, HabitPlusWithText } from '../../components';

import { useFlagAnimation } from '../../hooks';
import { getAnimationMultiStyle } from '../../utils';
import { AnimationStyleInfo } from '../../types';

import { styles } from './HabitPlusButtons.styles';

const HabitPlusButtons = () => {
  const [isActiveOfPlus, setIsActiveOfPlus] = useState<boolean>(false);

  const style = styles(isActiveOfPlus);

  const weekHabitAnimatedValue = useFlagAnimation({
    flag: isActiveOfPlus,
    duration: 1100,
    animationToValue: 20,
  });
  const todayHabitAnimatedValue = useFlagAnimation({
    flag: isActiveOfPlus,
    duration: 1000,
    animationToValue: 15,
  });

  const animationStylesInfo: AnimationStyleInfo[] = [
    {
      styleName: 'translateY',
      animatedValue: weekHabitAnimatedValue,
      inputRange: [0, 1],
      outputRange: [1, 10],
    },
    {
      styleName: 'opacity',
      animatedValue: weekHabitAnimatedValue,
      inputRange: [0, 10],
      outputRange: [10, 0],
    },
    {
      styleName: 'translateY',
      animatedValue: todayHabitAnimatedValue,
      inputRange: [0, 1],
      outputRange: [1, 6.5],
    },
    {
      styleName: 'opacity',
      animatedValue: todayHabitAnimatedValue,
      inputRange: [0, 10],
      outputRange: [10, 0],
    },
  ];

  const [
    weekHabitTranslateY,
    weekHabitOpacity,
    todayHabitTranslateY,
    todayHabitOpacity,
  ] = getAnimationMultiStyle({ animationStylesInfo });

  const handleHabitPlusButtonClick = () => {
    setIsActiveOfPlus(prevState => !prevState);
  };

  return (
    <View style={style.habitPlusButtonsContainer}>
      <Animated.View
        style={[
          {
            transform: [{ translateY: weekHabitTranslateY }],
            opacity: weekHabitOpacity,
          },
        ]}>
        <HabitPlusWithText
          description="주간 목표 추가"
          backgroundColor="#AFA800"
          onPress={() => console.log('주간 목표 추가')}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            transform: [{ translateY: todayHabitTranslateY }],
            opacity: todayHabitOpacity,
          },
        ]}>
        <HabitPlusWithText
          description="오늘 목표 추가"
          backgroundColor="#EDE636"
          onPress={() => console.log('오늘 목표 추가')}
        />
      </Animated.View>

      <View style={style.habitPlusButton}>
        <HabitPlus
          backgroundColor="#FCF664"
          onPress={handleHabitPlusButtonClick}
        />
      </View>
    </View>
  );
};

export default HabitPlusButtons;
