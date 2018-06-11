import axios from "../../axios";

export function getChat(){
    return {
        type: "FETCH_STREAMCHAT",
        payload: axios.get("http://server.com")
    }
}

export function sendChatMessage(message, user, stream){
    // return {
    //     type: "SEND_STREAMCHAT",
    //     payload: axios.get("http://server.com"),
    //     meta: {
    //         user: user,
    //         message: message
    //     }
    // }
    return {
        type: "SEND_STREAMCHAT_FULFILLED",
        // payload: axios.get("http://server.com"),
        meta: {
            user: user,
            message: message,
            stream: stream
        }
    }
}