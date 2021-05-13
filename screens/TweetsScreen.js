import React, { useState, useEffect } from 'react'
import { View, FlatList, Linking, Alert } from 'react-native'
import Header from '../components/Header'
import Tweet from '../components/Tweet'
import GlobalStyles from '../constants/GlobalStyles'
import { Information, Academics, Inclusion, Rights } from '../constants/ApiKeys'

export default function TweetsScreen({ navigation }) {

    // Hooks de estado
    const selector = navigation.getParam('selector');
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hook ComponentDidMount
    useEffect (() => {
        let url;
        switch (selector) {
            case 'Information':
                url = Information;
                break;
            case 'Academics':
                url = Academics;
                break;
            case 'Inclusion':
                url = Inclusion;
                break;
            case 'Rights':
                url = Rights;
                break;
            default: null;
        }
        // Solicitud a la API
        fetch(url)
            .then(res => res.json()) // Parseo de la respuesta en un JSON
            .then(res => { // Con el JSON actualizo los estados hookeados
                setTweets([...tweets, ...res]);
            });
        },[loading] // y modifico el estado de carga
    );

    /**
     * Función para manipular los enlaces
     * @param { String } url Recibo como parámetro una dirección URL
     * @memberof TweetsScreen
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
                screenName={
                    selector === 'Information' ? 'Últimas Noticias'
                        : selector === 'Academics' ? 'Exelencia Académica'
                            : selector === 'Inclusion' ? 'Inclusión'
                                : 'Derechos Estudiantiles'
                }
                navigation={navigation}
                backButton={true}  
            />
            
            {/* CONTENIDO */}
            <View style={GlobalStyles.contentBox}>

                {/* LISTADO */}
                <FlatList
                    data = {tweets} 
                    renderItem = { ({item}) => <Tweet data={item} handlePress={handlePress} /> }
                    keyExtractor = {item => item.id_str}
                    showsVerticalScrollIndicator = {false}
                />

            </View>
        </View> // Fin de la pantalla
    ) // Fin del Return
} // Fin del Componente