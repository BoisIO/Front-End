import React, { Component } from 'react'
import {Row, Col} from 'react-materialize'
import {connect} from 'react-redux';
import TransparentPersonThumbnail from '../transparentpersonthumbnails/TransparentPersonThumbnail'

class TransparentPersonDeck extends Component {
    render() {
        return (
            <Row>
                {this.props.people.people.map(item =>
                    <Col s={12} m={4} l={2} key={item.ID}> 
                        <TransparentPersonThumbnail person={item}/>
                    </Col>
                )}
            </Row>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonDeck);
