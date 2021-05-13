import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState, useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View, Image, Alert, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Color from './constants/Colors'
import AppNavigator from './navigation/AppNavigator'
import OnboardingScreen from './screens/OnboardingScreen'
import { decode, encode } from 'base-64'
import * as Updates from 'expo-updates'
import AppLoading from 'expo-app-loading'

if (!global.btoa) {
    global.btoa = encode
}

if (!global.atob) {
    global.atob = decode
} 

function App(props) {

    const [isLoadingComplete, setLoadingComplete] = useState(false)
    const [firstTime, setFirstTime] = useState(true)

    useEffect(() => {
        checkFirstTime()
        if(!firstTime) {
            checkForUpdates()
        }
    }, []);

    /**
     * Función para chequear si es la primera vez.
     */
    const checkFirstTime = async () => {
        if(await AsyncStorage.getItem('firstTime') === null) {
            await AsyncStorage.setItem('firstTime', 'true')
            setFirstTime(true)
        } else {
            setFirstTime(false)
        }
    }

    /**
     * Función para revisar si hay algún update vía OTA.
     */
    const checkForUpdates = async () => {
        try {
            const update = await Updates.checkForUpdateAsync()
            if (update.isAvailable) {
            await Updates.fetchUpdateAsync()
            Alert.alert(
                "Actualizando...",
                "La app se reiniciará durante un segundo para actualizarse, no necesitás hacer nada :)",
                [
                { text: "OK", onPress: () => Updates.reloadAsync() }
                ],
            { cancelable: false }
            )
        }
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * TODO: Notificaciones
     */ 

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
                {/* Compruebo si es la primera vez en la App para ver si muestro el onboarding o la App */}
                {firstTime ? <OnboardingScreen /> : <AppNavigator />}
            </View>
        )
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
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/TRAMITES_cambio_expediente.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/TRAMITES_estudiante_trabajador.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/TRAMITES_inscripcion_definitiva.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/TRAMITES_catedra_origen.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/TRAMITES_ayudante_alumno.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/DERECHOS_estudiante_trabajador.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/DERECHOS_jardin_deodoro.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/DERECHOS_paro_transporte.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/DERECHOS_comedor.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/DERECHOS_pasos.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/BECAS_ced.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/BECAS_unc.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/BECAS_beg.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/BECAS_deportes.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/thumbnails/BECAS_intercambio.jpg'),
        Image.prefetch('https://neon-dryad-755.web.app/img/blueprints/ced.jpg'),

        Font.loadAsync({
            ...Ionicons.font,
        })
    ])
}

function handleLoadingError(error) {
    console.warn(error);
}

async function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

// Estilos principales
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.tabBar,
    },
})

export default App