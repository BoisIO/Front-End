import openSocket from "socket.io-client"
import React, {Component} from "react"

class StreamVideo extends Component {
    socket = null
    player = null
    componentDidMount(){
        console.log("http://145.49.53.161:"+this.props.stream.Port+"/")
        this.socket = openSocket("http://145.49.53.161:"+this.props.stream.Port+"/")
        //const socket = openSocket("http://145.49.55.236:"+this.props.stream.Port+"/")
        const self = this
        this.socket.on("connect",function(){
            self.socket.emit("f", {
                function:"getStream"
            })
        })

        this.player = new window.JSMpeg.Player(this.props.stream._id,{
            canvas: this.refs["videocanvas_"+this.props.stream._id]
        })

        this.socket.on("h264", function (data) {
            self.player.write(data.buffer)
        })
    }
    componentWillUnmount() {
        try {
            this.socket.emit('disconnect')
            this.socket._onDisconnect()
        }
        catch (e) {

        }
        this.player.isPlaying = false
    }
    render() {
        console.log('Done this: '+this.socket)
        return (
            <canvas style={{backgroundColor:"black"}} ref={"videocanvas_"+this.props.stream._id}></canvas>
        )
    }
}

export default StreamVideo