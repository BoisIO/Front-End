import React, { Component } from 'react'
import {Row} from 'react-materialize'
import {connect} from 'react-redux';

class TransparentPersonDeck extends Component {
    render() {
        return (
            <Row>
                Placeholder
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonDeck);
