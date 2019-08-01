import { collections } from '../data'
import { of, from } from 'rxjs'
import { AsyncStorage } from 'react-native'

function getCollections() {
    return  collections
}

function loadFromStorage (key) {
    return from(AsyncStorage.getItem(key))
}

function saveInStorage (key, data) {
    return from(AsyncStorage.setItem(key,data))
}

export { getCollections, loadFromStorage, saveInStorage }
