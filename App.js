// Componentes y elementos básicos
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// Estilos
import { Ionicons } from '@expo/vector-icons';
import Color from './constants/Colors';
// Componentes y elementos
import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

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
                <AppNavigator />
            </View>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            // precargar todas las imagenes y recursos acá
            require('./assets/images/main-logo.png'),
            require('./assets/images/main-picture.png'),
            require('./assets/images/blueprintplaceholder.jpg'),
            require('./assets/images/icon.png'),
            require('./assets/images/infoplaceholder.jpg'),
            require('./assets/images/placeholder.png'),
            require('./assets/images/splash.png'),
            require('./assets/images/tramite_placeholder.jpg')
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

// Estilos principales
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.tabBar,
    },
});
