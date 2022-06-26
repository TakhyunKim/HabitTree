import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Social,
  MyPage,
  GrowingTree,
  HabitListHome,
  UserStatistics,
} from '../../screens';

import { ROUTE_PATH, BOTTOM_TAB_NAVIGATION_NAME } from '../../constants/route';

const { Screen, Navigator } = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Navigator
      initialRouteName={ROUTE_PATH.HABIT_LIST_HOME}
      screenOptions={{ headerShown: false }}>
      <Screen
        name={ROUTE_PATH.HABIT_LIST_HOME}
        component={HabitListHome}
        options={{
          tabBarLabel: BOTTOM_TAB_NAVIGATION_NAME.HOME,
        }}
      />
      <Screen
        name={ROUTE_PATH.USER_STATISTICS}
        component={UserStatistics}
        options={{ tabBarLabel: BOTTOM_TAB_NAVIGATION_NAME.SUCCESS }}
      />
      <Screen name={ROUTE_PATH.GROWING_TREE} component={GrowingTree} />
      <Screen
        name={ROUTE_PATH.SOCIAL}
        component={Social}
        options={{ tabBarLabel: BOTTOM_TAB_NAVIGATION_NAME.SOCIAL }}
      />
      <Screen
        name={ROUTE_PATH.MY_PAGE}
        component={MyPage}
        options={{ tabBarLabel: BOTTOM_TAB_NAVIGATION_NAME.MY_PAGE }}
      />
    </Navigator>
  );
};

export default BottomTabNavigation;
