import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function TextoPadrao({ children, style }) {
    let estilo = styles.textoPadrao

    if (style?.fontWeight === 'bold') {
        estilo = styles.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}


const styles = StyleSheet.create({
    textoPadrao: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    }
})