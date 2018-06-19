import React, {Component} from 'react'
import openSocket from 'socket.io-client'
import JSMpeg from 'jsmpeg-player'

class StreamVideo extends Component {
    componentDidMount() {
        const canvas = this.refs.videoplayer

        const socket = openSocket('http://145.49.55.236:8001/')
        const self = this
        socket.on('connect',function(){
            socket.emit('f', {
                function:'getStream',
                feed: self.props.stream._id
            })
        })

        const player = new JSMpeg.Player('pipe',{
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