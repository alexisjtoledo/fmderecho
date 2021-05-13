import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default class Tag extends Component {
    render() {
        return (
            <View 
                style={[styles.tag, {
                    borderColor:
                            this.props.text === 'Educación' ? 'rgba(162,51,143,.7)' : 
                                this.props.text === 'Esparcimiento' ? 'rgba(134,201,81,.7)' : 
                                    this.props.text === 'Servicios' ? 'rgba(255,90,51,.7)' : 
                                        this.props.text === 'Moda' ? 'rgba(5,141,174,.7)' : 
                                            this.props.text === 'Gastronomía' ? 'rgba(255,195,73,.7)' : 'rgba(224,224,226,.7)',
                    backgroundColor:
                        this.props.text === 'Educación' ? 'rgba(162,51,143,.1)' : 
                                this.props.text === 'Esparcimiento' ? 'rgba(134,201,81,.1)' : 
                                    this.props.text === 'Servicios' ? 'rgba(255,90,51,.1)' : 
                                        this.props.text === 'Moda' ? 'rgba(5,141,174,.1)' : 
                                            this.props.text === 'Gastronomía' ? 'rgba(255,195,73,.1)' : 'rgba(224,224,226,.1)',
                        }]}
            >
                <Text style={styles.text}>
                    {
                        this.props.text === 'Educación' 
                            ? <Ionicons name='school' size={8} />
                            : this.props.text === 'Esparcimiento' 
                                ? <Ionicons name='fitness' size={8} />
                                : this.props.text === 'Servicios' 
                                    ? <Ionicons name='key' size={8} />
                                    : this.props.text === 'Moda' 
                                        ? <Ionicons name='shirt' size={8} />
                                        : this.props.text === 'Gastronomía' 
                                            ? <Ionicons name='pizza' size={8} />
                                            : <Ionicons name='cart' size={8} />
                    }
                    &nbsp;
                    {this.props.text}
                </Text>
            </View> // Fin del tag
        ) // Fin del Return
    } // Fin del Render
} // Fin del componente

// Estilos del componente
const styles = StyleSheet.create({
    tag: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        height: 20,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    text: {
        color: Colors.textColor,
        fontSize: 8,
    },
})