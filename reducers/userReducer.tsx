import { Action, User } from '../dataModels'

export default function user(state:User = null, action: Action) {
    switch (action.type) {
        case "LOAD_USER":
            return state = {...action.payload}
        default:
            return {...state}
    }
}
