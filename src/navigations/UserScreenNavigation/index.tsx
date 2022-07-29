import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HabitPlus, ProfileEdit, HabitComplete } from '../../screens';

import { BottomTabNavigation } from '../';

import { ROUTE_PATH, NAVIGATION_NAME } from '../../constants/route';
import { StackParams, NavigationParams } from '../../types';

const { Screen, Navigator } = createStackNavigator<
  StackParams & NavigationParams
>();

const UserScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name={NAVIGATION_NAME.BOTTOM_TAB_NAVIGATION}
          component={BottomTabNavigation}
        />
        <Screen name={ROUTE_PATH.HABIT_PLUS} component={HabitPlus} />
        <Screen name={ROUTE_PATH.HABIT_COMPLETE} component={HabitComplete} />
        <Screen name={ROUTE_PATH.PROFILE_EDIT} component={ProfileEdit} />
      </Navigator>
    </NavigationContainer>
  );
};

export default UserScreenNavigation;
