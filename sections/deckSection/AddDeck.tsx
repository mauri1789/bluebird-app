import React, {useState, useContext} from 'react'
import { View, TextInput, KeyboardAvoidingView } from 'react-native'
import { Inputs, Ribbon } from '../../styles/global'
import {
    NavigationScreenProps as NavProps,
    NavigationScreenComponent as NavComponent
} from 'react-navigation'
import { CollectionsContext } from './../../context'
import { ActionRibbon } from './../../components/ActionRibbon'
import { buildCollection } from './../../services/collectionService'

const AddDeck: NavComponent<NavProps> = (props) => {
    const [deckName, setDeckName] = useState("")
    const [collections, setCollections] = useContext(CollectionsContext)
    let emptyDeckName = deckName.length == 0
    let CancelButtonProps = {
        style: Ribbon.CancelButton,
        onPress: () => props.navigation.goBack()
    }

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
            <ActionRibbon
                buttons={[
                    {
                        text: "Cancel",
                        buttonProps: CancelButtonProps
                    },
                    {
                        text: "Create",
                        buttonProps: createButtonProps()
                    }
                ]}
            />
        </KeyboardAvoidingView>
    )
    function createButtonProps () {
        let buttonProps
        if ( emptyDeckName ) {
            buttonProps = {
                style: Ribbon.DisabledButton,
                underlayColor: Ribbon.DisabledButton.backgroundColor
            }
        } else {
            buttonProps = {
                style:Ribbon.ActionButton,
                onPress:() => {
                    setCollections([...collections, buildCollection({deckName})])
                    props.navigation.goBack()
                }
            }
        }
        return buttonProps
    }
}
AddDeck.navigationOptions = {
    title: 'New Deck'
}

export { AddDeck }
