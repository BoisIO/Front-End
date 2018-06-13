import axios from "../../axios";

export default function reducer(state = {
    openstreams: [],
    fetching: false,
    fetched: false,
    error: null,
    authenticated: false,
    user: {user: "Otterly Adowable", userimage: "/assets/img/otter2.jpg", message: "Hi", is_verified: true}
}, action){
    switch(action.type){
        // User
        case "USER_LOGIN_PENDING": {
            return {...state, fetching: true}
        }
        case "USER_LOGIN_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "USER_LOGIN_FULFILLED": {
            /* Dit is tijdelijk */
            axios.defaults.headers['Token'] = action.payload.headers.token || action.payload.headers.Token
            return {...state, fetching: false, fetched: true, authenticated: true}
        }

        case "ADD_STREAM": {
            if(state.openstreams.map(streamobject => streamobject.stream._id).filter(streamobject => streamobject === action.payload.stream._id).length >= 1) return state
            if(state.openstreams.length < 4) return {...state, openstreams: state.openstreams.concat(action.payload)}
            else return state;

            /* Hier moet iets van een melding die aangeeft dat je er maar 4 max mag hebben */
        }
        case "REMOVE_STREAM": {
            return {...state, openstreams: state.openstreams.filter(e => e.stream.ID !== action.payload.stream.ID)}
        }

         // Retrieving chatmessages
         case "FETCH_STREAMCHAT_PENDING": {
            return {...state, fetching: true}
        }
        case "FETCH_STREAMCHAT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_STREAMCHAT_FULFILLED": {
            return {...state, fetching: false, fetched: true, streams: state.openstreams.map((stream, key) => {
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
            return {...state, fetching: false, fetched: true, streams: state.openstreams.map((stream, key) => {
                let streamitem = stream.stream;
                if (streamitem._id === action.meta.stream._id) {
                    streamitem.messages.push({
                        ...action.meta.user, 
                        message: action.meta.message,
                    })
                }
                return streamitem
            })}
        }

        default: {
            return state;
        }
    }
}