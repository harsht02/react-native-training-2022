import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const data = [
  {image: require('../../assets/iHome.png'), text: 'Home'},
  {image: require('../../assets/iSearch.png'), text: 'Search'},
  {image: require('../../assets/iReels.png'), text: 'Reels'},
  {image: require('../../assets/iLove1.png'), text: 'Likes'},
  {image: require('../../assets/iProfile.png'), text: 'MyProfile'},
];
// console.log('fdcsgfdfasd', data);
const CustomReelTabbar = ({state, descriptors, navigation}) => {
  console.log('hsdhbshdbjsbjbahjdabs', state);
  return (
    <View
      style={{
        flex: 0.07,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
      }}>
      {data.map((item, index) => (
        <View
          style={{
            flexDirection: 'row',

            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate(item.text)}>
            <Image
              style={{maxHeight: '45%', maxWidth: 30}}
              source={item.image}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default CustomReelTabbar;
