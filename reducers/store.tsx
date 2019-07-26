import { createStore, combineReducers } from 'redux'
import user from './userReducer'
import collections from './collectionsReducer'

let rootReducer = combineReducers({user, collections})

let store = createStore(rootReducer)

export default store
