export default function reducer(state = {
    openstreams: [],
    fetching: false,
    fetched: false,
    error: null,
    authenticated: true,
    user: {user: "Otterly Adowable", userimage: "/assets/img/otter2.jpg", message: "Hi", is_verified: true}
}, action){
    switch(action.type){
        case "USER_LOGIN": {
            return state
        }
        case "ADD_STREAM": {
            if(state.openstreams.map(streamobject => streamobject.stream.ID).filter(streamobject => streamobject === action.payload.stream.ID).length >= 1) return state
            if(state.openstreams.length < 4) return {...state, openstreams: state.openstreams.concat(action.payload)}
            else return state;

            /* Hier moet iets van een melding die aangeeft dat je er maar 4 max mag hebben */
        }
        case "REMOVE_STREAM": {
            return {...state, openstreams: state.openstreams.filter(e => e.stream.ID !== action.payload.stream.ID)}
        }
        default: {
            return state;
        }
    }
}