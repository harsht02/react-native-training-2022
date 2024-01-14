import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const SeatButton = ({onPress, disabled, item, backgroundColor}) => {
  return (
    <View style={[style.choosenButton, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <Text style={{textAlign: 'center'}}>{(item = item)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeatButton;
