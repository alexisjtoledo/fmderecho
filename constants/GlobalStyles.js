import { StyleSheet } from 'react-native' // Importo hojas de estilo
import Constants from 'expo-constants' // Importo constantes de expo
import Layout from './Layout' // Importo diseños
import Colors from './Colors' // Importo colores

export default StyleSheet.create({
    // Estilo del contenedor de todas las pantallas
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingTop: Constants.statusBarHeight,
        maxHeight: Layout.window.height,
        minWidth: Layout.window.width,
    },
    // Estilo de los títulos de las secciones principales
    sectionTitle: {
        color: Colors.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginVertical: 10,
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
    // Estilos del texto del elemento de carga
    loading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },



});