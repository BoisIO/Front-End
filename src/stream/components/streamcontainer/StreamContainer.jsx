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
                <div className="chatboxcontainer">
                    <ChatBoxContainer stream={this.props.stream}/>
                </div>
                <div class="chat-send input-field">
                    <input type="text" id="message" class="materialize-textarea" data-length="120" placeholder="Say something..."></input>
                </div>
            </div>
        )
    }
}

export default StreamContainer;