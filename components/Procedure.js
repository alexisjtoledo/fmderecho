import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
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
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}
                    transparent={true}
                >
                    {/* Al abrir un elemento lo muestro en forma de modal que recibe la información que previamente almacené en el estado. */}
                    <SafeAreaView style={styles.modalContainer}>
                        <View>

                            {/* CONDICIONAL: Si hay un enlace asignado, muestro el botón */}
                            {this.state.modalBtnAction === '-' ? (
                                <View style={styles.buttonContainer}>
                                    <View style={styles.modalCloseContainer}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.closeModal();
                                            }}
                                            style={styles.modalCloseBtn}
                                        >
                                            <Text style={styles.modalBtnText}>
                                                CERRAR
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            ) : (

                                <View style={styles.buttonContainer}>
                                    <View style={styles.modalActionContainer}>
                                        <TouchableOpacity
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
                                    </View>
                                    <View style={styles.modalCloseContainer}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.closeModal();
                                            }}
                                            style={styles.modalCloseBtn}
                                        >
                                            <Ionicons
                                                name={'ios-close'}
                                                size={50}
                                                color='#FFFFFF'
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {/* Fin del CONDICIONAL */}

                            {/* Contenido principal del modal */}
                            <View style={styles.modalMainContainer}>
                                <View style={styles.modalTitleContainer}>
                                    <Text style={styles.modalTitle}>
                                        {this.state.modalTitle}
                                    </Text>
                                </View>
                                <ScrollView style={styles.modalTextContainer}>
                                    <Text style={styles.modalText}>
                                        {this.state.modalText}
                                    </Text>
                                </ScrollView>
                            </View>
                            {/* Fin del contenido principal del modal */}

                        </View>
                    </SafeAreaView>
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

    // Contenedor (modal)
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(33,32,30,0.7)',
        padding: 30,
        minHeight: Layout.window.height,
        minWidth: Layout.window.width,
    },

    // Botonera (modal)
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    // Contenedor de botón de cierre (modal)
    modalCloseContainer: {
        zIndex: 2,
        height: 60,
        flexGrow: 1,
        top: (Layout.window.height / 8) * 7,
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        marginBottom: 10,
    },

    // Botón de cierre (modal)
    modalCloseBtn: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(222,90,93,0.8)',
        borderColor: '#de5a5d',
        borderWidth: 2,
        borderRadius: 15,
    },

    // Texto de botón (modal)
    modalBtnText: {
        color: Colors.textColor,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    // Contenedor del botón de acción (modal)
    modalActionContainer: {
        zIndex: 2,
        height: 60,
        flexGrow: 3,
        top: (Layout.window.height / 8) * 7,
        alignSelf: 'flex-end',
        marginLeft: 10,
        marginBottom: 10,
    },

    // Botón de acción (modal)
    modalActionBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(69,176,143,0.8)',
        borderColor: '#45b08f',
        borderWidth: 2,
        borderRadius: 15,
    },

    // Contenedor principal (modal)
    modalMainContainer: {
        backgroundColor: '#4f4c47',
        height: (Layout.window.height / 8) * 7,
        width: (Layout.window.width / 8) * 7,
    },

    // Contenedor del título (modal)
    modalTitleContainer: {
        backgroundColor: Colors.backgroundColor,
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.textColor,
    },

    // Texto del título (modal)
    modalTitle: {
        fontWeight: 'bold',
        color: Colors.textColor,
        fontSize: 18,
    },

    // Contenedor del texto (modal)
    modalTextContainer: {
        padding: 16,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: Colors.textColor,
    },

    // Texto (modal)
    modalText: {
        color: Colors.textColor,
        paddingBottom: Layout.window.height / 8,
    },
})
