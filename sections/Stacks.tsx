import { createStackNavigator } from 'react-navigation'
import { Decks } from './deckSection/Decks'
import { AddDeck } from './deckSection/AddDeck'
import { Explore } from './exploreSection/Explore'
import { Settings } from './settingsSection/Settings'
import { Details } from '../shared/Details'
import { HeaderStyle } from './../styles/global'
import { CollectionDetail } from './shared/CollectionDetail'

export const DeckSection = createStackNavigator({
    Decks,
    AddDeck,
    CollectionDetail
},{
    defaultNavigationOptions: {
        title: 'My Decks',
        headerStyle: HeaderStyle.headerStyle,
        headerTintColor: HeaderStyle.headerTintColor,
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }
});
export const ExploreSection = createStackNavigator({
    ExploreScreen: Explore,
    Details: Details,
});
export const SettingsSection = createStackNavigator({
    SettingsScreen: Settings,
    Details: Details,
});