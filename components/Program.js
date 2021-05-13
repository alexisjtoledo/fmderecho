import React, { Component } from 'react'
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class Program extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.programBtn} activeOpacity={0.5} onPress={() => this.props.handlePress(this.props.data.url)}>

                {/* Inicio del programa */}
                <View style={styles.programBox}>

                    <Ionicons 
                        name='cloud-download'
                        size={50} 
                        color={Colors.textColor}
                    />

                    <View style={styles.textBox}>
                        <Text style={styles.subjectText}>{this.props.data.name}</Text>
                        <Text style={styles.cathedraText}>Cátedra {this.props.data.cathedra}</Text>

                        {/* CONDICIONAL: Estos datos solo se muestran en algunas materias  */}
                        {
                            this.props.data.department === '-' 
                            ? null
                            : <View>
                                <Text style={styles.additionalText}>Departamento: {this.props.data.department}</Text>
                                <Text style={styles.additionalText}>Año: {this.props.data.year} | Semestre: {this.props.data.semester}</Text>
                            </View>
                        } 
                        {/* Fin del condicional */}
                    </View>
                </View>
                {/* Fin del programa */}
            </TouchableOpacity>
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Botón
    programBtn: {
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
    programBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Contenedor de texto
    textBox: {
        marginHorizontal: 20,
    },

    // Texto de materia
    subjectText: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Texto de cátedra
    cathedraText: {
        fontSize: 14,
        color: '#DDDDDD',
    },

    // Texto adicional
    additionalText: {
        fontSize: 10,
        color: '#BBBBBB',
    },
})
