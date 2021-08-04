import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ColorButton from './colorBotton';
import ColorForm from './colorForm';
import {useColor} from '../hook'



export default function ColorList({navigation}) {
  const { colors, addColor } = useColor();
  return (
    <>
      <ColorForm onNewColor={addColor}/> 
      <FlatList style={[styles.page]}
        data={colors}
        renderItem={({item}) => {
          return (
            <ColorButton key={item.id} backgroundColor={item.color} onPress={() => navigation.navigate("Details", {colors: item.color})}/>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
  },
})