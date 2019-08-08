import React from 'react'
import { View, Text } from 'react-native'

import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'

const CollectionDetail: NavComponent<NavProps> = (props) => {
    return (
        <View>
            <Text>Hello world</Text>
        </View>
    )
}

CollectionDetail.navigationOptions = {
    title: 'Cards'
}

export { CollectionDetail }
