import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
//import { StyleSheet, Text, View, Alert, Button, TextInput} from 'react-native';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { ProfileScreen } from './ProfileScreen';

export const Navigator = () => {
  //const [text, setText] = useState('');
  //const [message, setMessage] = useState('');
  
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    /*<View style={styles.container}>
      <Text style={styles.testText}>Please enter your name</Text>
      <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)}></TextInput>
      <Button color='#ee82ee' style={styles.testBut} onPress={() =>{alert('You tapped the button!' + text)}} title="Ok" />
      <StatusBar style="auto" />
    </View>*/
  );
}