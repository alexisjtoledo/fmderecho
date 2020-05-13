import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Header from '../components/Header'
import SubjectDates from '../components/SubjectDates'
import GlobalStyles from '../constants/GlobalStyles'
import Constants from 'expo-constants'
import SearchInput from '../components/SearchInput'

export default function AcademicCalendarScreen({ navigation }) {

    const globalData = navigation.getParam('data');
    const [elements, setElements] = useState( globalData.Calendar );
    const [inMemoryElements, setInMemoryElements] = useState( globalData.Calendar );

    /**
     *  Función para filtrar elementos
     * @param { Object } data Recibe los elementos filtrados
     * @memberof AcademicCalendarScreen
     */
    var getDataFromChild = data => {
        setElements(data);
    }

    return (
        <View style={GlobalStyles.container}>

            {/* CABECERA */}
            <Header 
                screenName='Calendario Académico' 
                navigation={navigation} 
                backButton={true} 
            />

            {/* CONTENIDO */}
            <View style={GlobalStyles.container}>

                {/* CUADRO DE BÚSQUEDA */}
                <SearchInput
                    data={inMemoryElements}
                    getData={getDataFromChild}
                    label='Bucar por materia'
                />

                {/* Listado */}
                <FlatList
                    data={ elements }
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    renderItem={({ item }) => (  <SubjectDates nav={navigation} data={item} /> )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View> // Fin de la pantalla
    ) // Fin del Return
} // Fin del Componente

// Estilos del Componente
const styles = StyleSheet.create({

    // Corrección de la posición de la barra de búsqueda
    localInput: {
        marginTop: -Constants.statusBarHeight,
    },
})
