import {View, Text, Button} from 'react-native';
import React from 'react';
// import style from './style';

const container2 = ({countDown, onPress, title}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Timer</Text>
      <Text style={{fontSize: 70, textAlign: 'center'}}>{countDown}</Text>
      <Button title={title} onPress={onPress}></Button>
    </View>
    /* <View style={{flex: 1}}>
        <View
          style={{
            borderWidth: 2,
            flex: 1,
            width: 85,
            borderRadius: 100,
            backgroundColor:
              trafficcolor == 0
                ? 'red'
                : trafficcolor <= 6 || trafficcolor >= 9
                ? 'red'
                : 'white',
            margin: 20,
          }}></View>
        <View
          style={{
            borderWidth: 2,
            flex: 1,
            width: 85,
            borderRadius: 100,
            backgroundColor: trafficcolor == 8 ? 'yellow' : 'white',
            margin: 20,
          }}></View>
        <View
          style={{
            borderWidth: 2,
            flex: 1,
            width: 85,
            borderRadius: 100,
            backgroundColor: trafficcolor == 7 ? 'green' : 'white',
            margin: 20,
          }}></View>
      </View> */
  );
};

export default container2;
