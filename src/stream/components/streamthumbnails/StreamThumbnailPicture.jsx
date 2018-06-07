import React, {Component} from 'react'

class StreamThumbnailPicture extends Component {
    render() {
        return (
            <img src={this.props.src} className="responsive-img" alt={this.props.alt}/>
        )
    }
}

export default StreamThumbnailPicture