import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import { CompositeNavigationProp, NavigatorScreenParams, useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from './RootStack';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

export type MainTabNavigationprop = CompositeNavigationProp<RootStackNavigationProp, BottomTabNavigationProp<MainTabParamList>
>;

// 추후 RootStack 내부 화면에서 navigation.navigate('MainTab', {screen: 'Account'})가 가능하게 해줌
export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();