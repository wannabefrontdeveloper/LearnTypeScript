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

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationprop>();
  const onPress=() => {
    navigation.navigate('Detail', {id: 1});
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;