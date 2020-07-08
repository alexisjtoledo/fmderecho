import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import { Ionicons } from '@expo/vector-icons'

export default class TagFilter extends Component {

    constructor(props){
        super(props);
        this.state = {
            inMemoryElements: this.props.data // Datos recibidos
        }
    }

    filter = ( value ) => {
        const filteredElements = this.state.inMemoryElements.filter(
            (element) => {
                let tags = element.tags.toString(); // Convierto los tags en string para filtrarlo más fácilmente
                return tags.indexOf(value) > -1; // Guardo el resultado
            }
        );
        this.props.getData(filteredElements) // Y lo envío de vuelta
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Título de la barra */}
                <Text style={styles.text}>Filtrar:</Text>

                {/* Botón ver todo */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.allBtn]} 
                    onPress={() => this.filter('')}
                >
                    <Text style={styles.tagText}>Ver Todo</Text>
                </TouchableOpacity>

                {/* Botón Educación */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.education]} 
                    onPress={() => this.filter('Educación')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-school' : 'md-school' }/></Text>
                </TouchableOpacity>

                {/* Botón Esparcimiento */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.leisure]} 
                    onPress={() => this.filter('Esparcimiento')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-fitness' : 'md-fitness' }/></Text>
                </TouchableOpacity>

                {/* Botón Servicios */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.services]} 
                    onPress={() => this.filter('Servicios')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-key' : 'md-key' }/></Text>
                </TouchableOpacity>

                {/* Botón Moda */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.fashion]} 
                    onPress={() => this.filter('Moda')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-shirt' : 'md-shirt' }/></Text>
                </TouchableOpacity>

                {/* Botón Gastronomía */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.gastronomy]} 
                    onPress={() => this.filter('Gastronomía')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-pizza' : 'md-pizza' }/></Text>
                </TouchableOpacity>

                {/* Botón Otros */}
                <TouchableOpacity 
                    style={[styles.tagBtn, styles.iconBtn, styles.other]} 
                    onPress={() => this.filter('Otros')}
                >
                    <Text style={styles.tagText}><Ionicons name={ Platform.OS === 'ios' ? 'ios-cart' : 'md-cart' }/></Text>
                </TouchableOpacity>
            </View> //Fin de la barra
        ) // Fin del Return
    } // Fin del Render
} // Fin del componente

// Estilos del componente
const styles = StyleSheet.create({

    // Contenedor
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 11,
        minHeight: 30,
        maxHeight: 30,
        marginBottom: 10,
        marginTop: -5,
    }, 
    
    // Título
    text:{
        color: '#CCCCCC',
        marginHorizontal: 5,
    },

    // Botones (gral)
    tagBtn:{
        height: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingVertical: Platform.OS === 'ios' ? 0 : 12,
        borderRadius: 5,
    },

    // Botón Todo
    allBtn:{
        flexGrow: 4,
        borderColor: 'rgba(255,255,255,.7)',
        backgroundColor: 'rgba(255,255,255,.1)',
    },

    // Botones particulares
    iconBtn:{
        flexGrow: 1,
    },
    education:{
        borderColor: 'rgba(162,51,143,.7)',
        backgroundColor: 'rgba(162,51,143,.1)',
    },
    leisure:{
        borderColor: 'rgba(134,201,81,.7)',
        backgroundColor: 'rgba(134,201,81,.1)',
    },
    services:{
        borderColor: 'rgba(255,90,51,.7)',
        backgroundColor: 'rgba(255,90,51,.1)',
    },
    fashion:{
        borderColor: 'rgba(5,141,174,.7)',
        backgroundColor: 'rgba(5,141,174,.1)',
    },
    gastronomy:{
        borderColor: 'rgba(255,195,73,.7)',
        backgroundColor: 'rgba(255,195,73,.1)',
    },
    other:{
        borderColor: 'rgba(224,224,226,.7)',
        backgroundColor: 'rgba(224,224,226,.1)',
    },

    // Texto de los botones
    tagText:{
        color: Colors.textColor,
        fontSize: 12,
    },
})