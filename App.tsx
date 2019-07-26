import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  NavigationContainer as NavContainer
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DeckSection, SettingsSection, ExploreSection } from './sections/Stacks'
import { mainAppColor, inactiveColor } from './styles/colors'
import { Provider } from 'react-redux'
import store from './reducers/store'

const AppNavigator: NavContainer = createAppContainer(
  createBottomTabNavigator(
  {
    "My Decks": DeckSection,
    Explore: ExploreSection,
    Settings: SettingsSection
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "My Decks":
            iconName = "newspaper-o"
            break;
          case "Explore":
            iconName = "rocket"
            break;
          case "Settings":
            iconName = "tasks" //"wrench"
            break;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: mainAppColor,
      inactiveTintColor: inactiveColor,
    },
  }
));

function App () {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
