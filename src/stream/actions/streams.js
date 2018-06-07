import axios from "../../axios";

export function getStreams(){
    return {
        type: "FETCH_STREAMS",
        payload: axios.get("http://server.com")
    }
}