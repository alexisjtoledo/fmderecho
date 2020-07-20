import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Platform
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Constants from 'expo-constants'
import Layout from '../constants/Layout'

export default class Procedure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false, // Estado visibilidad del modal.
            modalTitle: '', // Título que enviaré al modal
            modalText: '', // Texto que enviaré al modal
            modalBtnAction: '', // Texto del botón que enviaré al modal
            modalBtnLink: '', // Link del botón que emviaré al modal
        };
    }

    /**
     * Función para setear el estado del modal e incluir 
     * toda la información que le voy a enviar al abrirlo
     * @param { Object } item Recibo el objeto que se está iterando en ese momento
     * @memberof Procedure
     */
    openModal(item) {
        this.setState({
            modalVisible: true,
            modalTitle: item.name,
            modalText: item.description,
            modalBtnAction: item.btnAction,
            modalBtnLink: item.btnLink,
        });
    }

    /**
     * Función para cerrar el modal
     * @memberof Procedure
     */
    closeModal() {
        this.setState({ 
            modalVisible: false 
        });
    }

    render() {
        return (
            <View>
                {/* Inicio del elemento Trámite */}
                <TouchableOpacity
                    style={styles.procedureBox}
                    activeOpacity={0.5}
                    onPress={() => this.openModal(this.props.data)}
                >

                    {/* Imagen */}
                    <Image
                        source={{ uri: this.props.data.picture }}
                        style={styles.procedureImage}
                        defaultSource={require('../assets/images/tramite_placeholder.jpg')}
                        progressiveRenderingEnabled={true}
                    />

                    {/* Título */}
                    <Text style={styles.procedureText}>
                        {this.props.data.name}
                    </Text>

                    {/* Ícono Play */}
                    <Ionicons
                        name={
                            Platform.OS === 'ios'
                                ? 'ios-play'
                                : 'md-play'
                        }
                        size={25}
                        color={Colors.textColor}
                    />
                </TouchableOpacity>
                {/* Fin del elemento trámite */}

                {/* Inicio del modal */}
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                    transparent={false}
                >
                    {/* Al abrir un elemento lo muestro en forma de modal que recibe la información que previamente almacené en el estado. */}
                    {/* <View style={styles.modalContainer}> */}

                    {/* Contenedor principal del Modal */}
                    <ScrollView style={styles.modalBackGround} stickyHeaderIndices={[0]}>

                        {/* Cabecera del modal */}
                        <View style={styles.modalHeader}>

                            {/* Botón volver */}
                            <TouchableOpacity
                                onPress={() => this.closeModal()}
                                style={styles.modalBackButton} 
                            >
                                    <Ionicons 
                                        name={'ios-arrow-back'} 
                                        size={30} 
                                        color={Colors.secondary}
                                    />
                                    <Text style={styles.modalHeaderTitle}>
                                        {this.state.modalTitle}
                                    </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Contenido del modal */}
                        <Text style={styles.modalText}>
                            {this.state.modalText}
                        </Text>

                    </ScrollView>

                    {/* CONDICIONAL: Si hay un enlace asignado, muestro el botón || Solo en Android */}
                    {this.state.modalBtnAction === '-' 
                        ? null 
                        : <TouchableOpacity
                            onPress={() =>
                                this.props.actionPressed(
                                    this.state.modalBtnLink
                                )
                            }
                            style={styles.modalActionBtn}
                        >
                            <Text style={styles.modalBtnText}>
                                {this.state.modalBtnAction}
                            </Text>
                        </TouchableOpacity>
                    }
                    {/* Fin del CONDICIONAL */}

                </Modal>
                {/* Fin del modal */}
            </View> // Fin del trámite
        ) // Fin del Return
    } // Fin del Render
} // Fin del componente

// Estilos del componente
const styles = StyleSheet.create({

    // Contenedor de trámite (elemento)
    procedureBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },
    
    // Imagen de trámite (elemento)
    procedureImage: {
        width: 120,
        height: 80,
    },

    // Título de trámite (elemento)
    procedureText: {
        color: Colors.textColor,
        fontSize: 16,
        width: 200,
    },

    // Contenedor principal (modal)
    modalBackGround: {
        backgroundColor: 'rgba(33,32,30,0.95)',
    },

    // Cabecera (modal)
    modalHeader: {
        top: 0,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight + 10 : 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.backgroundColor,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
    },

    // Botón volver (modal)
    modalBackButton: {
        minHeight: 40,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },

    // Título de la cabecera (modal)
    modalHeaderTitle: {
        color: Colors.textColor,
        fontSize: 20,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 35 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
        marginLeft: 10,
        marginRight: 16,
    },

    // Contenido (modal)
    modalText: {
        fontSize: 14,
        color: Colors.textColor,
        paddingTop: 10,
        paddingBottom: Constants.statusBarHeight,
        paddingHorizontal: 16,
    },

    // Botón de acción
    modalActionBtn: {
        minHeight: 70,
        maxHeight: 70,
        width: Layout.window.width + 20,
        marginLeft: -10,
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: Colors.lighterBackground,
        borderWidth: 2,
    },

    // Texto del botón de acción
    modalBtnText: {
        color: Colors.textColor,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    },
})
