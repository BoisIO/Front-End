import React, {Component} from 'react'
import openSocket from 'socket.io-client'
import JSMpeg from 'jsmpeg-player'

class StreamVideo extends Component {
    componentWillMount() {
        const canvas = this.refs.videoplayer
        const socket = openSocket('http://back3ndb0is.herokuapp.com/streams/socket')
        const self = this
        socket.on('connect',function(){
            socket.emit('f', {
                function:'getStream',
                feed: self.props.stream._id
            })
        })

        var player = new JSMpeg.Player('pipe',{
            canvas:canvas
        });

        socket.on('h264', function (data) {
            player.write(data.buffer)
        });
    }
    render() {
        return (
            <canvas id="canvas" height="200" width="200" ref="videoplayer"></canvas>
        )
    }
}

export default StreamVideo;