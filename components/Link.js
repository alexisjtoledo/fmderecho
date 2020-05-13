import React, { Component } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class Link extends Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => this.props.handlePress(this.props.url)}>
                <View style={styles.iconContainer}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} size={35} color={Colors.textColor} />
                </View>
                <View style={styles.linkTextContainer}>
                    <Text style={styles.linkText}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableOpacity> // Fin del enlace
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del Componente
const styles = StyleSheet.create({

    // Contenedor
    linkContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 25,
    },

    // Contenedor del ícono
    iconContainer: {
        flexGrow: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 18,
        paddingTop: 20,
        borderRadius: 10,
        borderColor: Colors.textColor,
        borderWidth: 1,
    },

    // Contenedor del texto
    linkTextContainer: {
        flex: 1,
        flexGrow: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },

    // Texto
    linkText: {
        color: Colors.textColor,
        fontSize: 24,
    },
});
