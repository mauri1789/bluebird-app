import { collections } from '../data'
import { AsyncStorage } from 'react-native'
import snake from 'to-snake-case'

function getCollections() {
    return  collections
}

function loadFromStorage (key) {
    return AsyncStorage.getItem(key)
}

function saveInStorage (key, data) {
    return AsyncStorage.setItem(key,data)
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

export { getCollections, loadFromStorage, saveInStorage }
