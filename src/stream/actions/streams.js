import axios from "../../axios";

export function getStreams(){
    return {
        type: "FETCH_STREAMS",
        payload: axios.get("http://back3ndb0is.herokuapp.com/streams")
            .catch(error => {
                return Promise.reject(error)
            })
    }
}

export function searchStreams(key) {
    return {
        type: "SEARCH_STREAMS",
        payload: key
    }
}