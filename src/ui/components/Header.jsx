import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Col, Row} from 'react-materialize'

class Header extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <nav>
        <div className="nav-wrapper">
          <Row>
            <Col l={2} s={0} m={0}/>
            <Col l={10} s={12} m={12}>
              <Link id="logo-container" to="/" className="brand-logo vertical-align-center">
                <img src="/assets/img/favicon-32x32.png" className="vertical-middle gsy-logo" alt=""/>
                <span className="vertical-middle hide-on-med-and-down">GoStreamYourself</span>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/people">All transparent people</Link></li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li><Link to="/people">All transparent people</Link></li>
              </ul>
              <Link to="/streams" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            </Col>
          </Row>
=======
      <nav className="">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
>>>>>>> Stashed changes
        </div>
      </nav>
      )
  }
}

export default Header
