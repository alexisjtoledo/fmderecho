import React, { Component } from 'react'
import {
    TextInput
} from 'react-native'
import GlobalStyles from '../constants/GlobalStyles'

export default class SearchInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            inMemoryElements: this.props.data // Datos recibidos
        }
    }

    /**
     * Función encargada de normalizar los strings, quitarle tildes
     * y pasar todo a minúsculas para facilitar el filtrado durante
     * la búsqueda de algún elemento
     * @param { String } string Voy a recibir una cadena de texto
     * @memberof SearchInput
     */
    normalize = (string) => {
        // Primero establezco por qué letra voy a reemplazar a cada caracter
        var chars = {
            á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
            à: 'a', è: 'e', ì: 'i', ò: 'o', ù: 'u', ñ: 'n',
            Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U',
            À: 'A', È: 'E', Ì: 'I', Ò: 'O', Ù: 'U', Ñ: 'N',
        };
        // Luego creo una Expresión Regular que me permita detectarlas
        var expr = /[áàéèíìóòúùñ]/gi;
        // Realizo el reemplazo en cada aparición
        var res = string.replace(expr, function (e) {
            return chars[e];
        });
        // Y devulevo el string limpio
        return res;
    }

    /**
     * Función para filtrar elementos y realizar una búsqueda
     * @param { String } value Recibo un string que será la palabra que voy a buscar
     * @memberof SearchInput
     */
    searchElement = (value) => {
        const filteredElements = this.state.inMemoryElements.filter(
            (element) => {
                // Primero convierto los nombres y lo que esté en el input en minúsculas
                let elementLowercase = element.name.toLowerCase();
                let searchTermLowercase = value.toLowerCase();
                // Luego limpio ambos strings de acentos
                elementLowercase = this.normalize(elementLowercase);
                searchTermLowercase = this.normalize(searchTermLowercase);
                // Y finalmente los filtro
                return elementLowercase.indexOf(searchTermLowercase) > -1;
            }
        );
        this.props.getData(filteredElements);
    }

    render() {
        return (
            <TextInput 
                placeholder = {this.props.label}
                placeholderTextColor = '#555555'
                style = {GlobalStyles.searchInput}
                onChangeText = {(value) => this.searchElement(value)}
                clearTextOnFocus = {true}
                autoCapitalize = 'none'
            />
        )
    }
}