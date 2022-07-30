import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { DayViewerProps } from './DayViewer.types';
import { styles } from './DayViewer.styles';

const DayViewer = ({
  day,
  dayOfTheWeek,
  isTargetDay,
  onPress,
}: DayViewerProps) => {
  const style = styles(isTargetDay);

  return (
    <TouchableOpacity
      style={style.dayViewerContainer}
      activeOpacity={1}
      onPress={onPress}>
      <Text style={style.dayOfTheWeekText}>{dayOfTheWeek}</Text>
      <View style={style.dayTextWrapper}>
        <Text style={style.dayText}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DayViewer;
