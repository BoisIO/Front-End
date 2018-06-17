import React, { Component } from 'react'
import {Row, Col, Container} from 'react-materialize'
import {connect} from 'react-redux';
import StreamCardDeck from '../../../stream/components/streamcollections/StreamCardDeck'
import { getPeople } from '../../../transparentperson/actions/people';

class TransparentPersonDetailPage extends Component {
    componentDidMount() {
        if(this.props.people.length === 0) this.props.dispatch(getPeople())
    }
    render() {
        const person = this.props.people.filter(user => user._id === this.props.match.params.id)[0] || {avatar:"/assets/img/404.png", user:"Unknown user", slogan: "User not found"}
        return (
            <Container>
                <br/>
                <Row>
                    <Col s={12} m={3} l={3}>
                        <img className="responsive-image picfit" style={{maxWidth: "100%"}} src={person.Avatar} alt=""/>
                    </Col>
                    <Col s={12} m={9} l={9}>
                        <h2>{person.Name}</h2>
                        <p>{person.Transparant?"This peron is a transparent person!":"This person is not a transparent person"}</p>
                        <p className="text-slogan">{person.Slogan}</p>
                        <p className="text-slogan">{person.BoisCoins || 0} BoisCoins</p>
                    </Col>
                </Row>
                <Row>
                    <Col l={12}>
                        <h2>Streams:</h2>
                    </Col>
                </Row>
                <StreamCardDeck userspecific={person._id}/>
            </Container>
        )
    }
}

function mapStateToProps(store) {
    return {people: store.people.people, dispatch: store.dispatch};
}
export default connect(mapStateToProps)(TransparentPersonDetailPage);
