import React, {Component} from 'react'

class StreamContainer extends Component {
    render() {
        return (
            <video autoPlay loop controls style={{backgroundColor: "#263238"}}>
                <source src="/assets/video/otterdance.mp4" type="video/mp4"/>
                <source src="/assets/video/otterdance.webm" type="video/webm"/>
            </video>
        )
    }
}

export default StreamContainer;