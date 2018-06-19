import React, {Component} from 'react'
import { Chip } from 'react-materialize'
import moment from 'moment'
import './ChatMessage.css'

class ChatMessage extends Component {
    timeAgo(time) {
        return moment(time).format("LT")
    }
    render() {
        return (
            <li className="collection-item">
                <div>
                    <div className="left">
                        <div class="chip">
                            <img src={this.props.message.User.Avatar || "/assets/img/404.png"} alt=""/>
                            <span className="username truncate">{this.props.message.User.Name}</span>
                            {this.props.message.User.Transparant ? <i class="verified material-icons">check</i> : null}
                        </div>
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