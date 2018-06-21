import openSocket from "socket.io-client"
import React, {Component} from "react"
import {JSMpeg} from './jsmpeg'

class StreamVideo extends Component {
    // socket = null
    // player = null
    // componentDidMount(){
    //     console.log("http://145.49.53.161:"+this.props.stream.Port+"/")
    //     this.socket = openSocket("http://145.49.53.161:"+this.props.stream.Port+"/")
    //     //const socket = openSocket("http://145.49.55.236:"+this.props.stream.Port+"/")
    //     const self = this
    //     this.socket.on("connect",function(){
    //         self.socket.emit("f", {
    //             function:"getStream"
    //         })
    //     })
    //     this.player = new JSMpeg.Player(this.props.stream._id,{
    //         canvas: this.refs["videocanvas_"+this.props.stream._id]
    //     })
    //     this.socket.on("h264", function (data) {
    //         console.log("This is stream %s en we're receiving data from %s",self.props.stream.User._id, data.stream)
    //         if(data.stream === self.props.stream.User._id) {
    //             self.player.write(data.buffer)
    //         }
    //     })
    // }
    // componentWillUnmount() {
    //     this.socket.emit('end', () => {
    //         this.player = null
    //     })
    // }
    render() {
        return (
            <iframe src={"http://145.49.53.161:" + this.props.stream.Port} frameBorder="0" style={{background: "#000"}}></iframe>
        )
    }
}

export default StreamVideo