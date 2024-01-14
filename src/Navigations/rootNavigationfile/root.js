import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen_';
import DetailsScreen from '../detailsScreen';
import UserScreen from '../userScreen';
import Header from './stack/header';
// import Button from './stack/button';
import ButtonRight from './stack/button';
import RootTab from './rootTab';
// import Tab from './tab';
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>

      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="UsersScreen" component={UserScreen} />
      <Stack.Screen name="HomeUsers" component={RootTab} />
    </Stack.Navigator>
  );
};

export default Root;
