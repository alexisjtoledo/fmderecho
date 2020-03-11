// Componentes
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './HomeContent'
import Stories from './StoriesScreen'
import Information from './InformationScreen'
import Inclusion from './InclusionScreen'
import Rights from './RightsScreen'
import Academics from './AcademicsScreen'
import Blueprint from './BlueprintScreen'
import Dependencies from './DependenciesScreen'
import AcademicCalendar from './AcademicCalendarScreen'
import UsefulLinks from './UsefulLinksScreen'
import CSE from './CSEScreen'
import AbogaciaPlan from './AbogaciaPlanScreen'
import ProfesoradoPlan from './ProfesoradoPlanScreen'
import NotariadoPlan from './NotariadoPlanScreen'

// Creación de pantallas del stack navigator
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Stories: {
    screen: Stories,
    navigationOptions: {
      header: null,
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      header: null,
    }
  },
  Inclusion: {
    screen: Inclusion,
    navigationOptions: {
      header: null,
    }
  },
  Rights: {
    screen: Rights,
    navigationOptions: {
      header: null,
    }
  },
  Academics: {
    screen: Academics,
    navigationOptions: {
      header: null,
    }
  },
  Blueprint: {
    screen: Blueprint,
    navigationOptions: {
      header: null,
    }
  },
  Dependencies: {
    screen: Dependencies,
    navigationOptions: {
      header: null,
    }
  },
  AcademicCalendar: {
    screen: AcademicCalendar,
    navigationOptions: {
      header: null,
    }
  },
  UsefulLinks: {
    screen: UsefulLinks,
    navigationOptions: {
      header: null,
    }
  },
  CSE: {
    screen: CSE,
    navigationOptions: {
      header: null,
    }
  },
  AbogaciaPlan: {
    screen: AbogaciaPlan,
    navigationOptions: {
      header: null,
    }
  },
  ProfesoradoPlan: {
    screen: ProfesoradoPlan,
    navigationOptions: {
      header: null,
    }
  },
  NotariadoPlan: {
    screen: NotariadoPlan,
    navigationOptions: {
      header: null,
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
