import React, { Component } from 'react'
import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default class ImportantInformationStack extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        } 
    }

    /**
     * Función para manipular el estado del modal y abrir nuevas pantallas
     * @param { String } screenName Recibe la pantalla que debe abrirse 
     * @param { String } degreeName Recibe y envía un parámetro para cargar el componente de la carrera seleccionada
     * @memberof ImportantInformationStack
     */
    handleModal = (screenName, degreeName) => {
        this.props.navigation.navigate(screenName, {degreeName: degreeName});
        this.setState({ modalVisible: false });
    }

    /**
     * Función para manipular la apertura de nuevas pantallas
     * @param { String } screenName Recibe la pantalla que debe abrirse
     * @param { Object } data Recibe los datos que provienen de la API
     * @param { String } pickerValue Parámetro opcional que recibe el valor que debe tener el selector de la pantalla "PLANO"
     * @memberof ImportantInformationStack
     */
    handlePress = (screenName, data, pickerValue='') => {
        this.props.navigation.navigate(screenName, {data: data, itemValue: pickerValue});
    }

    render() {
        return (
            <View>
                {/* Menú de selección de carrera */}
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: !this.state.modalVisible })}
                >
                    <View style={styles.modalBackground} >
                        <View style={styles.modalBox}>
                            <Text style={styles.modalText}>
                                Seleccioná tu carrera
                            </Text>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => this.handleModal('CorrelativitiesScreen', 'Abogacia')}
                            >
                                <Text style={styles.modalBtnText}>
                                    Abogacía
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() =>
                                    this.handleModal('CorrelativitiesScreen', 'Profesorado')
                                }
                            >
                                <Text style={styles.modalBtnText}>
                                    Profesorado
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() =>
                                    this.handleModal('CorrelativitiesScreen', 'Notariado')
                                }
                            >
                                <Text style={styles.modalBtnText}>
                                    Notariado
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalCloseButton}
                                onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
                            >
                                <Text style={styles.modalCloseBtnText}>
                                    Volver
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Fin del menú de selección de carrera */}

                {/* Título del Stack */}
                <Text style={styles.title}>Información Importante</Text>

                {/* Inicio del Stack */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >

                    {/* PLAN DE ESTUDIOS */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement1,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>

                    {/* CALENDARIO ACADÉMICO */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.handlePress('AcademicCalendar', this.props.data)}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement2,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>

                    {/* PLANO DE LA FACULTAD */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.handlePress('Blueprint', this.props.data,'ced')}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement3,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>

                    {/* DEPENDENCIAS ADMINISTRATIVAS */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.handlePress('Dependencies', this.props.data)}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement4,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>

                    {/* ENLACES ÚTILES */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.handlePress('UsefulLinks', this.props.data)}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement5,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>

                    {/* COMPROMISO SOCIAL ESTUDIANTIL */}
                    <TouchableOpacity
                        style={styles.menuElement}
                        activeOpacity={0.5}
                        onPress={() => this.handlePress('CSE', this.props.data)}
                    >
                        <Image
                            source={{
                                uri: this.props.pictures.imgElement6,
                            }}
                            style={styles.image}
                            resizeMode='contain'
                            defaultSource={require('../assets/images/infoplaceholder.jpg')}
                            progressiveRenderingEnabled={true}
                        />
                    </TouchableOpacity>
                </ScrollView>
                {/* Fin del Stack */}
            </View>
        ) // Fin del Return
    } // Fin del Render
} // Fin del componente

// Estilos del componente
const styles = StyleSheet.create({

    // Título
    title: {
        color: Colors.tintColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    // Elemento del menú
    menuElement: {
        flex: 1,
        width: 138,
        height: 138,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
    },

    // Imagen
    image: {
        width: '100%',
        height: '100%',
    },

    // Overflow (modal)
    modalBackground: {
        width: Layout.window.width,
        height: Layout.window.height,
        backgroundColor: 'rgba(33, 32, 30, 0.8)',
    },

    // Contenedor (modal)
    modalBox: {
        width: Layout.window.width,
        backgroundColor: 'rgba(253, 246, 249, 0.95)',
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 100,
        top: Layout.window.height - 450,
    },

    // Botón (modal)
    modalButton: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 30,
        alignItems: 'center',
    },

    // Texto (modal)
    modalText: {
        color: Colors.backgroundColor,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    // Texto del botón (modal)
    modalBtnText: {
        color: Colors.primary,
        fontSize: 16,
    },

    // Botón volver (modal)
    modalCloseButton: {
        borderColor: Colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },

    // Texto del botón volver (modal)
    modalCloseBtnText: {
        color: Colors.backgroundColor,
        fontSize: 14,
    },
})
