import React, { Component } from 'react'
import {Row} from 'react-materialize'
import {connect} from 'react-redux';

class TransparentPersonDetailPage extends Component {
    render() {
        return (
            <Row>
                Person detail page
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonDetailPage);
