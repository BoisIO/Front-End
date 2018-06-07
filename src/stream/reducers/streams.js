export default function reducer(state = {
    streams: [
        {ID: 0, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 1, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 2, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 3, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 4, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 5, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
        {ID: 6, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
    ],
    fetching: false,
    fetched: false,
    error: null
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
        default: {
            return state;
        }
    }
}