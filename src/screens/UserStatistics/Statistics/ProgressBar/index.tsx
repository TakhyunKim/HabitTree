import React from 'react';
import { View, Text } from 'react-native';

import { ProgressBarProps } from './ProgressBar.types';
import { styles } from './ProgressBar.styles';

const ProgressBar = ({ percent }: ProgressBarProps) => {
  const style = styles(percent);

  return (
    <View style={style.progressBarContainer}>
      <View style={style.progressBarWrapper}>
        <View style={style.progressPercentViewer} />
      </View>
      <Text style={style.progressPercentText}>{percent}%</Text>
    </View>
  );
};

export default ProgressBar;
