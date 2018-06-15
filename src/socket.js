import openSocket from 'socket.io-client';
import {signToken, verify} from './signatures'

let socket

function open() {
    socket = openSocket('http://back3ndb0is.herokuapp.com/chat/socket');
    //socket = openSocket('http://localhost:5000/chat/socket');
}

function subscribeToChat(cb) {
    open()
    socket.on('MESSAGE', data => {
        if(verify(JSON.stringify(data.Content), data.Signature)) {
            cb(data)
        } else {
            alert('Received dirty data from server!')
        }
    });
}

function sendMessage(message, username, stream, userkey) {
    socket.emit("MESSAGE_SEND", {
        content: message,
        username: username,
        stream: stream,
        signature: signToken(message, localStorage.getItem('_certificate')),
        userkey: userkey
    })
}

function disconnect() {
    socket.emit("end")
}
export { subscribeToChat, sendMessage, disconnect, open };