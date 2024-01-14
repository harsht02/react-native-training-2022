import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './drawer/home';
import Notifications from './drawer/notifications';
import CustomDrawer from './drawer/customDrawer';
import Message1 from './drawer/message1';
import AboutDrawer from './drawer/aboutDrawer';
import {useDrawerStatus} from '@react-navigation/drawer';
import RootStack from './rootStack';
import RootTab from './rootTab';

// ...

// const isDrawerOpen = useDrawerStatus() === 'open';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
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
      // screenOptions={{headerShown: false, swipeEnabled: true}}
      // defaultStatus="open"
      // gestureEnabled={true}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={RootTab} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Message" component={RootStack} />
      <Drawer.Screen name="About" component={AboutDrawer} />
    </Drawer.Navigator>
  );
};
export default RootDrawer;
// {
//   /* <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}> */
// }
// {
//   /* screens */
// }
// // </Drawer.Navigator>
