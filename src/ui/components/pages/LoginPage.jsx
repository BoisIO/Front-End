import React, { Component } from 'react'
import Login from '../../../authentication/components/Login'
import { Row, Col, Container } from 'react-materialize';

class LoginPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col l={12}>
                        <h1>Please authenticate yourself</h1>
                    </Col>
                </Row>
                <Login/>
            </Container>
        )
    }
}
export default LoginPage;
