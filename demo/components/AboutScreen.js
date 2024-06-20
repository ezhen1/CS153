import React from 'react';
import { Text, View } from 'react-native';
//import {useValue} from './ValueContext';

function AboutScreen() {
    return (
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 20,
        marginVertical: 8,
        marginHorizontal: 16}}>
        <Text style={{ fontWeight: 'bold'}}>About!</Text>
        <Text style = {{marginTop: 20}}> This app will function as a habit tracker and a daily planner. Users will input the habits or tasks they want to track on the input page, and it will appear on the home page. </Text>
      </View>
    );
  }

export default AboutScreen;