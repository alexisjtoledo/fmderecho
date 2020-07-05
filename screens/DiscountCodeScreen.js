// Componentes
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyles from '../constants/GlobalStyles'
import Colors from '../constants/Colors'
import QRCode from 'react-native-qrcode-generator'
import Layout from '../constants/Layout'

export default function DiscountCodeScreen({ navigation }) {

    const data = navigation.getParam('data');

    /**
     * Función para generar el código
     * @param { String } prefix Ingreso el prefijo del código.
     * @returns { String } Código
     * @memberof DiscountCodeScreen
     */
    var createCode = (prefix) => {
        var token = Math.random().toString(36).replace(/[^a-z0-9]+/, '').substr(0, 8);
        var result = `${prefix}${token}`;
        result = result.toUpperCase();
        return result;
    }

    // Llamo a la función para que sea el mismo código en QR y texto
    var code = createCode(data.qrtext);

    return (
        <View style={GlobalStyles.container}>
            {/* BOTÓN CERRAR */}
            <TouchableOpacity 
                activeOpacity={1} 
                style={styles.closeBtn} 
                onPress={() => {navigation.goBack()}}
            >
                {/* CÓDIGO QR */}
                <View style={styles.qrcontainer}>
                    <QRCode
                        value={code}
                        size={200}
                        bgColor={Colors.primary}
                        fgColor={Colors.textColor}
                    />
                </View>

                {/* CÓDIGO TEXTO */}
                <View style={styles.codeTextContainer}>
                    <Text style={styles.codeText}> {code} </Text>
                </View>

                {/* LABEL DE CIERRE */}
                <Text style={styles.closeText}>Presioná en cualquier lado para cerrar</Text>
            </TouchableOpacity>
        </View> // Fin de la pantalla
    ) // Fin del Return
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Botón de cierre
    closeBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.textColor,
        height: '100%',
        width: '100%',
    },

    // Contenedor del Código QR
    qrcontainer: {
        borderColor: Colors.primary,
        borderWidth: 10,
        borderRadius: 20,
        padding: 20,
    },

    // Contenedor del código texto
    codeTextContainer:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 30,
        borderRadius: 5,
        borderColor: Colors.primary,
        borderWidth: 5,
    },

    // Texto del código
    codeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.primary,
    },

    // Texto del botón cerrar
    closeText: {
        position: 'absolute',
        bottom: 50,
        textTransform: 'uppercase',
        fontSize: 12,
        color: Colors.lighterBackground,
    },
})