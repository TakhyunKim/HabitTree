import React from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { DayViewer, YearAndMonth } from '../../components';

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
      <View style={styles.WeekViewerChildrenContainer}>
        <YearAndMonth day={habitTargetDate} />
        <View style={styles.DayViewerWrapper}>
          {dayOfTheWeekList.map(dayOfTheWeek => (
            <DayViewer
              key={dayOfTheWeek}
              day={weak[dayOfTheWeek].getDate()}
              dayOfTheWeek={dayOfTheWeek}
              isTargetDay={isSameDate(habitTargetDate, weak[dayOfTheWeek])}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default WeekViewer;
