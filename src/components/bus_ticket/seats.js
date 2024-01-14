import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const Seats = ({onPress, disabled, flexDirection, backgroundColor}) => {
  return (
    <View style={[style.buttonContainer, (flexDirection = {flexDirection})]}>
      <TouchableOpacity
        style={[style.button, (backgroundColor = {backgroundColor})]}
        disabled={disabled}
        onPress={onPress}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Seats;
