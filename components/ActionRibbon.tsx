import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Ribbon } from '../styles/global'
interface ButtonSpec {
    text: string
    buttonProps: Object
}

export function ActionRibbon ({buttons}:{buttons: ButtonSpec[]}) {
    return (
        <View style={Ribbon.Container}>
            {
                buttons.map(
                    ({text, buttonProps}) => (
                        <TouchableHighlight
                            key={text}
                            {...buttonProps}
                        >
                            <Text style={Ribbon.ButtonText}>{text}</Text>
                        </TouchableHighlight>
                    )
                )
            }
        </View>
    )
}