import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ChatMessage from '../../../chat/components/chatmessage/ChatMessage'

class ChatBoxContainer extends Component {
    componentDidUpdate() {
        const bottom = ReactDOM.findDOMNode(this.refs["bottom_"+this.props.stream.ID])
        bottom.scrollIntoView(true);
    }
    render() {
        return (
            <div>
                <ul className="collection" style={{overflowY: 'scroll', margin: '0'}}>
                    {this.props.stream.messages.map((item, key) => <ChatMessage key={key} message={item} />)}
                    <span ref={"bottom_"+this.props.stream.ID} style={{height: "100px"}}></span>
                </ul>
            </div>
        )
    }
}

export default ChatBoxContainer;