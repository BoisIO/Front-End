import React, {Component} from 'react'
import openSocket from 'socket.io-client'

class StreamVideo extends Component {
    componentDidMount(){
        const socket = openSocket('http://145.49.55.236:8001')
        socket.on('connect',function(){
            socket.emit('f', {
                function:'getStream'
            })
        })

        const player = new window.JSMpeg.Player('pipe',{
            canvas: this.refs['videocanvas_'+this.props.stream._id]
        });

        socket.on('h264', function (data) {
            player.write(data.buffer)
        });
    }
    render() {
        return (
            <canvas style={{backgroundColor:"black"}} ref={"videocanvas_"+this.props.stream._id}></canvas>
        )
    }
}

export default StreamVideo;