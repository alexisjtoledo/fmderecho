import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Platform
} from 'react-native'
import MainPicture from '../assets/images/main-picture.png'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'

export default class WelcomeImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={MainPicture}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
        )
    }
}

// Estilos del componente
const styles = StyleSheet.create({

    // Contenedor de la imagen de bienvenida
    container: {
        width: Layout.window.width,
        height: 450,
        marginTop: Platform.OS === 'ios' ? - (Constants.statusBarHeight + 132) : -132,
        marginBottom: 15,
    },

    // Imagen de bienvenida
    image: {
        width: '100%',
        height: '100%',
    },
})