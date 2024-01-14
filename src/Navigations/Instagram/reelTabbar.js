import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomReelTabbar from './customReelTabbar';
import HomeNewsFeed from '../../components/instagram/homeNewsFeed';
import SearchScreen from '../../components/instagram/searchScreen';
import ReelsScreen from '../../components/instagram/reelsScreen';
import LikesAndNotification from '../../components/instagram/likesAndNotification';
import Profile from '../../components/instagram/profile';
import ReelDrawer from './reelDrawer';
import Music from './music';
import UserProfile from './userProfile';
const Tab = createBottomTabNavigator();
const ReelTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomReelTabbar {...props} />}>
      <Tab.Screen name="Home" component={HomeNewsFeed} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Share" component={ReelDrawer} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Likes" component={LikesAndNotification} />
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="MyProfile" component={Profile} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default ReelTabbar;
