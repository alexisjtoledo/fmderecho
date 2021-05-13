import { StyleSheet, Platform } from 'react-native' // Importo hojas de estilo
import Constants from 'expo-constants' // Importo constantes de expo
import Layout from './Layout' // Importo diseños
import Colors from './Colors' // Importo colores

export default StyleSheet.create({

    // Estilo del contenedor de todas las pantallas
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        minWidth: Layout.window.width,
    },

    // Contenedor de la pantalla principal
    mainScreenContainer: {
        flex: 1,
        marginLeft: 16,
        paddingBottom: Platform.OS === 'ios' ? Constants.statusBarHeight : null,
    },

    // Contendor de la panatalla Enlaces Útiles
    usefulLinksContainer: {
        borderTopColor: '#333333',
        borderTopWidth: 2,
        flex: 1,
        paddingVertical: 10,
    },

    // Estilo de los inputs de búsqueda de las secciones principales
    searchInput: {
        marginHorizontal: 16,
        marginBottom: 15,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.darkerBackground,
        borderRadius: 10,
        color: Colors.textColor,
    },

    // Estilos de elemento de carga
    containerLoading: {
        flex: 1,
        backgroundColor: '#21201E',
        width: Layout.window.width,
        height: Layout.window.height,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // iFrame
    frame: {
        maxWidth: Layout.window.width,
        backgroundColor: Colors.backgroundColor,
    },

    // Estilos del contenedor principal
    contentBox: {
        borderTopColor: "#333333",
        borderTopWidth: 2,
        paddingBottom: Constants.statusBarHeight + 10,
    },

})