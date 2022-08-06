import React from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';

import { HabitPlusSubmitButton } from '@components';

import { NavigationProp } from '@types';

const DayHabitSubmit = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleSubmitButtonClick = () => {
    const popAction = StackActions.pop();

    navigation.dispatch(popAction);
  };

  return (
    <HabitPlusSubmitButton
      buttonTitle="목표 시작하기"
      onPress={handleSubmitButtonClick}
    />
  );
};

export default DayHabitSubmit;
