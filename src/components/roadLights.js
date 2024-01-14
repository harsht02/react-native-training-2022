import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Button, TouchableOpacity, Text} from 'react-native';
import Container1 from './traffic/Container1';
import Container2 from './traffic/Container2';

let timer = 7000;
var colorIndex = 0;
var interval = null;
var interval1 = null;

const RoadLights = () => {
  const [trafficcolor, setTrafficColor] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  // const [stimer, setStimer] = useState([]);
  const lightColor = [
    
    [
      trafficcolor == 0 ? 'red' : trafficcolor >= 3 ? 'red' : 'white',
      trafficcolor == 2 ? 'yellow' : 'white',
      trafficcolor == 1 ? 'green' : 'white',
    ],
    [
      trafficcolor == 0
        ? 'red'
        : trafficcolor <= 3 || trafficcolor >= 6
        ? 'red'
        : 'white',
      trafficcolor == 5 ? 'yellow' : 'white',
      trafficcolor == 4 ? 'green' : 'white',
    ],
    [
      trafficcolor == 0
        ? 'red'
        : trafficcolor <= 6 || trafficcolor >= 9
        ? 'red'
        : 'white',
      trafficcolor == 8 ? 'yellow' : 'white',
      trafficcolor == 7 ? 'green' : 'white',
    ],
    [
      trafficcolor == 0
        ? 'red'
        : trafficcolor <= 9 || trafficcolor >= 12
        ? 'red'
        : 'white',
      trafficcolor == 11 ? 'yellow' : 'white',
      trafficcolor == 10 ? 'green' : 'white',
    ],
  ];

  const setColor = () => {
    setTrafficColor(trafficcolor < 12 ? trafficcolor + 1 : 0);

    colorIndex = trafficcolor < 12 ? trafficcolor + 1 : 0;
  };

  const showTrafficLights = () => {
    console.log('state', trafficcolor);
    timer = 7000;
    clearInterval(interval);
    clearInterval(interval1);
    interval = null;
    interval1 = null;
    setColor();
    setButtonStatus(true);
  };

  const tt = () => {
    let i = secondsLeft;
    let colorState = colorIndex;

    interval = setInterval(() => {
      if (i > 1) {
        colorState = colorState < 12 ? colorState + 1 : 0;
        console.log('colorstate', colorState);
        setTrafficColor(colorState);
        let previousTimer = timer;
        timer = colorState % 3 == 0 ? 300 : 7700;

        colorIndex = colorState;

        if (previousTimer != timer) {
          clearInterval(interval);
          interval = null;

          tt();
        }
      } else {
        setTrafficColor(0);
        colorIndex = 0;
        clearInterval(interval);
        interval = null;
      }
    }, timer);

    console.log('jdh', timer);
  };
  useEffect(() => {
    if (buttonStatus) {
      let i = secondsLeft;

      tt();

      interval1 = setInterval(() => {
        if (i > 1) {
          i = i - 1;
          setSecondsLeft(i);
        } else {
          setSecondsLeft(60);
          setTrafficColor(0);
          setButtonStatus(false);
          clearInterval(interval1);
          clearInterval(interval);
          interval = null;
          interval1 = null;
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval1);
      clearInterval(interval);
      interval = null;
      interval1 = null;
    };
  }, [buttonStatus]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container1 horizontal={true} backgroundColor={lightColor[0]} />
      <View style={{flex: 2, flexDirection: 'row'}}>
        <Container1 horizontal={false} backgroundColor={lightColor[1]} />

        <Container2
          countDown={secondsLeft}
          title="start"
          onPress={e => showTrafficLights()}
        />

        {/* <View style={{flex: 1}}>
          <Text style={{fontSize: 40, textAlign: 'center'}}>Timer</Text>
          <Text style={{fontSize: 70, textAlign: 'center'}}>{secondsLeft}</Text>
          <Button title="start " onPress={e => showTrafficLights(e)}></Button>
        </View> */}
        <Container1 horizontal={false} backgroundColor={lightColor[2]} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',

          margin: 10,
        }}>
        <Container1 horizontal={true} backgroundColor={lightColor[3]} />
      </View>
    </SafeAreaView>
  );
};

export default RoadLights;
