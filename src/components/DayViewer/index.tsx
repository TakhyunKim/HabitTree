import React from 'react';
import { View, Text } from 'react-native';

import { DayViewerProps } from './DayViewer.types';
import { styles } from './DayViewer.styles';

const DayViewer = ({ day, dayOfTheWeek, isTargetDay }: DayViewerProps) => {
  const style = styles(isTargetDay);

  return (
    <View style={style.dayViewerContainer}>
      <Text style={style.dayOfTheWeekText}>{dayOfTheWeek}</Text>
      <View style={style.dayTextrWrapper}>
        <Text style={style.dayText}>{day}</Text>
      </View>
    </View>
  );
};

export default DayViewer;
