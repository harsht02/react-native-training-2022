import {View, Image, TouchableOpacity, FlatList, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
const CustomProfile = () => {
  const [reelsProfile, setReelsProfile] = useState([]);
  let i = reelsProfile.length;
  useEffect(() => {
    let data = [];
    for (i = 1; i <= 30; i++) {
      let profile = {
        key: Math.random(),
        open: false,
      };
      data.push(profile);
    }
    setReelsProfile(data);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 90, height: 90, marginLeft: 15}}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 60,
              borderWidth: 0.2,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1609859667712-5c6baf377769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginLeft: 15,
            width: 250,
            height: 90,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '900'}}>15</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Post</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '900'}}>200</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Followers</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '900'}}>90</Text>
            <Text style={{fontSize: 20, fontWeight: '400'}}>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          minHeight: 80,
          justifyContent: 'space-evenly',
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 15, fontWeight: '700'}}>Public profile</Text>
        <Text style={{fontSize: 15}}>Name</Text>
        <Text style={{fontSize: 15}}>About</Text>
      </View>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View
          style={{
            width: 170,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              backgroundColor: 'skyblue',
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              marginLeft: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 160,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              width: 160,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 50}}>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              marginLeft: 10,
              borderRadius: 5,
            }}>
            <IconAntDesign name="adduser" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 40, flexDirection: 'row', borderBottomWidth: 0.2}}>
        <View style={{width: 125, alignItems: 'center'}}>
          <IconIonicons name="grid-outline" size={25} />
        </View>
        <View style={{width: 125, alignItems: 'center'}}>
          <IconIonicons name="play" size={30} />
        </View>
        <View style={{width: 125, alignItems: 'center'}}>
          <IconAntDesign name="contacts" size={25} />
        </View>
      </View>

      <FlatList
        data={reelsProfile}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 150,
              width: 125,

              borderWidth: 1,
              borderColor: 'white',
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1655960557052-6c746fc47034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CustomProfile;
