import React, { Component } from 'react'
import {Row, Col} from 'react-materialize'
import {connect} from 'react-redux';
import TransparentPersonDeck from '../../../transparentperson/components/transparentpersoncollection/TransparentPersonDeck';

class TransparentPersonPage extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col l={12}>
                        <h2>Our users</h2>
                        <p>✔ Means that someone is a transparent user</p>
                    </Col>
                </Row>
            <Row>
                <TransparentPersonDeck/>
            </Row>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonPage);
