import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ProceduresScreen from '../screens/ProceduresScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import StudyMaterialScreen from '../screens/StudyMaterialScreen';
import ContactScreen from '../screens/ContactScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/* INICIO */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

/* TRÁMITES */
const ProceduresStack = createStackNavigator(
  {
    Procedures: ProceduresScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

ProceduresStack.navigationOptions = {
  tabBarLabel: 'Trámites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-copy' : 'md-copy'} />
  ),
};

ProceduresStack.path = '';

/* PROGRAMAS */
const ProgramsStack = createStackNavigator(
  {
    Programs: ProgramsScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

ProgramsStack.navigationOptions = {
  tabBarLabel: 'Programas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-filing' : 'md-filing'} />
  ),
};

ProgramsStack.path = '';

/* MATERIAL DE ESTUDIO */
const StudyMaterialStack = createStackNavigator(
  {
    StudyMaterial: StudyMaterialScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

StudyMaterialStack.navigationOptions = {
  tabBarLabel: 'Apuntes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'} />
  ),
};

StudyMaterialStack.path = '';


/* CONSULTAS */
const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: 'Consultas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatboxes'} />
  ),
};

ContactStack.path = '';

/* ARMADO DE LA TAB BAR */
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProceduresStack,
  ProgramsStack,
  StudyMaterialStack,
  ContactStack,
}, {
  tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#717171",
      border: '#121212',
      style: {
        marginBottom: 5,
        backgroundColor: "#121212",
        border: '#121212',
      },
      labelStyle: {
        fontSize: 9,
      },
      animationEnabled: true,
      swipeEnabled: true,
    }
  });

tabNavigator.path = '';

export default tabNavigator;
