import React, { Component } from 'react'
import { 
    TouchableOpacity, 
    View,
    Image,
    FlatList,
    Text, 
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Tag from '../components/Tag'

export default class Discount extends Component {

    render() {
        return (

            /* ELEMENTO DESCUENTO */
            <TouchableOpacity
                style={styles.discount}
                activeOpacity={0.5}
                onPress={() => {this.props.handlePress('DiscountDetailsScreen', this.props.data)}}
            >
                    {/* IMAGEN DEL DESCUENTO */}
                    <Image
                        source={{ uri: this.props.data.img }}
                        style={styles.image}
                        defaultSource={require('../assets/images/tramite_placeholder.jpg')}
                        progressiveRenderingEnabled={true}
                        resizeMode='cover'
                    />

                    {/* TIEMPO RESTANTE */}
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.remainingTime}>
                            <Ionicons 
                                name='time' 
                                size={10}
                            />
                            &nbsp;
                            Válido hasta: {this.props.data.until === '-' ? 'Sin vencimiento' : this.props.data.until}
                        </Text>
                        <View style={styles.tagsContainer}>
                            <Text style={styles.tagsText}>
                                <Ionicons 
                                    name='pricetags' 
                                    size={10}
                                />&nbsp;
                            </Text>
                            <FlatList
                                data = {this.props.data.tags}
                                horizontal = {true}
                                renderItem = {
                                    ({item}) => <Tag text={item} />
                                }
                                keyExtractor = {(item, index) => index.toString()}
                            />
                        </View>
                    </View>

                    {/* ÍCONO PLAY */}
                    <Ionicons
                        name='play'
                        size={25}
                        color={Colors.textColor}
                    />

            </TouchableOpacity> // Fin del Material de estudio
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente


// Estilos del componente
const styles = StyleSheet.create({

    // Descuento
    discount: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16,
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },

    // Imagen del descuento
    image: {
        width: Layout.window.width / 3,
        height: Layout.window.width / 3,
    },

    // Contenedor del texto
    textContainer:{
        width: (Layout.window.width / 4) * 2.4,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    // Título del descuento
    title:{
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        height: 70,
    },

    // Tiempo Restante
    remainingTime:{
        paddingHorizontal: 5,
        fontSize: 10,
        color: '#BBBBBB',
    },

    // Contenedor de los tags
    tagsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 22,
        marginTop: 5,
    },

    // Texto de los Tags
    tagsText:{
        paddingLeft: 5,
        marginTop: -3,
        color: '#BBBBBB',
    },
})