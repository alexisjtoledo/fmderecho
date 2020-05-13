// Componentes y elementos
import React, { Component, useState } from 'react'
import {
    View,
    Text,
    Image,
    Picker,
    StyleSheet,
} from 'react-native'
import Header from '../components/Header'
import Colors from '../constants/Colors'
import GlobalStyles from '../constants/GlobalStyles'
import Layout from '../constants/Layout'

export default function BlueprintScreen({ navigation }) {

    // Hooks de estado
    const itemValue = navigation.getParam('itemValue');
    const [selectedValue, setSelectedValue] = useState(itemValue);

    /**    
     * Función para manejar el valor devuelto por el componente 
     * Recibe el valor seleccionado y lo setea como estado
     * @param { String } value 
     * @memberof BlueprintScreen
     */ 
    var resultHandler = value => setSelectedValue(value)

    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                screenName='Plano de la Facultad' 
                navigation={navigation} 
                backButton={true} 
            />

            {/* CONTENIDO */}
            <View style={GlobalStyles.contentBox}>

                {/* Texto de instrucciones */}
                <Text style={styles.instructionsText}>
                    ¿A dónde querés llegar?
                </Text>

                {/* Selector */}
                <View style={styles.pickerContainer}>
                    {/* CONDICIONAL: Muestro el selector respectivo según la plataforma */}
                    {Platform.OS === 'ios' ? ( 
                        <IosPicker 
                            result={resultHandler} 
                            selected={selectedValue} 
                        />
                    ) : ( 
                        <AndroidPicker 
                            result={resultHandler} 
                            selected={selectedValue} 
                        />
                    )}
                    {/* Fin del CONDICIONAL */}
                </View>

                {/* Plano */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: `https://fmderecho.com/mobile/img/blueprints/${selectedValue}.jpg`,
                        }}
                        style={styles.image}
                        resizeMode='contain'
                        defaultSource={ require('../assets/images/blueprintplaceholder.jpg') }
                        progressiveRenderingEnabled={true}
                    />
                </View>
            </View>
        </View> // Fin de la Pantalla
    ) // Fin del Return
} // Fin del Componente

