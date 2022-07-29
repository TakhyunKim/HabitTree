import React from 'react';
import { View } from 'react-native';

import { styles } from './ScreenContainer.styles';
import { ScreenContainerProps } from './ScreenContainer.types';

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

export default ScreenContainer;
