import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class Dependency extends Component {

    render() {
        return (
            <View style={styles.dependencyBox}>
                <View style={styles.textBox}>

                    {/* TÍTULO */}
                    <Text style={styles.title}>
                        {this.props.data.name}
                    </Text>

                    {/* CONDICIONAL: AUTORIDAD */}
                    { this.props.data.authority !== '-' ? (
                        <View style={styles.optionalBox}>
                            <View style={styles.optionalDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={ Platform.OS === 'ios' ? 'ios-person' : 'md-person' }
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.optionalText}>
                                    Responsable: {this.props.data.authority}
                                </Text>
                            </View>
                        </View>
                    ) : null }
                    {/* Fin del condicional de autoridad */}

                    {/* CONDICIONAL: UBICACIÓN */}
                    {this.props.data.location !== '-' ? (
                        <View style={styles.optionalBox}>
                            <View style={styles.optionalDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={ Platform.OS === 'ios' ? 'ios-pin' : 'md-pin' }
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.optionalText}>
                                    {this.props.data.location}
                                </Text>
                            </View>

                            {/* CONDICIONAL: ACCIÓN UBICACIÓN */}
                            {this.props.data.value !== '-' 
                                ? (
                                    <TouchableOpacity
                                        style={styles.actionBtn}
                                        onPress={() => this.props.handlePress('Blueprint', this.props.data.value)}
                                    >
                                        <Text style={styles.btnText}>
                                            PLANO
                                        </Text>
                                        <View style={styles.iconBoxBtn}>
                                            <Ionicons
                                                name={ Platform.OS === 'ios' ? 'md-navigate' : 'md-navigate' }
                                                size={12}
                                                color={Colors.textColor}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    ) 
                                : null }
                            {/* Fin del condicional de Acción Ubicación */}
                        </View>
                    ) : null }
                    {/* Fin del condicional de Ubicación */}

                    {/* CONDICIONAL: HORARIO */}
                    {this.props.data.workingHours !== '-' ? (
                        <View style={styles.optionalBox}>
                            <View style={styles.optionalDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={ Platform.OS === 'ios' ? 'ios-time' : 'md-time' }
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.optionalText}>
                                    {this.props.data.workingHours}
                                </Text>
                            </View>
                        </View>
                    ) : null }
                    {/* Fin del condicional de Horario */}

                    {/* CONDICIONAL: TELEFONO */}
                    {this.props.data.visiblePhone !== '-' ? (
                        <View style={styles.optionalBox}>
                            <View style={styles.optionalDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={ Platform.OS === 'ios' ? 'ios-call' : 'md-call' }
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.optionalText}>
                                    {this.props.data.visiblePhone}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.actionBtn}
                                onPress={() =>
                                    this.props.dialNumber(this.props.data.phone)
                                }
                            >
                                <Text style={styles.btnText}>
                                    LLAMAR
                                </Text>
                                <View style={styles.iconBoxBtn}>
                                    <Ionicons
                                        name={ Platform.OS === 'ios' ? 'ios-call' : 'md-call' }
                                        size={12}
                                        color={Colors.textColor}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : null }
                    {/* Fin de condicional Teléfono */}

                    {/* CONDICIONAL: MAIL */}
                    {this.props.data.mail !== '-' ? (
                        <View style={styles.optionalBox} >
                            <View style={styles.optionalDescription} >
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={
                                            Platform.OS === 'ios'
                                                ? 'ios-mail'
                                                : 'md-mail'
                                        }
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.optionalText}>
                                    {this.props.data.mail}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.actionBtn}
                                onPress={() =>
                                    this.props.sendMail(this.props.data.mail)
                                }
                            >
                                <Text style={styles.btnText}>
                                    ENVIAR
                                </Text>
                                <View style={styles.iconBoxBtn}>
                                    <Ionicons
                                        name={
                                            Platform.OS ===
                                            'ios'
                                                ? 'ios-send'
                                                : 'md-send'
                                        }
                                        size={12}
                                        color={Colors.textColor}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : null }
                    {/* Fin condicional Mail */}
                </View>
            </View> // Fin de la Dependencia
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Contenedor de dependencia
    dependencyBox: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: Colors.textColor,
        borderWidth: 1,
    },

    // Contenedor del texto
    textBox: {
        marginHorizontal: 0,
        width: '100%',
    },

    // Texto de materia
    title: {
        color: Colors.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    // Contenido Opcional
    optionalBox: {
        flexDirection: 'row',
        marginLeft: 5,
        justifyContent: 'space-between',
    },

    // Descripción del contenido opcional
    optionalDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 26,
    },

    // Contenedor del ícono del contenido opcional
    iconBox: {
        width: 15,
        marginRight: 5,
        alignItems: 'center',
    },

    // Texto del contenido opcional
    optionalText: {
        fontSize: 11,
        color: '#DDDDDD',
    },

    // Botón de acción
    actionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        marginLeft: 5,
        borderColor: 'rgba(50,195,190,1)',
        backgroundColor: 'rgba(50,195,190,0.1)',
        borderWidth: 1,
        width: 65,
        height: 24,
    },

    // Texto del botón de acción
    btnText: {
        color: Colors.textColor,
        fontSize: 8,
        fontWeight: 'bold',
        paddingTop: -1,
        textAlign: 'right',
    },

    // Contenedor del ícono del botón de acción
    iconBoxBtn: {
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
    },
})
