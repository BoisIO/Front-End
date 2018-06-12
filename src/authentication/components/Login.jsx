import React, { Component } from 'react'
import axios from 'axios'
import crypto from 'crypto'
import {Row, Col, Input} from 'react-materialize'

class Footer extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.persist()
    event.preventDefault()

    axios.get('http://back3ndb0is.herokuapp.com/login')
      .then(function (response) {
        const token = response.headers.token
        const file = event.target.file.files[0]
        const name = event.target.user.value

        if (token && name && file) {
          let reader = new FileReader()
          reader.onload = function(e) {
            let sign = crypto.createSign('RSA-SHA256')
            sign.write(token)
            sign.end()

            let contents = e.target.result
            let headers = {
              'Signature': sign.sign(contents, 'hex'),
              'Token': token,
              'Name': name
            }

            axios.post('http://back3ndb0is.herokuapp.com/', '', {headers: headers})
              .then(function (response) {
                console.log(response)
              })
          }
          reader.readAsText(file)
        } else { 
          alert("Not all data was entered.")
        }
      })
      .catch(function (error) {
        console.log(error)
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

export default Footer
