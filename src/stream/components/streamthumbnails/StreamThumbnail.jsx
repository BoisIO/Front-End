import React, {Component} from 'react'
import StreamThumbnailPicture from './StreamThumbnailPicture'
import {connect} from 'react-redux'
import {addStreamToUser} from '../../../authentication/actions/user'

class StreamThumbnail extends Component {
    render() {
        return (
            <div className="card" onClick={(e) => this.props.dispatch(addStreamToUser(this.props.stream, e.target))}>
                <div className="card-image">
                    <StreamThumbnailPicture src={this.props.stream.imagesource} alt={this.props.stream.imagealt}/>
                </div>
                <div className="card-content">
                    <p className="card-text">{this.props.stream.title}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamThumbnail);