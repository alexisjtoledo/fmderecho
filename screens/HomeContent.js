// Componentes y elementos
import React, { 
  Component, 
  useState, 
  useEffect 
} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Modal
} from 'react-native'

// Estilos
import GlobalStyles from '../constants/GlobalStyles'
import Color from '../constants/Colors'
import Layout from '../constants/Layout'
import Constants from 'expo-constants'

// TO-DO: Imágenes en base de datos
import MainLogo from '../assets/images/main-logo.png'
import MainPicture from '../assets/images/main-picture.png'



export default function HomeContent({ navigation }) {

  // Constantes para suplir el State en funciones (Hooks)
  const [importantInformation, setImportantInformation] = useState([]); // Primer set de tarjetas: Información Importante
  const [mainProcedures, setMainProcedures] = useState([]); // Segundo set de tarjetas: Trámites Administrativos
  const [studentRights, setStudentRights] = useState([]); // Tercer set de tarjetas: Derechos Estudiantiles
  const [scholarships, setScholarships] = useState([]); // Cuarto set de tarjetas: Becas
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [modalVisible, setModalVisible] = useState(false); // Estado del modal de selección de carrera

  // Hook que reemlaza el ComponentDidMount
  useEffect (() => {
    // Solicitud a la API
    fetch('https://fmderecho.com/mobile/api/Main.json')
      .then(res => res.json()) // Parseo de la respuesta en un JSON
      .then(res => { // Con el JSON actualizo los estados hookeados
        setMainProcedures([...mainProcedures, ...res.MainProcedures]);
        setStudentRights([...studentRights, ...res.StudentRights]);
        setScholarships([...scholarships, ...res.Scholarships]);
      });
    },[loading] // y modifico el state de carga
  );

  // Función que maneja los clicks ( nombre del enlace como parámetro )
  function handlePress(screenName) {
    navigation.navigate(screenName);
  }

  function handlePressModal(screenName) {
    navigation.navigate(screenName);
    setModalVisible(false);
  }

  // Función que maneja las historias ( nombre del enlace, datos que le transfiero a la nueva pantalla )
  function handleStories(data) {
    navigation.navigate('Stories', data);
  }

  // Renderizado de pantalla
  return (

    /* CONTENEDOR PRINCIPAL: Para dejarlo fijo agregar "stickyHeaderIndices={[0]}"
    y encerrarlo todo en un View con zIndex */
    <ScrollView style={GlobalStyles.container} >

      {/* CABECERA */}
      <View style={styles.header}>

        {/* LOGO */}
        <Image 
          source={MainLogo} 
          style={styles.mainLogo} 
          resizeMode='contain'
        />
        
        {/* MENU DE CABECERA */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.btnStrip}>
          <Text onPress={() => handlePress('Information')} style={styles.btnMenu}>
            Noticias
          </Text>
          <Text onPress={() => handlePress('Inclusion')} style={styles.btnMenu}>
            Inclusión
          </Text>
          <Text onPress={() => handlePress('Rights')} style={styles.btnMenu}>
            Derechos
          </Text>
          <Text onPress={() => handlePress('Academics')} style={styles.btnMenu}>
            Académicas
          </Text>
        </ScrollView>
      </View>

      {/* IMAGEN PRINCIPAL DE BIENVENIDA */}
      <View style={styles.welcomeBox}>
        <Image 
          source={MainPicture} 
          style={styles.welcomePicture} 
          resizeMode='contain'
        />
      </View>

      {/* CONTENIDO */}
      <View style={styles.contentContainer}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>Seleccioná tu carrera</Text>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => handlePressModal('AbogaciaPlan')}>
                <Text style={styles.modalBtnText}>Abogacía</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => handlePressModal('ProfesoradoPlan')}>
                <Text style={styles.modalBtnText}>Profesorado</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => handlePressModal('NotariadoPlan')}>
                <Text style={styles.modalBtnText}>Notariado</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalCloseBtnText}>Volver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Subtítulo del stack de Información Importante */}
        <Text style={styles.titles}>Información Importante</Text>

        {/* Stack de Información Importante */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {/* PLAN DE ESTUDIOS */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => setModalVisible(true)}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/plan.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>
              {/* CALENDARIO ACADÉMICO */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => handlePress('AcademicCalendar')}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/calendario.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>
              {/* PLANO DE LA FACULTAD */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => handlePress('Blueprint')}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/plano.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>
              {/* DEPENDENCIAS ADMINISTRATIVAS */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => handlePress('Dependencies')}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/dependencias.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>
              {/* ENLACES ÚTILES */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => handlePress('UsefulLinks')}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/enlaces.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>
              {/* COMPROMISO SOCIAL ESTUDIANTIL */}
              <TouchableOpacity 
                style={styles.informationBackground}
                activeOpacity={0.5} 
                onPress={() => handlePress('CSE')}
              >
                <Image 
                  source={{uri: 'https://fmderecho.com/mobile/img/home/compromiso.jpg'}} 
                  style={styles.informationImage}
                  resizeMode='contain'
                  defaultSource={require('../assets/images/infoplaceholder.jpg')}
                  progressiveRenderingEnabled={true}
                />
              </TouchableOpacity>

        </ScrollView>

        {/* Subtítulo del stack de Trámites Administrativos */}
        <Text style={styles.titles}>Trámites Administrativos</Text>
        
        {/* Stack de Trámites Administrativos */}
        <FlatList
          data = {mainProcedures} // Fuente de datos: Colección del objeto JSON que extraje de la API
          renderItem = {
            ({item}) => // Por cada item imprimo:

            // Una tarjeta clickeable
            <TouchableOpacity 
              style={styles.cardBackground} 
              activeOpacity={0.5} 
              onPress={() => handleStories(item)}
            >

              {/* La imagen de fondo de la tarjeta */}
              <Image 
                source={{uri: item.picture}}
                style={styles.cardImage} 
                defaultSource={require('../assets/images/placeholder.png')}
                progressiveRenderingEnabled={true}
              />

              {/* El título de la tarjeta */}
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {item.name}
                </Text>
              </View>

            </TouchableOpacity>
          }
          keyExtractor = {(item, index) => index.toString()} // Genero un identificador para cada miembro
          horizontal = {true} // Le digo que renderice verticalmente
          showsHorizontalScrollIndicator = {false} // Y que no muestre la barra de desplazamiento
        />

        {/* Subtítulo del stack de Derechos Estudiantiles */}
        <Text style={styles.titles}>Derechos Estudiantiles</Text>
        
        {/* Stack de Derechos Estudiantiles */}
        <FlatList
          data = {studentRights} // Fuente de datos: Colección del objeto JSON que extraje de la API
          renderItem = {
            ({item}) => // Por cada item imprimo:

            // Una tarjeta clickeable
            <TouchableOpacity 
              style={styles.cardBackground} 
              activeOpacity={0.5} 
              onPress={() => handleStories(item)}
            >

              {/* La imagen de fondo de la tarjeta */}
              <Image 
                source={{uri: item.picture}} 
                style={styles.cardImage} 
                defaultSource={require('../assets/images/placeholder.png')}
                progressiveRenderingEnabled={true}
              />

              {/* El título de la tarjeta */}
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {item.name}
                </Text>
              </View>

            </TouchableOpacity>
          }
          keyExtractor = {(item, index) => index.toString()} // Genero un identificador para cada miembro
          horizontal = {true} // Le digo que renderice verticalmente
          showsHorizontalScrollIndicator = {false} // Y que no muestre la barra de desplazamiento
        />

        {/* Subtítulo del stack de Becas */}
        <Text style={styles.titles}>Becas</Text>
        
        {/* Stack de Becas */}
        <FlatList
          data = {scholarships} // Fuente de datos: Colección del objeto JSON que extraje de la API
          renderItem = {
            ({item}) => // Por cada item imprimo:

            // Una tarjeta clickeable
            <TouchableOpacity 
              style={styles.cardBackground} 
              activeOpacity={0.5} 
              onPress={() => handleStories(item)}
            >

              {/* La imagen de fondo de la tarjeta */}
              <Image 
                source={{uri: item.picture}} 
                style={styles.cardImage} 
                defaultSource={require('../assets/images/placeholder.png')}
                progressiveRenderingEnabled={true}
              />

              {/* El título de la tarjeta */}
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {item.name}
                </Text>
              </View>

            </TouchableOpacity>
          }
          keyExtractor = {(item, index) => index.toString()} // Genero un identificador para cada miembro
          horizontal = {true} // Le digo que renderice verticalmente
          showsHorizontalScrollIndicator = {false} // Y que no muestre la barra de desplazamiento
        />

      </View>
    </ScrollView>
  );
}

// Estilos propios de la página de inicio
const styles = StyleSheet.create({

  /* ==================================== */ 
  /* === ESTILOS DEL HEADER PRINCIPAL === */ 
  /* ==================================== */

  // Estilos del fondo del header principal
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(33,32,30,0.3)',
    paddingBottom: 10,
    paddingTop: (Constants.statusBarHeight+10),
    top: (-Constants.statusBarHeight),
    zIndex: 99,
  },

  // Estilos del logotipo
  mainLogo: {
    width: 50,
    height: 60,
    marginHorizontal: 16,
  },

  // Estilos de cada botón del header
  btnMenu: {
    color: Color.textColor,
    textShadowColor: Color.black,
    textShadowOffset: { 
        width: 1.5, 
        height: 1.5
    },
    textShadowRadius: 5,
    marginRight: 16,
    fontSize: 18,
  },

  // Estilos del contenedor de la imagen de bienvenida
  welcomeBox: {
    width: Layout.window.width,
    height: 450,
    marginTop: -(Constants.statusBarHeight+132),
    marginBottom: 15,
  },

  // Estilos de la imagen de bienvenida
  welcomePicture: {
    width: '100%',
    height: '100%',
  },

  // Estilos del contenedor principal
  contentContainer: {
    flex: 1,
    marginLeft: 16,
    paddingBottom: Constants.statusBarHeight,
  },

  // Estilos de los subtítulos de cada stack de tarjetas
  titles: {
    color: Color.tintColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  // Estilos de las tarjetas
  cardBackground: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 5,
    width: 104,
    height: 138,
    marginRight: 8,
    marginBottom: 25,
  },

  // Estilos de la imagen de las tarjetas
  cardImage: {
    width: '100%',
    height: '100%',
  },

  // Estilos del fondo de los títulos de las tarjetas
  cardTextContainer: {

    position: 'absolute',
    left: 0,
    right: 0,
    width: 104,
    height: 138,
    flex: 1,
    justifyContent: 'flex-end',
  },

  // Estilos de los títulos de las tarjetas
  cardText: {
    color: Color.textColor,
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textShadowColor: Color.black,
    textShadowOffset: { 
        width: 1.8, 
        height: 1.8
    },
    textShadowRadius: 5,
    backgroundColor: 'rgba(33,32,30,0.5)',
    borderRadius: 5,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  
    // Estilos de la información principal
    informationBackground: {
      flex: 1,
      width: 138,
      height: 138,
      marginRight: 8,
      marginTop: 5,
      marginBottom: 10,
    },
  
    // Estilos de la imagen de la información principal
    informationImage: {
      width: '100%',
      height: '100%',
    },

    // Estilos del modal de selección de carrera
    modalBackground: {
      width: Layout.window.width,
      height: Layout.window.height,
      backgroundColor: 'rgba(33, 32, 30, 0.8)',
    },

    // Estilos del contenedor del modal
    modalBox: {
      width: Layout.window.width,
        backgroundColor: 'rgba(253, 246, 249, 0.95)',
        borderRadius: 15,
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 100,
        top: Layout.window.height - 450,
    },

    // Estilos del botón del modal
    modalButton: {
      borderColor: Color.primary,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 30,
      alignItems: 'center',
    },

    // Estilos del texto del modal
    modalText: {
      color: Color.backgroundColor,
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
    },

    // Estilos del texto del botón del modal
    modalBtnText: {
      color: Color.primary,
      fontSize: 16,
    },

    // Estilos del botón de cierre del modal
    modalCloseButton: {
      borderColor: Color.backgroundColor,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      paddingVertical: 10,
      alignItems: 'center',
    },

    // Estilos del texto del botón de cierre del modal
    modalCloseBtnText: {
      color: Color.backgroundColor,
      fontSize: 14,

    },

});
