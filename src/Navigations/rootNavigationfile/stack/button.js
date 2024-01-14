import {View, Text, Button} from 'react-native';
import React from 'react';

const ButtonRight = () => {
  return (
    <Button
      onPress={() => alert('This is a custom button!')}
      title="About"
      color="#fff"
    />
  );
};

export default ButtonRight;
