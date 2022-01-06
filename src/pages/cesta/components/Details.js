import React from "react"
import { Image, StyleSheet, View } from 'react-native'

import TextoPadrao from '../../../components/TextoPadrao'


export default function Details({ nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
        <TextoPadrao style={styles.nome}>{ nome }</TextoPadrao>
        <View style={styles.fazenda}>
            <Image source={ logoFazenda } style={styles.imagemFazenda}></Image>
            <TextoPadrao style={styles.nomeFazenda}>{ nomeFazenda }</TextoPadrao>
        </View>
        <TextoPadrao style={styles.descricao}>{ descricao }</TextoPadrao>
        <TextoPadrao style={styles.preco}>{ preco }</TextoPadrao>
    </>
}

const styles = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})