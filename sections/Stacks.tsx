import { createStackNavigator } from 'react-navigation'
import { Decks } from './deckSection/Decks'
import { Explore } from './exploreSection/Explore'
import { Settings } from './settingsSection/Settings'
import { Details } from '../shared/Details'

export const DeckSection = createStackNavigator({
    DeckScreen: Decks,
    Details: Details,
});
export const ExploreSection = createStackNavigator({
    ExploreScreen: Explore,
    Details: Details,
});
export const SettingsSection = createStackNavigator({
    SettingsScreen: Settings,
    Details: Details,
});