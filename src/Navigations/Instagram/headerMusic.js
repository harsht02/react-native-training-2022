import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';

const HeaderMusic = props => {
  return (
    <SafeAreaView
      style={{
        height: 90,
        borderBottomWidth: 0.19,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: 70,
          width: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Reels')}>
          <IconMaterialIcons name="arrow-back-ios" size={30} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 70,
          width: 100,
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}> Audio</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 80,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <IconFeather name="send" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconEntypo
            name="dots-three-horizontal"
            size={25}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderMusic;
