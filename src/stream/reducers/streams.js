export default function reducer(state = {
    streams: [
        {ID: 0, title: "Wouter Jansen", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 1, title: "Timo Viveen", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 2, title: "Gerben Droogers", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 3, title: "Patrick van Batenburg", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 4, title: "Maarten van der Heijden", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 5, title: "Thijmen Boot", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 6, title: "Okke Trommelen", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
        {ID: 7, title: "Rowin van Blokland", imagesource:"https://source.unsplash.com/random", imagealt:"Superpenguin"},
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