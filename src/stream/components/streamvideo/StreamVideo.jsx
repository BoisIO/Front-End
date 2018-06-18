import React, {Component} from 'react'

class StreamContainer extends Component {
    render() {
        return (
            <video autoPlay loop controls style={{backgroundColor: "#263238", color: "white"}}>
                <source src="/assets/video/otterdance.mp4" type="mp4"/>
                Your browser does not support the VIDEO tag and/or RTP streams.
            </video>
        )
    }
}

export default StreamContainer;