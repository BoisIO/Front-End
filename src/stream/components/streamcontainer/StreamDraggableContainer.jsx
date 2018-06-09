import React, {Component} from 'react'
import StreamContainer from './StreamContainer'
import {connect} from 'react-redux';
import {removeStreamFromUser} from '../../../authentication/actions/user'
import Rnd from 'react-rnd'
import './StreamDraggableContainer.css'

class StreamDraggableContainer extends Component {
    render() {
        return (
            <Rnd default={{x: this.props.event.x/2, y: this.props.event.y/2, width: 300, height: 300}} minWidth={200} minHeight={200} maxHeight={750} maxWidth={750} dragHandleClassName=".handle">
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