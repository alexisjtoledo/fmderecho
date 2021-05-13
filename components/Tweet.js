import React, { Component } from 'react'
import { 
    View,  
    Image, 
    TouchableOpacity, 
    Text,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { format } from 'date-fns'

export default class Tweet extends Component {

    /**
     * Función encargada de limpiar de hipervínculos el texto del Tweeet
     * @param { String } tweet Recibo el texto del tweet
     * @returns El mismo tweet, sin enlaces
     * @memberof Tweet
     */
    cleanTweet = (tweet) => {
        let cleanTweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,'');
        return cleanTweet;
    }

    /**
     * Función para formatear fechas
     * @param { String } givenDate Recibo una fecha en forma de string
     * @returns Regreso una fecha formateada
     * @memberof Tweet
     */
    formatDate = (givenDate) => {
        let result = format(Date.parse(givenDate), 'd/M/yyyy - H:mm');
        return result;
    }

    render() {
        return (
            <View style={styles.listElement}>

                {/* Imagen de perfil */}
                <Image 
                    source={{uri: this.props.data.user.profile_image_url}}
                    style={styles.elementImage} />
                
                {/* Contenedor */}
                <View style={styles.tweetBox}>

                    {/* CONDICIONAL: ¿El tweet tiene multimedia? */}
                    { this.props.data.entities.media
                        ? <TouchableOpacity
                            style={styles.tweetImageContainer} 
                            onPress={() => this.props.handlePress(this.props.data.entities.media[0].media_url)}
                            >

                            {/* CONDICIONAL: ¿El tweet tiene al menos una imagen? */}
                            {this.props.data.entities.media[0].media_url 
                                ? <Image 
                                        source={{uri: this.props.data.entities.media[0].media_url}} 
                                        style={styles.tweetImage}
                                        resizeMode='cover'
                                    />
                                : null // Si no existe, no muestro nada
                            }{/* Fin CONDICIONAL imagen */}

                        </TouchableOpacity> 
                    : null
                    }
                    {/* Fin CONDICIONAL multimedia */}

                    {/* TEXTO */}
                    <Text style={styles.elementText}>
                        {this.cleanTweet(this.props.data.full_text)}
                    </Text>

                    {/* CONDICIONAL: ¿El tweet tiene un enlace? */}
                    { this.props.data.entities.urls[0]
                        ? <TouchableOpacity 
                            style={styles.tweetLinkContainer} 
                            onPress={() => this.props.handlePress(this.props.data.entities.urls[0].expanded_url)}
                            >
                                <Text style={styles.tweetLink}>
                                    Abrir enlace
                                    &nbsp;
                                    <Ionicons 
                                        name='open' 
                                        size={18} 
                                        color={Colors.textColor}
                                    />
                                </Text>
                        </TouchableOpacity> 
                    : null 
                    }
                    {/* Fin del CONDICIONAL de enlaces */}

                    {/* TIMESTAMP */}
                    <Text style={styles.elementDate}>
                        <Ionicons 
                            name='time' 
                            size={9.5}
                        />
                        &nbsp;
                        {this.formatDate(this.props.data.created_at)}
                    </Text>

                </View>
            </View> // Fin del Tweet
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Tweet
    listElement: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },

    // Foto de Perfil
    elementImage: {
        width: 25,
        height: 25,
        borderRadius: 50,
        margin: 16,
    },

    // Contenido
    tweetBox: {
        paddingVertical: 16,
        paddingRight: 12,
        marginRight: 58,
    },

    // Texto
    elementText: {
        color: Colors.textColor,
        fontSize: 16,
        marginBottom: 10,
    },

    // Timestamp
    elementDate: {
        fontSize: 10,
        color: Colors.secondaryTextColor,
    },

    // Contenedor multimedia
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

    // Imagen
    tweetImage: {
        width: '100%',
        height: '100%',
    },

    // Contenedor de enlaces
    tweetLinkContainer: {
        borderWidth: 1,
        borderColor: '#444444',
        marginBottom: 10,
        borderRadius: 10,
        minWidth: '100%',
        backgroundColor: '#333333',
    },

    // Enlace
    tweetLink: {
        color: Colors.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});
