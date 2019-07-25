import React from 'react';
import { Text, View } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'

const Settings: NavComponent<NavProps> =
() =>
    <View style={EmptySectionStyle.container}>
        <Text>Settings!</Text>
    </View>

Settings.navigationOptions = () => ({
    title: "Settings",
    ...HeaderStyle
})

export { Settings }

