import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import Modal from 'react-native-modalbox';
const CustomModal = ({onPress, item, color}) => {
  return (
    <View
      style={{height: 60, borderBottomWidth: 0.2, justifyContent: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            {
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '400',
              color: color,
            },
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomModal;
