// Componentes
import React, { useState } from 'react'
import { 
    View, 
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Share,
    StyleSheet,
    Alert,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import Tag from '../components/Tag'
import Collapsible from 'react-native-collapsible'
import GlobalStyles from '../constants/GlobalStyles'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function DiscountDetailsScreen({ navigation }) {

    const data = navigation.getParam('data');
    const sharedMessage = `Descargate la app de la Franja y accedé a este descuento: ${data.title}. Encontranos en la Play Store (https://play.google.com/store/apps/details?id=com.fmderecho.fmapp) o en la Apple Store como 'FMderecho'`;
    const [isCollapsed, setIsCollapsed] = useState(true);

    var checkDate = date => {
        // Si recibí una fecha vacía, muestro el descuento.
        if (date === '-'){
            navigation.navigate('DiscountCodeScreen', {data: data});
            return;
        }
        // Formateo la fecha recibida.
        let today = new Date();
        date = date.split('/');
        let day = date[0];
        let month = date[1];
        let year = date[2];
        let formattedDate = new Date(year, month-1, day, 0, 0, 0, 0);
        // Si la fecha es posterior a hoy, devuelvo un false.
        today > formattedDate 
            ? Alert.alert('Ups! Este descuento ya no está disponible :(') 
            : navigation.navigate('DiscountCodeScreen', {data: data})
    }

    return (
        <View style={GlobalStyles.container}>
            
            {/* CABECERA */}
            <View>

                {/* Imagen de fondo */}
                <Image 
                    source={{uri: data.img}} 
                    style={styles.image} 
                    resizeMode='cover' 
                />

                {/* Gradiente */}
                <LinearGradient
                    colors={['transparent', 'rgba(33,32,30,1)']}
                    style={styles.gradient}
                />

                {/* Título */}
                <Text style={styles.titleText}>
                    {data.title}
                </Text>

                {/* Tags */}
                <View style={styles.tags}>
                    <FlatList
                        data = {data.tags}
                        horizontal = {true}
                        renderItem = {
                            ({item}) => <Tag text={item} />
                        }
                        keyExtractor = {(item, index) => index.toString()}
                    />
                </View>

                {/* Botón volver */}
                <View style={styles.backBtnContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                        <Ionicons
                            name={'md-arrow-round-back'}
                            size={30}
                            color={Colors.textColor}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Condicional: el descuento vence? */}
            {
                data.until === '-' 
                    ? null 
                    : <View style={styles.validity}>
                            <Text style={styles.date}>
                                Válido desde: {data.since} hasta: {data.until}
                            </Text>
                        </View>
            }

            {/* Descripción */}
            <ScrollView style={styles.descriptionContainer}>
                <View>
                <Text style={styles.descriptionText}>{data.description}</Text>
                </View>
                <Text style={styles.conditionsTitle} onPress={() => setIsCollapsed(!isCollapsed)}> Ver Términos, bases y condiciones.</Text>
                <Collapsible collapsed={isCollapsed}>
                    <View>
                    <Text style={styles.conditionsText}>{data.conditions}</Text>
                    </View>
                </Collapsible>
            </ScrollView>

            {/* Botonera */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {Share.share({message: sharedMessage});}}>
                    <View style={[styles.iconBtnBox, styles.shareIconBox]}>
                    <Ionicons 
                        name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'} 
                        size={Layout.window.width > 400 ? 30 : 25}
                        color={Colors.textColor}
                    />
                    </View>
                    <View style={[styles.textBtnBox, styles.shareTextBox]}>
                    <Text style={styles.buttonLabel}>Compartir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => {
                        checkDate(data.until)
                    }}
                >
                    <View style={[styles.iconBtnBox, styles.actionIconBox]}>
                    <Ionicons 
                        name={Platform.OS === 'ios' ? 'ios-checkmark-circle-outline' : 'md-checkmark-circle-outline'} 
                        size={Layout.window.width > 400 ? 30 : 25}
                        color={Colors.textColor}
                    />
                    </View>
                    <View style={[styles.textBtnBox, styles.actionTextBox]}>
                    <Text style={styles.buttonLabel}>Utilizar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View> // Fin de la pantalla
    ) // Fin del Return
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Imagen
    image: {
        width: Layout.window.width,
        height: Layout.window.height / 2.5,
    },

    // Degradado
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: Layout.window.height / 5,
        height: Layout.window.height / 5,
    },

    // Título del descuento
    titleText: {
        position: 'absolute',
        color: Colors.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        bottom: 0,
        height: 120,
        padding: 20,
    },

    // Contenedor de tags
    tags:{
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'rgba(33,32,30,0.9)',
        padding: 5,
        paddingRight: 0,
        borderBottomLeftRadius: 8,
    },

    // Contenedor Botón volver
    backBtnContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    
    // Botón volver
    backBtn: {
        width: 40,
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(33,32,30,0.5)'
    },

    // Vencimientos
    validity: {
        paddingVertical: 8,
        borderColor: Colors.textColor,
        borderWidth: 1,
        marginHorizontal: 16,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
    },

    // Texto de los vencimientos
    date: {
        color: Colors.textColor,
        paddingHorizontal: 16,
        textAlign: 'center',
    },

    // Contenedor de la descripción
    descriptionContainer: {
        marginHorizontal: 16,
    },

    // Texto de la descripción 
    descriptionText: {
        color: Colors.textColor,
    },

    // Subtítulo condiciones
    conditionsTitle:{
        color: '#BBBBBB',
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },

    // Texto de las condiciones
    conditionsText: {
        color: '#BBBBBB',
        fontSize: 8,
        marginHorizontal: 10,
    },

    // Contenedor de los botones
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Layout.window.width > 400 ? 16 : 20,
        justifyContent: 'space-between',
        maxHeight: 70,
        minHeight: 70,
        width: '100%',
    },

    // Botones
    button:{
        flex: 1,
        flexDirection: 'row',
    },

    // Contenedor del ícono (gral)
    iconBtnBox: {
        width: Layout.window.width > 400 ? 50 : 40,
        height: Layout.window.width > 400 ? 50 : 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Contenedor del ícono (botón compartir)
    shareIconBox: {
        backgroundColor: 'rgba(224,224,226,0.4)',
        borderColor: '#E0E0E2',
        borderWidth: 2,
        borderRightWidth: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    // Contenedor del ícono (botón usar)
    actionIconBox: {
        backgroundColor: 'rgba(69,176,143,0.4)',
        borderColor: '#45b08f',
        borderWidth: 2,
        borderRightWidth: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    
    // Contenedor del texto (gral)
    textBtnBox: {
        width: Layout.window.width > 400 ? 135 : 120,
        height: Layout.window.width > 400 ? 50 : 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Contenedor del texto (botón compartir)
    shareTextBox: {
        backgroundColor: 'rgba(224,224,226,0.4)',
        borderColor: '#E0E0E2',
        borderWidth: 2,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    // Contenedor del texto (botón usar)
    actionTextBox: {
        backgroundColor: 'rgba(69,176,143,0.4)',
        borderColor: '#45b08f',
        borderWidth: 2,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    
    // Texto
    buttonLabel: {
        color: Colors.textColor,
        paddingHorizontal: Layout.window.width > 400 ? 20 : 10,
        paddingVertical: 10,
        fontSize: Layout.window.width > 400 ? 14 : 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})