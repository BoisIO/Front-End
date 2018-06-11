import React, { Component } from 'react'
import {Row} from 'react-materialize'
import {connect} from 'react-redux';
import TransparentPersonDeck from '../../../transparentperson/components/transparentpersoncollection/TransparentPersonDeck';

class TransparentPersonPage extends Component {
    render() {
        return (
            <Row>
                <TransparentPersonDeck/>
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonPage);
