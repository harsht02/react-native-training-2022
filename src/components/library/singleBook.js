import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SingleBook = ({onLongPress, item, backgroundColor}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 100,
          width: 70,
          // minWidth: 70,
          // maxwidth: 100,
          backgroundColor: backgroundColor,
        }}
        onLongPress={onLongPress}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          {(item = item)}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default SingleBook;
