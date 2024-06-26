import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import InputScreen from './InputScreen';
import InputScreen2 from './InputScreen2';
import AboutScreen from './AboutScreen';
import ValueProvider from './ValueContext';


const Tab = createBottomTabNavigator();

export default function App() {
  const data = {};

  return (
   <ValueProvider value={data}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Input: Planner" component={InputScreen} />
        <Tab.Screen name="Input: Habit Tracker " component={InputScreen2} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
   </ValueProvider>
  );
}