/* COMPONENTE PICKER PARA iOS */
export class IosPicker extends Component {
    render() {
        return (
            <Picker
                selectedValue={this.props.selected}
                style={styles.pickerSelector}
                onValueChange={(itemValue, itemIndex) =>
                    this.props.result(itemValue)
                }
            >
                <Picker.Item label='Bar' value='bar' />
                <Picker.Item label='Fotocopiadora' value='fotocopiadora' />
                <Picker.Item label='Sala de Estudios' value='salaestudios' />
                <Picker.Item label='Hemeroteca' value='hemeroteca' />
                <Picker.Item label='Aula Virtual' value='avirtual' />
                <Picker.Item label='Sala de Informática' value='informatica' />
                <Picker.Item label='Oficialía Mayor' value='oficialia' />
                <Picker.Item label='Sec. Académica' value='academicas' />
                <Picker.Item label='Bedelía' value='bedelia' />
                <Picker.Item label='Sec. Asuntos Estudiantiles' value='sae' />
                <Picker.Item label='Dpto. de Notariado' value='notariado' />
                <Picker.Item label='Dpto. Estudios Básicos' value='ebasicos' />
                <Picker.Item label='Dpto. Derecho Social' value='dsocial' />
                <Picker.Item label='Dpto. Derecho Público' value='dpublico' />
                <Picker.Item label='Dpto. Derecho Procesal' value='dprocesal' />
                <Picker.Item label='Dpto. Práctica Profesional' value='dpractica' />
                <Picker.Item label='Dpto. Derecho Penal' value='dpenal' />
                <Picker.Item label='Dpto. Derecho Comercial' value='dcomercial' />
                <Picker.Item label='Sala Velez Sársfield' value='vsarsfield' />
                <Picker.Item label='Sala 3' value='sala3' />
                <Picker.Item label='Sala 7' value='sala7' />
                <Picker.Item label='Salón Velez Mariconde' value='vmariconde' />
                <Picker.Item label='Aula Magna' value='magna' />
                <Picker.Item label='Anfiteatro Orgaz' value='aorgaz' />
                <Picker.Item label='Anfiteatro Roca' value='aroca' />
                <Picker.Item label='Anfiteatro 22 de Agosto' value='agosto' />
                <Picker.Item label='Centro de Estudiantes' value='ced' />
                <Picker.Item label='Aula 1' value='a1' />
                <Picker.Item label='Aula 2' value='a2' />
                <Picker.Item label='Aula 3' value='a3' />
                <Picker.Item label='Aula 4' value='a4' />
                <Picker.Item label='Aula 5' value='a5' />
                <Picker.Item label='Aula 6' value='a6' />
                <Picker.Item label='Aula 7' value='a7' />
                <Picker.Item label='Aula 8' value='a8' />
                <Picker.Item label='Aula 9' value='a9' />
                <Picker.Item label='Aula 10' value='a10' />
                <Picker.Item label='Aula 11' value='a11' />
                <Picker.Item label='Aula 12' value='a12' />
                <Picker.Item label='Aula 13' value='a13' />
                <Picker.Item label='Aula 14' value='a14' />
                <Picker.Item label='Aula 15' value='a15' />
                <Picker.Item label='Aula 16' value='a16' />
                <Picker.Item label='Aula 17' value='a17' />
                <Picker.Item label='Aula 18' value='a18' />
                <Picker.Item label='Aula 19' value='a19' />
                <Picker.Item label='Aula 20' value='a20' />
                <Picker.Item label='Aula 21' value='a21' />
                <Picker.Item label='Aula 22' value='a22' />
                <Picker.Item label='Aula 23' value='a23' />
                <Picker.Item label='Aula 24' value='a24' />
                <Picker.Item label='Aula 25' value='a25' />
                <Picker.Item label='Aula 26' value='a26' />
                <Picker.Item label='Aula 27' value='a27' />
                <Picker.Item label='Aula 28' value='a28' />
                <Picker.Item label='Aula 29' value='a29' />
                <Picker.Item label='Aula 30' value='a30' />
                <Picker.Item label='Aula 31' value='a31' />
                <Picker.Item label='Aula 32' value='a32' />
                <Picker.Item label='Aula 33' value='a33' />
                <Picker.Item label='Aula 34' value='a34' />
                <Picker.Item label='Aula 35' value='a35' />
                <Picker.Item label='Aula 36' value='a36' />
                <Picker.Item label='Aula 37' value='a37' />
                <Picker.Item label='Aula 38' value='a38' />
                <Picker.Item label='Aula 40' value='a40' />
                <Picker.Item label='Aula 41' value='a41' />
                <Picker.Item label='Aula 42' value='a42' />
                <Picker.Item label='Aula 43' value='a43' />
                <Picker.Item label='Aula 44' value='a44' />
                <Picker.Item label='Aula 45' value='a45' />
                <Picker.Item label='Aula 46' value='a46' />
            </Picker> // Fin del Selector
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

/* COMPONENTE PICKER PARA ANDROID */
export class AndroidPicker extends Component {
    render() {
        return (
            <Picker
                selectedValue={this.props.selected}
                style={styles.pickerSelector}
                onValueChange={(itemValue, itemIndex) =>
                    this.props.result(itemValue)
                }
            >
                <Picker.Item label='Centro de Estudiantes' value='ced' />
                <Picker.Item label='Aula 1' value='a1' />
                <Picker.Item label='Aula 2' value='a2' />
                <Picker.Item label='Aula 3' value='a3' />
                <Picker.Item label='Aula 4' value='a4' />
                <Picker.Item label='Aula 5' value='a5' />
                <Picker.Item label='Aula 6' value='a6' />
                <Picker.Item label='Aula 7' value='a7' />
                <Picker.Item label='Aula 8' value='a8' />
                <Picker.Item label='Aula 9' value='a9' />
                <Picker.Item label='Aula 10' value='a10' />
                <Picker.Item label='Aula 11' value='a11' />
                <Picker.Item label='Aula 12' value='a12' />
                <Picker.Item label='Aula 13' value='a13' />
                <Picker.Item label='Aula 14' value='a14' />
                <Picker.Item label='Aula 15' value='a15' />
                <Picker.Item label='Aula 16' value='a16' />
                <Picker.Item label='Aula 17' value='a17' />
                <Picker.Item label='Aula 18' value='a18' />
                <Picker.Item label='Aula 19' value='a19' />
                <Picker.Item label='Aula 20' value='a20' />
                <Picker.Item label='Aula 21' value='a21' />
                <Picker.Item label='Aula 22' value='a22' />
                <Picker.Item label='Aula 23' value='a23' />
                <Picker.Item label='Aula 24' value='a24' />
                <Picker.Item label='Aula 25' value='a25' />
                <Picker.Item label='Aula 26' value='a26' />
                <Picker.Item label='Aula 27' value='a27' />
                <Picker.Item label='Aula 28' value='a28' />
                <Picker.Item label='Aula 29' value='a29' />
                <Picker.Item label='Aula 30' value='a30' />
                <Picker.Item label='Aula 31' value='a31' />
                <Picker.Item label='Aula 32' value='a32' />
                <Picker.Item label='Aula 33' value='a33' />
                <Picker.Item label='Aula 34' value='a34' />
                <Picker.Item label='Aula 35' value='a35' />
                <Picker.Item label='Aula 36' value='a36' />
                <Picker.Item label='Aula 37' value='a37' />
                <Picker.Item label='Aula 38' value='a38' />
                <Picker.Item label='Aula 40' value='a40' />
                <Picker.Item label='Aula 41' value='a41' />
                <Picker.Item label='Aula 42' value='a42' />
                <Picker.Item label='Aula 43' value='a43' />
                <Picker.Item label='Aula 44' value='a44' />
                <Picker.Item label='Aula 45' value='a45' />
                <Picker.Item label='Aula 46' value='a46' />
                <Picker.Item label='Anfiteatro Orgaz' value='aorgaz' />
                <Picker.Item label='Anfiteatro Roca' value='aroca' />
                <Picker.Item label='Anfiteatro 22 de Agosto' value='agosto' />
                <Picker.Item label='Aula Magna' value='magna' />
                <Picker.Item label='Sala 3' value='sala3' />
                <Picker.Item label='Sala 7' value='sala7' />
                <Picker.Item label='Salón Velez Mariconde' value='vmariconde' />
                <Picker.Item label='Sala Velez Sársfield' value='vsarsfield' />
                <Picker.Item label='Dpto. Estudios Básicos' value='ebasicos' />
                <Picker.Item label='Dpto. Derecho Social' value='dsocial' />
                <Picker.Item label='Dpto. Derecho Público' value='dpublico' />
                <Picker.Item label='Dpto. Derecho Procesal' value='dprocesal' />
                <Picker.Item label='Dpto. Práctica Profesional' value='dpractica' />
                <Picker.Item label='Dpto. Derecho Penal' value='dpenal' />
                <Picker.Item label='Dpto. Derecho Comercial' value='dcomercial' />
                <Picker.Item label='Dpto. de Notariado' value='notariado' />
                <Picker.Item label='Bedelía' value='bedelia' />
                <Picker.Item label='Sec. Asuntos Estudiantiles' value='sae' />
                <Picker.Item label='Sec. Académica' value='academicas' />
                <Picker.Item label='Oficialía Mayor' value='oficialia' />
                <Picker.Item label='Sala de Estudios' value='salaestudios' />
                <Picker.Item label='Hemeroteca' value='hemeroteca' />
                <Picker.Item label='Aula Virtual' value='avirtual' />
                <Picker.Item label='Sala de Informática' value='informatica' />
                <Picker.Item label='Bar' value='bar' />
                <Picker.Item label='Fotocopiadora' value='fotocopiadora' />
            </Picker> // Fin del selector
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Texto de instrucciones
    instructionsText: {
        color: Colors.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 16,
        paddingVertical: 5,
        textAlign: 'center',
    },

    // Contenedor del selector
    pickerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lighterPrimary,
        position: 'absolute',
        top: 30,
        borderRadius: 10,
        marginHorizontal: 16,
    },

    // Contenedor de imagen
    imageContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 240 : 90,
        width: Layout.window.width,
        height:
            Platform.OS === 'ios'
                ? Layout.window.height - 430
                : Layout.window.height - 240,
        zIndex: -10,
    },

    // Imagen
    image: {
        width: '100%',
        height: '100%',
    },

    // Selector
    pickerSelector: {
        height: Platform.OS === 'ios' ? 215 : 50,
        width: Layout.window.width - 32,
    },
})
