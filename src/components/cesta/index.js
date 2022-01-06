import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './style' 
import TextoPadrao from '../TextoPadrao'

import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'

export default function Cesta() {
    return <>
        <Image source={topo} style={styles.topo}/>
        <TextoPadrao style={styles.titulo}>Detalhe da cesta</TextoPadrao>

        <View style={styles.cesta}>
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
        </View>
    </>
}