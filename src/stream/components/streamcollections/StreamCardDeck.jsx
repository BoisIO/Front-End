import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';
import {Row, Col} from 'react-materialize'
import {connect} from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './StreamCardDeck.css'
import { getStreams } from '../../actions/streams';


class StreamCardDeck extends Component {
    componentWillMount() {
        this.props.dispatch(getStreams())
    }
    render() {
        return (
            <Row>
                <TransitionGroup>
                    {this.props.streams
                        .filter(stream => this.props.userspecific === undefined || this.props.userspecific === stream.User)
                        .filter(stream => {
                            return stream.User.Name.trim().toLowerCase().includes(this.props.searchword.trim().toLowerCase()) || stream.User.Slogan.trim().toLowerCase().includes(this.props.searchword.trim().toLowerCase())
                        })
                        .map(item =>
                        <CSSTransition key={item._id} timeout={500} classNames="fade">
                            <Col s={12} m={6} l={3}> 
                                <StreamThumbnail stream={item}/>
                            </Col>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return {streams: store.streams.streams, searchword: store.streams.searchword};
}
export default connect(mapStateToProps)(StreamCardDeck);
