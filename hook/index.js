import {generate} from 'shortid';
import {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

export const useColor = () => {
    const [colors, setColors] = useState([])

    const loadColors = async () => {
        const colorData = await AsyncStorage.getItem('@ColorListStorage:Colors')
        if(colorData) {
            const colors = JSON.parse(colorData)
            setColors(colors)
        }
    }

    // load colors
    useEffect(() => {
        if(colors.length) return
        loadColors();
    },[])

    // save color
    useEffect(() => {
        AsyncStorage.setItem('@ColorListStorage:Colors',JSON.stringify(colors))
    },[colors])

    const addColor = color => {
      const newColor = {id: generate(), color}
      setColors([newColor, ...colors])
    }
    return {colors, addColor}
  }