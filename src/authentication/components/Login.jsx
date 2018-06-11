import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div class="row">
            <div class="input-field col s12">
              <input id="user" type="text" class="validate" />
              <label for="user">User</label>
            </div>
            <div class="input-field col s12">
              <a class="waves-effect waves-light btn-large"><i class="material-icons right">send</i>Log in</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
