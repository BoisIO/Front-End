import axios from "../../axios";

export function getChat(stream){
    return {
        type: "FETCH_STREAMCHAT",
        payload: axios.get("http://back3ndb0is.herokuapp.com/chat/"+stream),
        meta: {
            streamID: stream
        }
    }
}

export function sendChatMessage(message, user, stream){
    console.log(message)
    return {
        type: "SEND_STREAMCHAT_FULFILLED",
        payload: axios.post("http://back3ndb0is.herokuapp.com/chat/"+stream._id, {
            content: message
        }),
        meta: {
            user: user,
            message: message,
            stream: stream
        }
    }
}