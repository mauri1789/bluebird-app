import React, { useEffect, useContext } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { viewStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'
import { CollectionsContext } from './../../context'
import { getCollections } from '../../services/collectionService'
import { DeckOverview } from '../../components/DeckOverview'

const Decks: NavComponent<NavProps> =
    (props) => {
        const [collections, setCollections] = useContext(CollectionsContext)
        useEffect(() => {
            getCollections()
                .subscribe((collections) => setCollections(collections))
            
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
