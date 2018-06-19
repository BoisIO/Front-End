import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ChatMessage from '../../../chat/components/chatmessage/ChatMessage'

class ChatBoxContainer extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div>
                <ul id="chat-messages" className="collection" style={{overflowY: 'scroll', margin: '0', maxHeight: "250px"}}>
                    {this.props.stream.messages.slice(Math.max(this.props.stream.messages.length - 50, 1)).map((item, key) => <ChatMessage key={key} message={item} />)}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                    <span ref={"bottom_"+this.props.stream.ID} style={{height: "100px"}}></span>
                </ul>
            </div>
        )
    }
}

export default ChatBoxContainer;