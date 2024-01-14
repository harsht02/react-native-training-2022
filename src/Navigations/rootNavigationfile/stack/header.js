import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from 'react-native';
import React from 'react';

// import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor:
          props?.route?.name == 'Details'
            ? 'grey'
            : props?.route?.name == 'UsersScreen'
            ? 'skyblue'
            : 'orange',

        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          {props?.route.name != 'Home' && (
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
              // source={require('../../../assets/back.png')}
            />
          )}
        </TouchableOpacity>
        {props?.route.name == 'Home' && (
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
              // source={require('../../../assets/home.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 20,
          }}>
          {props?.route?.name}
        </Text>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        {props?.route?.name == 'Home' && (
          <Button
            onPress={() => alert('This is a custom button!')}
            title="About"
            color="#fff"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
