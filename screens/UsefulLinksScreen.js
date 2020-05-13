// Componentes y elementos
import React from 'react'
import { View, Linking, Alert } from 'react-native'
import Header from '../components/Header'
import Link from '../components/Link'
import GlobalStyles from '../constants/GlobalStyles'

export default function UsefulLinksScreen({ navigation }) {

    /**
     * Función para manipular los enlaces
     * @param { String } url Recibo como parámetro una dirección URL
     * @memberof UsefulLinksScreen
     */
    var handlePress = (url) => {
        // Primero consulto si el dispositivo puede abrirlo
        Linking.canOpenURL(url)
            .then((canOpen) => {
                if (canOpen) {
                    // Si puede, lo hago
                    Linking.openURL(url);
                } else {
                    // Si no, envío una alerta.
                    Alert.alert(
                        'Oops!, Parece que tu teléfono no soporta esta función :('
                    );
                }
            });
    }

    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                screenName='Enlaces Útiles' 
                navigation={navigation}
                backButton={true}
            />
            
            {/* CONTENIDO */}
            <View style={GlobalStyles.usefulLinksContainer}>
                <Link name='SIU Guaraní' url='https://autogestion.guarani.unc.edu.ar/' handlePress={handlePress} />
                <Link name='Aula Virtual' url='http://aulavirtual.derecho.proed.unc.edu.ar/' handlePress={handlePress} />
                <Link name='Web de la Facultad' url='https://derecho.unc.edu.ar/' handlePress={handlePress} />
                <Link name='Web de la Universidad' url='https://www.unc.edu.ar/' handlePress={handlePress} />
                {/* Se pueden agregar 2 más */}
            </View>
        </View> // Fin de la Pantalla
    ) // Fin del Return
} // Fin del Componente