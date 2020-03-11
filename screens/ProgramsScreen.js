// Componentes
import React, { 
    Component 
} from 'react'
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

export default class ProgramsScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false, // Seteo un estado de descarga
            programs: [], // Creo un array para almacenar la información que reciba de la API
            url: 'http://m.fmderecho.com/api/Programs.json', // Dirección de la API
        }
    }

    // Al montar el componente fetcheo la información de la API
    componentDidMount(){
        this.getData();
    }

    // Función para obtener la información de la API
    getData = () => {
        this.setState({ loading:true }); // Primero seteo el estado de la descarga a verdadero
        fetch(this.state.url) // Fetcheo la API
            .then(res => res.json()) // Al resultado lo paso a formato JSON
            .then(res => { // Después actualizo los estados:
                this.setState({ 
                    programs: res.Programs, // Guardo los programas en el array creado anteriormente
                    inMemoryPrograms: res.Programs,
                    loading: false // Y seteo el estado de descarga a falso
                })
            });
    }

    // Función para manejar los clicks
    _handlePress = (link) => {
        Linking.openURL(link);
        this.props.onPress && this.props.onPress();
    }

    // Función para limpiar los strings de acentos
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
    searchProgram = (value) => {
        const filteredPrograms = this.state.inMemoryPrograms.filter(
            program => {
                // Primero convierto tanto los nombres como lo que haya en el input a minúsculas
                let programLowercase = (program.subject).toLowerCase();
                let searchTermLowercase = value.toLowerCase();
                // Después elimino todos los acentos y tildes
                programLowercase = this.normalize(programLowercase);
                searchTermLowercase = this.normalize(searchTermLowercase);
                // Y finalmente filtro
                return programLowercase.indexOf(searchTermLowercase)> -1;
            }
        )
        // Y a los resultados los guardo en el array del estado
        this.setState({
            programs: filteredPrograms,
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
            // Si está toda la información descargada renderizo:
            <View style={GlobalStyles.container}>
                {/* PROGRAMAS */}
                <Text style={GlobalStyles.sectionTitle}>Programas</Text>
                <TextInput 
                    placeholder = 'Buscar por materia'
                    placeholderTextColor = "#555555"
                    style = {GlobalStyles.searchInput}
                    onChangeText = {(value) => this.searchProgram(value)}
                    clearTextOnFocus = {true}
                    autoCapitalize = 'none'
                />
                <View style={styles.programsList}>
                    <FlatList
                        data = {this.state.programs}
                        renderItem = {
                            ({item}) => 
                            <TouchableOpacity style={styles.programBtn} activeOpacity={0.5} onPress={() => this._handlePress(item.url)}>
                                <View style={styles.programBox}>
                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cloud-download' : 'md-cloud-download'} size={50} color="#FFFFFF" />
                                    <View style={styles.textBox}>
                                        <Text style={styles.subjectText}>{item.subject}</Text>
                                        <Text style={styles.cathedraText}>Cátedra {item.cathedra}</Text>
                                        {/* Para aquellos programas de materias que no tienen departamento (opcionales) no muestro todos estos datos */}
                                        {
                                            item.department === "-" 
                                            ? null
                                            : <View>
                                                <Text style={styles.additionalText}>Departamento: {item.department}</Text>
                                                <Text style={styles.additionalText}>Año: {item.year} | Semestre: {item.semester}</Text>
                                            </View>
                                        } 
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
    // Contenedor de carga
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
    // Contenedor del texto
    textBox: {
        marginHorizontal: 20,
    },
    // Título del programa
    programsTitle: {
        marginTop: 60,
        marginBottom: 20,
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    // Lista del programa
    programsList: {
        marginBottom: Platform.OS === 'ios' ? 104 : 120,
    },
    // Contenedor de relleno
    filler: {
        width: Layout.window.width,
        height: 40,
    },
    // Botón de programa
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
    // Contenedor de programa
    programBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Texto de materia
    subjectText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Texto de cátedra
    cathedraText: {
        fontSize: 14,
        color: '#DDDDDD',
    },
    // Texto adicional
    additionalText: {
        fontSize: 10,
        color: '#BBBBBB',
    },
});
