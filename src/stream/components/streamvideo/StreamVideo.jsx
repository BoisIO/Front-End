import React, {Component} from 'react'

class StreamContainer extends Component {
    render() {
        return (
            <video autoPlay loop controls style={{backgroundColor: "#263238", color: "white"}}>
                {/* <source src={this.props.stream.Source} type="video/mp4"/> */}
                <source src="rtsp://mpv.cdn3.bigCDN.com:554/bigCDN/mp4:bigbuckbunnyiphone_400.mp4" type="application/x-rtsp"/>
                Your browser does not support the VIDEO tag and/or RTP streams.
            </video>
        )
    }
}

export default StreamContainer;