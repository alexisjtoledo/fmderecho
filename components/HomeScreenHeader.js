import React, { Component } from 'react'
import { 
    View,
    Image,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'
import Constants from 'expo-constants'
import Colors from '../constants/Colors'
import MainLogo from '../assets/images/main-logo.png'

export default class HomeScreenHeader extends Component {

    /**
     * Función que maneja la apertura de la pantalla STORIES.
     * @param { String } screen Recibe como parámetro la pantalla que tiene que abrir.
     * @memberof HomeScreenHeader
     */
    handlePress = (screen, name) => {
        // Utilizo la propiedad recibida (navigation) para abrir la pantalla que necesito.
        this.props.navigation.navigate(screen, {selector: name});
    }

    render() {
        return (
            <View style={styles.header}>
                {/* LOGO */}
                <Image
                    source={MainLogo}
                    style={styles.mainLogo}
                    resizeMode='contain'
                />
                {/* MENU DE CABECERA */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {/* Primer elemento del menú */}
                    <Text
                        onPress={() => this.handlePress('TweetsScreen', 'Information')}
                        style={styles.btnMenu}
                    >
                        Noticias
                    </Text>
                    {/* Segundo elemento del menú */}
                    <Text
                        onPress={() => this.handlePress('TweetsScreen', 'Inclusion')}
                        style={styles.btnMenu}
                    >
                        Inclusión
                    </Text>
                    {/* Tercer elemento del menú */}
                    <Text
                        onPress={() => this.handlePress('TweetsScreen', 'Rights')}
                        style={styles.btnMenu}
                    >
                        Derechos
                    </Text>
                    {/* Cuarto elemento del menú */}
                    <Text
                        onPress={() => this.handlePress('TweetsScreen', 'Academics')}
                        style={styles.btnMenu}
                    >
                        Académicas
                    </Text>
                </ScrollView>
            </View> // Fin de la Cabecera
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({
    // Fondo del header
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(33,32,30,0.3)',
        paddingBottom: 10,
        paddingTop: Constants.statusBarHeight + 10,
        top: - Constants.statusBarHeight,
        zIndex: 2,
    },

    // Logotipo
    mainLogo: {
        width: 50,
        height: 60,
        marginHorizontal: 16,
    },

    // Elementos del menú
    btnMenu: {
        color: Colors.textColor,
        textShadowColor: Colors.black,
        textShadowOffset: {
            width: 1.5,
            height: 1.5,
        },
        textShadowRadius: 5,
        marginRight: 16,
        fontSize: 18,
    },
});