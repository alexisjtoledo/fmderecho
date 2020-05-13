import React, { useState } from 'react'
import { 
    View, 
    FlatList, 
    Linking,
    Alert
} from 'react-native'
import Header from '../components/Header'
import Dependency from '../components/Dependency'
import SearchInput from '../components/SearchInput'
import GlobalStyles from '../constants/GlobalStyles'
import Constants from 'expo-constants'

export default function DependenciesScreen({ navigation }) {

    const globalData = navigation.getParam('data');
    const [elements, setElements] = useState( globalData.Dependencies );
    const [inMemoryElements, setInMemoryElements] = useState( globalData.Dependencies );

    /**
     *  Función para filtrar elementos
     * @param { Object } data Recibe los elementos filtrados
     * @memberof DependenciesScreen
     */
    var getDataFromChild = data => {
        setElements(data);
    }

    /**
     * Función encargada de manejar la navegación entre pantallas
     * @param { String } screenName Voy a recibir el nombre de la pantalla
     * @param { String } pickerValue Y también el nombre de la dependencia donde quiero arrancar
     * @memberof DependenciesScreen
     */
    var handlePress = (screenName, pickerValue) => navigation.navigate(screenName, {itemValue: pickerValue})

    /**
     * Función para manipular las llamadas
     * @param { String } number Recibo como parámetro un número de teléfono
     * @memberof DependenciesScreen
     */
    var dialNumber = number => {
        // Primero armo la URL del teléfono
        let url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${number}`;
        // Luego pregunto si puedo abrir la app teléfono
        Linking.canOpenURL(url).then((canOpen) => {
            if (canOpen) {
                // Si puede, lo hago
                Linking.openURL(url);
            } else {
                // Si no, envío una alerta
                Alert.alert(
                    'Oops!, Parece que tu teléfono no soporta esta función :('
                );
            }
        });
    }

    /**
     * Función para manipular los enlaces
     * @param { String } address Recibo como parámetro una dirección de correo
     * @memberof DependenciesScreen
     */
    var sendMail = address => {
        // Primero armo la URL del correo
        let url = `mailto:${address}`;
        // Luego pregunto si puedo abrir la app mail
        Linking.canOpenURL(url).then((canOpen) => {
            if (canOpen) {
                // Si puede, lo hago
                Linking.openURL(url);
            } else {
                // Si no, envío una alerta
                Alert.alert(
                    'Oops!, Parece que tu teléfono no soporta esta función :('
                );
            }
        });
    }

    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                screenName='Dependencias' 
                navigation={navigation}
                backButton={true} 
            />

            {/* CUADRO DE BÚSQUEDA */}
            <SearchInput
                data={inMemoryElements}
                getData={getDataFromChild}
                label='Bucar por dependencia'
            />

            {/* LISTADO */}
            <FlatList
                data={ elements }
                contentContainerStyle={{
                    paddingBottom: 50,
                }}
                renderItem={({ item }) => ( 
                    <Dependency 
                        data={item} 
                        handlePress={handlePress} 
                        sendMail={sendMail} 
                        dialNumber={dialNumber}
                    /> 
                )}
                keyExtractor={(item, index) => index.toString()}
            />

        </View> // Fin de la Pantalla
    ) // Fin del Return
} // Fin del Componente