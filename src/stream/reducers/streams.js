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
            console.error(action.payload)
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_STREAMS_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: action.payload.data.map(stream => {return {...stream, messages: []}})}
        }

        // Retrieving chatmessages
        case "FETCH_STREAMCHAT_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_STREAMCHAT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_STREAMCHAT_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: state.streams.map((stream, key) => {
                let streamitem = stream;
                if (stream._id === action.meta.streamID) {
                    streamitem.messages = action.payload.data
                }
                return streamitem
            })}
        }

        // Sending chatmesssages
        case "SEND_STREAMCHAT_PENDING": {
            return {...state, fetching: true}
        }
        case "SEND_STREAMCHAT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "SEND_STREAMCHAT_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: state.streams.map((stream, key) => {
                let streamitem = stream;
                if (stream.ID === action.meta.stream.ID) {
                    streamitem.messages.push({
                        ...action.meta.user, 
                        message: action.meta.message,
                    })
                }
                return streamitem
            })}
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