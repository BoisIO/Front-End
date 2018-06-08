import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'

class StreamContainer extends Component {
    render() {
        return (
            <div className="card streamcontainer">
                <div className="card-image">
                    <StreamVideo stream={this.props.stream}/>
                </div>
                <div className="center">
                    ::: Chat :::
                </div>
                <div className="chatboxcontainer">
                    <ChatBoxContainer stream={this.props.stream}/>
                </div>
            </div>
        )
    }
}

export default StreamContainer;