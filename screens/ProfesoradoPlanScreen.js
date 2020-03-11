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

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function ProfesoradoPlanScreen({ navigation }) {

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
                <Text style={[styles.headerTitle, {}]}>Profesorado</Text>

            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-hammer' : 'md-hammer'} size={70} color={Color.textColor} />
                <Text style={styles.mainText}>Próximamente</Text>
                <Text style={styles.secondaryText}>podrás consultar el plan de estudios</Text>
                <Text style={styles.secondaryText}>del Profesorado en esta sección.</Text>
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

    mainText: {
        color: Color.textColor,
        fontSize: 25,
        fontWeight: 'bold',
    },

    secondaryText: {
        color: Color.lighterBackground,
        fontSize: 12,
    },
});