//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { useState } from 'react';
import  { Navigator }  from './Navigator'
//import { StyleSheet, Text, View, Alert, Button, TextInput} from 'react-native';

export default function App() {


  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
    /*<View style={styles.container}>
      <Text style={styles.testText}>Please enter your name</Text>
      <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)}></TextInput>
      <Button color='#ee82ee' style={styles.testBut} onPress={() =>{alert('You tapped the button!' + text)}} title="Ok" />
      <StatusBar style="auto" />
    </View>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center'
  },
  testText: {
    color: '#fff',
    fontSize: 24
  },
  testBut: {
    backgroundColor: '#ee82ee',
    margin: 60,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    minWidth:100,
    margin: 42,
    borderWith: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});*/
