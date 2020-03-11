// Componentes y elementos
import React, { 
    Component, 
    useState, 
    useEffect 
} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList, 
    Image, 
    TouchableOpacity, 
    Platform 
} from 'react-native'
import AbogaciaPlanComponent from '../components/AbogaciaPlanComponent'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'


export default function AbogaciaPlanScreen({ navigation }) {

    // Constantes para suplir el State en funciones (Hooks)
    const [tweets, setTweets] = useState([]);
    const [inMemoryTweets, setInMemoryTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hook que reemlaza el ComponentDidMount
    useEffect (() => {
        // Solicitud a la API
            fetch('http://m.fmderecho.com/api/getfromtwitter/rights.php')
                .then(res => res.json()) // Parseo de la respuesta en un JSON
                .then(res => { // Con el JSON actualizo los estados hookeados
                    setTweets([...tweets, ...res]);
                });
        },[loading] // y modifico el state de carga
    );

    // Función para formatear la fecha
    function formatDate(givenDate) {
        let result = format(Date.parse(givenDate), "d/M/yyyy - H:mm");
        return result;
    }

    return (
        /* CONTENEDOR PRINCIPAL*/
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <View style={styles.header}>

                {/* Botón volver */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >

                    {/* Ímagen del botón */}
                    <Ionicons name={'ios-arrow-back'} size={30} color={Color.secondary} />

                </TouchableOpacity>

                {/* Título de la pantalla */}
                <Text style={styles.headerTitle}>Abogacía</Text>
            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>
                <AbogaciaPlanComponent />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    // Estilos de la cabecera
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        minHeight: 60,
        maxHeight: 60,
        paddingHorizontal: 16,
    },

    // Estilos del botón volver
    backButton: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        minWidth: 25,
        maxWidth: 25,
    },

    // Estilos del título de la cabecera
    headerTitle: {
        color: Color.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 38 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
    },

    // Estilos del contenedor principal
    contentBox: {
        borderTopColor: '#333333',
        borderTopWidth: 2,
        paddingBottom: Constants.statusBarHeight + 10,
    },

    // Estilos de cada tweet impreso
    listElement: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },

    // Estilos de la foto de perfil
    elementImage: {
        width: 25,
        height: 25,
        borderRadius: 50,
        margin: 16,
    },

    // Estilos de la caja de contenido del tweet
    tweetBox: {
        paddingVertical: 16,
        paddingRight: 12,
        marginRight: 58,
    },

    // Estilos de los textos de los tweets
    elementText: {
        color: Color.textColor,
        fontSize: 16,
        marginBottom: 10,
    },

    // Estilos de los timestamps
    elementDate: {
        fontSize: 10,
        color: Color.secondaryTextColor,
    },

    // Estilos de los contenedores de multimedia del tweet
    tweetImageContainer: {
        flex: 1,
        alignItems: 'flex-start',
        minWidth: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#444444',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },

    // Estilos de la imagen del tweet
    tweetImage: {
        width: '100%',
        height: '100%',
    },

    // Estilos del contenedor de enlaces
    tweetLinkContainer: {
        borderWidth: 1,
        borderColor: '#444444',
        marginBottom: 10,
        borderRadius: 10,
        minWidth: '100%',
        backgroundColor: '#333333',
    },

    // Estilos del enlace del tweet
    tweetLink: {
        color: Color.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});