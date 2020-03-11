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
    Platform,
    Picker,
    ScrollView
} from 'react-native'
import { Linking } from 'expo'
import Svg, { Circle, Rect } from 'react-native-svg'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

export default function BlueprintScreen({ navigation }) {

    const [selectedValue, setSelectedValue] = useState('ced');


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
                <Text style={[styles.headerTitle, {}]}>Plano de la facultad</Text>
            </View>
            
            {/* CONTENIDO */}
            <View style={styles.contentBox}>
            <Text style={styles.instructionsText}>¿A dónde querés llegar?</Text>
            <View style={styles.pickerContainer}>
                {/* Como los picker nativos son diferentes en Android y en iOS, ordenos los items de diferentes maneras dependiendo del dispositivo del que se esté accediendo. */}
                {Platform.OS === 'ios' 
                    ? <Picker
                        selectedValue={selectedValue}
                        style={styles.pickerSelector}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Bar" value="bar" />
                        <Picker.Item label="Fotocopiadora" value="fotocopiadora" />
                        <Picker.Item label="Sala de Estudios" value="salaestudios" />
                        <Picker.Item label="Hemeroteca" value="hemeroteca" />
                        <Picker.Item label="Aula Virtual" value="avirtual" />
                        <Picker.Item label="Sala de Informática" value="informatica" />
                        <Picker.Item label="Oficialía Mayor" value="oficialia" />
                        <Picker.Item label="Sec. Académica" value="academicas" />
                        <Picker.Item label="Bedelía" value="bedelia" />
                        <Picker.Item label="Sec. Asuntos Estudiantiles" value="sae" />
                        <Picker.Item label="Dpto. de Notariado" value="notariado" />
                        <Picker.Item label="Dpto. Estudios Básicos" value="ebasicos" />
                        <Picker.Item label="Dpto. Derecho Social" value="dsocial" />
                        <Picker.Item label="Dpto. Derecho Público" value="dpublico" />
                        <Picker.Item label="Dpto. Derecho Procesal" value="dprocesal" />
                        <Picker.Item label="Dpto. Práctica Profesional" value="dpractica" />
                        <Picker.Item label="Dpto. Derecho Penal" value="dpenal" />
                        <Picker.Item label="Dpto. Derecho Comercial" value="dcomercial" />
                        <Picker.Item label="Sala Velez Sársfield" value="vsarsfield" />
                        <Picker.Item label="Sala 3" value="sala3" />
                        <Picker.Item label="Sala 7" value="sala7" />
                        <Picker.Item label="Salón Velez Mariconde" value="vmariconde" />
                        <Picker.Item label="Aula Magna" value="magna" />
                        <Picker.Item label="Anfiteatro Orgaz" value="aorgaz" />
                        <Picker.Item label="Anfiteatro Roca" value="aroca" />
                        <Picker.Item label="Anfiteatro 22 de Agosto" value="agosto" />
                        <Picker.Item label="Centro de Estudiantes" value="ced" />
                        <Picker.Item label="Aula 1" value="a1" />
                        <Picker.Item label="Aula 2" value="a2" />
                        <Picker.Item label="Aula 3" value="a3" />
                        <Picker.Item label="Aula 4" value="a4" />
                        <Picker.Item label="Aula 5" value="a5" />
                        <Picker.Item label="Aula 6" value="a6" />
                        <Picker.Item label="Aula 7" value="a7" />
                        <Picker.Item label="Aula 8" value="a8" />
                        <Picker.Item label="Aula 9" value="a9" />
                        <Picker.Item label="Aula 10" value="a10" />
                        <Picker.Item label="Aula 11" value="a11" />
                        <Picker.Item label="Aula 12" value="a12" />
                        <Picker.Item label="Aula 13" value="a13" />
                        <Picker.Item label="Aula 14" value="a14" />
                        <Picker.Item label="Aula 15" value="a15" />
                        <Picker.Item label="Aula 16" value="a16" />
                        <Picker.Item label="Aula 17" value="a17" />
                        <Picker.Item label="Aula 18" value="a18" />
                        <Picker.Item label="Aula 19" value="a19" />
                        <Picker.Item label="Aula 20" value="a20" />
                        <Picker.Item label="Aula 21" value="a21" />
                        <Picker.Item label="Aula 22" value="a22" />
                        <Picker.Item label="Aula 23" value="a23" />
                        <Picker.Item label="Aula 24" value="a24" />
                        <Picker.Item label="Aula 25" value="a25" />
                        <Picker.Item label="Aula 26" value="a26" />
                        <Picker.Item label="Aula 27" value="a27" />
                        <Picker.Item label="Aula 28" value="a28" />
                        <Picker.Item label="Aula 29" value="a29" />
                        <Picker.Item label="Aula 30" value="a30" />
                        <Picker.Item label="Aula 31" value="a31" />
                        <Picker.Item label="Aula 32" value="a32" />
                        <Picker.Item label="Aula 33" value="a33" />
                        <Picker.Item label="Aula 34" value="a34" />
                        <Picker.Item label="Aula 35" value="a35" />
                        <Picker.Item label="Aula 36" value="a36" />
                        <Picker.Item label="Aula 37" value="a37" />
                        <Picker.Item label="Aula 38" value="a38" />
                        <Picker.Item label="Aula 40" value="a40" />
                        <Picker.Item label="Aula 41" value="a41" />
                        <Picker.Item label="Aula 42" value="a42" />
                        <Picker.Item label="Aula 43" value="a43" />
                        <Picker.Item label="Aula 44" value="a44" />
                        <Picker.Item label="Aula 45" value="a45" />
                        <Picker.Item label="Aula 46" value="a46" />
                    </Picker>
                    : <Picker
                        selectedValue={selectedValue}
                        style={styles.pickerSelector}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Centro de Estudiantes" value="ced" />
                        <Picker.Item label="Aula 1" value="a1" />
                        <Picker.Item label="Aula 2" value="a2" />
                        <Picker.Item label="Aula 3" value="a3" />
                        <Picker.Item label="Aula 4" value="a4" />
                        <Picker.Item label="Aula 5" value="a5" />
                        <Picker.Item label="Aula 6" value="a6" />
                        <Picker.Item label="Aula 7" value="a7" />
                        <Picker.Item label="Aula 8" value="a8" />
                        <Picker.Item label="Aula 9" value="a9" />
                        <Picker.Item label="Aula 10" value="a10" />
                        <Picker.Item label="Aula 11" value="a11" />
                        <Picker.Item label="Aula 12" value="a12" />
                        <Picker.Item label="Aula 13" value="a13" />
                        <Picker.Item label="Aula 14" value="a14" />
                        <Picker.Item label="Aula 15" value="a15" />
                        <Picker.Item label="Aula 16" value="a16" />
                        <Picker.Item label="Aula 17" value="a17" />
                        <Picker.Item label="Aula 18" value="a18" />
                        <Picker.Item label="Aula 19" value="a19" />
                        <Picker.Item label="Aula 20" value="a20" />
                        <Picker.Item label="Aula 21" value="a21" />
                        <Picker.Item label="Aula 22" value="a22" />
                        <Picker.Item label="Aula 23" value="a23" />
                        <Picker.Item label="Aula 24" value="a24" />
                        <Picker.Item label="Aula 25" value="a25" />
                        <Picker.Item label="Aula 26" value="a26" />
                        <Picker.Item label="Aula 27" value="a27" />
                        <Picker.Item label="Aula 28" value="a28" />
                        <Picker.Item label="Aula 29" value="a29" />
                        <Picker.Item label="Aula 30" value="a30" />
                        <Picker.Item label="Aula 31" value="a31" />
                        <Picker.Item label="Aula 32" value="a32" />
                        <Picker.Item label="Aula 33" value="a33" />
                        <Picker.Item label="Aula 34" value="a34" />
                        <Picker.Item label="Aula 35" value="a35" />
                        <Picker.Item label="Aula 36" value="a36" />
                        <Picker.Item label="Aula 37" value="a37" />
                        <Picker.Item label="Aula 38" value="a38" />
                        <Picker.Item label="Aula 40" value="a40" />
                        <Picker.Item label="Aula 41" value="a41" />
                        <Picker.Item label="Aula 42" value="a42" />
                        <Picker.Item label="Aula 43" value="a43" />
                        <Picker.Item label="Aula 44" value="a44" />
                        <Picker.Item label="Aula 45" value="a45" />
                        <Picker.Item label="Aula 46" value="a46" />
                        <Picker.Item label="Anfiteatro Orgaz" value="aorgaz" />
                        <Picker.Item label="Anfiteatro Roca" value="aroca" />
                        <Picker.Item label="Anfiteatro 22 de Agosto" value="agosto" />
                        <Picker.Item label="Aula Magna" value="magna" />
                        <Picker.Item label="Sala 3" value="sala3" />
                        <Picker.Item label="Sala 7" value="sala7" />
                        <Picker.Item label="Salón Velez Mariconde" value="vmariconde" />
                        <Picker.Item label="Sala Velez Sársfield" value="vsarsfield" />
                        <Picker.Item label="Dpto. Estudios Básicos" value="ebasicos" />
                        <Picker.Item label="Dpto. Derecho Social" value="dsocial" />
                        <Picker.Item label="Dpto. Derecho Público" value="dpublico" />
                        <Picker.Item label="Dpto. Derecho Procesal" value="dprocesal" />
                        <Picker.Item label="Dpto. Práctica Profesional" value="dpractica" />
                        <Picker.Item label="Dpto. Derecho Penal" value="dpenal" />
                        <Picker.Item label="Dpto. Derecho Comercial" value="dcomercial" />
                        <Picker.Item label="Dpto. de Notariado" value="notariado" />
                        <Picker.Item label="Bedelía" value="bedelia" />
                        <Picker.Item label="Sec. Asuntos Estudiantiles" value="sae" />
                        <Picker.Item label="Sec. Académica" value="academicas" />
                        <Picker.Item label="Oficialía Mayor" value="oficialia" />
                        <Picker.Item label="Sala de Estudios" value="salaestudios" />
                        <Picker.Item label="Hemeroteca" value="hemeroteca" />
                        <Picker.Item label="Aula Virtual" value="avirtual" />
                        <Picker.Item label="Sala de Informática" value="informatica" />
                        <Picker.Item label="Bar" value="bar" />
                        <Picker.Item label="Fotocopiadora" value="fotocopiadora" />
                    </Picker>
                }



                    
                </View>

                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: `https://fmderecho.com/mobile/img/blueprints/${selectedValue}.jpg`}}
                        style={styles.image}
                        resizeMode='contain'
                        defaultSource={require('../assets/images/blueprintplaceholder.jpg')}
                        progressiveRenderingEnabled={true}
                    />
                </View>

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
    },

    // Estilos del texto de instrucciones
    instructionsText: {
        color: Color.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 16,
        paddingVertical: 5,
        textAlign: 'center',
    },

    // Estilos del contenedor del picker
    pickerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.lighterPrimary,
        position: 'absolute',
        top: 30,
        borderRadius: 10,
        marginHorizontal: 16,
    },

    // Estilos del picker
    pickerSelector: {
        height: Platform.OS === 'ios' ? 215 : 50, 
        width: Layout.window.width - 32 ,
    },

    // Estilos del visor de imagenes
    imageContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 240 : 90,
        width: Layout.window.width,
        height: Platform.OS === 'ios' ? Layout.window.height - 430 : Layout.window.height - 240,
        zIndex: -10,
    },

    // Estilos de imagen
    image: {
        width: '100%',
        height: '100%'
    },
    
});