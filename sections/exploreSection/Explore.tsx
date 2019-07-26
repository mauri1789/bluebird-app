import React from 'react';
import { Text, View, Button } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'

const Explore: NavComponent<NavProps> =
    (props) =>(
        <View style={EmptySectionStyle.container}>
            <Text>Explore!</Text>
            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )

Explore.navigationOptions = () => ({
    title: "Explore",
    ...HeaderStyle
})

export { Explore }
