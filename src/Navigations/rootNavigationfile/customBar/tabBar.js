import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from '../../homeScreen';
// import UserScreen from '../userScreen';
// import DetailsScreen from '../../detailsScreen';
// const HomeStack = createNativeStackNavigator();

// const HomeStackScreen = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       {/* <HomeStack.Screen name="Post" component={UserScreen} /> */}
//     </HomeStack.Navigator>
//   );
// };

// const SettingsStack = createNativeStackNavigator();

// const SettingsStackScreen = () => {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen
//         name="Settings"
//         component={DetailsScreen}
//         options={{headerShown: false}}
//       />
//       {/* <SettingsStack.Screen name="Post" component={HomeScreen} /> */}
//     </SettingsStack.Navigator>
//   );
// };
const TabBar = () => {
  const HomeScreen = ({navigation}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Home!</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Post')}
        />
      </View>
    );
  };

  const SettingsScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  };
  const EmptyTab = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    );
  };

  const Post = () => {
    return (
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text>MessageHere</Text>
      </View>
    );
  };
  return (
    <>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        screenOptions={{
          tabBarStyle: {backgroundColor: 'blue'},
        }}
        options={{tabBarBadge: 3, headerShown: true}}
      />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Empty"
        component={EmptyTab}
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => {
            return (
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 50,
                    height: 80,
                    borderWidth: 1,
                    marginBottom: 30,
                    width: 80,

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                    }}
                    source={require('../../../assets/plus.png')}
                  />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={HomeScreen}
        options={{tabBarBadge: 10}}
      />
      <Tab.Screen name="Message" component={Post} options={{tabBarBadge: 7}} />
    </>
  );
};

export default TabBar;
