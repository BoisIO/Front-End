import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'
import ChatInput from '../../../chat/components/chatinput/ChatInput'
import {Row} from 'react-materialize'
import { getChat } from '../../../chat/actions/chat'
import {connect} from 'react-redux'

class StreamContainer extends Component {
    componentWillMount() {
        this.props.dispatch(getChat(this.props.stream._id))
    }
    render() {
        return (
            <div className="streamcontainer">
                <Row>
                    <StreamVideo stream={this.props.stream}/>
                    <ChatBoxContainer stream={this.props.stream}/>
                    <ChatInput stream={this.props.stream}/>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamContainer);