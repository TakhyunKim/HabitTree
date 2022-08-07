import { useState, RefObject } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

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
  const [weekList, setWeekList] = useState<Date[][]>(() =>
    getThreeWeeks(new Date()),
  );

  const scrollToMiddleCalendar = (): void => {
    scrollRef.current?.scrollTo({
      x: Math.floor(layoutWidth),
      animated: false,
    });
  };

  const changeWeekViewer = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextCurrent =
      (viewPage ?? event.nativeEvent.contentOffset.x) / layoutWidth;
    const copiedDate = new Date(renderDate);

    if (nextCurrent >= NEXT_PAGINATION_STANDARD) {
      copiedDate.setDate(copiedDate.getDate() + DATE_CHANGE_VALUE);
      const currentThreeWeeks = getThreeWeeks(copiedDate);

      setRenderDate(copiedDate);
      setWeekList(currentThreeWeeks);
    } else if (nextCurrent <= PREV_PAGINATION_STANDARD) {
      copiedDate.setDate(copiedDate.getDate() - DATE_CHANGE_VALUE);
      const currentThreeWeeks = getThreeWeeks(copiedDate);

      setRenderDate(copiedDate);
      setWeekList(currentThreeWeeks);
    }

    scrollToMiddleCalendar();
    setViewPage(event.nativeEvent.contentOffset.x);
  };

  return { weekList, changeWeekViewer };
};
