export default function reducer(state = {
    openstreams: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "ADD_STREAM": {
            if(state.openstreams.map(e => e.stream.ID).filter(e => e === action.payload.stream.ID).length >= 1) return state
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