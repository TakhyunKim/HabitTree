import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { HabitPlusSubmitButtonProps } from './HabitPlusSubmitButton.types';
import { styles } from './HabitPlusSubmitButton.styles';

const HabitPlusSubmitButton = ({
  buttonTitle,
  onPress,
}: HabitPlusSubmitButtonProps) => {
  return (
    <View style={styles.habitPlusSubmitButtonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.submitButtonTitleText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HabitPlusSubmitButton;
