export default function reducer(state = {
    streams: [],
    fetching: false,
    fetched: false,
    error: null,
    searchword: ""
}, action){
    switch(action.type){

        // Retrieving streams
        case "FETCH_STREAMS_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_STREAMS_REJECTED": {
            
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_STREAMS_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: action.payload.data.map(stream => {return {...stream, messages: [], chattimestamp: 0}})}
        }

        // Searching streams
        case "SEARCH_STREAMS": {
            return {...state, searchword: action.payload}
        }

        // Default
        default: {
            return state;
        }
    }
}