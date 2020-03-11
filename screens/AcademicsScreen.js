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
import { Linking } from 'expo'
import { format } from 'date-fns'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function AcademicsScreen({ navigation }) {

    // Constantes para suplir el State en funciones (Hooks)
    const [tweets, setTweets] = useState([]);
    const [inMemoryTweets, setInMemoryTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    // Hook que reemlaza el ComponentDidMount
    useEffect (() => {
        // Solicitud a la API
            fetch('http://m.fmderecho.com/api/getfromtwitter/academics.php')
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
                <Text style={[styles.headerTitle, {}]}>Excelencia Académica</Text>

            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>

                {/* Listado de Tweets */}
                <FlatList
                    data = {tweets} // Fuente de datos: Colección del objeto JSON que extraje de la API
                    renderItem = {
                        ({item}) => // Por cada item imprimo:

                        // Un contenedor de tweet
                        <View style={styles.listElement}>

                            {/* La imagen de perfil */}
                            <Image 
                                source={{uri: item.user.profile_image_url}}
                                style={styles.elementImage} />
                            
                            {/* Un contenedor del contenido del tweet */}
                            <View style={styles.tweetBox}>

                                {/* CONDICIONAL: ¿El tweet tiene imagen? */}
                                { item.entities.media // IF > existe contenido multimedia
                                    ? <TouchableOpacity // Lo imprimo y genero el enlace
                                        style={styles.tweetImageContainer} 
                                        onPress={() => Linking.openURL(item.entities.media[0].media_url)}
                                        >
                                        {item.entities.media[0].media_url // IF > existe al menos un elemento

                                            ? <Image // Lo imprimo
                                                    source={{uri: item.entities.media[0].media_url}} 
                                                    style={styles.tweetImage}
                                                    resizeMode='cover'
                                                />

                                            : null // Si no existe, no muestro nada
                                        }
                                    </TouchableOpacity> 
                                : null /* Si no existe, no muestro nada */}

                                {/* Luego imprimo el texto del tweet, eliminando los enlaces multimedia que entrega la API por defecto */}
                                <Text style={styles.elementText}>
                                    {item.full_text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'')}
                                </Text>

                                {/* CONDICIONAL: ¿El tweet tiene un enlace? */}
                                { item.entities.urls[0] // IF > Existe alguna url?

                                    ? <TouchableOpacity // Si existe, genero el contenedor clickeable
                                        style={styles.tweetLinkContainer} 
                                        onPress={() => Linking.openURL(item.entities.urls[0].expanded_url)}
                                        >
                                            {/* Con texto predefinido de abrir enlace e ícono */}
                                            <Text style={styles.tweetLink}>
                                                Abrir enlace&nbsp;
                                                {/* Ícono del botón */}
                                                <Ionicons name={Platform.OS === 'ios' ? 'ios-open' : 'md-open'} size={18} color={Color.textColor} />
                                            </Text>

                                    </TouchableOpacity> 

                                : null /* Si no existe no hago nada */
                                }

                                {/* Luego imprimo el timestamp del tweet, previo formateo */}
                                <Text style={styles.elementDate}>
                                    
                                    {/* Ícono de reloj */}
                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-time' : 'md-time'} size={9.5} color={Color.secondaryTextColor} />&nbsp;
                                    {/* Fecha entregada por la API formateada */}
                                    {formatDate(item.created_at)}
                                </Text>

                            </View>
                        </View>
                    }
                    keyExtractor = {item => item.id_str} // Genero un identificador para cada miembro
                    showsVerticalScrollIndicator = {false} // Y que no muestre la barra de desplazamiento
                />

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