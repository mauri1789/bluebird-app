import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView, Button } from 'react-native'
import { Inputs, LowerButton } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { CollectionsContext } from './../../context'
import { buildCollection } from './../../services/collectionService'
import { useEffectAsync } from '../../lib'

const AddDeck: NavComponent<NavProps> = (props) => {
    const [deckName, setDeckName] = useState("")
    const [deckDescription, setDeckDescription] = useState("")
    const [collections, setCollections] = useContext(CollectionsContext)
    return (
        <KeyboardAvoidingView
            style = {{ flex:1}}
            enabled
            behavior='padding'>
            <View style={{alignItems: "center", paddingVertical: 25}}>
                <TextInput
                    style={[Inputs.SingleLine, Inputs.Title]}
                    onChangeText={(text) => setDeckName(text)}
                    value={deckName}
                    maxLength={20}
                    placeholder={"Deck Name"}
                />
                <TextInput
                    style={[Inputs.Multiline]}
                    onChangeText={(text) => setDeckDescription(text)}
                    value={deckDescription}
                    multiline={true}
                    placeholder={"Deck Description"}
                />
            </View>
            <View style={[LowerButton.Container]}>
                <TouchableHighlight 
                    style={LowerButton.CancelButton}
                    onPress={() => props.navigation.goBack()}
                >
                    <Text style={LowerButton.ButtonText}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={
                        deckName.length == 0? LowerButton.DisabledButton:LowerButton.ActionButton
                    }
                    onPress={() => {
                        if (deckName.length > 0) {
                            setCollections([...collections, buildCollection({deckName})])
                            props.navigation.goBack()
                        }
                    }}
                >
                    <Text style={LowerButton.ButtonText}>Create</Text>
                </TouchableHighlight>
            </View>
        </KeyboardAvoidingView>
    )
}
AddDeck.navigationOptions = {
    title: 'New Deck'
}

export { AddDeck }
