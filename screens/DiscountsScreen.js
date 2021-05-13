import React, { Component } from 'react'
import { 
    View, 
    ActivityIndicator, 
    FlatList, 
    StyleSheet,
} from 'react-native'
import GlobalStyles from '../constants/GlobalStyles'
import Header from '../components/Header'
import StudyMaterial from '../components/StudyMaterial'
import SearchInput from '../components/SearchInput'
import Discount from '../components/Discount'
import TagFilter from '../components/TagFilter'
import { apiUrl } from '../constants/ApiKeys'

export default class DiscountsScreen extends Component {

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
     * @memberof DiscountsScreen
     */
    getData = () => {
        this.setState({ loading: true }); // Aviso que voy a realizar la descarga
        fetch(this.state.url) // Solicito los datos a la API
            .then((res) => res.json()) // Los convierto en JSON
            .then((res) => {
                // y con el JSON guardo los datos en los arrays que creé en el estado
                this.setState({
                    elements: res.Discounts,
                    inMemoryElements: res.Discounts,
                    loading: false, // Y finalmente aviso que la descarga ya terminó
                });
            });
    }

    /**
     * Función para manipular la navegación
     * @param { String } screen Recibo el nombre de la pantalla que voy a abrir
     * @param { Object } data Recibo los datos que voy a transmitir
     * @memberof DiscountsScreen
     */
    handlePress = (screen, data) => {
        this.props.navigation.navigate(screen, {data: data})
    }

    /**
     *  Función para filtrar elementos
     * @param { Object } data Recibe los elementos filtrados
     * @memberof DiscountsScreen
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
                    screenName='Descuentos'
                />

                {/* CUADRO DE BÚSQUEDA */}
                <SearchInput
                    data={this.state.inMemoryElements}
                    getData={this.getDataFromChild}
                    label='Buscá tu descuento'
                />

                {/* FILTRO POR TAG */}
                <TagFilter 
                    data={this.state.inMemoryElements}
                    getData={this.getDataFromChild}     
                />

                {/* LISTADO DE DESCUENTOS */}
                <FlatList
                    data = {this.state.elements}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    renderItem = {
                        ({item}) => <Discount data={item} handlePress={this.handlePress} />
                    }
                    keyExtractor = {(item, index) => index.toString()}
                />
            </View> // Fin de la pantalla
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente