import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderMyProfile from './headerMyProfile';
import CustomProfile from './customProfile';

const Stack = createNativeStackNavigator();

const UserProfile = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <HeaderMyProfile {...props} />,
      }}>
      <Stack.Screen
        name="CustomProfile"
        component={CustomProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default UserProfile;
