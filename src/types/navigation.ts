import { ROUTE_PATH, NAVIGATION_NAME } from '@constants/route';
import { StackNavigationProp } from '@react-navigation/stack';

import { HabitPlusOption } from '@types';

// TODO: Navigation type 정리 필요

// Root Navigation type 에 사용하는 Root Stack type
export type RootStackParamList = {
  [NAVIGATION_NAME.BOTTOM_TAB_NAVIGATION]: undefined;
  [ROUTE_PATH.PROFILE_EDIT]: undefined;
  [ROUTE_PATH.HABIT_PLUS]: {
    habitPlusOption: HabitPlusOption;
  };
  [ROUTE_PATH.HABIT_COMPLETE]: {
    date: Date;
    title: string;
    isPrivate: boolean;
    mainImage?: string;
    description?: string;
  };
};

// Bottom Tab navigation 에 사용하는 type
export type BottomTabNavigationParamList = {
  [ROUTE_PATH.HABIT_LIST_HOME]: undefined;
  [ROUTE_PATH.USER_STATISTICS]: undefined;
  [ROUTE_PATH.GROWING_TREE]: undefined;
  [ROUTE_PATH.SOCIAL]: undefined;
  [ROUTE_PATH.MY_PAGE]: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
