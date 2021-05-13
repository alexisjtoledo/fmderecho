// Componentes
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'
import Header from '../components/Header'
import GlobalStyles from '../constants/GlobalStyles'
import Colors from '../constants/Colors'
import { formUrl } from '../constants/ApiKeys'

export default function ContactScreen() {
    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                    screenName='Consultas'
                />

            {/* FORMULARIO */}
            <WebView style={GlobalStyles.frame}
                source={{uri: formUrl}}
                bounces={false}
                renderLoading={<ActivityIndicator size='large' color={Colors.secondary} />}
            />
        </View> // Fin de la pantalla
    ) // Fin del Return
} // Fin del Componente