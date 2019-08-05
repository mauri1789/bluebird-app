import React, { FC } from 'react'
import { Text, View, Button, ScrollView, TouchableHighlight } from 'react-native'
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'

const AddDeck: NavComponent<NavProps> = (props) => {
    return (
        <View style = { EmptySectionStyle.container }>
            <Text>New Deck</Text>
        </View>
    )
}
AddDeck.navigationOptions = {
    title: 'New Deck'
}

export { AddDeck }
