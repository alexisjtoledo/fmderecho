import { AppLoading, Notifications } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState, useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View, Image, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Color from './constants/Colors'
import AppNavigator from './navigation/AppNavigator'
import OnboardingScreen from './screens/OnboardingScreen'
import AsyncStorage from '@react-native-community/async-storage'
import * as Permissions from 'expo-permissions'
import ApiKeys from './constants/ApiKeys'
import * as Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { decode, encode } from 'base-64'

if (!global.btoa) {
    global.btoa = encode
}

if (!global.atob) {
    global.atob = decode
} 

export default function App(props) {

    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        // Inicializo Firebase
        if(!Firebase.apps.length) {
            Firebase.initializeApp(ApiKeys.firebaseConfig);
        }
        // Inicializo el proceso de generación de token
        getToken();
        this.listener = Notifications.addListener(incomingNotification);
    }, []);

    var incomingNotification = ({ origin, data }) => {
        console.log('ORIGEN:',origin,'DATOS:',data);
        // MANEJAR NOTIFICACIONES
    }

    /** 
     * Función para generar el token de notificaciones push
     */
    const getToken = async () => {
        // Primero consulto si tengo autorización para recibir notificaciones
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        // Si no la tengo, la pido
        if(existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        // Si no me dio permiso, devulevo un undefined
        if (finalStatus !== 'granted') {
            return;
        }
        // Si dio permiso, guardo su token
        let token = await Notifications.getExpoPushTokenAsync();
        // Y lo envío a la base de datos
        loginAnon(token);
    }
    
    /** 
     * Función para autenticar anónimamente al usuario en Firebase
     * @param { String } token Recibe como parámetro el token para notificaciones push
     */
    const loginAnon = async token => {
        await Firebase.auth().signInAnonymously().catch(err => console.log(err));
        await Firebase.auth().onAuthStateChanged(async user => {
            // console.log('Autenticación: ', user.uid, '\nToken: ', token);
            await Firebase.firestore().collection('users').doc(token).set({
                created_by: user.uid,
                created_at: Date.now(),
                push_token: token,
            }).catch(error => console.log(error));
        });
    }

    /**
     * Función para verificar si es la primera vez que entro a la App
     * @returns { Bool } 
     */
    var firstTime = async () => {
            let value = await AsyncStorage.getItem('firstTime');
            if (value === 'false') {
                return false
            } else {
                return true
            }
        }

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
                {/* Compruebo si es la primera vez en la App para ver si muestro el onboarding o la App */}
                {firstTime ? <OnboardingScreen /> : <AppNavigator />}
            </View>
        );
    }
}

/** 
 * Función para precargar los assets más importantes
 */
async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/main-logo.png'),
            require('./assets/images/main-picture.png'),
            require('./assets/images/blueprintplaceholder.jpg'),
            require('./assets/images/icon.png'),
            require('./assets/images/infoplaceholder.jpg'),
            require('./assets/images/placeholder.png'),
            require('./assets/images/splash.png'),
            require('./assets/images/tramite_placeholder.jpg'),
            require('./assets/images/slide-1.png'),
            require('./assets/images/slide-2.png'),
            require('./assets/images/slide-3.png'),
            require('./assets/images/slide-4.png'),
        ]),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/TRAMITES_cambio_expediente.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/TRAMITES_estudiante_trabajador.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/TRAMITES_inscripcion_definitiva.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/TRAMITES_catedra_origen.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/TRAMITES_ayudante_alumno.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/DERECHOS_estudiante_trabajador.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/DERECHOS_jardin_deodoro.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/DERECHOS_paro_transporte.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/DERECHOS_comedor.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/DERECHOS_pasos.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/BECAS_ced.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/BECAS_unc.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/BECAS_beg.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/BECAS_deportes.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/thumbnails/BECAS_intercambio.jpg'),
        Image.prefetch('https://fmderecho.com/mobile/img/blueprints/ced.jpg'),

        Font.loadAsync({
            ...Ionicons.font,
        }),
    ]);
}

function handleLoadingError(error) {
    console.warn(error);
}

async function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
    // Al terminar de cargar la app, inicializo la variable en el almacenamiento
    // persistente para que no hay ningún problema.
    await AsyncStorage.setItem('firstTime', 'true');
}

// Estilos principales
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.tabBar,
    },
});
