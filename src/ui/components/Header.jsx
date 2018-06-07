import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link id="logo-container" to="/" className="brand-logo vertical-align-center">
            <img src="/assets/img/favicon-32x32.png" className="vertical-middle gsy-logo" alt=""/>
            <span className="vertical-middle hide-on-med-and-down">GoStreamYourself</span>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/streams">Navbar Link</Link></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><Link to="/streams">Navbar Link</Link></li>
          </ul>
          <Link to="/streams" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        </div>
      </nav>
    )
  }
}

export default Header
