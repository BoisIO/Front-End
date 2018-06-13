import React, {Component} from 'react'

class StreamContainer extends Component {
    render() {
        return (
            <video autoPlay loop controls style={{backgroundColor: "#263238"}}>
                <source src={this.props.stream.Source} type="video/mp4"/>
            </video>
        )
    }
}

export default StreamContainer;