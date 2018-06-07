import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';
import {connect} from 'react-redux';

class StreamCardDeck extends Component {
    render() {
        return (
            <div className="row">
                    {this.props.streams.streams.map(item =>
                    <div key={item.ID} className="col s2"> 
                        <StreamThumbnail title={item.title} imagesource={item.imagesource} imagealt={item.imagealt}/>
                    </div>
                    )}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamCardDeck);