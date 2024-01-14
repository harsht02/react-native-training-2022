import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Alert,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import React, {useState, useEffect, useRef} from 'react';
import Modal from 'react-native-modalbox';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SwipeableFlatList from 'react-native-swipeable-list';
// import BottomSheet from 'react-native-simple-bottom-sheet';
import Style from './style';
import CustomModal from './customModal';
const ReelsScreen = props => {
  console.log('propssssssssssss', props);
  const shareDetails = [
    {name: 'Add reel to your story', share: true},
    {name: 'Smith', select: false},
    {name: 'tommy', select: false},
    {name: 'Max', select: false},
    {name: 'Justin', select: false},
    {name: 'Alex', select: false},
    {name: 'Hamton', select: false},
    {name: 'Andreui', select: false},
    {name: 'Larry', select: false},
    {name: 'Ramon', select: false},
    {name: 'Sergio', select: false},
    {name: 'Marcelo', select: false},
    {name: 'Benzema', select: false},
  ];
  const forShare = useRef();
  const forComments = useRef();
  const forInfo = useRef();
  const [inputComment, setInputComment] = useState('');
  const [send, setSend] = useState(false);
  const [numberofComments, setNumberofComments] = useState(0);
  const [replyStatus, setReplyStatus] = useState(false);
  const [time, setTime] = useState('0sec ago');
  const [details, setDetails] = useState([]);
  const [comment, setComment] = useState([]);
  const [reelsItem, setReelsItem] = useState([
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      text: 'What about basics of nature photography',
      key: Math.random(),
      follow: false,
      count: 0,
      like: false,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      text: 'This is what i want to be ',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
      text: 'Best place to visit',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      text: 'its my passion for fitness',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
      text: 'Are you the person who wants to transform youself ',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      text: 'What about basics of nature photography',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      text: 'This is what i want to be ',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
      text: 'Best place to visit',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      text: 'its my passion for fitness',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
    {
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
      text: 'Are you the person who wants to transform youself ',
      key: Math.random(),
      follow: false,
      like: false,
      count: 0,
      pageComment: [],
      totalComment: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [numberofReel, setNumberofReels] = useState(2);
  const [cutData, setCutData] = useState([]);
  const [replyComment, setReplyComment] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedItem, setSelectedItem] = useState([]);
  const [replyInput, setReplyInput] = useState('');

  // console.log('state=>>>>>>>', reelsItem);
  useEffect(() => {
    const cut = reelsItem.slice(0, numberofReel);
    setCutData(cut);
    setDetails(shareDetails);
  }, []);
  const postComment = () => {
    let emptyComment = [...reelsItem];
    let duplicateComment = {
      key: Math.random(),
      text: inputComment,
      like: false,

      countComment: 0,
      reply: [],
    };
    emptyComment[selectedIndex].pageComment.push(duplicateComment);
    emptyComment[selectedIndex].totalComment =
      emptyComment[selectedIndex].pageComment.length;

    console.log('=....', emptyComment[selectedIndex].totalComment);
    // console.log('length=>>>>>>>>', emptyComment.length);

    setReelsItem(emptyComment);
    // console.log('========______', reelsItem[selectedIndex].pageComment);

    setInputComment('');
    // console.log('comment=>>>>>>>>>>>>>>>>>', comment);
  };
  const activeReply = (item, index) => {
    setReplyStatus(true);
    setSelectedItem(index);
  };

  const replyItem = () => {
    let emptyReply = [...reelsItem];
    let duplicateReply = {
      replykey: Math.random(),
      replyLike: 0,
      replyComment: 0,
      likes: false,
      replyText: replyInput,
    };
    emptyReply[selectedIndex].pageComment[selectedItem].reply.push(
      duplicateReply,
    );
    console.log(
      '==============',
      emptyReply[selectedIndex].pageComment[selectedItem].reply.length,
    );

    emptyReply[selectedIndex].totalComment =
      emptyReply[selectedIndex].pageComment[selectedItem].reply.length +
      emptyReply[selectedIndex].totalComment;
    setReelsItem(emptyReply);
    setReplyInput('');
    setSelectedItem();
    setReplyStatus(false);
  };
  const getFollow = (item, index) => {
    reelsItem[index].follow = !reelsItem[index].follow;
    setReelsItem([...reelsItem]);

    // console.log('hddshd', reelsData[index].follow);
  };
  const commentLike = (item, index) => {
    reelsItem[selectedIndex].pageComment[index].like =
      !reelsItem[selectedIndex].pageComment[index].like;
    if (reelsItem[selectedIndex].pageComment[index].countComment == 0) {
      reelsItem[selectedIndex].pageComment[index].countComment = 1;
    } else {
      reelsItem[selectedIndex].pageComment[index].countComment = 0;
    }
    setReelsItem([...reelsItem]);

    // console.log('hddshd', reelsData[index].follow);
  };
  const commentReplyLike = (item, index) => {
    comment.reply[index].likes = !comment.reply[index].likes;
    if (comment.reply[index].replyLike == 0) {
      comment.reply[index].replyLike = 1;
    } else {
      comment.reply[index].replyLike = 0;
    }
    setComment([...item]);

    // console.log('hddshd', reelsData[index].follow);
  };
  const forTotal = (item, index) => {
    setSelectedIndex(index);

    setReelsItem(reelsItem);
  };
  const getLike = (item, index) => {
    reelsItem[index].like = !reelsItem[index].like;
    if (reelsItem[index].count == 0) {
      reelsItem[index].count = 1;
    } else {
      reelsItem[index].count = 0;
    }

    setReelsItem([...reelsItem]);
  };
  const shareSelected = (item, index) => {
    let mark = [...details];
    mark[index].select = !mark[index].select;
    if (mark[index].select && !mark[index].share) {
      setSend(true);
    } else {
      setSend(false);
    }
    console.log('detailssssss', details);
    setDetails(mark);
  };
  const deleteMainComment = (item, index) => {
    console.log('itemmmmmmmmm', item);
    Alert.alert('Delete this comment?', '', [
      {
        text: 'Yes',
        onPress: () => {
          let duplicateDeleteComment = reelsItem;
          const deleteIndex = duplicateDeleteComment[
            selectedIndex
          ].pageComment.findIndex(obj => obj.key == item.key);
          duplicateDeleteComment[selectedIndex].pageComment.splice(
            deleteIndex,
            1,
          );
          duplicateDeleteComment[selectedIndex].totalComment =
            duplicateDeleteComment[selectedIndex].pageComment.length + 1 - 1;
          setReelsItem(duplicateDeleteComment);
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };
  const deleteReplyComment = (item, index) => {
    Alert.alert('Delete this comment?', '', [
      {
        text: 'Yes',
        onPress: () => {
          let duplicateReplyComment = reelsItem;
          // console.log('=======.........',)
          const deleteIndex = duplicateReplyComment[selectedIndex].pageComment[
            selectedItem
          ].reply[index].findIndex((obj, ind) => obj.key == item.key);

          duplicateReplyComment[selectedIndex].pageComment[selectedItem].reply[
            index
          ].splice(deleteIndex, 1);
          setReelsItem(duplicateReplyComment);
          setNumberofComments(numberofComments - 1);
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };
  return (
    <View style={Style.mainContainer}>
      <View style={Style.listReel}>
        <Text style={Style.reelTitle}>Reels</Text>
        <IconAntDesign
          name="camerao"
          size={40}
          color={'white'}
          style={Style.camera}
        />
      </View>
      <SwiperFlatList
        style={{}}
        // showsVerticalScrollIndicator={false}
        // onEndReached={() => {
        //   if (cutData.length < reelsItem.length) {
        //     setLoading(true);
        //     const cut = [...reelsItem].slice(numberofReel, numberofReel + 2);

        //     setTimeout(() => {
        //       setLoading(false);
        //       setCutData([...cutData, ...cut]);
        //       setNumberofReels(numberofReel + 2);
        //     }, 3000);
        //   }
        // }}
        shouldBounceOnMount={false}
        autoplay={false}
        index={0}
        vertical={true}
        // onEndReachedThreshold={20}
        // ListFooterComponent={() => {
        //   return loading && <ActivityIndicator size="large" />;
        // }}
        data={reelsItem}
        renderItem={({item, index}) => (
          <View style={{justifyContent: 'flex-end'}}>
            {/* <Video
              onError={e => console.log('eeee', e)}
              source={{
                uri: item.video,
              }}
              paused={false}
              repeat={true}
              resizeMode={'cover'}
              style={{
                height: 450,
                width: 375,
              }}
            /> */}
            <ImageBackground
              source={{
                uri: 'https://images.unsplash.com/photo-1617720197521-cac54ab8fe8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              }}
              style={Style.imageBackground}>
              <View style={Style.imageView}>
                <View style={Style.likeView}>
                  <TouchableOpacity onPress={() => getLike(item, index)}>
                    {!item.like && (
                      <IconAntDesign name="hearto" size={35} color={'white'} />
                    )}
                    {item.like && (
                      <IconAntDesign name="heart" size={35} color={'red'} />
                    )}
                  </TouchableOpacity>
                  {item.count != 0 && (
                    <Text
                      style={{fontSize: 20, color: 'white', marginRight: 10}}>
                      {item.count}
                    </Text>
                  )}
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    height: 60,
                  }}>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      marginRight: 5,
                    }}
                    onPress={() => {
                      forComments?.current?.open();
                      forTotal(item, index);
                    }}>
                    <IconEvilIcons name="comment" size={45} color={'white'} />
                    <Text style={{color: 'white', fontSize: 20}}>
                      {item.totalComment == 0 ? '' : item.totalComment}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginVertical: 10,
                  }}>
                  <TouchableOpacity
                    style={{marginRight: 10}}
                    onPress={() => forShare?.current?.open()}>
                    <IconEntypo name="share" size={35} color={'white'} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 240,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 180,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate('UserProfile')}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconAntDesign name="user" size={25} color={'white'} />
                        <Text style={{color: 'white', fontWeight: '700'}}>
                          {item.key}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        marginLeft: 20,
                        alignItems: 'flex-start',

                        width: 120,
                      }}>
                      <TouchableOpacity
                        onPress={() => getFollow(item, index)}
                        style={{
                          height: 20,
                          borderWidth: 1.5,
                          borderRadius: 3,
                          borderColor: 'white',

                          minWidth: 50,
                        }}>
                        {item.follow == false && (
                          <Text
                            style={{
                              color: 'white',
                              textAlign: 'center',
                              fontWeight: '600',
                            }}>
                            Follow
                          </Text>
                        )}
                        {item.follow == true && (
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: '600',
                              textAlign: 'center',
                            }}>
                            Following
                          </Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                    }}>
                    <TouchableOpacity
                      style={{marginRight: 10}}
                      onPress={() => forInfo?.current?.open()}>
                      <IconEntypo
                        name="dots-three-horizontal"
                        size={35}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    {item.text}
                  </Text>
                </View>
                <View
                  style={{
                    height: 50,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: 300, justifyContent: 'center'}}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Music')}>
                      <Text style={{color: 'white'}}>
                        Heats Waves (Glass_Animals_)
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      width: 70,

                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Music')}
                      style={{marginRight: 10, marginTop: 10}}>
                      <IconMaterialIcons
                        name="music-note"
                        size={35}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />

      <Modal
        // isOpen={true}
        ref={forShare}
        entry={'bottom'}
        style={{
          height: '75%',
          width: '99%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        position={'bottom'}
        backdropPressToClose={false}>
        <View style={{height: '100%', alignItems: 'center'}}>
          <View
            style={{
              height: 30,
            }}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>_____</Text>
          </View>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              width: 350,
              borderWidth: 0.5,
              borderRadius: 25,
            }}>
            <View
              style={{
                justifyContent: 'center',
                width: 50,
                alignItems: 'center',
              }}>
              <IconAntDesign name="search1" size={25} />
            </View>
            <TextInput
              placeholder="Search"
              style={{
                height: 40,
                fontSize: 20,
                width: 250,
                marginLeft: 5,
              }}></TextInput>
            <View style={{justifyContent: 'center'}}>
              <IconEntypo name="users" size={25} />
            </View>
          </View>

          <FlatList
            data={details}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => shareSelected(item, index)}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 50,
                    width: 350,
                    marginVertical: 5,
                    alignItems: 'center',
                  }}>
                  <View style={{width: 50}}>
                    <IconAntDesign name="user" size={25} />
                  </View>
                  <View style={{width: 270}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    {item.share && <IconAntDesign name="right" size={25} />}
                    {/*  && <IconEntypo name="circle" size={25} />} */}

                    {!item.share && (
                      <IconAntDesign
                        name="checkcircle"
                        size={25}
                        color={item.select == true ? 'blue' : 'black'}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <View
            style={{
              minHeight: 50,

              width: 400,
              borderTopWidth: 0.2,
              justifyContent: 'center',
            }}>
            {send && (
              <View
                style={{
                  height: 50,
                  borderBottomWidth: 0.2,
                }}>
                <TextInput
                  placeholder="Write a message"
                  style={{marginLeft: 20}}
                />
              </View>
            )}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
              }}>
              <TouchableOpacity
                style={{
                  width: 350,
                  backgroundColor: send ? '#00BFFF' : 'skyblue',
                  justifyContent: 'center',
                  height: 40,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '700',

                    color: 'white',
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        ref={forComments}
        entry={'bottom'}
        style={{
          height: '70%',
          width: '99%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        onClosed={() => {
          setReplyStatus(false);
          setSelectedIndex();
        }}
        position={'bottom'}
        backdropPressToClose={false}
        // backdropContent={BContent}
      >
        <View
          style={{
            flex: 8,

            borderBottomWidth: 0.2,
          }}>
          <View style={{height: 20}}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>_____</Text>
          </View>
          <SwipeableFlatList
            data={reelsItem[selectedIndex]?.pageComment}
            keyExtractor={(item, i) => item.key.toString()}
            renderItem={({item, index}) => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onLongPress={() => deleteMainComment(item, index)}>
                  <View
                    style={{
                      flexDirection: 'row',

                      width: 300,
                    }}>
                    <View style={{width: 40, alignItems: 'center', height: 40}}>
                      <IconFontAwesome name="user" size={25} />
                    </View>
                    <View style={{minHeight: 80}}>
                      <View
                        style={{
                          width: 270,

                          flexDirection: 'row',
                        }}>
                        <Text style={{maxWidth: 270}}>
                          <Text
                            style={{
                              fontWeight: '700',
                            }}>
                            {index + 1000000}
                          </Text>
                          <Text>{'    '}</Text>
                          <Text style={{}}>{item.text}</Text>
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',

                          height: 30,
                          justifyContent: 'space-between',
                        }}>
                        <Text>{time}</Text>
                        {item.countComment != 0 && (
                          <TouchableOpacity
                            style={{flexDirection: 'row'}}
                            onPress={() => alert('qdhqgdhqgdh')}>
                            <Text style={{color: 'grey'}}>
                              {item.countComment}likes
                            </Text>
                          </TouchableOpacity>
                        )}

                        <TouchableOpacity
                          onPress={() => activeReply(item, index)}>
                          <Text style={{color: 'grey'}}>reply</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                          <Text style={{color: 'grey'}}>see translation</Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                        <SwipeableFlatList
                          data={item.reply}
                          maxSwipeDistance={240}
                          shouldBounceOnMount={false}
                          keyExtractor={(item, i) =>
                            item?.reply?.replykey.toString()
                          }
                          renderItem={({item, index}) => (
                            <View style={{minHeight: 50}}>
                              <TouchableOpacity
                                style={{}}
                                onLongPress={() =>
                                  deleteReplyComment(item, index)
                                }>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                  }}>
                                  <View
                                    style={{
                                      width: 240,
                                      minHeight: 30,
                                      flexDirection: 'row',
                                    }}>
                                    <IconFontAwesome
                                      name="user"
                                      size={20}
                                      style={{marginRight: 5}}
                                    />
                                    <Text style={{maxWidth: 220}}>
                                      <Text style={{fontWeight: '700'}}>
                                        {index + 330033 + '  '}
                                      </Text>
                                      <Text
                                        style={{
                                          fontWeight: '500',
                                          color: '#00BFFF',
                                        }}>
                                        @{index + 1000000 + ' '}
                                      </Text>

                                      <Text>{item.replyText}</Text>
                                    </Text>
                                  </View>

                                  <View
                                    style={{width: 40, alignItems: 'center'}}>
                                    <TouchableOpacity
                                      onPress={() => alert('liked this')}>
                                      {!item.likes && (
                                        <IconAntDesign
                                          name="hearto"
                                          size={20}
                                        />
                                      )}
                                      {item.likes && (
                                        <IconAntDesign
                                          name="heart"
                                          size={20}
                                          color={'red'}
                                        />
                                      )}
                                    </TouchableOpacity>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    width: 240,
                                    height: 30,
                                    justifyContent: 'space-between',
                                  }}>
                                  <Text>nan</Text>
                                  {item.countComment != 0 && (
                                    <TouchableOpacity
                                      style={{flexDirection: 'row'}}
                                      onPress={() => alert('qdhqgdhqgdh')}>
                                      <Text style={{color: 'grey'}}>
                                        {item.countComment}likes
                                      </Text>
                                    </TouchableOpacity>
                                  )}

                                  <TouchableOpacity
                                    onPress={() => alert('replied')}>
                                    <Text style={{color: 'grey'}}>reply</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity>
                                    <Text style={{color: 'grey'}}>
                                      see translation
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={{width: 70, alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => commentLike(item, index)}>
                      {!item.like && <IconAntDesign name="hearto" size={25} />}
                      {item.like && (
                        <IconAntDesign name="heart" size={25} color={'red'} />
                      )}
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={{flex: 2}}>
          <View
            style={{
              flexDirection: 'row',
              height: 35,
            }}></View>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              height: 70,
            }}>
            <View
              style={{
                width: 70,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/iProfile.png')}
                style={{borderRadius: 20, borderWidth: 1, padding: 18}}
              />
            </View>
            <View
              style={{
                width: 290,
                borderWidth: 1,
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <TextInput
                  placeholder={
                    !replyStatus
                      ? 'Add a comment as username'
                      : 'Add reply on this comment'
                  }
                  onChangeText={e =>
                    !replyStatus ? setInputComment(e) : setReplyInput(e)
                  }
                  value={!replyStatus ? inputComment : replyInput}
                  style={{
                    height: 40,
                    marginLeft: 10,
                    maxWidth: 220,
                    textAlign: 'auto',
                  }}
                />
              </View>
              <View>
                <Button
                  title="Post"
                  onPress={() => (replyStatus ? replyItem() : postComment())}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        ref={forInfo}
        entry={'bottom'}
        style={{
          height: '58%',
          width: '90%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        position={'bottom'}
        backdropPressToClose={false}
        // backdropContent={BContent}
      >
        <View style={{height: '60%'}}>
          <View
            style={{
              height: 20,
            }}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>_____</Text>
          </View>

          <CustomModal item={'Report'} color={'red'} />
          <CustomModal item={'Not Interested'} color={'red'} />
          <CustomModal item={'Remix this reel'} />
          <CustomModal item={'Save'} />
          <CustomModal item={'Copy Link'} />
          <CustomModal item={'Share to'} />
          <CustomModal item={'Cancel'} />
        </View>
      </Modal>
      {/* <CustomModal item={'hey there'} ref={forShare} /> */}
    </View>
  );
};

export default ReelsScreen;
