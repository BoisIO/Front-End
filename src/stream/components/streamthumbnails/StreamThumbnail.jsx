import React, {Component} from 'react'
import StreamThumbnailPicture from './StreamThumbnailPicture'
import {connect} from 'react-redux'
import {addStreamToUser} from '../../../authentication/actions/user'

import './StreamThumbnail.css'

class StreamThumbnail extends Component {
    render() {
        return (
            <div className="card openstream" onClick={(e) => this.props.dispatch(addStreamToUser(this.props.stream, e.target.x, e.target.y))}>
                <div className="card-image">
                    <StreamThumbnailPicture src={this.props.stream.User.Avatar} alt={"Avatar of "+this.props.stream.User.User}/>
                </div>
                <div className="card-content">
                    <p className="text-title">{this.props.stream.User.Name}</p>
                    <p className="text-slogan">{this.props.stream.User.Slogan}</p>
                    <p className="text-muted">{this.props.stream.Viewers} followers</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamThumbnail);