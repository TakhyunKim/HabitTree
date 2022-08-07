import { useState, RefObject } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import { startOfWeek } from 'date-fns';

import { habitDay } from '@recoil/atoms';
import { isSameDate } from '@utils';

import { getThreeWeeks } from './WeekViewer.utils';
import {
  DATE_CHANGE_VALUE,
  NEXT_PAGINATION_STANDARD,
  PREV_PAGINATION_STANDARD,
} from './WeekViewer.consts';

export const useScrollWeeks = (
  scrollRef: RefObject<ScrollView>,
  layoutWidth: number,
) => {
  const [viewPage, setViewPage] = useState<number>();
  const [renderDate, setRenderDate] = useState<Date>(new Date());
  const [weekList, setWeekList] = useState<Date[][]>(getThreeWeeks(new Date()));

  const setHabitTargetDate = useSetRecoilState(habitDay);

  const scrollToMiddleCalendar = () => {
    scrollRef.current?.scrollTo({
      x: Math.floor(layoutWidth),
      animated: false,
    });
  };

  const setInitialTargetDate = (currentWeek: Date[], date: Date) => {
    const monday = startOfWeek(date, { weekStartsOn: 1 });

    const sameDateListLength = currentWeek.filter(targetDate =>
      isSameDate(targetDate, new Date()),
    ).length;

    setHabitTargetDate(sameDateListLength === 1 ? new Date() : monday);
  };

  const changeWeekViewer = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextCurrent =
      (viewPage ?? event.nativeEvent.contentOffset.x) / layoutWidth;
    const copiedDate = new Date(renderDate);

    if (nextCurrent >= NEXT_PAGINATION_STANDARD) {
      copiedDate.setDate(copiedDate.getDate() + DATE_CHANGE_VALUE);
    } else if (nextCurrent <= PREV_PAGINATION_STANDARD) {
      copiedDate.setDate(copiedDate.getDate() - DATE_CHANGE_VALUE);
    }

    const currentThreeWeeks = getThreeWeeks(copiedDate);
    const currentWeek = currentThreeWeeks[1];

    scrollToMiddleCalendar();
    setInitialTargetDate(currentWeek, copiedDate);

    setRenderDate(copiedDate);
    setWeekList(currentThreeWeeks);
    setViewPage(event.nativeEvent.contentOffset.x);
  };

  return { weekList, changeWeekViewer };
};
