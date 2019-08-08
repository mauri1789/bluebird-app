import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Screen } from '../../styles/global'

import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'

const CollectionDetail: NavComponent<NavProps> = (props) => {
    return (
        <ScrollView style={ Screen.main }>
            <Text>Hello world</Text>
        </ScrollView>
    )
}

CollectionDetail.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.collection
})

export { CollectionDetail }
