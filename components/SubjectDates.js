import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default class SubjectDates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
        };
    }

    /**
     * Función encargada de manejar la navegación entre pantallas
     * @param { String } screenName Voy a recibir el nombre de la pantalla
     * @param { String } degreeName El nombre de la carrera
     * @param { String } selected Y el nombre de la materia que quiero ver
     * @memberof SubjectDates
     */
    handlePress = (screenName, degreeName, selected) => {
        this.props.nav.navigate(screenName, {
            degreeName: degreeName,
            selected: selected,
        });
    };

    /**
     * Función encargada de formatear la fecha para comparar
     * @param { String } givenDate Voy a recibir la fecha que quiero formatear
     * @param { Boolean } marzo Si se trata de las fechas de marzo, agrego un año
     * @memberof SubjectDates
     */
    formatDate = (givenDate, marzo = false) => {
        let today = new Date();
        let year = today.getFullYear();
        marzo ? (year = year + 1) : year; // Si son las mesas de marzo agrego un año
        let date = givenDate.split('/'); // Divido la fecha que recibo en un array de dos substrings
        let month = date[1]; // el segundo substring va a ser el mes
        let day = date[0]; // el primero el año
        let result = Date.parse(`${year}-${month}-${day}T00:00:00.000Z`); // Formateo la fecha
        return result;
    };

    render() {
        return (
            <View style={styles.subjectBox}>
                <View style={styles.textBox}>

                    {/* TÍTULO DE LA MATERIA */}
                    <Text style={styles.subjectText}>
                        {this.props.data.name}
                    </Text>

                    {/* FECHAS DE PARCIALES */}
                    <Text style={styles.subtitleText}>
                        PARCIALES
                    </Text>
                    <View style={styles.exams}>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.parc1) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                1º: {this.props.data.parc1}
                            </Text>
                        </View>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.parc2) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                2º: {this.props.data.parc2}
                            </Text>
                        </View>
                        <View style={styles.exam}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.recu) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                R/P: {this.props.data.recu}
                            </Text>
                        </View>
                    </View>

                    {/* FINAL IECA */}
                    {this.props.data.final ? (
                        <View>
                            <Text style={styles.subtitleText}>
                                FINAL IECA
                            </Text>
                            <View style={styles.exams}>
                                <View style={styles.exam}>
                                    <Text
                                        style={
                                            this.formatDate(this.props.data.final) < this.state.today
                                                ? styles.passedExamText
                                                : styles.examText
                                        }
                                    >
                                        {this.props.data.final}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ) : null}

                    {/* MESAS JULIO/AGOSTO */}
                    <Text style={styles.subtitleText}>
                        MESAS JULIO/AGOSTO
                    </Text>
                    <View style={styles.exams}>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.jul1) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.jul1}
                            </Text>
                        </View>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.jul2) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.jul2}
                            </Text>
                        </View>
                        <View style={styles.exam}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.jul3) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.jul3}
                            </Text>
                        </View>
                    </View>

                    {/* MESAS NOVIEMBRE/DICIEMBRE */}
                    <Text style={styles.subtitleText}>
                        MESAS NOVIEMBRE/DICIEMBRE
                    </Text>
                    <View style={styles.exams}>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.dic1) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.dic1}
                            </Text>
                        </View>
                        <View style={styles.exam}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.dic2) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.dic2}
                            </Text>
                        </View>
                    </View>

                    {/* MESAS FEBRERO/MARZO */}
                    <Text style={styles.subtitleText}>
                        MESAS FEBRERO/MARZO
                    </Text>
                    <View style={styles.exams}>
                        <View style={[styles.exam, {borderRightWidth: 0}]}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.mar1, true) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.mar1}
                            </Text>
                        </View>
                        <View style={styles.exam}>
                            <Text
                                style={
                                    this.formatDate(this.props.data.mar2, true) < this.state.today
                                        ? styles.passedExamText
                                        : styles.examText
                                }
                            >
                                {this.props.data.mar2}
                            </Text>
                        </View>
                    </View>

                    {/* BOTÓN DE CORRELATIVIDADES */}
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => this.handlePress('CorrelativitiesScreen', 'Abogacia', this.props.data.id)}
                    >
                        <Text style={styles.btnText}>
                            VER CORRELATIVAS
                        </Text>
                        <View style={styles.iconBoxBtn}>
                            <Ionicons
                                name='git-network'
                                size={16}
                                color={Colors.lighterPrimary}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View> // Fin de la Materia
        ) // Fin del Return
    } // Fin del Render
} // Fin del Componente

// Estilos del componente
const styles = StyleSheet.create({

    // Contenedor de materia
    subjectBox: {
        backgroundColor: 'rgba(253,246,249,0.85)',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    // Contenedor del texto
    textBox: {
        marginHorizontal: 0,
        width: '100%',
    },

    // Texto de materia
    subjectText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    // Subtitulos
    subtitleText: {
        color: Colors.lighterPrimary,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        paddingVertical: 5,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 1,
    },

    // Sección exámenes
    exams: {
        flex: 1,
        flexDirection: 'row',
    },

    // Examen
    exam: {
        flexGrow: 1,
        borderTopWidth: 0,
        marginBottom: 5,
        borderColor: Colors.primary,
        borderWidth: 1,
    },

    // Texto de mesa vencida
    passedExamText: {
        color: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        paddingVertical: 5,
    },

    // Texto de mesa vigente
    examText: {
        color: Colors.primary,
        textAlign: 'center',
        paddingVertical: 5,
    },

    // Botón
    actionBtn: {
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        marginLeft: 5,
        borderColor: 'rgba(91,31,83,1)',
        backgroundColor: 'rgba(91,31,83,0.1)',
        borderWidth: 1.5,
        width: 155,
        height: 30,
        marginTop: 15,
    },

    // Texto del botón
    btnText: {
        color: Colors.primary,
        fontSize: 10,
        fontWeight: 'bold',
        paddingTop: -1,
        paddingHorizontal: 10,
    },

    // Ícono del botón
    iconBoxBtn: {
        borderRadius: 8,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(91,31,83,1)',
        backgroundColor: 'rgba(91,31,83,0.3)',
        borderWidth: 1,
    },
})
