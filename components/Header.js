import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';

export default class Header extends Component {

    render() {
        return (
            // Header
            <View style={styles.header}>

                {/* Botón volver */}
                {
                    this.props.backButton ? // El botón se renderiza o no dependiendo del parámetro recibido
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            {/* Ímagen del botón */}
                            <Ionicons
                                name='ios-arrow-back'
                                size={30}
                                color={Colors.secondary}
                            />
                        </TouchableOpacity>
                    : null
                }
                {/* Fin del botón volver */}

                {/* Título de la pantalla */}
                <Text style={styles.headerTitle}>
                    {this.props.screenName}
                </Text>
                {/* Fin del título de la pantalla */}

            </View> // Fin del header
        ) // Fin del Return
    } // Fin del render
} // Fin del componente

// Estilos del componente
const styles = StyleSheet.create({

    // Cabecera
    header: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 60,
        maxHeight: 60,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    // Botón volver
    backButton: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        minWidth: 30,
        maxWidth: 30,
    },

    // Título de la cabecera
    headerTitle: {
        color: Colors.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 38 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
    },
});

