import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'
import ChatInput from '../../../chat/components/chatinput/ChatInput'
import {Row} from 'react-materialize'

class StreamContainer extends Component {
    render() {
        return (
            <div className="streamcontainer">
                <Row>
                    <StreamVideo stream={this.props.stream}/>
                    <ChatBoxContainer stream={this.props.stream}/>
                    <ChatInput stream={this.props.stream}/>
                </Row>
            </div>
        )
    }
}

export default StreamContainer;