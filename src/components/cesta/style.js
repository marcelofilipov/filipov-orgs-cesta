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
    }
})

export default styles