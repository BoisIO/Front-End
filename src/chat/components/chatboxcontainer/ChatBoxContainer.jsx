import React, {Component} from 'react'
import ChatMessage from '../../../chat/components/chatmessage/ChatMessage'

class ChatBoxContainer extends Component {
    render() {
        return (
            <ul class="collection">
                {this.props.stream.messages.map(item => <ChatMessage />)}
            </ul>
        )
    }
}

export default ChatBoxContainer;