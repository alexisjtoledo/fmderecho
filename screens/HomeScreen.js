import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import HomeScreenHeader from '../components/HomeScreenHeader'
import WelcomeImage from '../components/WelcomeImage'
import ImportantInformationStack from '../components/ImportantInformationStack'
import CardStack from '../components/CardStack'
import GlobalStyles from '../constants/GlobalStyles'

export default function HomeScreen({ navigation }) {

    // Constantes para suplir el State en funciones (Hooks)
    const [globalData, setGlobalData] = useState([]);

    // Imágenes de los elementos del menú 'Información Importante'
    const mainMenu = {
        'imgElement1':'https://fmderecho.com/mobile/img/home/plan.jpg',
        'imgElement2':'https://fmderecho.com/mobile/img/home/calendario.jpg',
        'imgElement3':'https://fmderecho.com/mobile/img/home/plano.jpg',
        'imgElement4':'https://fmderecho.com/mobile/img/home/dependencias.jpg',
        'imgElement5':'https://fmderecho.com/mobile/img/home/enlaces.jpg',
        'imgElement6':'https://fmderecho.com/mobile/img/home/compromiso.jpg',
    }

    // Hook que reemlaza el ComponentDidMount
    useEffect(
        () => {
            fetch('https://fmderecho.com/mobile/api/data.json') // Solicito los datos a la API
                .then((res) => res.json()) // Parseo de la respuesta en un JSON
                .then((res) => { setGlobalData(res) }); // Con el JSON actualizo el estado GlobalData
        }
    );

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
            <View style={GlobalStyles.mainScreenContainer}>

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

            </View>
        </ScrollView>
    ) // Fin del Render
} // Fin del Componente