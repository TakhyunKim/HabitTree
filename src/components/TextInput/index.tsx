import React from 'react';
import { View, TextInput as TextInputComponent } from 'react-native';

import { TextInputProps } from './TextInput.types';
import { styles } from './TextInput.styles';

const TextInput = ({ value, placeHolader, onChange }: TextInputProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInputComponent
        style={styles.textInput}
        placeholder={placeHolader}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextInput;
