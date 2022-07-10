/* eslint-disable react-native/no-inline-styles */

import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Social,
  MyPage,
  GrowingTree,
  HabitListHome,
  UserStatistics,
} from '../../screens';

import { ROUTE_PATH, BOTTOM_TAB_NAVIGATION_NAME } from '../../constants/route';
import { BottomTabParams } from '../../types';

import {
  HomeIcon,
  TreeIcon,
  UserIcon,
  SocialIcon,
  AnalyticsIcon,
} from '../../assets';

interface CustomTabBarButtonProps {
  children: ReactNode;
  onPress?: (
    event:
      | GestureResponderEvent
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}

const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonProps) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
    activeOpacity={1}>
    <View>
      <View
        style={{
          width: 55,
          height: 55,
          borderRadius: 50,
          backgroundColor: '#8BF996',
        }}>
        {children}
      </View>
    </View>
  </TouchableOpacity>
);

const { Screen, Navigator } = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigation = () => {
  return (
    <Navigator
      initialRouteName={ROUTE_PATH.HABIT_LIST_HOME}
      screenOptions={{ headerShown: false }}>
      <Screen
        name={ROUTE_PATH.HABIT_LIST_HOME}
        component={HabitListHome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#45E456' : '#A0A0A0',
                fontSize: 11,
              }}>
              {BOTTOM_TAB_NAVIGATION_NAME.HOME}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={25}
              height={25}
              fill={focused ? '#45E456' : '#A0A0A0'}
            />
          ),
        }}
      />
      <Screen
        name={ROUTE_PATH.USER_STATISTICS}
        component={UserStatistics}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#45E456' : '#A0A0A0',
                fontSize: 11,
              }}>
              {BOTTOM_TAB_NAVIGATION_NAME.SUCCESS}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AnalyticsIcon
              width={25}
              height={25}
              fill={focused ? '#45E456' : '#A0A0A0'}
            />
          ),
        }}
      />
      <Screen
        name={ROUTE_PATH.GROWING_TREE}
        component={GrowingTree}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <TreeIcon
              width={45}
              height={45}
              fill={focused ? '#414141' : '#A0A0A0'}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Screen
        name={ROUTE_PATH.SOCIAL}
        component={Social}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#45E456' : '#A0A0A0',
                fontSize: 11,
              }}>
              {BOTTOM_TAB_NAVIGATION_NAME.SOCIAL}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SocialIcon
              width={25}
              height={25}
              fill={focused ? '#45E456' : '#A0A0A0'}
            />
          ),
        }}
      />
      <Screen
        name={ROUTE_PATH.MY_PAGE}
        component={MyPage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? '#45E456' : '#A0A0A0',
                fontSize: 11,
              }}>
              {BOTTOM_TAB_NAVIGATION_NAME.MY_PAGE}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <UserIcon
              width={25}
              height={25}
              fill={focused ? '#45E456' : '#A0A0A0'}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigation;
