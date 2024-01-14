import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
const HeaderMyProfile = props => {
  return (
    <SafeAreaView style={{height: 80, flexDirection: 'row'}}>
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
          height: 30,
          width: 270,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '600'}}>User_name</Text>
      </View>
      <View
        style={{
          height: 70,
          width: 50,
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
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

export default HeaderMyProfile;
