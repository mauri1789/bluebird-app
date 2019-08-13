import { collections } from '../data'
import { AsyncStorage } from 'react-native'
import snake from 'to-snake-case'
import { Card } from '../dataModels'

function getCollections() {
    return  collections
}

function loadFromStorage (key) {
    return AsyncStorage.getItem(key)
}

function saveInStorage (key, data) {
    return AsyncStorage.setItem(key,data)
}

function getCategories(cards: Card[]) {
    let categorySet = cards.reduce((categories, card) => {
        card.tags.forEach( tag => {
            categories.add(tag)
        })
        return categories
    }, new Set<string>())
    let categories = Array.from(categorySet)
    return categories.map(category => category.split('_').join(" "))
}

export function buildCollection({deckName}) {
    return {
        collectionId: `global_${snake(deckName)}`,
        name: deckName,
        owner: "global",
        tag: false,
        cards: []
    }
}

export { getCollections, loadFromStorage, saveInStorage, getCategories }
