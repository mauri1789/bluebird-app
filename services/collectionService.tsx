import { collections } from '../data'
import { of } from 'rxjs'

function getCollections() {
    return of ( collections)
}

export { getCollections }
