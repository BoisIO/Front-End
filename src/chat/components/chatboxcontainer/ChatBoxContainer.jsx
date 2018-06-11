import React, {Component} from 'react'
import ChatMessage from '../../../chat/components/chatmessage/ChatMessage'

class ChatBoxContainer extends Component {
    render() {
        return (
            <ul className="collection">
                {this.props.stream.messages.map((item, key) => <ChatMessage key={key} message={item} />)}
            </ul>
        )
    }
}

export default ChatBoxContainer;