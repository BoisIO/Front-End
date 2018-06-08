import React, {Component} from 'react'
import Draggable from 'react-draggable'
import StreamContainer from './StreamContainer'

class StreamDraggableContainer extends Component {
    render() {
        return (
            <Draggable handle=".handle" defaultPosition={{x: 10, y: 10 }}>
                <div className="card" style={{backgroundColor: "#263238", zIndex: 10}}>
                    <div style={{color: "white", width: "100%"}}>
                        <div className="handle" style={{backgroundColor: "#263238"}}>::::::</div>
                    </div>
                    <StreamContainer stream={this.props.stream}/>
                </div>
            </Draggable>
        )
    }
}

export default StreamDraggableContainer;