import React, { Component } from 'react'
import StreamCardDeck from '../../../stream/components/streamcollections/StreamCardDeck'
import {Row, Col} from 'react-materialize'
import StreamNavigation from '../navigation/StreamNavigation';

class StreamPage extends Component {
  render() {
    return (
        <Row>
            <Col s={12} m={12} l={2}>
                <StreamNavigation page={this.props.match.params.page}/>
            </Col>
            <Col s={12} m={12} l={10}>
                <StreamCardDeck page={this.props.match.params.page}/>
            </Col>
        </Row>
    )
  }
}

export default StreamPage