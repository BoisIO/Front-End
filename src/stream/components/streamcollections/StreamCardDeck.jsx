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
                {this.props.fetching?<div className="center">
                    Fetching streamdata... please wait a few seconds
                </div>:null}
                <TransitionGroup>
                    {this.props.streams
                        .filter(stream => this.props.userspecific === undefined || this.props.userspecific === stream.User._id)
                        .filter(stream => {
                            return stream.User.Name.trim().toLowerCase().includes(this.props.searchword.trim().toLowerCase()) || stream.User.Slogan.trim().toLowerCase().includes(this.props.searchword.trim().toLowerCase())
                        })
                        .sort((a,b) => {
                            switch(this.props.page) {
                                default: 
                                    return a>b
                                case "popular":
                                    return a.Viewers > b.Viewers
                                case "discover":
                                    return a.Viewers < b.Viewers
                            }
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
    return {streams: store.streams.streams, searchword: store.streams.searchword, fetching: store.streams.fetching};
}
export default connect(mapStateToProps)(StreamCardDeck);
