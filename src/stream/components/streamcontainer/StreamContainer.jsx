import React, {Component} from 'react'
import ChatBoxContainer from '../../../chat/components/chatboxcontainer/ChatBoxContainer'
import StreamVideo from '../streamvideo/StreamVideo'
import './StreamContainer.css'
import ChatInput from '../../../chat/components/chatinput/ChatInput'
import {connect} from 'react-redux'

class StreamContainer extends Component {
    render() {
        return (
            <div className="streamcontainer">
                <StreamVideo stream={this.props.stream}/>
                <div >
                    <ChatBoxContainer stream={this.props.stream}/>
                    <ChatInput stream={this.props.stream}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamContainer);