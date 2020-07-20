import React, { useState } from 'react'
import { 
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Video } from 'expo-av'
import GlobalStyles from '../constants/GlobalStyles'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { PanGestureHandler } from 'react-native-gesture-handler'

export default function StoriesScreen({ navigation }) {

    const name = navigation.getParam('name');
    const description = navigation.getParam('description');
    const videoUri = navigation.getParam('video');
    const pictureUri = navigation.getParam('picture');
    const [ modalVisible, setModalVisible ] = useState(false);
    
    return (
        <View style={GlobalStyles.container}>

            {/* VIDEO DE FONDO */}
            <Video
                source={{ uri: videoUri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode='cover'
                shouldPlay
                style={styles.video}
            />

            {/* CABECERA */}
            <View style={styles.header}>

                {/* Botón volver */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >

                    {/* Imagen del botón */}
                    <Ionicons 
                        name={'ios-arrow-back'} 
                        size={30} 
                        color={Colors.secondary} 
                    />

                </TouchableOpacity>

                {/* Thumbnail del header */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: pictureUri}}
                        style={styles.picture}
                        resizeMode='cover'
                    />
                </View>

                {/* Título de la pantalla */}
                <Text style={styles.headerTitle}>
                    {name}
                </Text>

            </View>
            
            {/* BOTÓN DE VERSIÓN TEXTO */}
                <PanGestureHandler
                    onGestureEvent={() => {setModalVisible(true)}}
                >
                    <View
                        style = {styles.openModalBtn}
                    >
                        <Ionicons 
                            name={'ios-arrow-up'} 
                            size={30} 
                            color={Colors.secondary} 
                        />
                        <Text style={styles.openModalText}>
                            Deslizá para más info
                        </Text>
                    </View>
                </PanGestureHandler>

            {/* MODAL DE VERSIÓN TEXTO */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >

                {/* Contenedor principal del Modal */}
                <ScrollView style={styles.modalBackGround} stickyHeaderIndices={[0]}>

                    {/* Cabecera del modal */}
                    <View style={styles.modalHeader}>

                        {/* Botón volver */}
                        <TouchableOpacity
                            onPress={() => {setModalVisible(!modalVisible)}}
                            style={styles.modalBackButton} 
                        >
                                <Ionicons 
                                    name={'ios-arrow-back'} 
                                    size={30} 
                                    color={Colors.secondary}
                                />
                                <Text style={styles.modalHeaderTitle}>
                                    {name}
                                </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Contenido del modal */}
                    <Text style={styles.modalText}>
                        {description}
                    </Text>

                </ScrollView>
            </Modal>
            {/* Fin del modal */}
        </View> // Fin del Story
    ) // Fin del return
} // Fin del componente

// Estilos
const styles = StyleSheet.create({

    // Pantalla principal (video)
    video: {
        width: Layout.window.width,
        height: Layout.window.height,
        zIndex: -90,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    
    // Cabecera (pantalla principal)
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        minHeight: 60,
        maxHeight: 60,
        paddingHorizontal: 16,
    },

    // Botón volver (pantalla principal)
    backButton: {
        height: 40,
        minWidth: 20,
        maxWidth: 20,
        flex: 1,
        justifyContent: 'center',
        flexGrow: 1,
    },

    // Título de la cabecera (pantalla principal)
    headerTitle: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: Colors.black,
        textShadowOffset: { 
            width: 1, 
            height: 1
        },
        textShadowRadius: 5,
        height: 40,
        maxWidth: 300,
        flexGrow: 8,
        lineHeight: Platform.OS === 'ios' ? 40 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
    },

    // Contenedor del thumbnail de la cabecera (pantalla principal)
    imageContainer: {
        minWidth: 40,
        maxWidth: 40,
        maxHeight: 40,
        flexGrow: 1,
        overflow: 'hidden',
        borderRadius: 50,
        marginRight: 10,
    },

    // Imagen de la cabecera (pantalla principal)
    picture: {
        width: '100%',
        height: '100%',
    },
    
    // Botón formato texto (pantalla principal)
    openModalBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: (Layout.window.width - 32),
        height: 400,
        position: 'absolute',
        left: 16,
        bottom: 0,
    },

    // Texto del botón formato texto (pantalla principal)
    openModalText: {
        fontSize: 14,
        color: Colors.textColor,
        textShadowColor: Colors.black,
        textShadowOffset: { 
            width: 1.5, 
            height: 1.5
        },
        textShadowRadius: 5,
        paddingBottom: 30,
    },

    // Contenedor principal (modal)
    modalBackGround: {
        backgroundColor: 'rgba(33,32,30,0.95)',
    },

    // Cabecera (modal)
    modalHeader: {
        top: 0,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight + 10 : 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.backgroundColor,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
    },

    // Botón volver (modal)
    modalBackButton: {
        minHeight: 40,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },

    // Título de la cabecera (modal)
    modalHeaderTitle: {
        color: Colors.textColor,
        fontSize: 20,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 35 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
        marginLeft: 10,
        marginRight: 16,
    },

    // Contenido (modal)
    modalText: {
        fontSize: 14,
        color: Colors.textColor,
        paddingTop: 10,
        paddingBottom: Constants.statusBarHeight,
        paddingHorizontal: 16,
    },
})