import { user } from '../data'
import { of } from 'rxjs'

function getUserInfo () {
    return of(user)
}

export { getUserInfo }
