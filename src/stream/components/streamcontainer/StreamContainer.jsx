import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'

class StreamContainer extends Component {
    render() {
        return (
            <div className="streamcontainer">
                <StreamVideo stream={this.props.stream}/>
                <div className="chatboxcontainer">
                    <ChatBoxContainer stream={this.props.stream}/>
                </div>
            </div>
        )
    }
}

export default StreamContainer;