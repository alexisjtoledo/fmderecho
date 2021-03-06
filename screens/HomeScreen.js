import React, { useState, useEffect } from 'react'
import { ScrollView, View, Alert } from 'react-native'
import HomeScreenHeader from '../components/HomeScreenHeader'
import WelcomeImage from '../components/WelcomeImage'
import ImportantInformationStack from '../components/ImportantInformationStack'
import CardStack from '../components/CardStack'
import GlobalStyles from '../constants/GlobalStyles'
import { apiUrl, mainMenu } from '../constants/ApiKeys'

export default function HomeScreen({ navigation }) {

    // Constantes para suplir el State en funciones (Hooks)
    const [globalData, setGlobalData] = useState([]);


    useEffect(() => {
        fetch(apiUrl) // Solicito los datos a la API
            .then((res) => res.json()) // Parseo de la respuesta en un JSON
            .then((res) => { setGlobalData(res) }); // Con el JSON actualizo el estado GlobalData
    });

    return (

        /* CONTENEDOR PRINCIPAL */
        // Para dejarlo fijo agregar 'stickyHeaderIndices={[0]}' y encerrarlo todo en un View con zIndex */
        <ScrollView style={GlobalStyles.container}>

            {/* CABECERA */}
            <HomeScreenHeader 
                navigation={navigation} 
            />

            {/* IMAGEN PRINCIPAL DE BIENVENIDA */}
            <WelcomeImage />

            {/* CONTENIDO */}
            <View>

                {/* STACK DE INFORMACIÓN IMPORTANTE */}
                <ImportantInformationStack 
                    navigation={navigation} 
                    data={globalData} 
                    pictures={mainMenu}
                />

                {/* STACK DE TRÁMITES */}
                <CardStack
                    navigation={navigation} 
                    name='Trámites Administrativos' 
                    data={globalData.MainProcedures} 
                />

                {/* STACK DE DERECHOS */}
                <CardStack 
                    navigation={navigation} 
                    name='Derechos Estudiantiles' 
                    data={globalData.StudentRights}
                />

                {/* STACK DE BECAS */}
                <CardStack
                    navigation={navigation}
                    name='Becas'
                    data={globalData.Scholarships}
                />

                <View style={GlobalStyles.filler}>
                </View>

            </View>
        </ScrollView>
    ) // Fin del Render
} // Fin del Componente