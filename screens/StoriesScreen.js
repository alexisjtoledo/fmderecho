// Componentes y Elementos
import React, { 
    useState, 
    useEffect 
} from 'react'
import { 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity,  
    Modal, 
    View, 
    Image,
} from 'react-native'
import { Video } from 'expo-av'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function StoriesScreen({ navigation }) {

    // Constantes de datos traídos vía navegación para el modal
    const name = navigation.getParam('name');
    const description = navigation.getParam('description');
    const videoUri = navigation.getParam('video');
    const pictureUri = navigation.getParam('picture');

    // Constantes para suplir el State en funciones (Hooks)
    const [ modalVisible, setModalVisible ] = useState(false);
    
    return (

        /* CONTENEDOR PRINCIPAL */
        <View style={GlobalStyles.container}>

            {/* VIDEO DE FONDO */}
            <Video
                source={{ uri: videoUri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
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
                    <Ionicons name={'ios-arrow-back'} size={30} color={Color.secondary} />

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
                <Text style={[styles.headerTitle, {}]}>
                    {navigation.getParam('name')}
                </Text>

            </View>
            
            {/* BOTÓN DE VERSIÓN TEXTO */}
            <TouchableOpacity
                style = {styles.openModalBtn}
                onPress={() => {setModalVisible(true)}}
            >
                <Ionicons name={'ios-arrow-up'} size={30} color={Color.secondary} />
                <Text style={styles.openModalText}>Ver en formato texto</Text>
            </TouchableOpacity>

            {/* MODAL DE VERSIÓN TEXTO */}
            <Modal
                animationType="slide"
                transparent={false}
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
                                <Ionicons name={'ios-arrow-back'} size={30} color={Color.textColor} />
                                <Text style={styles.modalHeaderTitle}>
                                    {name}
                                </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Contenido del modal */}
                    <Text style={styles.modalText}>{description}</Text>

                </ScrollView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

    // Estilos del contenido principal (video)
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
        minWidth: 20,
        maxWidth: 20,
        flex: 1,
        justifyContent: 'center',
        flexGrow: 1,
    },

    // Estilos del título de la cabecera
    headerTitle: {
        color: Color.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: Color.black,
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

    // Estilos del contenedor del thumbnail de la cabecera
    imageContainer: {
        minWidth: 40,
        maxWidth: 40,
        maxHeight: 40,
        flexGrow: 1,
        overflow: 'hidden',
        borderRadius: 50,
        marginRight: 10,
    },

    // Estilos de la imagen de la cabecera 
    picture: {
        width: '100%',
        height: '100%',
    },
    
    // Estilos del botón de abrir modal
    openModalBtn: {
        flex: 1,
        alignItems: 'center',
        width: (Layout.window.width - 32),
        position: 'absolute',
        left: 16,
        bottom: 25,
    },

    // Estilos del texto de abrir modal
    openModalText: {
        fontSize: 14,
        color: Color.textColor,
        textShadowColor: Color.black,
        textShadowOffset: { 
            width: 1.5, 
            height: 1.5
        },
        textShadowRadius: 5,
    },

    // Estilos del contenedor del modal
    modalBackGround: {
        paddingHorizontal: 16,
        backgroundColor: Color.backgroundColor,
    },

    // Estilos de la cabecera
    modalHeader: {
        top: 0,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight + 10 : 10,
        paddingBottom: 10,
        backgroundColor: Color.backgroundColor,
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
    },

    // Estilos del botón volver
    modalBackButton: {
        minHeight: 40,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },

    // Estilos del título de la cabecera
    modalHeaderTitle: {
        color: Color.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 35 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
        marginLeft: 10,
    },

    // Estilos del contenido del modal
    modalText: {
        fontSize: 14,
        color: Color.textColor,
        paddingTop: 10,
        paddingBottom: Constants.statusBarHeight,
    },
});