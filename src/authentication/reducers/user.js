export default function reducer(state = {
    openstreams: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "ADD_STREAM": {
            return {...state, openstreams: state.openstreams.concat(action.payload)}
        }
        default: {
            return state;
        }
    }
}