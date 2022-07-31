import React from 'react';
import { View, Text } from 'react-native';

import PortraitModeProgressBar from '../PortraitModeProgressBar';

import { DAY_OF_THE_WEEK_LIST } from '@constants/day';

import { PortraitModeProgressBarListProps } from './PortraitModeProgressBarList.types';
import { styles } from './PortraitModeProgressBarList.styles';

const PortraitModeProgressBarList = ({
  weekPercent,
}: PortraitModeProgressBarListProps) => {
  return (
    <View style={styles.portraitModeProgressBarListContainer}>
      {DAY_OF_THE_WEEK_LIST.map(day => (
        <View style={styles.progressBarWrapper} key={day}>
          <PortraitModeProgressBar percent={weekPercent[day]} />
          <Text style={styles.dayText}>{day}</Text>
        </View>
      ))}
    </View>
  );
};

export default PortraitModeProgressBarList;
