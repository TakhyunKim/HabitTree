import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonProps } from './Button.types';
import { styles } from './Button.styles';

const Button = ({ title, textColor, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text
        style={{
          ...styles.titleText,
          color: textColor ? textColor : styles.titleText.color,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
