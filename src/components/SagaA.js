import React from 'react';
import {SafeAreaView, Button, View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getItemData, hideItemData} from '../redux/action/action';

const SagaApi = () => {
  console.log('first');
  const data = useSelector(state => state.list);
  const dispatch = useDispatch();
  console.log(';khjkbhjbhjbhjbhjb', data);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'grey',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 35, fontWeight: '700'}}>
          ReduxSagaApiCalling
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 0.5,
          justifyContent: 'space-around',
        }}>
        <Button title="Show data" onPress={e => dispatch(getItemData())} />
        <Button title="Hide data" onPress={e => dispatch(hideItemData())} />
      </View>
      <View style={{flex: 9, backgroundColor: 'skyblue'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{borderWidth: 2, padding: 10, minHeight: 250}}>
              <Text style={{fontSize: 20, padding: 10}}>{item.id}</Text>
              <Text style={{fontSize: 30, padding: 10}}>{item.title}</Text>

              <Text style={{fontSize: 20, padding: 10}}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SagaApi;
