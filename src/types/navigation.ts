import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { ROUTE_PATH, NAVIGATION_NAME } from '../constants/route';

export type HabitPlusOption = 'week' | 'day';

export type RoutePathKeysType = keyof typeof ROUTE_PATH;

export type RoutePathValuesType = typeof ROUTE_PATH[RoutePathKeysType];

export type NavigationNameKeysType = keyof typeof NAVIGATION_NAME;

export type NavigationNameValuesType =
  typeof NAVIGATION_NAME[NavigationNameKeysType];

export type BottomTabRoutePathValues = Exclude<
  RoutePathValuesType,
  'habitPlus'
>;

export type StackRoutePathValues = Extract<
  RoutePathValuesType,
  'habitPlus' | 'habitComplete'
>;

export type HabitPlusValue = Extract<RoutePathValuesType, 'habitPlus'>;

export type HabitCompleteValue = Extract<RoutePathValuesType, 'habitComplete'>;

export type HabitCompleteParams = {
  [habitComplete in HabitCompleteValue]: {
    date: Date;
    habitTitle: string;
    isPrivate: boolean;
    mainImage?: string;
    description?: string;
  };
};

export type HabitPlusParams = {
  [habitPlus in HabitPlusValue]: { habitPlusOption: HabitPlusOption };
};
export type NavigationParams = Record<NavigationNameValuesType, undefined>;
export type StackParams = Record<StackRoutePathValues, undefined>;
export type BottomTabParams = Record<BottomTabRoutePathValues, undefined>;

export type BottomTabNavigationParams = BottomTabScreenProps<BottomTabParams>;

export type StackNavigationParams = StackScreenProps<StackParams>;

export type HabitAddScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParams, 'habitListHome'>,
  StackScreenProps<StackParams>
>;
