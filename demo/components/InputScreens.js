import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const Item = ({ item }) => (
    <View style={styles.item}>
        <Text>{item}</Text>
    </View>
);

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    return (
        <View style={{flex: 1, backgroundColor: '#fff',alignItems: 'center', justifyContent: 'center'}}>
            <Text>ToDo List</Text>
            <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setTodo(text)}
                value={todo} />
            <Button
                title="Add ToDo"
                onPress={() => {
                    setTodos([...todos, todo]);
                    setTodo('');
                }} />
            <Text>
                {todos}
            </Text>
            <FlatList
                data={todos}
                renderItem={({item}) =>  <Item item={item}/> }
                keyExtractor={item => item}
             />

        </View>
    );
    }

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor:'blue',
        borderWidth: 1,
    },
});

export default ToDoList;