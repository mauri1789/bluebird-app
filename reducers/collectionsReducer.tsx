import { Action, Collection } from '../dataModels'

export default function collections(state:Collection[] = [], action: Action) {
    switch (action.type) {
        case "LOAD_COLLECTIONS":
            return state = [...action.payload]
        default:
            return [...state]
    }
}
