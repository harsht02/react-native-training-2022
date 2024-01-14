import {TextInput, Text} from 'react-native';
import React from 'react';

const TextInputCustom = ({onChangeText, placeholder, value}) => {
  return (
    <>
      <TextInput
        style={{
          borderWidth: 2,
          backgroundColor: '#DCDCDC',
          padding: 15,
          marginVertical: 10,
          borderRadius: 20,
          width: 300,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default TextInputCustom;
