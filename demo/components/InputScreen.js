import React from 'react';
import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import { useValue } from './ValueContext';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

function InputScreen() {
  const { input, setInput, inputs, setInputs } = useValue();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <TextInput
        placeholder="Enter action"
        onChangeText={(text) => setInput(text)}
        value={input}
        style={styles.input}
      />
      <Button
        title="Add Input"
        onPress={() => {
        setInputs([...inputs, input]);
        setInput('');
        
        }}
      />
      <Text style={styles.inputsText}>Current Inputs: {JSON.stringify(inputs)}</Text>
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
  },
});

export default InputScreen;

    