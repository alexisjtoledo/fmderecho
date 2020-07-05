import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon'

/* PANTALLAS */

// Tab Navigator
import ProceduresScreen from '../screens/ProceduresScreen'
import ProgramsScreen from '../screens/ProgramsScreen'
import DiscountsScreen from '../screens/DiscountsScreen'
import ContactScreen from '../screens/ContactScreen'

// Stack Navigators
import Home from '../screens/HomeScreen'
import Stories from '../screens/StoriesScreen'
import TweetsScreen from '../screens/TweetsScreen'
import Blueprint from '../screens/BlueprintScreen'
import Dependencies from '../screens/DependenciesScreen'
import AcademicCalendar from '../screens/AcademicCalendarScreen'
import UsefulLinks from '../screens/UsefulLinksScreen'
import CSE from '../screens/CSEScreen'
import CorrelativitiesScreen from '../screens/CorrelativitiesScreen'
import DiscountDetailsScreen from '../screens/DiscountDetailsScreen'
import DiscountCodeScreen from '../screens/DiscountCodeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/* INICIO */
const HomeStack = createStackNavigator(
  {
    Home: Home,
    Stories: Stories,
    TweetsScreen: TweetsScreen,
    Blueprint: Blueprint,
    Dependencies: Dependencies,
    AcademicCalendar: AcademicCalendar,
    UsefulLinks: UsefulLinks,
    CSE: CSE,
    CorrelativitiesScreen: CorrelativitiesScreen,
  },
  {
    header: null,
    headerMode: 'none',
    navigation: navigator
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
    headerMode: 'none',
    navigation: navigator
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

/* DESCUENTOS */
const DiscountsStack = createStackNavigator(
  {
    Discounts: DiscountsScreen,
    DiscountDetailsScreen: DiscountDetailsScreen,
    DiscountCodeScreen: DiscountCodeScreen,
  },
  {
    header: null,
    headerMode: 'none'
  },
  config
);

DiscountsStack.navigationOptions = {
  tabBarLabel: 'Descuentos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'} />
  ),
};

DiscountsStack.path = '';


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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProceduresStack,
  ProgramsStack,
  DiscountsStack,
  ContactStack,
}, {
  tabBarOptions: {
      activeTintColor: Colors.tintColor,
      inactiveTintColor: Colors.tabIconDefault,
      border: Colors.tabBar,
      style: {
        marginBottom: 5,
        backgroundColor: Colors.tabBar,
        border: Colors.tabBar,
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