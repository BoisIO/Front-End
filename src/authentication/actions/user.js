import axios from '../../axios'

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

export function login(userdata, token) {
    return {
        type: "USER_LOGIN",
        meta: {
            username: userdata,
            token: token
        }
    }
}

export function authenticate(headers, meta) {
    return {
        type: "USER_AUTHENTICATE",
        payload: axios.get('http://certifcation.herokuapp.com/login', {headers: headers, forceUpdate: true}),
        meta: meta
    }
}