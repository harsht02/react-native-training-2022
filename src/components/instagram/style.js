import {StyleSheet} from 'react-native';
const Style = StyleSheet.create({
  mainContainer: {flex: 1},
  listReel: {
    flexDirection: 'row',
    zIndex: 99999,
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'space-between',
  },
  reelTitle: {
    fontSize: 30,
    alignItems: 'center',
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
  },
  camera: {
    marginTop: 40,

    height: 40,
    left: 230,

    width: 40,
  },
  imageBackground: {
    height: 750,
    width: 400,
    justifyContent: 'flex-end',
  },
  imageView: {
    height: 300,
    marginLeft: 10,
    width: 360,
  },
  likeView: {
    alignItems: 'flex-end',
    marginRight: 10,
    height: 60,
  },
});
export default Style;
