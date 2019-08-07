import React, {useState, useContext} from 'react'
import { Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView, Button } from 'react-native'
import { Inputs, LowerButton } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { CollectionsContext } from './../../context'
import { buildCollection } from './../../services/collectionService'

const AddDeck: NavComponent<NavProps> = (props) => {
    const [deckName, setDeckName] = useState("")
    const [collections, setCollections] = useContext(CollectionsContext)
    let emptyDeckName = deckName.length == 0
    let buttonText = (text) => (<Text style={LowerButton.ButtonText}>{text}</Text>)
    let CreateButtonProps = setCreateButtonProps()

    return (
        <KeyboardAvoidingView
            style = {{ flex:1 }}
            enabled
            behavior={'padding'}>
            <View style={{alignItems: "center", paddingVertical: 50}}>
                <TextInput
                    style={[Inputs.SingleLine, Inputs.Title]}
                    onChangeText={(text) => setDeckName(text)}
                    value={deckName}
                    maxLength={20}
                    placeholder={"Deck Name"}
                />
            </View>
            <View style={[LowerButton.Container]}>
                <TouchableHighlight 
                    style={LowerButton.CancelButton}
                    onPress={() => props.navigation.goBack()}
                >
                    {buttonText("Cancel")}
                </TouchableHighlight>
                <TouchableHighlight {...CreateButtonProps} >
                    {buttonText("Create")}
                </TouchableHighlight>
            </View>
        </KeyboardAvoidingView>
    )
    function setCreateButtonProps () {
        let CreateButtonProps
        if ( emptyDeckName ) {
            CreateButtonProps = {
                style: LowerButton.DisabledButton,
                underlayColor: LowerButton.DisabledButton.backgroundColor
            }
        } else {
            CreateButtonProps = {
                style:LowerButton.ActionButton,
                onPress:() => {
                    setCollections([...collections, buildCollection({deckName})])
                    props.navigation.goBack()
                }
            }
        }
        return CreateButtonProps
    }
}
AddDeck.navigationOptions = {
    title: 'New Deck'
}

export { AddDeck }
