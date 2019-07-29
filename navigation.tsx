import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DeckSection, SettingsSection, ExploreSection } from './sections/Stacks'
import { mainAppColor, inactiveColor } from './styles/colors'

let bottomNavigation = createBottomTabNavigator(
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
)

export { bottomNavigation }
