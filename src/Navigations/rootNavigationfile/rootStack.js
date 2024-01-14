import {View, Text} from 'react-native';
import React from 'react';
import SettingsScreen from './customBar/settingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './customBar/homeScreen';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;
