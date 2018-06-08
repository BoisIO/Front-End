import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize'
import SearchBar from '../../../ui/components/searchbar/SearchBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './StreamCardDeck.css'


class StreamCardDeck extends Component {
    render() {
        return (
            <div>
                <Row>
                    <SearchBar/>
                </Row>
                <Row>
                    <TransitionGroup>
                        {this.props.streams.streams.filter(e => e.title.trim().toLowerCase().includes(this.props.streams.searchword.trim().toLowerCase())).map(item =>
                            <CSSTransition key={item.ID} timeout={500} classNames="fade">
                                <Col s={12} m={6} l={3}> 
                                    <StreamThumbnail title={item.title} imagesource={item.imagesource} imagealt={item.imagealt}/>
                                </Col>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(StreamCardDeck);