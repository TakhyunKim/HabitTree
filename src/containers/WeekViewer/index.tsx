import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { DayViewer } from '../../components';

import { habitDay } from '../../relay/atoms';

import { getWeek, isSameDate } from '../../utils';
import { Week } from '../../types';

import { styles } from './WeekViewer.styles';

const dayOfTheWeekList: Week[] = ['일', '월', '화', '수', '목', '금', '토'];

const WeekViewer = () => {
  const habitTargetDate = useRecoilValue(habitDay);

  const weak = getWeek();

  return (
    <View style={styles.WeekViewerContainer}>
      {dayOfTheWeekList.map(dayOfTheWeek => (
        <DayViewer
          key={dayOfTheWeek}
          day={weak[dayOfTheWeek].getDate()}
          dayOfTheWeek={dayOfTheWeek}
          isTargetDay={isSameDate(habitTargetDate, weak[dayOfTheWeek])}
        />
      ))}
    </View>
  );
};

export default WeekViewer;
