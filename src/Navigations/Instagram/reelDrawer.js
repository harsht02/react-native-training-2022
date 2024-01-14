import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ShareDrawer from './shareDrawer';
import React from 'react';
import HomeNewsFeed from '../../components/instagram/homeNewsFeed';
import LikesAndNotification from '../../components/instagram/likesAndNotification';
import SearchScreen from '../../components/instagram/searchScreen';
const Drawer = createDrawerNavigator();
const ReelDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      edgeWidth={0}
      drawerStyle={{
        width: 200,
        flex: 1,
      }}
      screenOptions={{headerShown: false}}
      // defaultStatus="open"
      // defaultStatus="open"
      // gestureEnabled={true}
      drawerContent={props => <ShareDrawer {...props} />}>
      {/* <Drawer.Screen name="Home" component={RootTab} />*/}
      <Drawer.Screen name="Notifications" component={HomeNewsFeed} />
      <Drawer.Screen name="Message" component={LikesAndNotification} />
      <Drawer.Screen name="About" component={SearchScreen} />
    </Drawer.Navigator>
  );
};

export default ReelDrawer;
