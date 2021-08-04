import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from 'color';


export default function ColorDetails({route}) {
    const {colors:name} = route.params
    const color = Color(name)
    const textColor = {fontSize: 30, color: color.negate().toString()}
  return (
    <View style={[styles.page, {backgroundColor: name}]}>
        <Text style={textColor}>Color Details {name}</Text>
        <Text style={textColor}>{color.rgb().toString()}</Text>
        <Text style={textColor}>{color.hsl().toString()}</Text>
        <Text style={textColor}>{color.hex().toString()}</Text>
        <Text style={textColor}>{color.luminosity()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})