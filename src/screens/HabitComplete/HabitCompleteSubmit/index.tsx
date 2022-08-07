import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';

import { HabitPlusSubmitButton } from '@components';

import { NavigationProp } from '@types';

const HabitCompleteSubmit = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleSubmitButtonPress = () => {
    const popAction = StackActions.pop();

    navigation.dispatch(popAction);
  };

  return (
    <HabitPlusSubmitButton
      buttonTitle="목표 완료하기"
      onPress={handleSubmitButtonPress}
    />
  );
};

export default HabitCompleteSubmit;
