import React, { Component } from 'react'
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import AppNavigator from '../navigation/AppNavigator'
import { Ionicons } from '@expo/vector-icons'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import AsyncStorage from '@react-native-community/async-storage'
import {Restart} from 'fiction-expo-restart'

/**
 * CONTENIDO DE LOS SLIDES
 */
const slides = [
    {
        key: 1,
        title: '¡Acá estamos!',
        text: 'Gracias por invitarnos a acompañarte también desde tu celu.\n\nDesde hoy estamos mucho más cerca, a la hora y el día que nos necesites.',
        image: require('../assets/images/slide-1.png'),
        backgroundColor: '#8A63B3',
    },
    {
        key: 2,
        title: 'Dale un vistazo',
        text: 'Encontrá toda la información que necesitás sobre la facultad.\n\nPodés consultar correlatividades, programas, fechas de examen, trámites y todo lo que te imagines.',
        image: require('../assets/images/slide-2.png'),
        backgroundColor: '#42A9CC',
    },
    {
        key: 3,
        title: 'Comprá con Descuento',
        text: 'Con nuestra app vas a poder conseguir descuentos en comercios de distintos rubros.\n\n¡Buscá la sección y aprovechalos!',
        image: require('../assets/images/slide-3.png'),
        backgroundColor: '#E1605D',
    },
    {
        key: 4,
        title: 'Siempre comunicados',
        text: '¿El baño estaba roto?¿No hay luz en el aula? Envianos una foto desde la App y nosotros nos encargamos de avisar y gestionar el arreglo con la facu lo antes posible.',
        image: require('../assets/images/slide-4.png'),
        backgroundColor: '#FDBD56',
    }
];

export default class OnboardingScreen extends Component {

    state = {
        showRealApp: false
    }

    /**
     * Constructor de cada slide
     * @param { Object } item Recibe el objeto de Slides
     * @memberof OnboardingScreen
     */
    _renderItem = ({ item }) => {
        return (
        <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
            <Image source={item.image} resizeMode='contain' style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
        )
    }


    /**
     * Función que maneja el onboarding una vez finalizado
     * @memberof OnboardingScreen
     */
    _onDone = async () => {
        this.setState({ showRealApp: true });
        // Una vez cerrado el onboarding, guardo una variable persistente que me indique que ya se ha visto.
        await AsyncStorage.setItem('firstTime', 'false');
        Restart();
    }
    
    /**
     * Función que renderiza el botón siguiente
     * @memberof OnboardingScreen
     */
    _renderNextButton = () => {
    return (
        <View style={styles.rightBtn}>
            <Text style={styles.btnRightText}>SIGUIENTE</Text>
        </View>
        )
    };

    /**
     * Función que renderiza el botón Finalizar
     * @memberof OnboardingScreen
     */
    _renderDoneButton = () => {
        return (
            <View style={styles.rightBtn}>
                <Text style={styles.btnRightText}>¡LISTO!</Text>
            </View>
        )
    };

    /**
     * Función que renderiza el botón omitir
     * @memberof OnboardingScreen
     */
    _renderSkipButton = () => {
        return (
        <View style={styles.leftBtn}>
            <Text style={styles.btnLeftText}>OMITIR</Text>
        </View>
        );
    };

    render() {
        // Si no es la primera vez, muestro la app.
        if (this.state.showRealApp) {
            return <AppNavigator />;
        } else { // Si es la primera vez, renderizo el onboarding
            return <View style={{flex: 1}}>
                        <StatusBar translucent backgroundColor="transparent" />
                        <AppIntroSlider 
                            data={slides} // La fuente de datos
                            renderItem={this._renderItem} // El objeto que voy a renderizar
                            keyExtractor={(item: Item) => item.title} // La clave única
                            onDone={this._onDone} // Lo que voy a ejecutar cuando temrine
                            renderDoneButton={this._renderDoneButton} // Botón Finalizado
                            renderNextButton={this._renderNextButton} // Botón Siguiente
                            renderSkipButton={this._renderSkipButton} // Botón Omitir
                            showSkipButton={true}
                            skipLabel={'OMITIR'}
                            onSkip={this._onDone} // Lo que voy a ejecutar si alguien omite
                            dotClickEnabled={true} // Habilito que se puedan clickear los indicadores
                            dotStyle={styles.inactiveDot}
                            activeDotStyle={styles.activeDot}
                        />
                    </View>
        } // Fin del IF
    } // Fin del Render
} // Fin del Componente

// Estilos del Componente
const styles = StyleSheet.create({

    // Contenedor
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Fondo de la Imagen
    image: {
        width: Layout.window.width,
        height: Layout.window.width,
        marginBottom: 16,
    },

    // Contenedor del texto
    textContainer:{
        width: (Layout.window.width / 8) * 7,
        height: 180,
    },

    // Título
    title: {
        fontSize: 26,
        marginBottom: 16,
        fontWeight: 'bold',
        color: Colors.textColor,
        textAlign: 'center',
    },

    // Texto principal
    text: {
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        fontSize: 15,
    },

    // Botón de acción
    rightBtn: {
        width: 120,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.textColor,
        borderWidth: 1.5,
    },

    // Texto del botón de acción
    btnRightText:{
        color: Colors.textColor,
        fontWeight: 'bold',
    },

    // Botón pasivo
    leftBtn: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Texto del botón pasivo
    btnLeftText:{
        color: 'rgba(255, 255, 255, .4)',
    },

    // Indicadores Inactivos
    inactiveDot: {
        borderColor: Colors.textColor,
        borderWidth: 1.5,
        marginBottom: 5,
    },

    // Indicador Activo
    activeDot: {
        backgroundColor: Colors.textColor,
        marginBottom: 5,
    },
})