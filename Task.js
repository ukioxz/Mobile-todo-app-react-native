import React, {useState} from "react";
import { styles } from "./Screen2";
import { View, Text, ToastAndroid, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";

export const Task = (props) => {

    const [isActive, setActive] = useState(false);
    const completeTask = () => {
        setActive('false');
        ToastAndroid.show('Completed', ToastAndroid.LONG)
    
      }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <TouchableOpacity onPress={() => completeTask()}>
            <Text style={{ textDecorationLine: isActive ? 'line-through' : 'none' }}>{props.text}</Text>
            </TouchableOpacity>
            <View style={[{backgroundColor: isActive ? '#55bcf6' : ''},styles.circular]}></View>
        </View>
    )
}

/*const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
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
})*/
