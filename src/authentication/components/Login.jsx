import React, { Component } from 'react'
import axios from '../../axios'
import crypto from 'crypto'
import {Row, Col, Input} from 'react-materialize'
import { connect } from 'react-redux'
import {login} from '../actions/user'

class Login extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(token, name, contents) {
    if (token && name && contents) {
      let sign = crypto.createSign('RSA-SHA256')
      sign.write(token)
      sign.end()

      try {
        let signature = sign.sign(contents, 'hex')

        let headers = {
          'Signature': signature,
          'Token': token,
          'Name': name
        }
        axios.defaults.headers = headers
        const _self = this
        axios.get('http://certifcation.herokuapp.com/login', {headers: headers, forceUpdate: true})
          .then(function (response) {
            if (response.data.errorCode) {
              window.localStorage.removeItem("_certificate")
              window.localStorage.removeItem("_username")
              alert("An error has occured during verification.\n" + response.data.errorCode + ": " + response.data.message)
            } else {
              window.localStorage.setItem("_certificate", contents)
              window.localStorage.setItem("_username", name)
              window.localStorage.setItem("_token", token)
              _self.props.dispatch(login(name, token))
            }
          })
          .catch(function (error) {
            window.localStorage.removeItem("_certificate")
            window.localStorage.removeItem("_username")
            alert("An error has occured during verification.\n" + error.message)
          })
      } catch (err) {
        alert("The uploaded file was not a key file.")
      }
    } else { 
      alert("Not all data was entered.")
    }
  }

  handleSubmit(event) {
    event.persist()
    event.preventDefault()

    let _self = this
    axios.get('http://certifcation.herokuapp.com/login', {headers: null, forceUpdate: true})
      .then(function (response) {
        let token = response.headers.token
        let name = event.target.user.value || window.localStorage.getItem("_user")

        let contents = window.localStorage.getItem("_certificate")
        let file = event.target.file.files[0]

        if (contents === null && file) {
          let reader = new FileReader()
          reader.onload = function(e) {
            contents = e.target.result
            _self.handleFile(token, name, contents)
          }
          reader.readAsText(file)
        } else if (contents !== null) {
          console.log("We were already logged in. Trying to verify the saved certficate.")
          _self.props.dispatch(login(name))
          _self.handleFile(token, name, contents)
        } else {
          alert("Not all data was entered.")
        }
      })
      .catch(function (error) {
        alert("An error has occured during token retrieval.\n" + error.message)
      })
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Row>
              <Input name="user" placeholder="Enter your name…" s={12} label="User" validate />
            </Row>
            <Row>
              <div className="file-field input-field col s12">
                <div className="btn waves-effect waves-light">
                  <span><i className="material-icons">add</i></span> 
                  <input id="file" type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder="Please select your certificate…" />
                </div>
              </div>
            </Row>
            <Row>
              <Col s={12}>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">cloud</i>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return store;
}
export default connect(mapStateToProps)(Login);