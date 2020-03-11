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
    Image, 
    Modal, 
    ScrollView, 
    SafeAreaView
} from 'react-native'

// Estilos
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import { Ionicons } from '@expo/vector-icons'
import GlobalStyles from '../constants/GlobalStyles'

export default class ProceduresScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false, // Seteo el estado de descarga
            procedures: [], // Creo un array para guardar toda la info que venga del API
            url: 'http://m.fmderecho.com/api/Procedures.json', // Establezco la dirección de la API
            modalVisible: false, // Seteo el modal como invisible
            modalTitle: "", // Creo un string en el estado para enviar el título del modal
            modalText: "", // Creo otro string en el estado para enviar el texto del modal
        }
    }

    // Función para abrir el modal y pasar la información
    openModal(item) {
        this.setState({
            modalVisible:true, 
            modalTitle:item.name, 
            modalText:item.description,
        });
    }
    
    // Función para cerrar el modal
    closeModal() {
        this.setState({modalVisible:false});
    }

    // Cuando el componente se monte, ejecuto mi solicitud a la API
    componentDidMount(){
        this.getData();
    }

    // Función para recibir los datos de la API
    getData = () => {
        this.setState({ loading:true }); // Primero seteo el estado como "descargando"
        fetch(this.state.url) // Busco los datos
            .then(res => res.json()) // Los convierto en JSON
            .then(res => { // y con el JSON guardo los datos en el array que creé en el estado
                this.setState({ 
                    procedures: res.Procedures,
                    inMemoryProcedures: res.Procedures,
                    loading: false // Y finalmente cancelo el estado "descargando"
                })
            });
    }
    
    // Función para limpiar de acentos los strings
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

    // Función para buscar 
    searchProcedure = (value) => {
        const filteredProcedures = this.state.inMemoryProcedures.filter(
            procedure => {
                // Primero convierto los nombres y lo que esté en el input en minúsculas
                let procedureLowercase = (procedure.name).toLowerCase();
                let searchTermLowercase = value.toLowerCase();
                // Luego limpio ambos strings de acentos
                procedureLowercase = this.normalize(procedureLowercase);
                searchTermLowercase = this.normalize(searchTermLowercase);
                // Y finalmente los filtro
                return procedureLowercase.indexOf(searchTermLowercase)> -1;
            }
        )
        this.setState({
            procedures: filteredProcedures, // Al terminar, cargo el estado con el resultado de la búsqueda.
        })
    }

    render() {
        if(this.state.loading){
            return(
                // Pantalla de carga condicional durante el fetch
                <View style={styles.containerLoading}>
                    <ActivityIndicator size="large" color="#C3FFFB" />
                </View>
            )
        }
        return (
            // Si ya tengo los datos renderizo lo siguiente:
            <View style={GlobalStyles.container}>
                {/* Título de la pantalla */}
                <Text style={GlobalStyles.sectionTitle}>Trámites Administrativos</Text>
                {/* Cuadro de búsqueda */}
                <TextInput 
                    placeholder = 'Buscar trámite'
                    placeholderTextColor = "#555555"
                    style = {GlobalStyles.searchInput}
                    onChangeText = {(value) => this.searchProcedure(value)}
                    clearTextOnFocus = {true} 
                    autoCapitalize = 'none'
                    
                />
                <View style={styles.container} >
                    {/* Listado con los resultados de la búsqueda/todos los trámites */}
                    <FlatList
                        data = {this.state.procedures}
                        renderItem = {
                            ({item}) => 
                            <TouchableOpacity 
                                style={styles.procedureBox} 
                                activeOpacity={0.5} 
                                onPress={() => this.openModal(item)}
                            >
                                <Image 
                                    source={{uri: item.picture}} 
                                    style={styles.procedureImage}
                                    defaultSource={require('../assets/images/tramite_placeholder.jpg')}
                                    progressiveRenderingEnabled={true}
                                />
                                <Text style={styles.procedureText}>{item.name}</Text>
                                <Ionicons name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                        }
                        keyExtractor = {(item, index) => index.toString()}
                    />
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                    transparent={false}
                    style={styles.modal}
                >
                {/* Al abrir un elemento lo muestro en forma de modal que recibe la información que previamente almacené en el estado. */}
                <SafeAreaView style={styles.modalBackGround}>
                    <ScrollView stickyHeaderIndices={[0]} style={styles.scrollable}>

                    <View style={styles.modalHeader}>
                        <TouchableOpacity
                            onPress={() => {this.closeModal()}}
                            style={styles.headerBack}
                        >
                            <Ionicons name={'ios-arrow-back'} size={30} color="#FFFFFF" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{this.state.modalTitle}</Text>
                    </View>

                        <Text style={styles.modalText}>{this.state.modalText}</Text>
                    </ScrollView>
                </SafeAreaView>


                </Modal>
            </View>
        );
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
    // Contenedor de cada trámite
    procedureBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 16,
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
    },
    // Imagen de cada trámite
    procedureImage: {
        width: 120,
        height: 80,
    },
    // Título de cada trámite
    procedureText: {
        color: '#FFFFFF',
        fontSize: 16,
        width: 200,
    },
    // Fondo del modal
    modalBackGround: {
        backgroundColor: '#21201E',
        minHeight: '100%',
    },
    // Header del modal
    modalHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    // Fondo del header del modal
    headerBack: {
        flex: 1,
        backgroundColor: 'rgba(33,32,30,0.95)',
        paddingTop: 10,
        paddingBottom: 10,
    },
    // Título del modal
    modalTitle: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowOffset: { 
            width: 1.5, 
            height: 1.5
        },
        textShadowRadius: 5,
        marginLeft: 30,
        marginTop: -42,
    },
    // Texto del modal
    modalText: {
        fontSize: 14,
        color: '#FFFFFF',
        paddingBottom: 20,
        marginTop: 20,
    },
    
    scrollable: {
        paddingHorizontal: 16,
    },
});
