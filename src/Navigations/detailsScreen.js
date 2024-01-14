import {
  useNavigation,
  useRoute,
  useNavigationState,
} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import PracticeContext from '../../Global/PracticeContext';

const DetailsScreen = () => {
  const {name, setName, name1, setName1} = useContext(PracticeContext);

  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const {Name, address, department, password} = route.params;

  console.log('hfagsfgs', state);
  return (
    <View style={{flex: 1, marginLeft: 20, justifyContent: 'space-between'}}>
      <View style={{flex: 3, justifyContent: 'space-around'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>Your Profile</Text>
        <Text style={{fontSize: 25}}>Name</Text>
        <Text>{name}</Text>
        <Text style={{fontSize: 25}}>Address</Text>
        <Text>{address}</Text>
        <Text style={{fontSize: 25}}>Department</Text>
        <Text>{name1}</Text>
        <Text style={{fontSize: 25}}>password</Text>
        <Text> {password}</Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>

      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
};
export default DetailsScreen;
