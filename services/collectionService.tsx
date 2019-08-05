import { collections } from '../data'
import { AsyncStorage } from 'react-native'

function getCollections() {
    return  collections
}

function loadFromStorage (key) {
    return AsyncStorage.getItem(key)
}

function saveInStorage (key, data) {
    return AsyncStorage.setItem(key,data)
}

export { getCollections, loadFromStorage, saveInStorage }
