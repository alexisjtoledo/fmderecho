import React, { Component } from 'react'
import { 
    TouchableOpacity, 
    Image, 
    View, 
    StyleSheet, 
    FlatList, 
    Text 
} from 'react-native'
import Colors from '../constants/Colors'

export default class CardStack extends Component {
    
    /**
     * Función que maneja la apertura de la pantalla STORIES.
     * @param { Object } data Recibe como parámetro el item actual de la iteración.
     * @memberof CardStack
     */
    handleStories = (data) => {
        // Utilizo la propiedad recibida (navigation) para abrir el componente Stories con la info recibida del elemento seleccionado.
        this.props.navigation.navigate('Stories', data);
    }
    
    render() {
        return (
            <View>
                {/* Título del Stack */}
                <Text style={styles.titles}>{this.props.name}</Text>
                {/* Iteración de cada elemento del Stack */}
                <FlatList
                    data={this.props.data} // Fuente de datos: Recibidos por parámetro.
                    renderItem={( { item } ) => ( // Por cada iteración voy a imprimir una tarjeta.
                        /* Tarjeta clickeable */
                        <TouchableOpacity
                            style={styles.cardBackground}
                            activeOpacity={0.5}
                            onPress={() => this.handleStories(item)}
                        >
                            {/* Imagen de la tarjeta */}
                            <Image
                                source={{ uri: item.picture }}
                                style={styles.cardImage}
                                defaultSource={require('../assets/images/placeholder.png')}
                                progressiveRenderingEnabled={true}
                            />

                            {/* Título de la tarjeta */}
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>        
                    )}
                    keyExtractor={(item, index) => index.toString()} // Genero un identificador para cada miembro...
                    horizontal={true} // Le digo que renderice verticalmente...
                    showsHorizontalScrollIndicator={false} // Y que no muestre la barra de desplazamiento.
                />
            </View> // Fin del Stack
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({
    
    // Título de cada stack
    titles: {
        color: Colors.tintColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    // Tarjetas
    cardBackground: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 5,
        width: 104,
        height: 138,
        marginRight: 8,
        marginBottom: 25,
    },

    // Imágenes de las tarjetas
    cardImage: {
        width: '100%',
        height: '100%',
    },

    // Fondos de los títulos de las tarjetas
    cardTextContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        width: 104,
        height: 138,
        flex: 1,
        justifyContent: 'flex-end',
    },

    // Títulos de las tarjetas
    cardText: {
        color: Colors.textColor,
        fontSize: 12,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textShadowColor: Colors.black,
        textShadowOffset: {
            width: 1.8,
            height: 1.8,
        },
        textShadowRadius: 5,
        backgroundColor: 'rgba(33,32,30,0.5)',
        borderRadius: 5,
        overflow: 'hidden',
        fontWeight: 'bold',
    },
});
