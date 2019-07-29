import React, { useEffect, useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { EmptySectionStyle } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { HeaderStyle } from '../../styles/global'
import { CollectionsContext } from './../../context'
import { getCollections } from '../../services/collectionService'

const Decks: NavComponent<NavProps> =
    (props) => {
        const [collections, setCollections] = useContext(CollectionsContext)
        useEffect(() => {
            getCollections()
                .subscribe((collections) => setCollections(collections))
            
        }, [])   
        return (<View style={EmptySectionStyle.container}>
            <Text>Home! {String(collections)}</Text>
            <Button
                title="Go to Settings"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>)
    };
Decks.navigationOptions = {
    title: 'My Decks',
    ...HeaderStyle
}

export { Decks }
