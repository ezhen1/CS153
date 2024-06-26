import React from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useValue } from './ValueContext';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

function HomeScreen() {
  const { inputs } = useValue();
  const { inputs2 } = useValue();

  return (
    <ScrollView>
      <Text style = {{marginTop: 30}}>Checklist:</Text>
      <View>
        <FlatList
          data={inputs}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
        <Text style = {{marginTop: 30}}>Habit Tracker:</Text>
        <FlatList
          data={inputs2}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
      />
      </View>
    </ScrollView>
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
