import React, {Component} from 'react'
import StreamContainer from './StreamContainer'
import {connect} from 'react-redux';
import {removeStreamFromUser} from '../../../authentication/actions/user'
import Rnd from 'react-rnd'
import './StreamDraggableContainer.css'

class StreamDraggableContainer extends Component {
    render() {
        return (
            <Rnd default={{x: this.props.x/2, y: this.props.y/2, width: 400, height: 200}} minWidth={200} minHeight={150} maxHeight={700} maxWidth={600} lockAspectRatio={false} dragHandleClassName=".handle">
                <div className="card" style={{zIndex: 10}}>
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