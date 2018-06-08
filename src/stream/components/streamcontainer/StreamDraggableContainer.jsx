import React, {Component} from 'react'
import Draggable from 'react-draggable'
import StreamContainer from './StreamContainer'

class StreamDraggableContainer extends Component {
    render() {
        return (
            <Draggable handle=".handle" defaultPosition={{x: 10, y: 10 }}>
                <div className="card" style={{backgroundColor: "#263238", zIndex: 10}}>
                    <div style={{color: "white", width: "100%", position: "relative"}}>
                        <div className="handle" style={{position: "absolute", top: 0, left: 0, right: 0}}>::::::::::::</div>
                        <div style={{width:"100%",position:"absolute", left:0, right: "auto", color: "red", top: 0}}>X</div>
                    </div>
                    <StreamContainer stream={this.props.stream}/>
                </div>
            </Draggable>
        )
    }
}

export default StreamDraggableContainer;