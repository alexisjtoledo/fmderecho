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
    Image, 
    TouchableOpacity, 
    Platform 
} from 'react-native'
import { Linking, WebBrowser } from 'expo'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function UsefulLinksScreen({ navigation }) {

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
                <Text style={styles.headerTitle}>Enlaces Útiles</Text>

            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => Linking.openURL('https://autogestion.guarani.unc.edu.ar/')}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} size={35} color={Color.textColor} />
                    </View>
                    <View style={styles.linkTextContainer}>
                        <Text style={styles.linkText}>
                            SIU Guaraní
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => Linking.openURL('http://aulavirtual.derecho.proed.unc.edu.ar/')}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} size={35} color={Color.textColor} />
                    </View>
                    <View style={styles.linkTextContainer}>
                        <Text style={styles.linkText}>
                            Aula Virtual
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => Linking.openURL('https://derecho.unc.edu.ar/')}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} size={35} color={Color.textColor} />
                    </View>
                    <View style={styles.linkTextContainer}>
                        <Text style={styles.linkText}>
                            Web de la Facultad
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => Linking.openURL('https://www.unc.edu.ar/')}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} size={35} color={Color.textColor} />
                    </View>
                    <View style={styles.linkTextContainer}>
                        <Text style={styles.linkText}>
                            Web de la Universidad
                        </Text>
                    </View>
                </TouchableOpacity>
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
        flex: 1,
        paddingVertical: 10,
    },
    // Contenedor del enlace
    linkContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 25,
    },
    // Contenedor del ícono
    iconContainer: {
        flexGrow: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 18,
        paddingTop: 20,
        borderRadius: 10,
        borderColor: Color.textColor,
        borderWidth: 1,
    },
    // Contenedor del texto del enlace
    linkTextContainer: {
        flex: 1,
        flexGrow: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    // Texto del enlace
    linkText: {
        color: Color.textColor,
        fontSize: 24,
    },
});