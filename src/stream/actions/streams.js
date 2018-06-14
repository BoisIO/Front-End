import axios from "../../axios";

export function getStreams(){
    return {
        type: "FETCH_STREAMS",
        payload: axios.get("/streams")
    }
}

export function searchStreams(key) {
    return {
        type: "SEARCH_STREAMS",
        payload: key
    }
}