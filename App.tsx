import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
import { DeckSection, SettingsSection, ExploreSection} from './sections/Stacks'

export default createAppContainer(createBottomTabNavigator(
  {
    "My Decks": DeckSection,
    Explore: ExploreSection,
    Settings: SettingsSection
  }
));
