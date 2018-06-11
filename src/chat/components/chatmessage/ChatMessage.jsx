import React, {Component} from 'react'
import { Chip } from 'react-materialize'

class ChatMessage extends Component {
    render() {
        return (
            <li className="collection-item">
                <span>
                    <Chip>
                        <img src={this.props.message.userimage} alt={"Avatar of " + this.props.message.user} />
                        {this.props.message.user + (this.props.message.is_verified ? " ✔" : "")}
                    </Chip>
                    {this.props.message.message}
                </span>
            </li>
        )
    }
}

export default ChatMessage;