// Componentes y elementos
import React, { 
    Component 
} from 'react'
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity,
} from 'react-native'

// Estilos
import Layout from '../constants/Layout'
import Color from '../constants/Colors'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default class AbogaciaPlanComponent extends Component {
    
    constructor(props) {
        super(props)
    }

    // Creo en el estado la estructura del plan de estudios en general y de cada materia. Está compuesto por un valor para cada materia correspondiendo: 0 - bloqueada, 1 - debe regularizar, 2 - debe aprobar, 3 - desbloquea, 4 - seleccionada. Voy cambiando los estados según la materia seleccionada. Los semestres pueden estar en false: no necesitan estar aprobados o true: requieren estar aprobados.
    state = {
        ieca: 0,
        intro: 0,
        romano: 0,
        problemas: 0,
        consti: 0,
        priv1: 0,
        penal1: 0,
        priv2: 0,
        tgp: 0,
        penal2: 0,
        priv3: 0,
        publico: 0,
        procpenal: 0,
        taller1: 0,
        priv4: 0,
        admin: 0,
        proccivil: 0,
        priv5: 0,
        procconst: 0,
        procadmin: 0,
        labo: 0,
        taller2: 0,
        priv6: 0,
        politico: 0,
        socio: 0,
        practica1: 0,
        priv7: 0,
        filo: 0,
        economia: 0,
        priv8: 0,
        concursal: 0,
        historia: 0,
        tconflicto: 0,
        opc1: 0,
        dip: 0,
        etica: 0,
        opc2: 0,
        practica2: 0,
        dipri: 0,
        tributario: 0,
        opc3: 0,
        agrario: 0,
        navegacion: 0,
        opc4: 0,
        practica3: 0,
        sem1: false,
        sem2: false,
        sem3: false,
        sem4: false,
        sem5: false,
        sem6: false,
        sem7: false,
        instructions: true,
    }
    //IECA
    aprobarIeca() {
        this.subjectReset();
        this.setState({
            intro: 3,
            romano: 3,
            problemas: 3,
            ieca: 4,
            instructions: false,
        })
    }
    // PRIMER SEMESTRE
    aprobarIntro() {
        this.subjectReset();
        this.setState({
            ieca: 1,
            consti: 3,
            priv1: 3,
            penal1: 3,
            intro: 4,
            instructions: false,
        });
    }
    aprobarRomano() {
        this.subjectReset();
        this.setState({
            ieca: 1,
            historia: 3,
            romano: 4,
            instructions: false,
        });
    }
    aprobarProblemas() {
        this.subjectReset();
        this.setState({
            ieca: 1,
            tgp: 3,
            filo: 3,
            problemas: 4,
            instructions: false,
        });
    }
    // SEGUNDO SEMESTRE
    aprobarConsti() {
        this.subjectReset();
        this.setState({
            intro: 1,
            ieca: 2,
            tgp: 3,
            publico: 3,
            labo:3,
            consti: 4,
            instructions: false,
        });
    }
    aprobarPriv1() {
        this.subjectReset();
        this.setState({
            intro: 1,
            ieca: 2,
            priv2: 3,
            taller1: 3,
            admin: 3,
            proccivil: 3,
            priv1: 4,
            instructions: false,
        });
    }
    aprobarPenal1() {
        this.subjectReset();
        this.setState({
            intro: 1,
            ieca: 2,
            penal2: 3,
            taller1: 3,
            penal1: 4,
            instructions: false,
        });
    }
    // TERCER SEMESTRE
    aprobarPriv2() {
        this.subjectReset();
        this.setState({
            priv1: 1,
            ieca: 2,
            intro: 2,
            priv3: 3,
            proccivil: 3,
            priv2: 4,
            instructions: false,
        });
    }
    aprobarTgp() {
        this.subjectReset();
        this.setState({
            consti: 1,
            problemas: 1,
            ieca: 2,
            intro: 2,
            procpenal: 3,
            proccivil: 3,
            procadmin: 3,
            procconst: 3,
            tgp: 4,
            instructions: false,
        });
    }
    aprobarPenal2() {
        this.subjectReset();
        this.setState({
            penal1: 1,
            ieca: 2,
            intro: 2,
            procpenal: 3,
            penal2: 4,
            instructions: false,
        });
    }
    // CUARTO SEMESTRE
    aprobarPublico() {
        this.subjectReset();
        this.setState({
            consti: 1,
            intro: 2,
            ieca: 2,
            admin: 3,
            procconst: 3,
            publico: 4,
            instructions: false,
        });
    }
    aprobarPriv3() {
        this.subjectReset();
        this.setState({
            priv2: 1,
            priv1: 2,
            intro: 2,
            ieca: 2,
            priv4: 3,
            labo: 3,
            priv3: 4,
            instructions: false,
        });
    }
    aprobarProcpenal() {
        this.subjectReset();
        this.setState({
            tgp: 1,
            penal2: 1,
            problemas: 2,
            priv1: 2,
            intro: 2,
            ieca: 2,
            penal1: 2,
            tconflicto: 3,
            procpenal: 4,
            instructions: false,
        });
    }
    aprobarTaller1() {
        this.subjectReset();
        this.setState({
            penal1: 1,
            priv1: 1,
            intro: 2,
            ieca: 2,
            taller2: 3,
            taller1: 4,
            instructions: false,
        });
    }
    // QUINTO SEMESTRE
    aprobarAdmin() {
        this.subjectReset();
        this.setState({
            publico: 1,
            priv1: 1,
            consti: 2,
            intro: 2,
            ieca: 2,
            procadmin: 3,
            politico: 3,
            agrario: 3,
            admin: 4,
            instructions: false,
        });
    }
    aprobarPriv4() {
        this.subjectReset();
        this.setState({
            priv3: 1,
            priv2: 2,
            priv1: 2,
            intro: 2,
            ieca: 2,
            priv5: 3,
            priv4: 4,
            instructions: false,
        });
    }
    aprobarProccivil() {
        this.subjectReset();
        this.setState({
            priv2: 1,
            tgp: 1,
            priv1: 2,
            problemas: 2,
            consti: 2,
            intro: 2,
            ieca: 2,
            tconflicto: 3,
            proccivil: 4,
            instructions: false,
        });
    }
    // SEXTO SEMESTRE
    aprobarProcconst() {
        this.subjectReset();
        this.setState({
            sem1: true,
            tgp: 1,
            publico: 1,
            consti: 2,
            procconst: 4,
            instructions: false,
        });
    }
    aprobarPriv5() {
        this.subjectReset();
        this.setState({
            sem1: true,
            priv4: 1,
            priv3: 2,
            priv2: 2,
            priv1: 2,
            priv6: 3,
            agrario: 3,
            priv5: 4,
            instructions: false,
        });
    }
    aprobarProcadmin() {
        this.subjectReset();
        this.setState({
            sem1: true,
            admin: 1,
            tgp: 1,
            consti: 2,
            priv1: 2,
            publico: 2,
            tributario: 3,
            procadmin: 4,
            instructions: false,
        });
    }
    aprobarLabo() {
        this.subjectReset();
        this.setState({
            sem1: true,
            priv3: 1,
            consti: 1,
            priv2: 2,
            priv1: 2,
            labo: 4,
            instructions: false,
        });
    }
    aprobarTaller2() {
        this.subjectReset();
        this.setState({
            sem1: true,
            taller1: 1,
            priv1: 2,
            penal1: 2,
            taller2: 4,
            instructions: false,
        });
    }
    // SEPTIMO SEMESTRE
    aprobarPolitico() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            admin: 1,
            publico: 2,
            dip: 3,
            politico: 4,
            instructions: false,
        });
    }
    aprobarPriv6() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            priv5: 1,
            priv4: 2,
            priv3: 2,
            priv2: 2,
            priv7: 3,
            priv8: 3,
            priv6: 4,
            instructions: false,
        });
    }
    aprobarSocio() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            tconflicto: 3,
            socio: 4,
            instructions: false,
        });
    }
    aprobarPractica1() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            practica2: 3,
            practica1: 4,
            instructions: false,
        });
    }
    // OCTAVO SEMESTRE
    aprobarPriv7() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            priv6: 1,
            priv5: 2,
            priv4: 2,
            priv3: 2,
            concursal: 3,
            priv7: 4,
            instructions: false,
        });
    }
    aprobarPriv8() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            priv6: 1,
            priv5: 2,
            priv4: 2,
            priv3: 2,
            concursal: 3,
            priv8: 4,
            instructions: false,
        });
    }
    aprobarFilo() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            problemas: 1,
            tconflicto: 3,
            etica: 3,
            filo: 4,
            instructions: false,
        });
    }
    aprobarEconomia() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            tributario: 3,
            agrario: 3,
            economia: 4,
            instructions: false,
        });
    }
    // NOVENO SEMESTRE
    aprobarConcursal() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            priv7: 1,
            priv8: 1,
            priv6: 2,
            priv5: 2,
            priv4: 2,
            navegacion: 3,
            concursal: 4,
            instructions: false,
        });
    }
    aprobarHistoria() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            romano: 1,
            historia: 4,
            instructions: false,
        });
    }
    aprobarTconflicto() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            procpenal: 1,
            proccivil: 1,
            socio: 1,
            filo: 1,
            tconflicto: 4,
            instructions: false,
        });
    }
    aprobarOpc1() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            opc1: 4,
            instructions: false,
        });
    }
    // DÉCIMO SEMESTRE
    aprobarDip() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            politico: 1,
            dipri: 3,
            dip: 4,
            instructions: false,
        });
    }
    aprobarEtica() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            filo: 1,
            etica: 4,
            instructions: false,
        });
    }
    aprobarPractica2() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            practica1: 1,
            practica3: 3,
            practica2: 4,
            instructions: false,
        });
    }
    aprobarOpc2() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            opc2: 4,
            instructions: false,
        });
    }
    // DECIMOPRIMER SEMESTRE
    aprobarDipri() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            sem6: true,
            dip: 1,
            politico: 2,
            dipri: 4,
            instructions: false,
        });
    }
    aprobarTributario() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            sem6: true,
            procadmin: 1,
            economia: 1,
            tributario: 4,
            instructions: false,
        });
    }
    aprobarOpc3() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            opc3: 4,
            instructions: false,
        });
    }
    // DECIMOSEGUNDO SEMESTRE
    aprobarAgrario() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            sem6: true,
            sem7: true,
            admin: 1,
            priv5: 1,
            economia: 1,
            agrario: 4,
            instructions: false,
        });
    }
    aprobarNavegacion() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            sem6: true,
            sem7: true,
            concursal: 1,
            priv7: 2,
            priv8: 2,
            navegacion: 4,
            instructions: false,
        });
    }
    aprobarPractica3() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            sem5: true,
            sem6: true,
            sem7: true,
            practica2: 1,
            practica3: 4,
            instructions: false,
        });
    }
    aprobarOpc4() {
        this.subjectReset();
        this.setState({
            sem1: true,
            sem2: true,
            sem3: true,
            sem4: true,
            opc4: 4,
            instructions: false,
        });
    }
    // RESET
    subjectReset() {
        this.setState({
            ieca: 0,
            intro: 0,
            romano: 0,
            problemas: 0,
            consti: 0,
            priv1: 0,
            penal1: 0,
            priv2: 0,
            tgp: 0,
            penal2: 0,
            priv3: 0,
            publico: 0,
            procpenal: 0,
            taller1: 0,
            priv4: 0,
            admin: 0,
            proccivil: 0,
            priv5: 0,
            procconst: 0,
            procadmin: 0,
            labo: 0,
            taller2: 0,
            priv6: 0,
            politico: 0,
            socio: 0,
            practica1: 0,
            priv7: 0,
            filo: 0,
            economia: 0,
            priv8: 0,
            concursal: 0,
            historia: 0,
            tconflicto: 0,
            opc1: 0,
            dip: 0,
            etica: 0,
            opc2: 0,
            practica2: 0,
            dipri: 0,
            tributario: 0,
            opc3: 0,
            agrario: 0,
            navegacion: 0,
            opc4: 0,
            practica3: 0,
            sem1: false,
            sem2: false,
            sem3: false,
            sem4: false,
            sem5: false,
            sem6: false,
            sem7: false,
            instructions: true,
        })
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                {/* En primer lugar según si el programa esté recién iniciado o en uso se muestran las instrucciones o las referencias. */}
                {
                    this.state.instructions 
                        ? <View style={styles.referencesWelcome}>
                            <Text style={styles.referencesInstructions}>Para comenzar, presioná sobre alguna materia para activar sus correlatividades!</Text>            
                        </View>
                        : <View style={styles.referencesContainer}>
                            <Text style={styles.yearText}>REFERENCIAS</Text>
                            <View style={styles.referencesGroup}>
                                <View style={styles.referenceRegular}>
                                    <Text style={styles.referenceLabel}>Debe Regularizar</Text>
                                </View>              
                                <View style={styles.referenceApprove}>
                                    <Text style={styles.referenceLabel}>Debe Aprobar</Text>
                                </View>                  
                                <View style={styles.referenceUnlock}>
                                    <Text style={styles.referenceLabel}>Desbloquea</Text>
                                </View>
                                <TouchableOpacity style={styles.referenceReset} onPress={() => this.subjectReset()}>
                                    <Text style={styles.referenceLabel}>
                                        <Ionicons name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'} size={20} color="#FFFFFF" />
                                    </Text>
                                </TouchableOpacity>
                            </View>          
                        </View>
                }
                {/* Luego voy renderizando cada semestre con sus materia que varían de apariencia según el estado y (actualizado según la materia seleccionada) */}
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>PRIMERO</Text>
                </View>
                <View style={ this.state.sem1 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.ieca === 0 ? styles.subjectDefault 
                                : (this.state.ieca === 1 ? styles.subjectRegular
                                    : (this.state.ieca === 2 ? styles.subjectApproved
                                        : (this.state.ieca === 3 ? styles.subjectUnlocked
                                            : (this.state.ieca === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarIeca()}}
                    >
                        <Text style={styles.subjectName}>Introducción a los Estudios de la Carrera de Abogacía</Text>
                    </TouchableOpacity>
                </View>
                <View style={ this.state.sem1 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.intro === 0 ? styles.subjectDefault 
                                : (this.state.intro === 1 ? styles.subjectRegular
                                    : (this.state.intro === 2 ? styles.subjectApproved
                                        : (this.state.intro === 3 ? styles.subjectUnlocked
                                            : (this.state.intro === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarIntro()}}
                    >
                        <Text style={styles.subjectName}>Introducción al Derecho</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.romano === 0 ? styles.subjectDefault 
                                : (this.state.romano === 1 ? styles.subjectRegular
                                    : (this.state.romano === 2 ? styles.subjectApproved
                                        : (this.state.romano === 3 ? styles.subjectUnlocked
                                            : (this.state.romano === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarRomano()}}
                    >
                        <Text style={styles.subjectName}>Derecho Romano</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.problemas === 0 ? styles.subjectDefault 
                                : (this.state.problemas === 1 ? styles.subjectRegular
                                    : (this.state.problemas === 2 ? styles.subjectApproved
                                        : (this.state.problemas === 3 ? styles.subjectUnlocked
                                            : (this.state.problemas === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarProblemas()}}
                    >
                        <Text style={styles.subjectName}>Problemas del conocimiento</Text>
                    </TouchableOpacity>
                </View>
                <View style={ this.state.sem2 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.consti === 0 ? styles.subjectDefault 
                                : (this.state.consti === 1 ? styles.subjectRegular
                                    : (this.state.consti === 2 ? styles.subjectApproved
                                        : (this.state.consti === 3 ? styles.subjectUnlocked
                                            : (this.state.consti === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarConsti()}}
                    >
                        <Text style={styles.subjectName}>Constitucional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv1 === 0 ? styles.subjectDefault 
                                : (this.state.priv1 === 1 ? styles.subjectRegular
                                    : (this.state.priv1 === 2 ? styles.subjectApproved
                                        : (this.state.priv1 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv1 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv1()}}
                    >
                        <Text style={styles.subjectName}>Privado I (General)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.penal1 === 0 ? styles.subjectDefault 
                                : (this.state.penal1 === 1 ? styles.subjectRegular
                                    : (this.state.penal1 === 2 ? styles.subjectApproved
                                        : (this.state.penal1 === 3 ? styles.subjectUnlocked
                                            : (this.state.penal1 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPenal1()}}
                    >
                        <Text style={styles.subjectName}>Penal I</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>SEGUNDO</Text>
                </View>
                <View style={ this.state.sem3 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.tgp === 0 ? styles.subjectDefault 
                                : (this.state.tgp === 1 ? styles.subjectRegular
                                    : (this.state.tgp === 2 ? styles.subjectApproved
                                        : (this.state.tgp === 3 ? styles.subjectUnlocked
                                            : (this.state.tgp === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarTgp()}}
                    >
                        <Text style={styles.subjectName}>Teorías Grales. del Proceso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv2 === 0 ? styles.subjectDefault 
                                : (this.state.priv2 === 1 ? styles.subjectRegular
                                    : (this.state.priv2 === 2 ? styles.subjectApproved
                                        : (this.state.priv2 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv2 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv2()}}
                    >
                        <Text style={styles.subjectName}>Privado II (Obligaciones)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.penal2 === 0 ? styles.subjectDefault 
                                : (this.state.penal2 === 1 ? styles.subjectRegular
                                    : (this.state.penal2 === 2 ? styles.subjectApproved
                                        : (this.state.penal2 === 3 ? styles.subjectUnlocked
                                            : (this.state.penal2 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPenal2()}}
                    >
                        <Text style={styles.subjectName}>Penal II</Text>
                    </TouchableOpacity>
                </View>
                <View style={ this.state.sem4 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.publico === 0 ? styles.subjectDefault 
                                : (this.state.publico === 1 ? styles.subjectRegular
                                    : (this.state.publico === 2 ? styles.subjectApproved
                                        : (this.state.publico === 3 ? styles.subjectUnlocked
                                            : (this.state.publico === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPublico()}}
                    >
                        <Text style={styles.subjectName}>Público Prov. y Munic.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv3 === 0 ? styles.subjectDefault 
                                : (this.state.priv3 === 1 ? styles.subjectRegular
                                    : (this.state.priv3 === 2 ? styles.subjectApproved
                                        : (this.state.priv3 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv3 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv3()}}
                    >
                        <Text style={styles.subjectName}>Privado III (Contratos)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.procpenal === 0 ? styles.subjectDefault 
                                : (this.state.procpenal === 1 ? styles.subjectRegular
                                    : (this.state.procpenal === 2 ? styles.subjectApproved
                                        : (this.state.procpenal === 3 ? styles.subjectUnlocked
                                            : (this.state.procpenal === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarProcpenal()}}
                    >
                        <Text style={styles.subjectName}>Procesal Penal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.taller1 === 0 ? styles.subjectDefault 
                                : (this.state.taller1 === 1 ? styles.subjectRegular
                                    : (this.state.taller1 === 2 ? styles.subjectApproved
                                        : (this.state.taller1 === 3 ? styles.subjectUnlocked
                                            : (this.state.taller1 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarTaller1()}}
                    >
                        <Text style={styles.subjectName}>Taller I</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>TERCERO</Text>
                </View>
                <View style={ this.state.sem5 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.admin === 0 ? styles.subjectDefault 
                                : (this.state.admin === 1 ? styles.subjectRegular
                                    : (this.state.admin === 2 ? styles.subjectApproved
                                        : (this.state.admin === 3 ? styles.subjectUnlocked
                                            : (this.state.admin === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarAdmin()}}
                    >
                        <Text style={styles.subjectName}>Administrativo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv4 === 0 ? styles.subjectDefault 
                                : (this.state.priv4 === 1 ? styles.subjectRegular
                                    : (this.state.priv4 === 2 ? styles.subjectApproved
                                        : (this.state.priv4 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv4 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv4()}}
                    >
                        <Text style={styles.subjectName}>Privado IV (Sociedades)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.proccivil === 0 ? styles.subjectDefault 
                                : (this.state.proccivil === 1 ? styles.subjectRegular
                                    : (this.state.proccivil === 2 ? styles.subjectApproved
                                        : (this.state.proccivil === 3 ? styles.subjectUnlocked
                                            : (this.state.proccivil === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarProccivil()}}
                    >
                        <Text style={styles.subjectName}>Procesal Civil y Comercial</Text>
                    </TouchableOpacity>
                </View>
                <View style={ this.state.sem6 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.procconst === 0 ? styles.subjectDefault 
                                : (this.state.procconst === 1 ? styles.subjectRegular
                                    : (this.state.procconst === 2 ? styles.subjectApproved
                                        : (this.state.procconst === 3 ? styles.subjectUnlocked
                                            : (this.state.procconst === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarProcconst()}}
                    >
                        <Text style={styles.subjectName}>Procesal Constitu- cional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv5 === 0 ? styles.subjectDefault 
                                : (this.state.priv5 === 1 ? styles.subjectRegular
                                    : (this.state.priv5 === 2 ? styles.subjectApproved
                                        : (this.state.priv5 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv5 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv5()}}
                    >
                        <Text style={styles.subjectName}>Privado V (Reales)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.procadmin === 0 ? styles.subjectDefault 
                                : (this.state.procadmin === 1 ? styles.subjectRegular
                                    : (this.state.procadmin === 2 ? styles.subjectApproved
                                        : (this.state.procadmin === 3 ? styles.subjectUnlocked
                                            : (this.state.procadmin === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarProcadmin()}}
                    >
                        <Text style={styles.subjectName}>Procesal Adminis- trativo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.labo === 0 ? styles.subjectDefault 
                                : (this.state.labo === 1 ? styles.subjectRegular
                                    : (this.state.labo === 2 ? styles.subjectApproved
                                        : (this.state.labo === 3 ? styles.subjectUnlocked
                                            : (this.state.labo === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarLabo()}}
                    >
                        <Text style={styles.subjectName}>Laboral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.taller2 === 0 ? styles.subjectDefault 
                                : (this.state.taller2 === 1 ? styles.subjectRegular
                                    : (this.state.taller2 === 2 ? styles.subjectApproved
                                        : (this.state.taller2 === 3 ? styles.subjectUnlocked
                                            : (this.state.taller2 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarTaller2()}}
                    >
                        <Text style={styles.subjectName}>Taller II</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>CUARTO</Text>
                </View>
                <View style={ this.state.sem7 ? styles.semesterRequired : styles.semesterContainer }>
                    <TouchableOpacity
                        style={
                            this.state.politico === 0 ? styles.subjectDefault 
                                : (this.state.politico === 1 ? styles.subjectRegular
                                    : (this.state.politico === 2 ? styles.subjectApproved
                                        : (this.state.politico === 3 ? styles.subjectUnlocked
                                            : (this.state.politico === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPolitico()}}
                    >
                        <Text style={styles.subjectName}>Político</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv6 === 0 ? styles.subjectDefault 
                                : (this.state.priv6 === 1 ? styles.subjectRegular
                                    : (this.state.priv6 === 2 ? styles.subjectApproved
                                        : (this.state.priv6 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv6 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv6()}}
                    >
                        <Text style={styles.subjectName}>Privado VI (Familia)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.socio === 0 ? styles.subjectDefault 
                                : (this.state.socio === 1 ? styles.subjectRegular
                                    : (this.state.socio === 2 ? styles.subjectApproved
                                        : (this.state.socio === 3 ? styles.subjectUnlocked
                                            : (this.state.socio === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarSocio()}}
                    >
                        <Text style={styles.subjectName}>Sociología</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.practica1 === 0 ? styles.subjectDefault 
                                : (this.state.practica1 === 1 ? styles.subjectRegular
                                    : (this.state.practica1 === 2 ? styles.subjectApproved
                                        : (this.state.practica1 === 3 ? styles.subjectUnlocked
                                            : (this.state.practica1 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPractica1()}}
                    >
                        <Text style={styles.subjectName}>Práctica I</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.semesterContainer}>
                    <TouchableOpacity
                        style={
                            this.state.priv7 === 0 ? styles.subjectDefault 
                                : (this.state.priv7 === 1 ? styles.subjectRegular
                                    : (this.state.priv7 === 2 ? styles.subjectApproved
                                        : (this.state.priv7 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv7 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv7()}}
                    >
                        <Text style={styles.subjectName}>Privado VII (Daños)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.priv8 === 0 ? styles.subjectDefault 
                                : (this.state.priv8 === 1 ? styles.subjectRegular
                                    : (this.state.priv8 === 2 ? styles.subjectApproved
                                        : (this.state.priv8 === 3 ? styles.subjectUnlocked
                                            : (this.state.priv8 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPriv8()}}
                    >
                        <Text style={styles.subjectName}>Privado VIII (Bancario)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.filo === 0 ? styles.subjectDefault 
                                : (this.state.filo === 1 ? styles.subjectRegular
                                    : (this.state.filo === 2 ? styles.subjectApproved
                                        : (this.state.filo === 3 ? styles.subjectUnlocked
                                            : (this.state.filo === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarFilo()}}
                    >
                        <Text style={styles.subjectName}>Filosofía</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.economia === 0 ? styles.subjectDefault 
                                : (this.state.economia === 1 ? styles.subjectRegular
                                    : (this.state.economia === 2 ? styles.subjectApproved
                                        : (this.state.economia === 3 ? styles.subjectUnlocked
                                            : (this.state.economia === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarEconomia()}}
                    >
                        <Text style={styles.subjectName}>Economía</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>QUINTO</Text>
                </View>
                <View style={styles.semesterContainer}>
                    <TouchableOpacity
                        style={
                            this.state.concursal === 0 ? styles.subjectDefault 
                                : (this.state.concursal === 1 ? styles.subjectRegular
                                    : (this.state.concursal === 2 ? styles.subjectApproved
                                        : (this.state.concursal === 3 ? styles.subjectUnlocked
                                            : (this.state.concursal === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarConcursal()}}
                    >
                        <Text style={styles.subjectName}>Concursal (Quiebras)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.historia === 0 ? styles.subjectDefault 
                                : (this.state.historia === 1 ? styles.subjectRegular
                                    : (this.state.historia === 2 ? styles.subjectApproved
                                        : (this.state.historia === 3 ? styles.subjectUnlocked
                                            : (this.state.historia === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarHistoria()}}
                    >
                        <Text style={styles.subjectName}>Historia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.tconflicto === 0 ? styles.subjectDefault 
                                : (this.state.tconflicto === 1 ? styles.subjectRegular
                                    : (this.state.tconflicto === 2 ? styles.subjectApproved
                                        : (this.state.tconflicto === 3 ? styles.subjectUnlocked
                                            : (this.state.tconflicto === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarTconflicto()}}
                    >
                        <Text style={styles.subjectName}>Teorías del Conflicto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.opc1 === 0 ? styles.subjectDefault 
                                : (this.state.opc1 === 1 ? styles.subjectRegular
                                    : (this.state.opc1 === 2 ? styles.subjectApproved
                                        : (this.state.opc1 === 3 ? styles.subjectUnlocked
                                            : (this.state.opc1 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarOpc1()}}
                    >
                        <Text style={styles.subjectName}>Opcional I</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.semesterContainer}>
                    <TouchableOpacity
                        style={
                            this.state.dip === 0 ? styles.subjectDefault 
                                : (this.state.dip === 1 ? styles.subjectRegular
                                    : (this.state.dip === 2 ? styles.subjectApproved
                                        : (this.state.dip === 3 ? styles.subjectUnlocked
                                            : (this.state.dip === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarDip()}}
                    >
                        <Text style={styles.subjectName}>Internacional Público</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.etica === 0 ? styles.subjectDefault 
                                : (this.state.etica === 1 ? styles.subjectRegular
                                    : (this.state.etica === 2 ? styles.subjectApproved
                                        : (this.state.etica === 3 ? styles.subjectUnlocked
                                            : (this.state.etica === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarEtica()}}
                    >
                        <Text style={styles.subjectName}>Ética</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.practica2 === 0 ? styles.subjectDefault 
                                : (this.state.practica2 === 1 ? styles.subjectRegular
                                    : (this.state.practica2 === 2 ? styles.subjectApproved
                                        : (this.state.practica2 === 3 ? styles.subjectUnlocked
                                            : (this.state.practica2 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPractica2()}}
                    >
                        <Text style={styles.subjectName}>Práctica II</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.opc2 === 0 ? styles.subjectDefault 
                                : (this.state.opc2 === 1 ? styles.subjectRegular
                                    : (this.state.opc2 === 2 ? styles.subjectApproved
                                        : (this.state.opc2 === 3 ? styles.subjectUnlocked
                                            : (this.state.opc2 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarOpc2()}}
                    >
                        <Text style={styles.subjectName}>Opcional II</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yearTextContainer}>
                    <Text style={styles.yearText}>SEXTO</Text>
                </View>
                <View style={styles.semesterContainer}>
                    <TouchableOpacity
                        style={
                            this.state.dipri === 0 ? styles.subjectDefault 
                                : (this.state.dipri === 1 ? styles.subjectRegular
                                    : (this.state.dipri === 2 ? styles.subjectApproved
                                        : (this.state.dipri === 3 ? styles.subjectUnlocked
                                            : (this.state.dipri === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarDipri()}}
                    >
                        <Text style={styles.subjectName}>Internacional Privado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.tributario === 0 ? styles.subjectDefault 
                                : (this.state.tributario === 1 ? styles.subjectRegular
                                    : (this.state.tributario === 2 ? styles.subjectApproved
                                        : (this.state.tributario === 3 ? styles.subjectUnlocked
                                            : (this.state.tributario === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarTributario()}}
                    >
                        <Text style={styles.subjectName}>Tributario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.opc3 === 0 ? styles.subjectDefault 
                                : (this.state.opc3 === 1 ? styles.subjectRegular
                                    : (this.state.opc3 === 2 ? styles.subjectApproved
                                        : (this.state.opc3 === 3 ? styles.subjectUnlocked
                                            : (this.state.opc3 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarOpc3()}}
                    >
                        <Text style={styles.subjectName}>Opcional III</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.semesterContainer}>
                    <TouchableOpacity
                        style={
                            this.state.agrario === 0 ? styles.subjectDefault 
                                : (this.state.agrario === 1 ? styles.subjectRegular
                                    : (this.state.agrario === 2 ? styles.subjectApproved
                                        : (this.state.agrario === 3 ? styles.subjectUnlocked
                                            : (this.state.agrario === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarAgrario()}}
                    >
                        <Text style={styles.subjectName}>Rec. Naturales (Agrario)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.navegacion === 0 ? styles.subjectDefault 
                                : (this.state.navegacion === 1 ? styles.subjectRegular
                                    : (this.state.navegacion === 2 ? styles.subjectApproved
                                        : (this.state.navegacion === 3 ? styles.subjectUnlocked
                                            : (this.state.navegacion === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarNavegacion()}}
                    >
                        <Text style={styles.subjectName}>Navegación</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.practica3 === 0 ? styles.subjectDefault 
                                : (this.state.practica3 === 1 ? styles.subjectRegular
                                    : (this.state.practica3 === 2 ? styles.subjectApproved
                                        : (this.state.practica3 === 3 ? styles.subjectUnlocked
                                            : (this.state.practica3 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarPractica3()}}
                    >
                        <Text style={styles.subjectName}>Práctica III</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            this.state.opc4 === 0 ? styles.subjectDefault 
                                : (this.state.opc4 === 1 ? styles.subjectRegular
                                    : (this.state.opc4 === 2 ? styles.subjectApproved
                                        : (this.state.opc4 === 3 ? styles.subjectUnlocked
                                            : (this.state.opc4 === 4 ? styles.subjectSelected
                                                : styles.subjectDefault ))))}
                        onPress={() => {this.aprobarOpc4()}}
                    >
                        <Text style={styles.subjectName}>Opcional IV</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.filler}></View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    // Contenedor principal
    mainContainer: {
        paddingTop: 10,
    },
    // Contenedor de los títulos de año
    yearTextContainer: {
        marginVertical: 2,
    },
    // Texto de los títulos de año
    yearText: {
        color: 'rgba(255,255,255,0.3)',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Contenedor de cada semestre
    semesterContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(256,256,256,0.1)',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 3,
        marginHorizontal: 16,
        marginVertical: 2,
    },
    // Cambio del contenedor en cambio que el semestre esté marcado como requerido
    semesterRequired: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(240,78,88,0.1)',
        borderColor: '#F04E58',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 3,
        marginHorizontal: 16,
        marginVertical: 2,
    },
    // Texto del nombre de la materia
    subjectName: {
        color: Color.textColor,
        fontSize: 10,
        textAlign: 'center',
    },
    // Contenedor de la materia en modo default
    subjectDefault: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 1,
        backgroundColor: 'rgba(33,32,30,1)',
    },
    // Contenedor de la materia en modo regular
    subjectRegular: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F7941D',
        borderWidth: 1,
        backgroundColor: 'rgba(247,148,29,0.1)',
    },
    // Contenedor de la materia en modo aprobada
    subjectApproved: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F04E58',
        borderWidth: 1,
        backgroundColor: 'rgba(240,78,88,0.1)',
    },
    // Contenedor de la materia en modo desbloqueada
    subjectUnlocked: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#00B48D',
        borderWidth: 1,
        backgroundColor: 'rgba(0,180,141,0.1)',
    },
    // Contenedor de la materia en modo seleccionada
    subjectSelected: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Color.black,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    // Contenedor de relleno
    filler: {
        width: Layout.window.width,
        height: 40,
    },
    // Texto de las instrucciones
    referencesInstructions: {
        color: Color.textColor,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    // Texto de las referencias
    referencesContainer: {
        marginHorizontal: 16,
        height: 60,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    // Contenedor del mensaje de bienvenida
    referencesWelcome: {
        marginHorizontal: 16,
        height: 60,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderColor: '#32c3be',
        borderWidth: 1,
        backgroundColor: 'rgba(50,195,190,0.1)',
    },
    // Contenedor intermedio de las referencias
    referencesGroup: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 2,
    },
    // Referencias materia regular
    referenceRegular: {
        flexGrow: 3,
        flex: 1,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F7941D',
        borderWidth: 1,
        backgroundColor: 'rgba(247,148,29,0.1)',
    },
    // Referencias materia aprobada
    referenceApprove: {
        flexGrow: 3,
        flex: 1,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F04E58',
        borderWidth: 1,
        backgroundColor: 'rgba(240,78,88,0.1)',
    },
    // Referencia materia desbloqueada
    referenceUnlock: {
        flexGrow: 3,
        flex: 1,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#00B48D',
        borderWidth: 1,
        backgroundColor: 'rgba(0,180,141,0.1)',
    },
    // Referencia materia default
    referenceReset: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 1,
        backgroundColor: 'rgba(33,32,30,1)',
    },
    // Texto de las referencias
    referenceLabel: {
        fontSize: 10,
        color: Color.textColor,
    },
})