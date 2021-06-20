import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput} from 'react-native';
import Market from './views/Market';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      <Text style={style.Title}> PATIKASTORE</Text>
      <TextInput
        style={style.Input}
        placeholder="Ara..."
        onChangeText={setSearch}
        value={search}
      />
      <Market search={search} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Title: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Input: {
    backgroundColor: '#eee',
    width: '96%',
    margin: 8,
    paddingLeft: 16,
    alignSelf: 'center',
    borderRadius: 5,
    fontSize: 16,
  },
});

export default App;
