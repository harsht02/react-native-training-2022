import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {showLight} from '../redux1/action/action';

var state = 0;

const TraficLights = () => {
  //   const colors = useSelector(state => state.showColor);
  const [selectedColor, setSelectedColor] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15);

  //   const dispatch = useDispatch();

  const setColor = () => {
    setSelectedColor(selectedColor < 3 ? selectedColor + 1 : 0);
  };
  // console.log('dfgndfngjkdfbgdf', selectedColor);
  const colorShow = () => {
    setColor();
    console.log('deguydguwygdgewggewgywggdewuguyweg');
    setBtnClicked(true);
  };
  useEffect(() => {
    if (btnClicked) {
      console.log('joehiuweew');
      let i = secondsLeft;
      let colorState = selectedColor;
      var interval = setInterval(() => {
        if (i != 1) {
          colorState = colorState <= 2 ? colorState + 1 : 1;
          console.log('iiiiii', i);
          setSelectedColor(colorState);
        } else {
          setSelectedColor(0);
        }
      }, 5000);

      var interval1 = setInterval(() => {
        if (i >= 1) {
          i = i - 1;
          setSecondsLeft(i);
        } else {
          setSecondsLeft(15);
          setBtnClicked(false);
          clearInterval(interval1);
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, [btnClicked]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            borderWidth: 5,
            borderBottomWidth: 0,
            marginLeft: 30,
            padding: 15,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            width: 70,
            height: 70,
            backgroundColor: selectedColor == 1 ? 'red' : 'white',
            borderRadius: 30,
            marginLeft: 30,
          }}></View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 40, textAlign: 'center'}}>Timer</Text>
          <Text style={{fontSize: 70, textAlign: 'center'}}>{secondsLeft}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderWidth: 5,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginLeft: 30,
            padding: 15,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            width: 70,
            height: 70,
            backgroundColor: selectedColor == 2 ? 'green' : 'white',
            borderRadius: 30,
            marginLeft: 30,
          }}></View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderWidth: 5,
            borderTopWidth: 0,
            borderBottomWidth: 5,
            marginLeft: 30,
            padding: 15,
          }}></View>
        <View
          style={{
            borderWidth: 1,
            width: 70,
            backgroundColor: selectedColor == 3 ? 'yellow' : 'white',
            height: 70,
            borderRadius: 30,
            marginLeft: 30,
          }}></View>
        <View style={{flex: 1}}>
          {!btnClicked && <Button title="Start " onPress={e => colorShow()} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TraficLights;
