import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

const Container1 = ({horizontal, backgroundColor}) => {
  return (
    <View
      style={{
        flexDirection: horizontal == true ? 'row' : 'column',
        flex: 1,
        margin: 10,
      }}>
      {backgroundColor.map((item, index) => (
        <View
          style={[
            style.view1,
            {
              backgroundColor: item,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Container1;
