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

            <TouchableOpacity
                style={styles.discount}
                activeOpacity={0.5}
                onPress={() => {this.props.handlePress('DiscountDetailsScreen', this.props.data)}}
            >

                    <Image
                        source={{ uri: this.props.data.img }}
                        style={styles.image}
                        defaultSource={require('../assets/images/tramite_placeholder.jpg')}
                        progressiveRenderingEnabled={true}
                        resizeMode='cover'
                    />

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.remainingTime}>
                            <Ionicons 
                                name={Platform.OS === 'ios' ? 'ios-clock' : 'md-clock'} 
                                size={10}
                            />
                            &nbsp;
                            Tiempo restante: {this.props.data.until}
                        </Text>
                        <View style={styles.tagsContainer}>
                            <Text style={styles.tagsText}>
                                <Ionicons 
                                    name={Platform.OS === 'ios' ? 'ios-pricetags' : 'md-pricetags'} 
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

                    {/* Ícono Play */}
                    <Ionicons
                        name={
                            Platform.OS === 'ios'
                                ? 'ios-play'
                                : 'md-play'
                        }
                        size={25}
                        color={Colors.textColor}
                    />

            </TouchableOpacity> // Fin del Material de estudio
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente


// Estilos del componente
const styles = StyleSheet.create({

    discount: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16,
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },

    image: {
        width: Layout.window.width / 3,
        height: Layout.window.width / 3,
    },

    textContainer:{
        width: (Layout.window.width / 4) * 2.4,
        paddingVertical: 5,
        paddingHorizontal: 10,

    },

    title:{
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        height: 70,
    },

    remainingTime:{
        paddingHorizontal: 5,
        fontSize: 10,
        color: '#BBBBBB',

    },

    tagsText:{
        paddingLeft: 5,
        marginTop: -3,
        color: '#BBBBBB',
    },

    tagsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 22,
        marginTop: 5,
    },













    // Botón
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: Colors.textColor,
        borderWidth: 1,
    },

    // Contenedor
    studyMaterialBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Contenedor de texto
    textBox: {
        marginHorizontal: 20,
    },

    // Nombre del Material
    titleText: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
    },

    // Nombre del autos
    authorText: {
        fontSize: 14,
        color: '#DDDDDD',
    },
    
    // Tags
    additionalText: {
        fontSize: 10,
        color: '#BBBBBB',
    },
})
