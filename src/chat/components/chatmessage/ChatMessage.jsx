import React, {Component} from 'react'
import { Chip } from 'react-materialize'
import moment from 'moment'
import './ChatMessage.css'

class ChatMessage extends Component {
    timeAgo(time) {
        return moment(time).fromNow()
    }
    render() {
        console.log(this.props.message)
        return (
            <li className="collection-item">
                <div>
                    <div className="left">
                        <Chip>
                            <img src={this.props.message.User.Avatar || "/assets/img/404.png"} alt=""/>
                            {this.props.message.User.Name + (this.props.message.User.Transparant ? " ✔" : "")}
                        </Chip>
                    </div>
                    <span className="text-muted chat-timestamp right">{this.timeAgo(this.props.message.Date)}</span>
                    <div className="clear" />
                </div>
                {this.props.message.Content}
            </li>
        )
    }
}

export default ChatMessage;