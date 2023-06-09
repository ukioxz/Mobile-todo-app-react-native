import React, {useState} from "react";
import { View, Pressable, Text, TouchableOpacity, StyleSheet,TextInput, Button, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen1, text } from './Screen1';
import { Task } from './Task';

export const Screen2 = () => {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  //const [active, setActive] = useState('false');

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

    const deleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  const clearAll = () => {
    setTaskItems([])
  }

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
          <Pressable style={styles.deleteSquare} onPress={()=>clearAll()}>
            <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
            <TouchableOpacity onPress ={() => navigation.navigate('ProfileScreen')}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
            </TouchableOpacity>
            <ScrollView>
            <View style={styles.items}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={index =>deleteTask(index)}>
                 <Task text={item}/>
                 </TouchableOpacity> )
              })}
            </View>
            </ScrollView>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.writeTaskWrapper}>
              <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
              <TouchableOpacity onPress = { () => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
              </KeyboardAvoidingView> 
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8eaed',
      //alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 28,
    },
    items:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 100,
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
      //height: 40,
      width:250,
      paddingHorizontal: 15,
      paddingVertical: 15,
      marginLeft: 40,
      marginRight:50,
      borderWith: 1,
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderRadius: 60,
    },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#bb8feb',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    addText:{
      color: '#fff',
      fontSize: 42,
    },
    item: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'center',
      marginBottom: 20,
  },
  itemLeft: {
      flexDirection:'row',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  square: {
      width: 24,
      height: 24,
      borderRadius: 5,
      borderColor: '#bb8feb',
      borderWidth: 2,
      marginRight: 15,
      marginLeft: 10,
  },
  itemText: {
      maxWidth: '80%',
      textDecorationLine: 'none',
  },
  circular: {
      width: 12,
      height: 12,
      borderColor: '#55bcf6',
      borderWidth: 2,
      borderRadius: 5,
  },
  completedTask:{
    maxWidth: '80%',
    textDecorationLine: 'line-through',
  },
  deleteSquare: {
    width: 60,
    height: 30,
    backgroundColor: '#e092e0',
    borderRadius: 5,
    marginLeft: 250,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
  },
  textTodo: {
    marginLeft: 10,
  }
  });