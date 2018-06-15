import openSocket from 'socket.io-client';
import {signToken} from './signatures'

let socket

function open() {
    socket = openSocket('http://localhost:5000/chat/socket');
}

function subscribeToChat(cb) {
    open()
    socket.on('MESSAGE', data => {
      cb(data)
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