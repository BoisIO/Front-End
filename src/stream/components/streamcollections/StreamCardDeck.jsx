import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize'

class StreamCardDeck extends Component {
    render() {
        return (
            <Row>
                {this.props.streams.streams.map(item =>
                    <Col s={2} key={item.ID}> 
                        <StreamThumbnail title={item.title} imagesource={item.imagesource} imagealt={item.imagealt}/>
                    </Col>
                )}
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamCardDeck);