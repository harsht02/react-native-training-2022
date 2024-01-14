import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  FlatList,
  Alert,
  Text,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SingleBook from './singleBook';

const dropdownMenuitems = [
  {label: 'Comics', value: 'Comics'},
  {label: 'Programming', value: 'Programming'},
  {label: 'Novel', value: 'Novel'},
  {label: 'Mathematics', value: 'Mathematics'},
];
const Library = () => {
  const [inputBooks, setInputBooks] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState({
    comics: [],
    programming: [],
    novel: [],
    mathematics: [],
  });
  useEffect(() => {
    const getData = async () => {
      const dataBackup = await AsyncStorage.getItem('key');
      const booksData = JSON.parse(dataBackup);
      setItems(booksData);
      console.log('booooookkkkk', booksData);
    };

    getData(), [];
  });

  const addBooks = () => {
    try {
      setValue(value);

      let emptyBook = items;
      let dublicateArrayofBooks = {
        id: Math.random(),
        title: inputBooks,
      };
      console.log("value == 'Comics'", value == 'Comics');
      if (value == 'Comics' && items.comics.length < 10) {
        emptyBook.comics.push(dublicateArrayofBooks);
      }
      if (value == 'Programming' && items.programming.length < 10) {
        emptyBook.programming.push(dublicateArrayofBooks);
      }
      if (value == 'Novel' && items.novel.length < 10) {
        emptyBook.novel.push(dublicateArrayofBooks);
      }
      if (value == 'Mathematics' && items.mathematics.length < 10) {
        emptyBook.mathematics.push(dublicateArrayofBooks);
      }
      Alert.alert('Book is added in the library!', '', [
        {
          text: 'ok',
          onPress: () => {
            AsyncStorage.setItem('key', JSON.stringify(items));
            setInputBooks('');
            setValue(null);
          },
        },
      ]);
    } catch (error) {
      console.log('error in add book', error);
    }
  };
  const deleteComicsBook = (item, index, type) => {
    console.log('iudiuidi', type);
    Alert.alert('Are you sure to remove this book?', '', [
      {
        text: 'Yes',
        onPress: () => {
          let duplicateDeleteList = items;
          if (type == 'comics') {
            const delIndex = duplicateDeleteList.comics.findIndex(
              obj => obj.id == item.id,
            );
            duplicateDeleteList.comics.splice(delIndex, 1);
          }
          if (type == 'programming') {
            const delIndex = duplicateDeleteList.programming.findIndex(
              obj => obj.id == item.id,
            );
            duplicateDeleteList.programming.splice(delIndex, 1);
          }
          if (type == 'novel') {
            const delIndex = duplicateDeleteList.novel.findIndex(
              obj => obj.id == item.id,
            );
            duplicateDeleteList.novel.splice(delIndex, 1);
          }
          if (type == 'mathematics') {
            const delIndex = duplicateDeleteList.mathematics.findIndex(
              obj => obj.id == item.id,
            );
            duplicateDeleteList.mathematics.splice(delIndex, 1);
          }
          setItems(duplicateDeleteList);
          AsyncStorage.setItem('key', JSON.stringify(items));
        },
      },
      {
        text: 'No',
      },
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Comics</Text>
        <FlatList
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items.comics}
          renderItem={({item, index}) => (
            <View style={{marginLeft: 10}}>
              <SingleBook
                onLongPress={e => deleteComicsBook(item, index, 'comics')}
                backgroundColor={'#FAEBD7'}
                item={item.title}
              />
            </View>
          )}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Programming
        </Text>
        <FlatList
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items.programming}
          renderItem={({item, index}) => (
            <View style={{marginLeft: 10}}>
              <SingleBook
                onLongPress={e => deleteComicsBook(item, index, 'programming')}
                backgroundColor={'skyblue'}
                item={item.title}
              />
            </View>
          )}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Novel</Text>
        <FlatList
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items.novel}
          renderItem={({item, index}) => (
            <View style={{marginLeft: 10}}>
              <SingleBook
                onLongPress={e => deleteComicsBook(item, index, 'novel')}
                backgroundColor={'orange'}
                item={item.title}
              />
            </View>
          )}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          Mathematics
        </Text>
        <FlatList
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items.mathematics}
          renderItem={({item, index}) => (
            <View style={{marginLeft: 10}}>
              <SingleBook
                onLongPress={e => deleteComicsBook(item, index, 'mathematics')}
                backgroundColor={'brown'}
                item={item.title}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          flex: 1.8,
          backgroundColor: 'grey',
          alignItems: 'center',
        }}>
        <View style={{width: 300, zIndex: 99999}}>
          {console.log('value1111111', value)}
          <DropDownPicker
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              // marginLeft: 45,
            }}
            open={open}
            value={value}
            items={dropdownMenuitems}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>

        <TextInput
          style={{
            textAlign: 'center',
            fontSize: 20,
            width: 250,
            padding: 5,
            marginVertical: 10,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            marginHorizontal: 50,
          }}
          placeholder="Add Title here"
          onChangeText={e => setInputBooks(e)}
          value={inputBooks}
        />

        {inputBooks.length > 0 && (
          <Button
            onPress={e => addBooks()}
            title="Add Books "
            color="#841584"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Library;
