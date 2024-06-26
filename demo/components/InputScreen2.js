import React from 'react';
import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { useValue } from './ValueContext';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

function InputScreen2() {
  const { input2, setInput2, inputs2, setInputs2 } = useValue();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Input Page: Habit Tracker</Text>
      <TextInput
        placeholder="Enter action"
        onChangeText={(text) => setInput2(text)}
        value={input2}
        style={styles.input}
      />
      <Button
        title="Add Habit"
        onPress={() => {
          setInputs2([...inputs2, input2]);
          setInput2('');
        }}
      />
      <Text style={styles.inputsText}>Current Checklist: {JSON.stringify(inputs2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default InputScreen2;

