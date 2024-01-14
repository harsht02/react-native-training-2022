import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MusicScreen from './musicScreen';
import HeaderMusic from './headerMusic';

const Stack = createNativeStackNavigator();

const Music = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <HeaderMusic {...props} />,
      }}>
      <Stack.Screen name="MusicScreen" component={MusicScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Music;
