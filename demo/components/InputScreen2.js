import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';
import storage from './Storage';

function InputScreen2() {
  const { input2, setInput2, inputs2, setInputs2 } = useValue();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const ret = await storage.load({
        key: 'habitTrackerInputs',
        id: '2'
      });
      setInputs2(ret || []);
      console.log('Loaded data:', JSON.stringify(ret));
    } catch (err) {
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          setInputs2([]);
          break;
        case 'ExpiredError':
          setInputs2([]);
          break;
        default:
          console.log('Error loading data:', err);
      }
    }
  };

  const storeData = async (value) => {
    try {
      await storage.save({
        key: 'habitTrackerInputs',
        id: '2',
        data: value,
        expires: null, // Set to null for no expiration
      });
      console.log('Stored data:', JSON.stringify(value));
    } catch (e) {
      console.log("Error storing data:", e);
    }
  };

  const clearAll = async () => {
    try {
      await storage.clearMapForKey('habitTrackerInputs');
      setInputs2([]);
      console.log('Cleared all data');
    } catch (e) {
      console.log("Error clearing data:", e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Input Page: Habit Tracker</Text>
      <TextInput
        placeholder="Enter habit"
        onChangeText={text => setInput2(text)}
        value={input2}
        style={styles.input}
      />
      <Button
        title="Add Habit"
        onPress={() => {
          const newInputs2 = [...inputs2, input2];
          setInputs2(newInputs2);
          storeData(newInputs2);
          setInput2('');
        }}
      />
      <Text style={styles.inputsText}>Current Habits: {JSON.stringify(inputs2)}</Text>
      <Button
        title="Clear All"
        color="red"
        onPress={clearAll}
      />
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
  inputsText: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'yellow',
    width: '80%',
    textAlign: 'center',
  }
});

export default InputScreen2;

