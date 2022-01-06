import React from "react"
import { Image, Text, View } from 'react-native'

import styles from "./style" 

import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'

export default function Cesta() {
    return <>
        <Image source={topo} style={styles.topo}/>
        <Text style={styles.titulo}>Detalhe da cesta</Text>

        <View style={styles.cesta}>
            <Text style={styles.nome}>Cesta de Verduras</Text>
            <View style={styles.fazenda}>
                <Image source={logo} style={styles.imagemFazenda}></Image>
                <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={styles.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda direito
                para sua cozinha
            </Text>
            <Text style={styles.preco}>R$ 40,00</Text>
        </View>
    </>
}