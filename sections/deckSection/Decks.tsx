import React, { useContext, useState } from 'react'
import { Text, View, Button, ScrollView, TouchableHighlight } from 'react-native'
import { viewStyle, HeaderStyle, FloatingButton } from '../../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { CollectionsContext } from './../../context'
import { getCollections, loadFromStorage, saveInStorage } from '../../services/collectionService'
import { DeckOverview } from '../../components/DeckOverview'
import { useEffectAsync } from '../../lib'

const Decks: NavComponent<NavProps> =
    (props) => {
        const [collections, setCollections] = useContext(CollectionsContext)
        const [firstLoad, setFirstLoad] = useState(false)
        useEffectAsync(async () => {
            if ( collections.length != 0) {
                if ( !firstLoad ) {
                    await saveInStorage(
                        "collection",
                        JSON.stringify(collections)
                    )
                } else {
                    setFirstLoad(false)
                }
            }
        }, [collections])
        useEffectAsync(async () => {
            const col = await loadFromStorage('collections')
            if (col == null) {
                setCollections(getCollections())
            } else {
                setFirstLoad(true)
                setCollections(col)
            }
        }, [])
        return (
            <View style={{flex:1}}>
                <ScrollView
                    style={viewStyle.main}>
                    {
                        collections.map(
                            (col) => <DeckOverview key={col.collectionId} collection={col} />
                        )
                    }
                </ScrollView>
                <View style={FloatingButton.Container}>
                    <TouchableHighlight
                        style={FloatingButton.Button}
                        onPress={() => props.navigation.navigate('AddDeck')}
                    >
                        <Icon name="plus" size={35} color="whitesmoke" />
                    </TouchableHighlight>
                </View>
            </View>
        )
    };
Decks.navigationOptions = {
    title: 'My Decks'
}

export { Decks }
