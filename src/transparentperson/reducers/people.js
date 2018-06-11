export default function reducer(state = {
    people: [
        {ID: 0, user: "Wouter Jansen", avatar:"/assets/img/otter1.jpg"},
        {ID: 1, user: "Timo Viveen", avatar:"/assets/img/otter2.jpg"},
        {ID: 2, user: "Gerben Droogers", avatar:"/assets/img/otter3.jpg"},
        {ID: 3, user: "Patrick van Batenburg", avatar:"/assets/img/otter4.jpg"},
        {ID: 4, user: "Maarten van der Heijden", avatar:"/assets/img/otter5.jpg"},
        {ID: 5, user: "Thijmen Boot", avatar:"/assets/img/otter6.jpg"},
        {ID: 6, user: "Okke Trommelen", avatar:"/assets/img/otter7.jpg"},
        {ID: 7, user: "Rowin van Blokland", avatar:"/assets/img/otter8.jpg"},
        {ID: 8, user: "Erco Argante", avatar:"/assets/img/otter9.jpg"},
        {ID: 9, user: "Robin Schellius", avatar:"/assets/img/otter10.jpg"},
        {ID: 10, user: "Ruud Hermans", avatar:"/assets/img/otter11.jpg"},
        {ID: 11, user: "Arno Broeders", avatar:"/assets/img/otter12.jpg"},
        {ID: 12, user: "Frank Tempelman", avatar:"/assets/img/otter13.jpg"},
        {ID: 13, user: "Gitta de Vaan", avatar:"/assets/img/otter14.jpg"},
        {ID: 14, user: "Eefje Gijzen", avatar:"/assets/img/otter15.jpg"},
        {ID: 15, user: "Sven of Bosch", avatar:"/assets/img/otter16.jpg"},
    ],
    fetching: false,
    fetched: false,
    error: null,
}, action){
    switch(action.type){
        case "FETCH_PEOPLE_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_PEOPLE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PEOPLE_FULFILLED": {
            return {...state, fetching: false, fetched: true, people: action.payload.data}
        }
        default: {
            return state;
        }
    }
}