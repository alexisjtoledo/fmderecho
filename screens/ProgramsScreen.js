import React, { Component } from 'react'
import { 
    View, 
    ActivityIndicator, 
    FlatList, 
    Linking,
    Alert
} from 'react-native'
import GlobalStyles from '../constants/GlobalStyles'
import Header from '../components/Header'
import Program from '../components/Program'
import SearchInput from '../components/SearchInput'
import { apiUrl } from '../constants/ApiKeys'

export default class ProgramsScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            url: apiUrl, // URL de la API
            loading: false, // Estado de descarga
            elements: [], // Datos que vengan de la API
            inMemoryElements: [], // Datos que vengan de la API (persistentes)
        }
    }

    componentDidMount(){
        this.getData();
    }

    /**
     * Función para solicitar los datos de la API y
     * manejar el estado de carga de la pantalla
     * @memberof ProgramsScreen
     */
    getData = () => {
        this.setState({ loading: true }); // Aviso que voy a realizar la descarga
        fetch(this.state.url) // Solicito los datos a la API
            .then((res) => res.json()) // Los convierto en JSON
            .then((res) => {
                // y con el JSON guardo los datos en los arrays que creé en el estado
                this.setState({
                    elements: res.Programs,
                    inMemoryElements: res.Programs,
                    loading: false, // Y finalmente aviso que la descarga ya terminó
                });
            });
    }

    /**
     * Función para manipular los enlaces
     * @param { String } url Recibo como parámetro una dirección URL
     * @memberof ProgramsScreen
     */
    handlePress = (url) => {
        // Primero consulto si el dispositivo puede abrirlo
        Linking.canOpenURL(url)
            .then((canOpen) => {
                if (canOpen) {
                    // Si puede, lo hago
                    Linking.openURL(url);
                } else {
                    // Si no, envío una alerta.
                    Alert.alert(
                        'Oops!, Parece que tu teléfono no soporta esta función :('
                    );
                }
            });
    }

    /**
     *  Función para filtrar elementos
     * @param { Object } data Recibe los elementos filtrados
     * @memberof ProgramsScreen
     */
    getDataFromChild = data => {
        this.setState({
            elements: data
        })
    }

    render() {

        // Pantalla de carga condicional
        if(this.state.loading){
            return(
                <View style={GlobalStyles.containerLoading}>
                    <ActivityIndicator size='large' color='#C3FFFB' />
                </View>
            )
        }

        return (
            <View style={GlobalStyles.container}>

                {/* CABECERA */}
                <Header 
                    screenName='Programas'
                />

                {/* CUADRO DE BÚSQUEDA */}
                <SearchInput
                    data={this.state.inMemoryElements}
                    getData={this.getDataFromChild}
                    label='Bucar por materia'
                />

                {/* LISTADO DE PROGRAMAS */}
                <FlatList
                    data = {this.state.elements}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    renderItem = {
                        ({item}) => <Program data={item} handlePress={this.handlePress} />
                    }
                    keyExtractor = {(item, index) => index.toString()}
                />

            </View> // Fin de la pantalla
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente