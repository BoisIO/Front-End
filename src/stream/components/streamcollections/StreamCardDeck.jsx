import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';
import {Row, Col} from 'react-materialize'
import SearchBar from '../../../ui/components/searchbar/SearchBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './StreamCardDeck.css'


class StreamCardDeck extends Component {
    render() {
        console.log(this.props.streams)
        return (
            <div>
                <Row>
                    <SearchBar/>
                </Row>
                <Row>
                    <TransitionGroup>
                        {this.props.streams.filter(e => e.title.trim().toLowerCase().includes(this.props.searchword.trim().toLowerCase())).map(item =>
                            <CSSTransition key={item.ID} timeout={500} classNames="fade">
                                <Col s={12} m={6} l={3}> 
                                    <StreamThumbnail stream={item}/>
                                </Col>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </Row>
            </div>
        )
    }
}

export default StreamCardDeck