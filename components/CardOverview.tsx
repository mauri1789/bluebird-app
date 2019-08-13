import React, { useState } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Card } from '../dataModels'

function CardOverview(props) {
    const [showBack, setShowBack] = useState(false)
    let {card}:{card: Card} = props
    let {front, back} = card
    let totalCategories = card.tags.length
   
    return (
        <TouchableHighlight
            style={{backgroundColor: 'white', marginVertical: 3}}
            underlayColor="white"
            onPress={() => {setShowBack(!showBack)}}
            >
            <View style={{flexDirection: 'row', flex:1, height: 50}}>
                <View style={{
                flex: 1,
                justifyContent: 'center'
                }}>
                    <Text style={{color: "gray", fontSize: 10, fontFamily: "monospace"}}>Front: </Text>
                    <Text style={{
                        fontFamily: 'sans-serif-thin',
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>{front}</Text>
                </View>
                {showBack && <View style={{
                flex: 1,
                justifyContent: 'center'
                }}>
                    <Text style={{color: "gray", fontSize: 10, fontFamily: "monospace"}}>Back: </Text>
                    <Text style={{
                        fontFamily: 'sans-serif-thin',
                        fontWeight: 'bold',
                        fontSize: 15
                    }}>{back}</Text>
                </View>}
            </View>
        </TouchableHighlight>
    )
}

export { CardOverview }
