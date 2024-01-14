import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import style from './style';
import Seats from './seats';
import SeatButton from './seatButton';

const BusMains = () => {
  const [bookTicket, setBookTicket] = useState([]);
  const [choosen, setChoosen] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [choosenButton, setChoosenButton] = useState();
  const [hide, setHide] = useState(0);

  let i = bookTicket.length;
  let seatSelect = [];
  let select = seatSelect;
  for (select = 1; select <= 5; select++) {
    seatSelect.push(select);
  }
  let findSeats = bookTicket.filter(obj => obj.selected == false);

  const ticketChoosen = data => {
    setChoosen(true);
    setChoosenButton(data);
  };
  const ticketSelection = () => {
    Alert.alert('Ticket is booked!', '', [
      {
        text: 'ok',
        onPress: () => {
          const newSeats = bookTicket.map(obj => {
            obj.selected ? (obj.booked = true) : obj.booked;
            return obj;
          });

          setBookTicket(newSeats);

          AsyncStorage.setItem('key', JSON.stringify(newSeats));
        },
      },
    ]);
    setTicketPrice(0);
    setHide(0);
    setChoosenButton(0);
  };
  // AsyncStorage.clear();

  useEffect(async () => {
    const value = await AsyncStorage.getItem('key');
    const abc = JSON.parse(value);
    if (abc && abc.length > 0) {
      setBookTicket(abc);
    } else {
      let newArr = [];
      for (i = 1; i <= 32; i++) {
        let slot = {
          id: i,
          selected: false,
          booked: false,
        };
        newArr.push(slot);
      }
      setBookTicket(newArr);
    }
  }, []);

  const selectedTicket = (item, index) => {
    bookTicket[index].selected = !bookTicket[index].selected;
    if (bookTicket[index].selected) {
      setHide(hide + 1);
    } else {
      setHide(hide - 1);
    }

    setBookTicket([...bookTicket]);
    let total = ticketPrice;
    total = bookTicket[index].selected ? ticketPrice + 100 : ticketPrice - 100;
    setTicketPrice(total);
  };

  return (
    <SafeAreaView style={style.container1}>
      <View style={style.header}>
        <Text style={style.travel}>Bus travel limited</Text>
      </View>
      <View style={style.headings}>
        <Text style={style.price}>Price : Rs 100</Text>
        <View style={style.colorSelection}>
          <View
            style={{
              borderWidth: 1,
              flex: 0.1,
            }}></View>
          <Text>Available </Text>
          <View
            style={{backgroundColor: 'grey', borderWidth: 1, flex: 0.1}}></View>
          <Text>Reserved</Text>
        </View>
      </View>

      <View style={style.seatsView}>
        <View style={style.row1}>
          <View style={style.commonrow}>
            <FlatList
              bounces={false}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              data={[...bookTicket]}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View
                  style={{
                    width: 100,
                    marginLeft: 8,
                  }}>
                  <Seats
                    item={item}
                    disabled={
                      choosen
                        ? item.booked
                          ? true
                          : hide == choosenButton && !item.selected
                        : true
                    }
                    backgroundColor={item.selected ? 'grey' : 'white'}
                    onPress={e => selectedTicket(item, index)}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <View style={{}}>
          {/* {seatSelection.map(data => (
            <Button item={data} />
          ))} */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-around',
            }}>
            {seatSelect.map((data, idx) => (
              <SeatButton
                item={data}
                disabled={findSeats.length < data ? true : false}
                backgroundColor={
                  choosenButton == idx + 1
                    ? 'skyblue'
                    : findSeats.length < data
                    ? 'grey'
                    : 'white'
                  // (bookTicket.length = data.length ? 'blue' : 'grey'),
                }
                onPress={e => ticketChoosen(data)}
              />
            ))}
          </View>

          <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10}}>
            Total fare
          </Text>
          <Text style={{textAlign: 'center', color: 'blue', fontSize: 20}}>
            {ticketPrice}
          </Text>
        </View>
      </View>
      <View style={style.fareCharges}>
        <TouchableOpacity onPress={ticketSelection}>
          <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10}}>
            Book ticket
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BusMains;
