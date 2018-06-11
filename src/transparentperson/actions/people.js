import axios from "../../axios";

export function getPeople(){
    return {
        type: "FETCH_PEOPLE",
        payload: axios.get("http://server.com")
    }
}