import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet } from 'react-native'; // Añade StyleSheet aquí
import LoginScreen from '../my-app/LoginScreen';
import Mail from '../my-app/Mail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Mail" component={Mail} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}