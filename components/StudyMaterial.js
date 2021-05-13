import React, { Component } from 'react'
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class StudyMaterial extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.studyMaterialBtn}
                activeOpacity={0.5}
                onPress={() => this.props.handlePress(this.props.data.url)}
            >
                {/* Inicio Material de Estudio */}
                <View style={styles.studyMaterialBox}>
                    <Ionicons 
                        name='cloud-download'
                        size={50} 
                        color={Colors.textColor}
                    />
                    <View style={styles.textBox}>
                        <Text style={styles.titleText}>{this.props.data.fullName}</Text>
                        <Text style={styles.authorText}>Autor: {this.props.data.description}</Text>
                        <Text style={styles.additionalText}>Tags: {this.props.data.name}</Text>
                    </View>
                </View>
            </TouchableOpacity> // Fin del Material de estudio
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Botón
    studyMaterialBtn: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: Colors.textColor,
        borderWidth: 1,
    },

    // Contenedor
    studyMaterialBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Contenedor de texto
    textBox: {
        marginHorizontal: 20,
    },

    // Nombre del Material
    titleText: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Nombre del autos
    authorText: {
        fontSize: 14,
        color: '#DDDDDD',
    },
    
    // Tags
    additionalText: {
        fontSize: 10,
        color: '#BBBBBB',
    },
})
