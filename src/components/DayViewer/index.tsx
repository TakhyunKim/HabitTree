import React from 'react';
import { View, Text } from 'react-native';

import { DayViewerProps } from './DayViewer.types';
import { styles } from './DayViewer.styles';

const DayViewer = ({ day, dayOfTheWeek }: DayViewerProps) => {
  return (
    <View style={styles.dayViewerContainer}>
      <Text style={styles.dayOfTheWeekTextWrapper}>{dayOfTheWeek}</Text>
      <View>
        <Text style={styles.dayWrapper}>{day}</Text>
      </View>
    </View>
  );
};

export default DayViewer;
