import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'

class StreamContainer extends Component {
    render() {
        return (
            <div className="streamcontainer">
                <StreamVideo stream={this.props.stream}/>
                <div className="chatboxcontainer" style={{height:"80%"}}>
                    <ChatBoxContainer stream={this.props.stream}/>
                </div>
                <div class="chat-send input-field" style={{height: "20%"}}>
                    <input type="text" id="message" class="materialize-textarea" data-length="120" placeholder="Say something..."></input>
                </div>
            </div>
        )
    }
}

export default StreamContainer;