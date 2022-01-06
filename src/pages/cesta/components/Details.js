import React from "react"
import { Image, StyleSheet, View } from 'react-native'

import TextoPadrao from '../../../components/TextoPadrao'

import logo from '../../../../assets/logo.png'


export default function Details() {
    return <>
        <TextoPadrao style={styles.nome}>Cesta de Verduras</TextoPadrao>
        <View style={styles.fazenda}>
            <Image source={logo} style={styles.imagemFazenda}></Image>
            <TextoPadrao style={styles.nomeFazenda}>Jenny Jack Farm</TextoPadrao>
        </View>
        <TextoPadrao style={styles.descricao}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda direito
            para sua cozinha
        </TextoPadrao>
        <TextoPadrao style={styles.preco}>R$ 40,00</TextoPadrao>
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