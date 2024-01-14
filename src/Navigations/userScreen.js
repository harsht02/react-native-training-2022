import {View, TextInput, Text, Button} from 'react-native';
import React, {useState, useContext} from 'react';
import TextInputCustom from './textInput';
import {useNavigation} from '@react-navigation/native';
import PracticeContext from '../../Global/PracticeContext';

const UserScreen = () => {
  const navigation = useNavigation();
  const {name, setName, name1, setName1} = useContext(PracticeContext);
  console.log('name', name);
  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name}</Text>
      <TextInputCustom
        placeholder={'enter name here'}
        onChangeText={e => setData(e)}
        value={data}
      />
      <TextInputCustom
        placeholder={'enter address'}
        onChangeText={e => setData1(e)}
        value={data1}
      />
      <Text>{name1}</Text>
      <TextInputCustom
        placeholder={'enter department'}
        onChangeText={e => setData2(e)}
        value={data2}
      />
      <TextInputCustom
        placeholder={'enter password'}
        onChangeText={e => setData3(e)}
        value={data3}
      />

      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button
        title="Change default Name"
        onPress={() => {
          setName('John'), setName1('Tom');
        }}
      />

      <Button
        title="Submit"
        onPress={() =>
          navigation.navigate('Details', {
            Name: data,
            address: data1,
            department: data2,
            password: data3,
          })
        }
      />
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
};

export default UserScreen;
