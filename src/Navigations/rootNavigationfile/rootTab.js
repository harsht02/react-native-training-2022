import {View, Text, Button, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './customBar/homeScreen';
import SettingsScreen from './customBar/settingsScreen';
import EmptyTab from './customBar/emptyTab';
import Post from './customBar/post';
import Message from './customBar/message';

import MyTabBar from './customBar/myTabBar';
import Root from './root';
import RootStack from './rootStack';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Root} />
      <Tab.Screen name="Settings" component={SettingsScreen} />

      <Tab.Screen name="Contact" component={RootStack} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};

export default RootTab;
