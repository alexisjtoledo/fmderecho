/* // Componentes
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/HomeScreen';
import Stories from '../screens/StoriesScreen';
import TweetsScreen from '../screens/TweetsScreen';
import Blueprint from '../screens/BlueprintScreen';
import Dependencies from '../screens/DependenciesScreen';
import AcademicCalendar from '../screens/AcademicCalendarScreen';
import UsefulLinks from '../screens/UsefulLinksScreen';
import CSE from '../screens/CSEScreen';
import CorrelativitiesScreen from '../screens/CorrelativitiesScreen';

// Creación de pantallas del stack navigator
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    Stories: {
        screen: Stories,
        navigationOptions: {
            header: null,
        },
    },
    TweetsScreen: {
        screen: TweetsScreen,
        navigationOptions: {
            header: null,
        },
    },
    Blueprint: {
        screen: Blueprint,
        navigationOptions: {
            header: null,
        },
    },
    Dependencies: {
        screen: Dependencies,
        navigationOptions: {
            header: null,
        },
    },
    AcademicCalendar: {
        screen: AcademicCalendar,
        navigationOptions: {
            header: null,
        },
    },
    UsefulLinks: {
        screen: UsefulLinks,
        navigationOptions: {
            header: null,
        },
    },
    CSE: {
        screen: CSE,
        navigationOptions: {
            header: null,
        },
    },
    CorrelativitiesScreen: {
        screen: CorrelativitiesScreen,
        navigationOptions: {
            header: null,
        },
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
 */