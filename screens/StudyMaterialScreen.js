// Componentes
import React, { Component } from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    FlatList, 
    TextInput, 
    ActivityIndicator, 
    Alert
} from 'react-native'

// Estilos
import Constants from 'expo-constants'
import Color from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Linking, WebBrowser } from 'expo'
import Layout from '../constants/Layout'
import GlobalStyles from '../constants/GlobalStyles'

export default class StudyMaterialScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false, // Creo un estado de descarga
            studyMaterial: [], // Creo un array para guardar la información que obtenga de la API
            url: 'http://m.fmderecho.com/api/StudyMaterial.json', // Dirección de la API
        }
    }

    // Al montar el componente fetcheo la API
    componentDidMount(){
        this.getData();
    }

    // Función para obtener los datos de la API
    getData = () => {
        this.setState({ loading:true }); // En primer lugar seteo el estado de descarga a verdadero
        fetch(this.state.url) // Luego fetcheo la API
            .then(res => res.json()) // A la respuesta la transformo en un JSON
            .then(res => {
                this.setState({ // Y la almaceno en el array que cree anteriormente
                    studyMaterial: res.StudyMaterial,
                    inMemoryStudyMaterial: res.StudyMaterial,
                    loading: false // Y seteo nuevamente el estado de descarga en falso
                })
            });
    }

    // Funcion para manejar los enlaces
    _handlePress = (link) => {
        Linking.openURL(link);
        this.props.onPress && this.props.onPress();
    }

    // Función que limpia los strings de acentos
    normalize = ( string ) => {
        var chars={
            "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
            "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
            "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
            "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
        var expr=/[áàéèíìóòúùñ]/ig;
        var res=string.replace(expr,function(e){return chars[e]});
        return res;
    }

    // Función de búsqueda
    searchStudyMaterial = (value) => {
        const filteredStudyMaterial = this.state.inMemoryStudyMaterial.filter(
            studyMaterial => {
                // Primero paso tanto el string del titulo como lo que haya en el input a minusculas
                let studyMaterialLowercase = (studyMaterial.tags).toLowerCase();
                let searchTermLowercase = value.toLowerCase();
                // Despues elimino los acentos de ambos strings
                studyMaterialLowercase = this.normalize(studyMaterialLowercase);
                searchTermLowercase = this.normalize(searchTermLowercase);
                // Y finalmente los filtro
                return studyMaterialLowercase.indexOf(searchTermLowercase)> -1;
            }
        )
        this.setState({ // Y al resultado lo guardo en el estado
            studyMaterial: filteredStudyMaterial,
        })
    }

    render() {
        // Pantalla de carga condicional
        if(this.state.loading){
            return(
                <View style={styles.containerLoading}>
                    <ActivityIndicator size="large" color="#C3FFFB" />
                </View>
            )
        }
        return (
            // Si la descarga está OK muestro:
            <View style={GlobalStyles.container}>
                {/* MATERIAL DE ESTUDIO */}
                {/* Título de la pantalla */}
                <Text style={GlobalStyles.sectionTitle}>Material de Estudio</Text>
                {/* Cuadro de búsqueda */}
                <TextInput 
                    placeholder = 'Buscar por palabra clave o apellido de autor'
                    placeholderTextColor = "#555555"
                    style = {GlobalStyles.searchInput}
                    onChangeText = {(value) => this.searchStudyMaterial(value)}
                    clearTextOnFocus = {true}
                    autoCapitalize = 'none'
                />
                <View style={styles.programsList}>
                    {/* Listado con los resultados */}
                    <FlatList
                        data = {this.state.studyMaterial}
                        renderItem = {
                            ({item}) => 
                            <TouchableOpacity style={styles.programBtn} activeOpacity={0.5} onPress={() => this._handlePress(item.url)}>
                                <View style={styles.programBox}>
                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cloud-download' : 'md-cloud-download'} size={50} color="#FFFFFF" />
                                    <View style={styles.textBox}>
                                        <Text style={styles.subjectText}>{item.name}</Text>
                                        <Text style={styles.cathedraText}>Autor: {item.description}</Text>
                                        <Text style={styles.additionalText}>Tags: {item.tags}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor = {(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // COntenedor de carga
    containerLoading: {
        flex: 1,
        backgroundColor: '#21201E',
        width: Layout.window.width,
        height: Layout.window.height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Elemento de carga
    loading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    // Contenedor de texto
    textBox: {
        marginHorizontal: 20,
    },
    // Título de la sección
    programsTitle: {
        marginTop: 60,
        marginBottom: 20,
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    // Lista
    programsList: {
        marginBottom: Platform.OS === 'ios' ? 104 : 120,
    },
    // Botón del material de estudio
    programBtn: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    // Contenedor del material de estudio
    programBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Nombre del Material
    subjectText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Nombre del autos
    cathedraText: {
        fontSize: 14,
        color: '#DDDDDD',
    },
    // Tags
    additionalText: {
        fontSize: 10,
        color: '#BBBBBB',
    },
});
