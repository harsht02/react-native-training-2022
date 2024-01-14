import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const MusicScreen = () => {
  const [save, setSave] = useState(false);
  const [reel, setReel] = useState([]);
  let i = reel.length;
  useEffect(() => {
    let data = [];
    for (i = 1; i <= 30; i++) {
      let reelsMusic = {
        key: Math.random(),
        open: false,
      };
      data.push(reelsMusic);
    }
    setReel(data);
  }, []);
  const saved = () => {
    if (!save) {
      setSave(true);
    } else {
      setSave(false);
    }
  };
  console.log('============================', reel);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 100,
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            marginLeft: 20,
            backgroundColor: 'white',
          }}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 10}}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png',
            }}
          />
        </View>
        <View
          style={{
            width: 170,
            marginLeft: 20,
          }}>
          <Text style={{fontWeight: '800', fontSize: 18}}>Heat Waves</Text>
          <View
            style={{
              height: 30,
              flexDirection: 'row',
              alignItems: 'center',
              width: 160,
              justifyContent: 'space-between',
            }}>
            <Image
              style={{height: '80%', width: '15%', borderRadius: 10}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png',
              }}
            />
            <Text style={{fontWeight: '700'}}>glassanimals</Text>
            <IconMaterialIcons name="verified" size={25} color={'#00BFFF'} />
          </View>
          <Text style={{color: 'grey'}}>80.4K reels</Text>
        </View>
      </View>
      <View style={{height: 50, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => saved()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.2,
            height: 30,
            width: 340,
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: '700'}}>
            {!save ? 'Save Audio' : 'Saved'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 70, flexDirection: 'row', marginLeft: 10}}>
        <View style={{height: 30, justifyContent: 'center'}}>
          <IconEntypo name="controller-play" size={35} />
          {/* <IconAntDesign name="pause" size={35} /> */}
        </View>

        <View
          style={{
            height: 20,
            borderBottomWidth: 3,

            width: 250,
            borderColor: 'grey',
          }}></View>
        <View
          style={{
            height: 30,
            width: 60,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontWeight: '800'}}>0.15</Text>
        </View>
      </View>

      <FlatList
        data={reel}
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
                uri: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MusicScreen;
