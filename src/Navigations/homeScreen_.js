import {View, Text, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const HomeScreen_ = ({navigation}) => {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          borderWidth: 2,
          backgroundColor: '#DCDCDC',
          padding: 15,
          marginVertical: 10,
          borderRadius: 20,
          width: 300,
        }}
        placeholder="Enter Your Id"
      />
      <TextInput
        style={{
          borderWidth: 2,
          backgroundColor: '#DCDCDC',
          padding: 15,
          borderRadius: 20,
          marginVertical: 10,
          width: 300,
        }}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Button title="LogIn" onPress={() => navigation.navigate('Details')} />
      <Button
        title="Register here"
        onPress={() =>
          navigation.navigate('UsersScreen')
        }
      />
    </View>
  );
};

export default HomeScreen_;
