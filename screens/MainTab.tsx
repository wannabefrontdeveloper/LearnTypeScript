import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};
type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();