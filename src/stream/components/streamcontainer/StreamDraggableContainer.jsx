import React, {Component} from 'react'
import StreamContainer from './StreamContainer'
import {connect} from 'react-redux';
import {removeStreamFromUser} from '../../../authentication/actions/user'
import Rnd from 'react-rnd'
import './StreamDraggableContainer.css'
import { getChat, loadMessage } from '../../../chat/actions/chat';

import { subscribeToChat, disconnect as disconnectChat, subscribeToViewerCount } from '../../../socket'
import { loadViewers, loadViewersOnLeave } from '../../actions/streams';

class StreamDraggableContainer extends Component {

    constructor(props) {
        super(props)
        subscribeToChat(props.stream._id, (data) => {
            props.dispatch(loadMessage(data))
        })
        subscribeToViewerCount(data => {
            props.dispatch(loadViewers(data))
        })
        this.closeWindow = this.closeWindow.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(getChat(this.props.stream))
    }

    closeWindow(e) {
        disconnectChat()
        this.props.dispatch(loadViewersOnLeave(this.props.stream._id))
        this.props.dispatch(removeStreamFromUser(this.props.stream, e))
    }

    render() {
        return (
            <Rnd bounds="body" default={{x: this.props.x/2, y: this.props.y/2, height: 600, width: 330}} minWidth={300} minHeight={180} maxHeight={950} maxWidth={900} lockAspectRatio={false} dragHandleClassName=".handle">
                <div className="card draggablecontainer" style={{margin: 0}}>
                    <div className="streamcontainercontrols">
                        <span className="handle streamcontainercontrolsdrag">:::::::</span>
                        <span className="streamcontainercontrolsclose" onClick={this.closeWindow}>X</span>
                        <span className="streamcontainercontrolstitle" >{this.props.stream.User.Name}</span>
                    </div>
                    <StreamContainer stream={this.props.stream}/>
                </div>
            </Rnd>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamDraggableContainer);