// Componentes y elementos
import React, { 
    Component, 
    useState, 
    useEffect 
} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList, 
    Image, 
    TouchableOpacity, 
    Platform 
} from 'react-native'
import { Linking } from 'expo'
import { format } from 'date-fns'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import Color from '../constants/Colors'

export default function AcademicCalendarScreen({ navigation }) {

    return (
        /* CONTENEDOR PRINCIPAL*/
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <View style={styles.header}>

                {/* Botón volver */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >

                    {/* Ímagen del botón */}
                    <Ionicons name={'ios-arrow-back'} size={30} color={Color.secondary} />

                </TouchableOpacity>

                {/* Título de la pantalla */}
                <Text style={[styles.headerTitle, {}]}>Calendario Académico</Text>

            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>

                <Text style={styles.text}>PRÓXIMAMENTE</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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
        flex: 1,
        justifyContent: 'center',
        minWidth: 25,
        maxWidth: 25,
    },

    // Estilos del título de la cabecera
    headerTitle: {
        color: Color.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        height: 40,
        lineHeight: Platform.OS === 'ios' ? 38 : 36, // Text Vertical Align iOS
        textAlignVertical: 'center', // Text Vertical Align Android
    },

    // Estilos del contenedor principal
    contentBox: {
        borderTopColor: '#333333',
        borderTopWidth: 2,
        paddingBottom: Constants.statusBarHeight + 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        color: Color.textColor,
    }

});