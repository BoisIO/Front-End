import React, { Component } from 'react'
import {Row, Col, Container} from 'react-materialize'
import {connect} from 'react-redux';
import StreamCardDeck from '../../../stream/components/streamcollections/StreamCardDeck'

class TransparentPersonDetailPage extends Component {
    render() {
        const person = this.props.people.people.filter(user => user.ID === parseInt(this.props.match.params.id,10))[0] || {avatar:"/assets/img/404.png", user:"Unknown user", slogan: "User not found"}
        return (
            <Container>
                <br/>
                <Row>
                    <Col s={12} m={3} l={3}>
                        <img className="responsive-image picfit" style={{maxWidth: "100%"}} src={person.avatar} alt={"Avatar of "+person.user}/>
                    </Col>
                    <Col s={12} m={9} l={9}>
                        <h2>{person.user}</h2>
                        <p className="text-slogan">{person.slogan}</p>
                    </Col>
                </Row>
                <StreamCardDeck userspecific={person.user} /* page={this.props.match.params.page} *//>
            </Container>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonDetailPage);
