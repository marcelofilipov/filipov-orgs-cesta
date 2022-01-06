import { StyleSheet, Dimensions } from 'react-native'


const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
        fontWeight: 'bold',
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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

export default styles