import React, { Component } from 'react'
import {Row, Col} from 'react-materialize'
import {connect} from 'react-redux';

class TransparentPersonDeckAvatar extends Component {
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
export default connect(mapStateToProps)(TransparentPersonDeckAvatar);
