import {View, Text, Button} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  console.log('hdefgedhnavabvavb', navigation);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <Button
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        title="Go to"
      />
    </View>
  );
};

export default Home;
