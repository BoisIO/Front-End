import React, { Component } from 'react'
import StreamCardDeck from '../../../stream/components/streamcollections/StreamCardDeck'
import {Row, Col} from 'react-materialize'
import StreamNavigation from '../navigation/StreamNavigation';
import SearchBar from '../../../ui/components/searchbar/SearchBar'

class StreamPage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={12} m={12} l={2}>
                        <StreamNavigation page={this.props.match.params.subpage} />
                    </Col>
                    <Col s={12} m={12} l={10}>
                        <SearchBar/>
                        <StreamCardDeck page={this.props.match.params.subpage} />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default StreamPage;
