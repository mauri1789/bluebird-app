const user = {
    userName: 'global',
    decks: [
        "science_deck",
        "law"
    ],
    tags: [
        "math",
        "politics",
        "rhetoric"
    ]
}
const collections = {
    "collections": [
       {
          "collectionId": "global_science_deck",
          "name": "Science Deck",
          "owner": "global",
          "tag": false,
          "cards": [
             {
                "id": "001",
                "front": "science 1",
                "back": "science back 1",
                "tags": ["science_deck"]
             },
             {
                "id": "002",
                "front": "science 2",
                "back": "science back 2",
                "tags": ["science_deck", "math"]
             }
          ]
       },
       {
          "collectionId": "global_math",
          "name": "Math",
          "owner": "global",
          "tag": true,
          "cards": [
             {
                "id": "003",
                "front": "math 1",
                "back": "math back 1",
                "tags": ["math"]
             },
             {
                "id": "004",
                "front": "math 2",
                "back": "math back 2",
                "tags": ["math"]
             },
             {
                "id": "002",
                "front": "science 2",
                "back": "science back 2",
                "tags": ["science_deck", "math"]
             }
          ]
       },
       {
          "collectionId": "global_law",
          "name": "Law",
          "owner": "global",
          "tag": false,
          "cards": [
             {
                "id": "005",
                "front": "law 1",
                "back": "law back 1",
                "tags": ["politics", "rhetoric", "science"]
             }
          ]
       },
       {
          "collectionId": "global_politics",
          "name": "Politics",
          "owner": "global",
          "tag": true,
          "cards": [
             {
                "id": "005",
                "front": "law 1",
                "back": "law back 1",
                "tags": ["politics", "rhetoric", "science"]
             }
          ]
       },
       {
          "collectionId": "global_rhetoric",
          "name": "Rhetoric",
          "owner": "global",
          "tag": true,
          "cards": [
             {
                "id": "005",
                "front": "law 1",
                "back": "law back 1",
                "tags": ["politics", "rhhetoric", "science"]
             },
             {
                "id": "006",
                "front": "rhetoric 1",
                "back": "rhetoric back 1",
                "tags": ["rhetoric"]
             }
          ]
       }
    ]
 }

 export { user, collections}
