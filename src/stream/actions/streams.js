import axios from "../../axios";

export function getStreams(){
    return {
        type: "FETCH_STREAMS",
        payload: axios.get("http://server.com")
    }
}

export function searchStreams(key) {
    return {
        type: "SEARCH_STREAMS",
        payload: key
    }
}