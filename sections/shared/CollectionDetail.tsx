import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Screen } from '../../styles/global'
import { getCategories } from '../../services/collectionService'
import { CardOverview } from '../../components/CardOverview'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { Collection } from '../../dataModels';

const CollectionDetail: NavComponent<NavProps> = ({navigation}) => {
    let collection: Collection = navigation.state.params["collection"]
    let cards = collection.cards
    return (
        <View style={[Screen.main, {alignItems: "center"}]}>
            <View style={ [Screen.floating, {marginBottom: 3}] }>
                <Text>Cards: {cards.length}</Text>
                <Text>Categories: </Text>
                <Text>{getCategories(cards).toString()}</Text>
            </View>
            <ScrollView style={{flex:1, width: "95%"}}> 
            {
                cards.map(
                    (card) => (
                            <CardOverview 
                                key={card.id}
                                card={card}
                            />
                        )
                )
            }
            </ScrollView>
        </View>
    )
}

CollectionDetail.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.collection.name
})

export { CollectionDetail }
