import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, ToastAndroid } from "react-native";

export const Screen1 = () => {

    const navigation = useNavigation()
    const [text, setText] = useState('')
    const handleNavigateToSreen = () => {
        navigation.navigate('Screen2')
    }
    let errorComponent = null
    let labelComponent = <Text style={styles.labelText}>Name must be at least 3 characters</Text>
    if (text.length >= 3) {
        errorComponent =  <Button color='#ee82ee' style={styles.testBut} onPress={() => handleNavigateToSreen()} title="Next" />
        labelComponent = null
    }
    return(
        <View style={styles.container}>
          <Text style={styles.testText}>Please enter your name</Text>
          <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)}></TextInput>
          {labelComponent}
          <Button color='#ee82ee' style={styles.testBut} onPress={() =>{ToastAndroid.show('Hello, ' + text, ToastAndroid.LONG);}} title="Ok" />
          {errorComponent}
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff6347',
      alignItems: 'center',
      justifyContent: 'center'
    },
    testText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    labelText: {
        color: '#fff',
        fontSize: 14
      },
    testBut: {
      backgroundColor: '#ee82ee',
      margin: 60,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      minWidth:100,
      margin: 40,
      borderWith: 1,
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
    }
  });