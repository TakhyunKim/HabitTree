import React, { useState, useCallback } from 'react';
import { View, Animated } from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

import HabitPlus from './HabitPlus';
import HabitPlusWithText from './HabitPlusWithText';

import useFlagAnimation from '@hooks/useFlagAnimation';
import { getAnimationMultiStyle } from '@utils';
import { AnimationStyleInfo, HabitPlusParams } from '@types';
import { ROUTE_PATH } from '@constants/route';

import { styles } from './HabitPlusButtons.styles';

const HabitPlusButtons = () => {
  const [isActiveOfPlus, setIsActiveOfPlus] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<HabitPlusParams>>();

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

  useFocusEffect(
    useCallback(() => {
      setIsActiveOfPlus(false);
    }, []),
  );

  return (
    <View style={style.habitPlusButtonsBackground}>
      <View style={style.habitPlusButtonsContainer}>
        <Animated.View
          style={[
            {
              transform: [{ translateY: weekHabitTranslateY }],
              opacity: weekHabitOpacity,
            },
          ]}>
          <HabitPlusWithText
            description="오늘 목표 추가"
            backgroundColor="#AFA800"
            onPress={() =>
              navigation.navigate(ROUTE_PATH.HABIT_PLUS, {
                habitPlusOption: 'day',
              })
            }
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
            description="주간 목표 추가"
            backgroundColor="#EDE636"
            onPress={() =>
              navigation.navigate(ROUTE_PATH.HABIT_PLUS, {
                habitPlusOption: 'week',
              })
            }
          />
        </Animated.View>

        <View style={style.habitPlusButton}>
          <HabitPlus
            backgroundColor="#FCF664"
            onPress={handleHabitPlusButtonClick}
          />
        </View>
      </View>
    </View>
  );
};

export default HabitPlusButtons;
