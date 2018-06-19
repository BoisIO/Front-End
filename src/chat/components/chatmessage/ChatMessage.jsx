import React, {Component} from 'react'
import { Chip } from 'react-materialize'
import moment from 'moment'
import './ChatMessage.css'

class ChatMessage extends Component {
    absoluteDateTime(time) {
        return moment(time).format("LLL")
    }
    absoluteTime(time) {
        return moment(time).format("LT")
    }
    render() {
        return (
            <li className="collection-item">
                <div>
                    <div className="left">
                        <div className="chip">
                            <img src={this.props.message.User.Avatar || "/assets/img/404.png"} alt=""/>
                            <span className="username truncate" title={this.props.message.User.Name}>{this.props.message.User.Name}</span>
                            {this.props.message.User.Transparant ? <i className="verified material-icons">check</i> : null}
                        </div>
                    </div>
                    <span className="text-muted chat-timestamp right" title={this.absoluteDateTime(this.props.message.Date)}>{this.absoluteTime(this.props.message.Date)}</span>
                    <div className="clear" />
                </div>
                {this.props.message.Content}
            </li>
        )
    }
}

export default ChatMessage;