import {SafeAreaView, TouchableOpacity, Image, View, Text} from 'react-native';
import React from 'react';
import {useDrawerStatus} from '@react-navigation/drawer';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = ({state, descriptors, navigation}) => {
  // console.log('navigattion11111111111', navigation);
  // console.log('propsssss', state.routes);
  // console.log('name', descriptors[route.key].options);
  const opt = state.routes;
  // const nameValue = Object.values(opt.name);
  const nameFilter = opt?.map(obj => obj.name);
  const status = useDrawerStatus();
  // console.log('status====>>>>', status);

  // console.log('ahsghgdh', nameFilter);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={require('../../../assets/home.png')}
        />
      </TouchableOpacity> */}

      {nameFilter.map((item, index) => (
        <View
          style={{backgroundColor: 'skyblue', marginVertical: 5, flex: 0.1}}>
          <TouchableOpacity onPress={() => navigation.navigate({name: item})}>
            <Text style={{fontSize: 30}}>{item}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default CustomDrawer;
