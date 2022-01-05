import React from "react"
import { Image, Text } from 'react-native'

import styles from "./style" 

import topo from '../../../assets/topo.png'

export default function Cesta() {
    return <>
        <Image source={topo} style={styles.topo}/>
        <Text style={styles.titulo}>Detalhe da cesta</Text>
    </>
}