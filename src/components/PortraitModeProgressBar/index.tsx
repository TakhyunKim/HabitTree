import React from 'react';
import { View } from 'react-native';

import { PortraitModeProgressBarProps } from './PortraitModeProgressBar.types';
import { styles } from './PortraitModeProgressBar.styles';

const PortraitModeProgressBar = ({ percent }: PortraitModeProgressBarProps) => {
  const style = styles(percent);

  return <View style={style.progressPercentViewer} />;
};

export default PortraitModeProgressBar;
