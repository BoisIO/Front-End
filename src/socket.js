import openSocket from 'socket.io-client';
import {signToken, verify} from './signatures'

let socket

function open(stream) {
    //socket = openSocket('http://back3ndb0is.herokuapp.com/chat/socket', {
    socket = openSocket('http://localhost:5000/chat/socket', {
        query: {
            stream: stream
        }
    });
}

function subscribeToChat(stream, cb) {
    open(stream)
    socket.on('MESSAGE', data => {
        const Signature = data.Signature
        delete data.Signature
        if(verify(JSON.stringify(data), Signature)) {
            cb(data)
        } else {
            alert('Received dirty data from server!')
        }
    });
}

function subscribeToViewerCount(cb) {
    socket.on('VIEWERS', data => {
        const Signature = data.Signature
        delete data.Signature
        if(verify(JSON.stringify(data), Signature)) {
            cb(data)
        }
    })
}

function sendMessage(message, username, stream, userkey) {
    let packet = {
        content: message,
        username: username,
        stream: stream,
        userkey: userkey
    }
    packet.signature = signToken(JSON.stringify(packet), localStorage.getItem('_certificate'))
    socket.emit("MESSAGE_SEND", packet)
}

function disconnect() {
    socket.emit("end")
}
export { subscribeToChat, sendMessage, disconnect, open, subscribeToViewerCount };