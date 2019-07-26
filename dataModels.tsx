interface Action {
    type: string
    payload: any
}

interface Card {
    id: string
    front: string
    back: string
    tags: string[]
}

interface Collection {
    collectionId: string
    name: string
    owner: string
    tag: boolean
    cards: Card[]
}

interface User {
    userName: string
    decks: string[]
    tags: string[]
}

export { Action, Card, Collection, User }
