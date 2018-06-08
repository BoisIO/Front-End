//import axios from "../../axios";

export function addStreamToUser(stream, event){
    return {
        type: "ADD_STREAM",
        payload: {stream: stream, event: event}
    }
}

export function removeStreamFromUser(stream, event){
    return {
        type: "REMOVE_STREAM",
        payload: {stream: stream, event: event}
    }
}