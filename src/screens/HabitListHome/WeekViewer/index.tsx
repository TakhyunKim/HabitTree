import React, { useRef } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { useRecoilState } from 'recoil';

import DayViewer from './DayViewer';
import YearAndMonth from './YearAndMonth';

import { habitDay } from '@recoil/atoms';

import { isSameDate } from '@utils';
import { DAY_OF_THE_WEEK_LIST } from '@constants/day';

import { styles } from './WeekViewer.styles';

import { useScrollWeeks } from './WeekViewer.hook';

const { width: layoutWidth } = Dimensions.get('window');

const WeekViewer = () => {
  const scrollRef = useRef<ScrollView>(null);

  const [habitTargetDate, setHabitTargetDate] = useRecoilState(habitDay);

  const { weekList, changeWeekViewer } = useScrollWeeks(scrollRef, layoutWidth);

  const style = styles(layoutWidth);

  return (
    <View style={style.weekViewerContainer}>
      <View style={style.yearAndMonthWrapper}>
        <YearAndMonth day={habitTargetDate} />
      </View>
      <ScrollView
        ref={scrollRef}
        contentOffset={{ x: layoutWidth, y: 0 }}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.weekViewerScrollWrapper}
        onScrollEndDrag={changeWeekViewer}>
        {weekList.map((week, i) => (
          <View key={i} style={style.dayViewerWrapper}>
            {week.map((dayOfTheWeek, j) => (
              <DayViewer
                key={dayOfTheWeek.getDate()}
                day={dayOfTheWeek.getDate()}
                dayOfTheWeek={DAY_OF_THE_WEEK_LIST[j]}
                isTargetDay={isSameDate(habitTargetDate, dayOfTheWeek)}
                onPress={() => setHabitTargetDate(dayOfTheWeek)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WeekViewer;
