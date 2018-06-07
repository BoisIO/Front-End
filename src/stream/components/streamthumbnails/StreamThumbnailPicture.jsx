import React, {Component} from 'react'

import './StreamThumbnailPicture.css'

class StreamThumbnailPicture extends Component {
    render() {
        return (
            <img src={this.props.src} className="responsive-img picfit" alt={this.props.alt}/>
        )
    }
}

export default StreamThumbnailPicture