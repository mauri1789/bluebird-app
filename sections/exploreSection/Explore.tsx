import React from 'react';
import { Text, View } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'

const Explore: NavComponent<NavProps> =
    () =>(
        <View style={EmptySectionStyle.container}>
            <Text>Explore!</Text>
        </View>
    )

Explore.navigationOptions = () => ({
    title: "Explore",
    ...HeaderStyle
})

export { Explore }
