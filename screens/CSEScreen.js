import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet,
    Linking,
    Alert
} from 'react-native'
import { Video } from 'expo-av'
import GlobalStyles from '../constants/GlobalStyles'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Header from '../components/Header'

export default function CSEScreen({ navigation }) {

    const globalData = navigation.getParam('data');

    /**
     * Función para manipular las llamadas
     * @param { String } number Recibo como parámetro un número de teléfono
     * @memberof CSEScreen
     */
    var dialNumber = number => {
        // Primero armo la URL del teléfono
        let url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${number}`;
        // Luego pregunto si puedo abrir la app teléfono
        Linking.canOpenURL(url).then((canOpen) => {
            if (canOpen) {
                // Si puede, lo hago
                Linking.openURL(url);
            } else {
                // Si no, envío una alerta
                Alert.alert(
                    'Oops!, Parece que tu teléfono no soporta esta función :('
                );
            }
        });
    }

    /**
     * Función para manipular los enlaces
     * @param { String } url Recibo como parámetro una dirección URL
     * @memberof CSEScreen
     */
    var handleLink = url => {
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

    /**
     * Función para formatear el mail
     * @param { String } mail Recibo como parámetro un mail URL
     * @memberof CSEScreen Devuelvo un mail limpio
     */    
    var visibleMail = mail => {
        let result, array;
        array = mail.split(':');
        result = array[1];
        return result;
    }

    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                screenName='Comp. Social Estudiantil' 
                navigation={navigation}
                backButton={true}
            />

            {/* CONTENIDO */}
            <View style={GlobalStyles.contentBox}>

                {/* Video de presentación */}
                <Video
                    source={{ uri: globalData.CSE.videoUrl }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode='cover'
                    posterSource={{ uri: globalData.CSE.img1 }}
                    usePoster={true}
                    shouldPlay
                    isLooping={true}
                    style={styles.video}
                />

                {/* Botonera */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            handleLink(globalData.CSE.link1);
                        }}
                        style={styles.infoBtn}
                    >
                        <Text style={styles.infoBtnText}>
                            {globalData.CSE.textLink1}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleLink(globalData.CSE.mail);
                        }}
                        style={styles.mailBtn}
                    >
                        <Ionicons
                            name={
                                Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'
                            }
                            size={30}
                            color={Colors.textColor}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            dialNumber(globalData.CSE.phone);
                        }}
                        style={styles.callBtn}
                    >
                        <Ionicons
                            name={
                                Platform.OS === 'ios' ? 'ios-call' : 'md-call'
                            }
                            size={30}
                            color={Colors.textColor}
                        />
                    </TouchableOpacity>
                </View>

                {/* Datos de contacto */}
                <ScrollView style={styles.textContainer}>
                    <View style={styles.cseInformation}>
                        <Text style={styles.informationText}>
                            Oficina Compromiso Social Estudiantil
                        </Text>
                        <View style={styles.contactBox}>
                            <View style={styles.contactDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.contactText}>
                                    {globalData.CSE.location}
                                </Text>
                            </View>
                            <View style={styles.contactDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.contactText}>
                                    {visibleMail(globalData.CSE.mail)}
                                </Text>
                            </View>
                            <View style={styles.contactDescription}>
                                <View style={styles.iconBox}>
                                    <Ionicons
                                        name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                                        size={15}
                                        color='#DDDDDD'
                                    />
                                </View>
                                <Text style={styles.contactText}>
                                    {globalData.CSE.visiblePhone}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Texto */}
                    <Text style={styles.mainText}>{globalData.CSE.text1}</Text>
                </ScrollView>
            </View>
        </View> // Fin de la Pantalla
    ) // Fin del Return
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Video
    video: {
        width: Layout.window.width,
        height: (Layout.window.width / 16) * 9,
    },

    // Botonera
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        minHeight: 92,
    },

    // Botón Acción
    infoBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 4,
        height: 60,
        borderRadius: 15,
        backgroundColor: 'rgba(250,250,250,0.3)',
        borderColor: Colors.textColor,
        borderWidth: 2,
        marginRight: 10,
    },

    // Texto del Botón Acción
    infoBtnText: {
        color: Colors.textColor,
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    // Botón Mail
    mailBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        borderRadius: 15,
        height: 60,
        borderWidth: 2,
        marginRight: 10,
        backgroundColor: 'rgba(250,250,250,0.3)',
        borderColor: Colors.textColor,
    },

    // Botón Llamar
    callBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        borderRadius: 15,
        backgroundColor: 'rgba(69,176,143,0.3)',
        borderColor: '#45b08f',
        borderWidth: 2,
        height: 60,
    },

    // Contenedor de la descripción
    textContainer: {
        paddingHorizontal: 16,
    },

    // Datos de contacto
    cseInformation: {
        borderColor: Colors.textColor,
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 10,
        overflow: 'hidden',
    },

    // Título de los datos de contacto
    informationText: {
        color: Colors.textColor,
        fontSize: 14,
        paddingVertical: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },

    // Contenedor de los contactos
    contactBox: {
        marginLeft: 5,
        justifyContent: 'space-between',
    },

    // Contenedor de contacto
    contactDescription: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 26,
        marginBottom: 10,
        paddingLeft: 10,
    },

    // Contenedor del ícono
    iconBox: {
        width: 15,
        marginRight: 5,
        alignItems: 'center',
    },

    // Texto de contacto
    contactText: {
        fontSize: 11,
        color: '#DDDDDD',
    },

    // Texto principal
    mainText: {
        color: Colors.textColor,
        fontSize: 16,
        paddingBottom: 300,
        paddingHorizontal: 10,
    },
})
