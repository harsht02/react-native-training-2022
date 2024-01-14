import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const data = [
  // {image: require('../../../assets')},
  // {image: require('../../../assets/home.png')},
  // {image: require('../../../assets/plus.png')},
  // {image: require('../../../assets/write.png')},
  // {image: require('../../../assets/cmmnt.png')},
];
// console.log('fdcsgfdfasd', data);
const MyTabBar = ({state, descriptors, navigation}) => {
  // console.log('name', descriptors);
  return (
    <View style={{flex: 0.12, backgroundColor: 'skyblue'}}>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            navigation.navigate({name: route.name});
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              onPress={onPress}
              style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={data.image}
                  key={index}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',

                  color: isFocused ? 'red' : 'black',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MyTabBar;
