import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useRecoilState } from 'recoil';
import { addWeeks, subWeeks } from 'date-fns';

import { DayViewer, YearAndMonth } from '../../components';

import { habitDay } from '../../recoil/atoms';

import { isSameDate, getWeek } from '../../utils';
import { DAY_OF_THE_WEEK_LIST } from '../../constants/day';

import { styles } from './WeekViewer.styles';

const WeekViewer = () => {
  const [habitTargetDate, setHabitTargetDate] = useRecoilState(habitDay);

  const { width } = Dimensions.get('window');

  const style = styles(width);

  const week = getWeek(new Date());
  const preWeek = getWeek(subWeeks(new Date(), 1));
  const nextWeek = getWeek(addWeeks(new Date(), 1));

  const handleWeekViewerChange = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const nextCurrent = Math.floor(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    return nextCurrent;
  };

  return (
    <View style={style.weekViewerContainer}>
      <View style={style.yearAndMonthWrapper}>
        <YearAndMonth day={habitTargetDate} />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.weekViewerScrollWrapper}
        onScrollEndDrag={handleWeekViewerChange}>
        <View style={style.dayViewerWrapper}>
          {preWeek.map((dayOfTheWeek, i) => {
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
        <View style={style.dayViewerWrapper}>
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
        <View style={style.dayViewerWrapper}>
          {nextWeek.map((dayOfTheWeek, i) => {
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
      </ScrollView>
    </View>
  );
};

export default WeekViewer;
