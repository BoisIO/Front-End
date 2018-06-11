import React, {Component} from 'react'
import { Chip } from 'react-materialize'
import './ChatMessage.css'

class ChatMessage extends Component {
    render() {
        return (
            <li className="collection-item">
                <div>
                    <div className="left">
                        <Chip>
                            <img src={this.props.message.userimage} alt={"Avatar of " + this.props.message.user} />
                            {this.props.message.user + (this.props.message.is_verified ? " ✔" : "")}
                        </Chip>
                    </div>
                    <span className="text-muted chat-timestamp right">11:53 am</span>
                    <div className="clear" />
                </div>
                {this.props.message.message}
            </li>
        )
    }
}

export default ChatMessage;