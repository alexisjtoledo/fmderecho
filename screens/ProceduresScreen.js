// Componentes
import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    FlatList,
    Linking,
    Alert
} from 'react-native'
import GlobalStyles from '../constants/GlobalStyles'
import Colors from '../constants/Colors'
import Header from '../components/Header'
import Procedure from '../components/Procedure'
import SearchInput from '../components/SearchInput'

export default class ProceduresScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'http://fmderecho.com/mobile/api/data.json', // URL de la API
            loading: false, // Estado de descarga
            elements: [], // Datos que vengan de la API
            inMemoryElements: [], // Datos que vengan de la API (persistentes)
        };
    }

    componentDidMount() {
        this.getData();
    }

    /**
     * Función para solicitar los datos de la API y
     * manejar el estado de carga de la pantalla
     * @memberof ProceduresScreen
     */
    getData = () => {
        this.setState({ loading: true }); // Aviso que voy a realizar la descarga
        fetch(this.state.url) // Solicito los datos a la API
            .then((res) => res.json()) // Los convierto en JSON
            .then((res) => {
                // y con el JSON guardo los datos en los arrays que creé en el estado
                this.setState({
                    elements: res.Procedures,
                    inMemoryElements: res.Procedures,
                    loading: false, // Y finalmente aviso que la descarga ya terminó
                });
            });
    }

    /**
     * Función para manipular los enlaces
     * @param { String } url Recibo como parámetro una dirección URL
     * @memberof ProceduresScreen
     */
    actionPressed = (url) => {
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
     * @memberof ProceduresScreen
     */
    getDataFromChild = data => {
        this.setState({
            elements: data
        })
    }

    render() {
        if (this.state.loading) {
            return (
                // Pantalla de carga
                <View style={GlobalStyles.containerLoading}>
                    <ActivityIndicator size='large' color={Colors.secondary} />
                </View>
            );
        }
        return (
            <View style={GlobalStyles.container}>

                {/* CABECERA */}
                <Header 
                    screenName='Trámites Administrativos'
                />

                {/* CUADRO DE BÚSQUEDA */}
                <SearchInput
                    data={this.state.inMemoryElements}
                    getData={this.getDataFromChild}
                    label='Bucar por trámite'
                />

                {/* Contenido */}
                <View>

                    {/* Inicio del listado */}
                    <FlatList
                        data={this.state.elements}
                        contentContainerStyle={{
                            paddingBottom: 150,
                        }}
                        renderItem={({ item }) => ( <Procedure data={item} actionPressed={this.actionPressed} /> )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </View>
                {/* Fin del listado */}


            </View> // Fin de la pantalla
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente