import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Social,
  MyPage,
  HabitPlus,
  GrowingTree,
  HabitComplete,
  HabitListHome,
  UserStatistics,
} from '../../screens';

import { ROUTE_PATH } from '../../constants/route';

const { Screen, Navigator } = createStackNavigator();

const UserScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={ROUTE_PATH.HABIT_LIST_HOME}>
        <Screen name={ROUTE_PATH.SOCIAL} component={Social} />
        <Screen name={ROUTE_PATH.MY_PAGE} component={MyPage} />
        <Screen name={ROUTE_PATH.HABIT_PLUS} component={HabitPlus} />
        <Screen name={ROUTE_PATH.GROWING_TREE} component={GrowingTree} />
        <Screen name={ROUTE_PATH.HABIT_COMPLETE} component={HabitComplete} />
        <Screen name={ROUTE_PATH.HABIT_LIST_HOME} component={HabitListHome} />
        <Screen name={ROUTE_PATH.USER_STATISTICS} component={UserStatistics} />
      </Navigator>
    </NavigationContainer>
  );
};

export default UserScreenNavigation;
