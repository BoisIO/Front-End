import React, {Component} from 'react'
import StreamDraggableContainer from './StreamDraggableContainer'
import {connect} from 'react-redux';

class StreamPageContainer extends Component {
    render() {
        return (
            <div style={{position:"fixed", zIndex: 10}}>
                {this.props.user.openstreams.map((item, key) => 
                    <StreamDraggableContainer stream={item.stream} event={item.event} key={key}/>
                )}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamPageContainer);