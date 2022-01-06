import React from "react"
import { Image, StyleSheet, View } from 'react-native'

import TextoPadrao from '../../../components/TextoPadrao'


export default function Details({ name, farmLogo, farmName, description, price}) {
    return <>
        <TextoPadrao style={styles.name}>{ name }</TextoPadrao>
        <View style={styles.farm}>
            <Image source={ farmLogo } style={styles.farmImage}></Image>
            <TextoPadrao style={styles.farmName}>{ farmName }</TextoPadrao>
        </View>
        <TextoPadrao style={styles.description}>{ description }</TextoPadrao>
        <TextoPadrao style={styles.price}>{ price }</TextoPadrao>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 18,
    },
    farmImage: {
        width: 36,
        height: 36,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2a9f85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})