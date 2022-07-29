import React from 'react';
import { View, Text } from 'react-native';

import { ScreenHeaderProps } from './ScreenHeader.types';
import { styles } from './ScreenHeader.styles';

const ScreenHeader = ({ headerTitle }: ScreenHeaderProps) => {
  return (
    <View style={styles.screenHeaderContainer}>
      <Text style={styles.screenHeaderTitleText}>{headerTitle}</Text>
    </View>
  );
};

export default ScreenHeader;
