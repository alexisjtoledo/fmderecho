import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import AbogaciaPlan from '../components/AbogaciaPlan'
import NotariadoPlan from '../components/NotariadoPlan'
import ProfesoradoPlan from '../components/ProfesoradoPlan'
import GlobalStyles from '../constants/GlobalStyles';

export default function CorrelativitiesScreen({ navigation }) {

    const degreeName = navigation.getParam('degreeName');
    const selected = navigation.getParam('selected');

    return (
        <View style={GlobalStyles.container}>
            
            {/* CABECERA */}
            <Header 
                screenName={degreeName === 'Abogacia' ? 'Abogacía' : degreeName} 
                navigation={navigation} 
                backButton={true}
            />

            {/* CONTENIDO */}
            <View style={GlobalStyles.contentBox}>
                {
                    degreeName === 'Abogacia' 
                        ? <AbogaciaPlan activated={selected} />
                            : degreeName === 'Profesorado'
                                ? <ProfesoradoPlan />
                                    : <NotariadoPlan />
                }
            </View>
        </View> // Fin de la Pantalla
    ) // Fin del Return
} // Fin del Componente