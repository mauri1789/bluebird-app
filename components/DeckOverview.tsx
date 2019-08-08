import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { Collection } from '../dataModels'

function DeckOverview(props) {
   let {collection}:{collection: Collection} = props
   let {cards} = collection
   let totalCards = cards.length
   let singleCard = totalCards == 1
   

   return (
      <TouchableHighlight
         style={{backgroundColor: 'white', marginVertical: 3}}
         onPress={props.onPress}
         >
         <View style={{flexDirection: 'row', flex:1, height: 50}}>
            <View style={{
               flex: 1,
               justifyContent: 'center',
               paddingLeft: 20
            }}>
               <Text style={{
                  fontFamily: 'sans-serif-thin',
                  fontWeight: 'bold',
                  fontSize: 15
               }}>{collection.name}</Text>
            </View>
            <View style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'flex-end',
               paddingRight: 20
            }}>
               <Text
                  style={{
                     fontFamily: 'monospace',
                     fontSize: 13
                  }}
               >{totalCards} card{(singleCard)?' ':'s'}</Text>
            </View>
         </View>
      </TouchableHighlight>
   )
}

export { DeckOverview }
