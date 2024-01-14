import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home!</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Post')} />
    </View>
  );
};

export default HomeScreen;
