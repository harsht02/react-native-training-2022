import React, {useCallback, useMemo, useState, useEffect} from 'react';

import {SafeAreaView, View, Button, Text} from 'react-native';

const Practice = () => {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(0);

  // useMemo(() => {
  //   setCount(count - 1);
  //   // setCount(1);
  // }, [count]);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const resetCount = useCallback(() => {
    setCount(0);
  }, [count]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 2}}>
        <Text style={{textAlign: 'center'}}>Hooks practice</Text>
        <Text style={{textAlign: 'center'}}>{count}</Text>

        <Button title="Add" onPress={() => increment()} />
        <Button title="Subtract" onPress={() => decrement()} />
        <Button title="reset" onPress={() => resetCount()} />
      </View>
    </SafeAreaView>
  );
};

export default Practice;
