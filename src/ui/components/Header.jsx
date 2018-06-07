import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo vertical-align-center">
            <img src="/assets/img/favicon-32x32.png" className="vertical-middle gsy-logo" alt=""/>
            <span className="vertical-middle hide-on-med-and-down">GoStreamYourself</span>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}

export default Header
