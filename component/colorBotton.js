import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Alert, AsyncStorage} from 'react-native';

export default function ColorButton({backgroundColor, onPress = f => f}) {
  const [color, setColor] = useState();

  useEffect( async () => {
    const colorData = await AsyncStorage.getItem("@ColorListStorage:Colors");
    if(colorData) {
      const colors = JSON.parse(colorData);
      setColor(colors)
    }
  },[])

  const cancelButton = () => {
    Alert.alert("No function yet for deleteing color")
  }

  return (
    <TouchableHighlight style={styles.button} onPress={() => onPress(backgroundColor)} underlayColor="orange">
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.sample, {backgroundColor}]} />
            <Text style={styles.buttonText}>{backgroundColor}</Text>
          </View>
          <TouchableOpacity style={styles.cancelParent} >
            <Text style={styles.cancel} onPress={cancelButton}>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: 'stretch',
      backgroundColor: 'rgba(255,255,255,.8)',
    },

    buttonText: {
      fontSize: 30,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'
    },
    sample: {
      height: 20,
      width: 20,
      margin: 5,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    cancel: {
      backgroundColor: 'transparent',
      color: 'red',
      borderRadius: 50,
      fontSize: 25
    },
    cancelParent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  })