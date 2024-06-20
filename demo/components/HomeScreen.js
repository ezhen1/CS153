import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useValue } from './ValueContext';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

function HomeScreen() {
  const { inputs } = useValue();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{marginTop: 30}}>Checklist:</Text>
      <FlatList
        data={inputs}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default HomeScreen;
