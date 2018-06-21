import openSocket from "socket.io-client"
import React, {Component} from "react"

class StreamVideo extends Component {
    socket = null
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

        const player = new window.JSMpeg.Player("pipe",{
            canvas: this.refs["videocanvas_"+this.props.stream._id]
        })

        this.socket.on("h264", function (data) {
            player.write(data.buffer)
        })
    }
    componentWillUnmount() {
        try {
            this.socket.emit('disconnect')
            this.socket._onDisconnect()
        }
        catch (e) {

        }
    }
    render() {
        return (
            <canvas style={{backgroundColor:"black"}} ref={"videocanvas_"+this.props.stream._id}></canvas>
        )
    }
}

export default StreamVideo