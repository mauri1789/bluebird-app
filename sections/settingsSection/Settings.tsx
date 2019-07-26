import React from 'react';
import { Text, View, Button } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'

const Settings: NavComponent<NavProps> =
    (props) =>
        <View style={EmptySectionStyle.container}>
            <Text>Settings!</Text>
            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>

Settings.navigationOptions = () => ({
    title: "Settings",
    ...HeaderStyle
})

export { Settings }

