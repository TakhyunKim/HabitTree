import React from 'react';
import { View } from 'react-native';

import { DayViewer } from '../../components';

import { getWeek } from '../../utils';
import { Week } from '../../types';

import { styles } from './WeekViewer.styles';

const dayOfTheWeekList: Week[] = ['일', '월', '화', '수', '목', '금', '토'];

const WeekViewer = () => {
  const weak = getWeek();

  return (
    <View style={styles.WeekViewerContainer}>
      {dayOfTheWeekList.map(dayOfTheWeek => (
        <DayViewer
          key={dayOfTheWeek}
          day={weak[dayOfTheWeek]}
          dayOfTheWeek={dayOfTheWeek}
        />
      ))}
    </View>
  );
};

export default WeekViewer;
