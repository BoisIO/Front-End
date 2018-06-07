import React, {Component} from 'react'
import StreamThumbnailPicture from './StreamThumbnailPicture'

class StreamThumbnail extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <StreamThumbnailPicture src={this.props.imagesource} alt={this.props.imagealt}/>
                </div>
                <div className="card-content">
                    <p className="card-text">{this.props.title}</p>
                </div>
            </div>
        )
    }
}

export default StreamThumbnail