import React, { useContext, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { viewStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'
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
        <ScrollView 
            style={viewStyle.main}>
            {
                collections.map(
                    (col) => <DeckOverview key={col.collectionId} collection={col} />
                )
            }
        </ScrollView>)
    };
Decks.navigationOptions = {
    title: 'My Decks',
    ...HeaderStyle
}

export { Decks }
