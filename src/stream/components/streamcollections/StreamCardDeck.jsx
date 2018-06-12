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
                    {this.props.streams.filter(stream => this.props.userspecific === undefined || this.props.userspecific === stream.title).filter(e => e.title.trim().toLowerCase().includes(this.props.streams.searchword.trim().toLowerCase())).map(item =>
                        <CSSTransition key={item.ID} timeout={500} classNames="fade">
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
    return store.streams;
}
export default connect(mapStateToProps)(StreamCardDeck);
