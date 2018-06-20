import React, {Component} from 'react'

class StreamVideo extends Component {
    componentDidMount(){
        const canvas = this.refs.videoplayer

        const socket = window.io('http://145.49.55.236:8001')
        const self = this
        socket.on('connect',function(){
            socket.emit('f', {
                function:'getStream',
                feed: self.props.stream._id
            })
        })

        const player = new window.JSMpeg.Player('pipe',{
            canvas:canvas
        });

        socket.on('h264', function (data) {
            player.write(data.buffer)
        });
    }
    shouldComponentUpdate() { return false }
    render() {
        return (
            <canvas style={{backgroundColor:"black"}} height="200" width="200" ref="videoplayer"></canvas>
        )
    }
}

export default StreamVideo;