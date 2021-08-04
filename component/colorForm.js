import React, {useState, useRef} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function ColorForm({onNewColor = f => f}) {
    const [inputValue, setInputValue] = useState("")
    const input = useRef();
    return (
        <View style={styles.container}>
            <TextInput 
                ref={input}
                style={styles.txtInput}
                autoCapitalize='none' 
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="enter a color..."
            />
            <Button title="Add" onPress={() => {
                input.current.blur();
                onNewColor(inputValue)
                setInputValue('')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5,
    },  
})