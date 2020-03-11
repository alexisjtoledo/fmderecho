// Componentes
import React from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'

export default function ContactScreen() {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.sectionTitle}>Consultas</Text>
            {/* Solo renderizo un formulario que está en la web */}
            <WebView style={styles.frame}
                source={{uri: 'http://m.fmderecho.com/contacto/form.html'}}
                bounces={false}
                renderLoading={<ActivityIndicator size="large" color="#C3FFFB" />}
            />
        </View>
    );
}

ContactScreen.navigationOptions = {
    title: 'Consultas',
};

const styles = StyleSheet.create({
    text: {
        color: Color.tintColor,
    },
    frame: {
        maxWidth: Layout.window.width,
        backgroundColor: Color.backgroundColor,
    },
});