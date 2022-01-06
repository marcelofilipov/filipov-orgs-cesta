import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import Details from './components/Details'


export default function Cesta() {
    return <>
        <Header />
        <View style={styles.cesta}>
            <Details />
        </View>
    </>
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})