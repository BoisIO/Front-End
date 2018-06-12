import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ChatMessage from '../../../chat/components/chatmessage/ChatMessage'

class ChatBoxContainer extends Component {
    componentDidUpdate() {
        const bottom = ReactDOM.findDOMNode(this.refs.bottom)
        bottom.scrollIntoView(true);
    }
    render() {
        return (
            <ul className="collection" style={{maxHeight: '300px', overflowY: 'scroll', margin: '0'}}>
                {this.props.stream.messages.map((item, key) => <ChatMessage key={key} message={item} />)}
                <span ref="bottom"></span>
            </ul>
        )
    }
}

export default ChatBoxContainer;