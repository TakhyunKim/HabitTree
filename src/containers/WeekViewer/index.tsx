import React from 'react';
import { View } from 'react-native';
import { useRecoilState } from 'recoil';

import { DayViewer, YearAndMonth } from '../../components';

import { habitDay } from '../../recoil/atoms';

import { isSameDate, getWeek } from '../../utils';
import { DAY_OF_THE_WEEK_LIST } from '../../constants/day';

import { styles } from './WeekViewer.styles';

const WeekViewer = () => {
  const [habitTargetDate, setHabitTargetDate] = useRecoilState(habitDay);

  const week = getWeek(new Date());

  return (
    <View style={styles.WeekViewerContainer}>
      <View style={styles.WeekViewerChildrenContainer}>
        <YearAndMonth day={habitTargetDate} />
        <View style={styles.DayViewerWrapper}>
          {week.map((dayOfTheWeek, i) => {
            const dayOfWeek = DAY_OF_THE_WEEK_LIST[i];

            return (
              <DayViewer
                key={dayOfWeek}
                day={dayOfTheWeek.getDate()}
                dayOfTheWeek={DAY_OF_THE_WEEK_LIST[i]}
                isTargetDay={isSameDate(habitTargetDate, dayOfTheWeek)}
                onPress={() => setHabitTargetDate(dayOfTheWeek)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default WeekViewer;
