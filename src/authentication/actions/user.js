//import axios from "../../axios";

export function addStreamToUser(stream, x=0, y=0){
    return {
        type: "ADD_STREAM",
        payload: {stream: stream, x: x, y: y}
    }
}

export function removeStreamFromUser(stream, event){
    return {
        type: "REMOVE_STREAM",
        payload: {stream: stream, event: event}
    }
}