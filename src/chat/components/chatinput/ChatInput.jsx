import React, {Component} from 'react'
import {connect} from 'react-redux';
import { sendChatMessage } from '../../../chat/actions/chat'

class ChatInput extends Component {
    constructor() {
        super()
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event) {
        if(event.key === 'Enter'){
          this.props.dispatch(sendChatMessage(event.target.value, "Wouter Jansen", this.props.stream))
        }
      }
    render() {
        return (
            <div className="chat-send input-field">
                <input type="text" onKeyPress={this.handleEnter} id="message" className="materialize-textarea" data-length="120" placeholder="Say something..."></input>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(ChatInput);