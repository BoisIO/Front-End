export default function reducer(state = {
    streams: [
        {ID: 0, viewers: 0, slogan: "This is an example slogan because I say so", title: "Wouter Jansen", imagesource:"/assets/img/otter1.jpg"},
        {ID: 1, viewers: 0, slogan: "This is an example slogan because I say so", title: "Timo Viveen", imagesource:"/assets/img/otter2.jpg"},
        {ID: 2, viewers: 0, slogan: "This is an example slogan because I say so", title: "Gerben Droogers", imagesource:"/assets/img/otter3.jpg"},
        {ID: 3, viewers: 0, slogan: "This is an example slogan because I say so", title: "Patrick van Batenburg", imagesource:"/assets/img/otter4.jpg"},
        {ID: 4, viewers: 0, slogan: "This is an example slogan because I say so", title: "Maarten van der Heijden", imagesource:"/assets/img/otter5.jpg"},
        {ID: 5, viewers: 0, slogan: "This is an example slogan because I say so", title: "Thijmen Boot", imagesource:"/assets/img/otter6.jpg"},
        {ID: 6, viewers: 0, slogan: "This is an example slogan because I say so", title: "Okke Trommelen", imagesource:"/assets/img/otter7.jpg"},
        {ID: 7, viewers: 0, slogan: "This is an example slogan because I say so", title: "Rowin van Blokland", imagesource:"/assets/img/otter8.jpg"},
        {ID: 8, viewers: 0, slogan: "This is an example slogan because I say so", title: "Erco Argante", imagesource:"/assets/img/otter9.jpg"},
        {ID: 9, viewers: 0, slogan: "This is an example slogan because I say so", title: "Robin Schellius", imagesource:"/assets/img/otter10.jpg"},
        {ID: 10, viewers: 0, slogan: "This is an example slogan because I say so", title: "Ruud Hermans", imagesource:"/assets/img/otter11.jpg"},
        {ID: 11, viewers: 0, slogan: "This is an example slogan because I say so", title: "Arno Broeders", imagesource:"/assets/img/otter12.jpg"},
        {ID: 12, viewers: 0, slogan: "This is an example slogan because I say so", title: "Frank Tempelman", imagesource:"/assets/img/otter13.jpg"},
        {ID: 13, viewers: 0, slogan: "This is an example slogan because I say so", title: "Gitta de Vaan", imagesource:"/assets/img/otter14.jpg"},
        {ID: 14, viewers: 0, slogan: "This is an example slogan because I say so", title: "Eefje Gijzen", imagesource:"/assets/img/otter15.jpg"},
        {ID: 15, viewers: 0, slogan: "This is an example slogan because I say so", title: "Sven of Bosch", imagesource:"/assets/img/otter16.jpg"},
    ],
    fetching: false,
    fetched: false,
    error: null,
    searchword: ""
}, action){
    switch(action.type){
        case "FETCH_STREAMS_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_STREAMS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_STREAMS_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: action.payload.data}
        }
        case "SEARCH_STREAMS": {
            return {...state, searchword: action.payload}
        }
        default: {
            return state;
        }
    }
}