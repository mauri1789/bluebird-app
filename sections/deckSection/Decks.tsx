import React from 'react';
import { Text, View } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'

const Decks: NavComponent<NavProps> =
    () => (
        <View style={EmptySectionStyle.container}>
            <Text>Home!</Text>
        </View>
    );
Decks.navigationOptions = {
    title: 'My Decks',
    ...HeaderStyle
}
export { Decks }
