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

import { RoutePath } from '../../constants/route';

const { Screen, Navigator } = createStackNavigator();

const UserScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={RoutePath.SOCIAL} component={Social} />
        <Screen name={RoutePath.MY_PAGE} component={MyPage} />
        <Screen name={RoutePath.HABIT_PLUS} component={HabitPlus} />
        <Screen name={RoutePath.GROWING_TREE} component={GrowingTree} />
        <Screen name={RoutePath.HABIT_COMPLETE} component={HabitComplete} />
        <Screen name={RoutePath.HABIT_LIST_HOME} component={HabitListHome} />
        <Screen name={RoutePath.USER_STATISTICS} component={UserStatistics} />
      </Navigator>
    </NavigationContainer>
  );
};

export default UserScreenNavigation;
