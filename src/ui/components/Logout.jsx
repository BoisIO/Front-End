import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logout} from '../../authentication/actions/user'

class Logout extends Component {
  render() {
    return (
        <span style={{cursor: "pointer"}} onClick={() => this.props.dispatch(logout())}>Leave</span>
      )
  }
}


function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(Logout);
