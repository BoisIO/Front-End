import React, {Component} from 'react'
import StreamContainer from './StreamContainer'
import {connect} from 'react-redux';
import {removeStreamFromUser} from '../../../authentication/actions/user'
import Rnd from 'react-rnd'
import './StreamDraggableContainer.css'

class StreamDraggableContainer extends Component {
    render() {
        return (
            <Rnd bounds="body" default={{x: this.props.x/2, y: this.props.y/2, height: 600, width: 300}} minWidth={200} minHeight={50} maxHeight={900} maxWidth={900} lockAspectRatio={false} dragHandleClassName=".handle">
                <div className="card draggablecontainer">
                    <div className="streamcontainercontrols">
                        <span className="handle streamcontainercontrolsdrag">:::::::</span>
                        <span className="streamcontainercontrolsclose" onClick={(e) => this.props.dispatch(removeStreamFromUser(this.props.stream, e))}>X</span>
                        <span className="streamcontainercontrolstitle" >{this.props.stream.title}</span>
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