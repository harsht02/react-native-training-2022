import {StyleSheet} from 'react-native';
const Style = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  header: {
    flex: 1,
    backgroundColor: '#6495ED',
  },
  travel: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  headings: {
    flex: 0.5,
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
  },
  colorSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  seatsView: {
    flex: 7.5,
    marginTop: 10,
  },
  row1: {
    justifyContent: 'space-evenly',
  },
  commonrow: {
    // flexDirection: 'row',
  },
  buttonContainer: {
    borderWidth: 1,
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
    marginTop: 20,
    marginHorizontal: 10,
    width: 30,
    height: 30,
  },
  button: {
    borderWidth: 1,
  },
  choosenButton: {
    borderWidth: 1,
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderRadius: 20,
  },
  fareCharges: {
    flex: 1,
    backgroundColor: '#6495ED',
  },
});
export default Style;
