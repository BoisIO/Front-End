import React, { Component } from 'react'
import axios from 'axios'
import crypto from 'crypto'

class Footer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.persist()
    const data = new FormData(event.target);

    axios.get('https://back3ndb0is.herokuapp.com/login')
      .then(function (response) {
        const file = event.target.file.files[0]
        const token = response.headers.token;

        var sign = crypto.createSign('RSA-SHA256');
        sign.write(token);
        sign.end();

        if (file) {
          var r = new FileReader();
          r.onload = function(e) { 
            var contents = e.target.result;
            let payload = {
              signature: sign.sign(contents, 'hex'),
              token: token,
              name: "Rowin van Blokland"
            }

            axios.post('https://back3ndb0is.herokuapp.com/', JSON.stringify(payload), {headers: {'Content-Type': 'application/json'}})
            .then(function (response) {
              console.log(response);
            })
          }
          r.readAsText(file);
        } else { 
          alert("Failed to load file");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div class="row">
              <div class="input-field col s12">
                <input id="user" type="text" class="validate" />
                <label for="user">User</label>
              </div>
            </div>
            <div className="row">
              <div class="file-field input-field col s12">
                <div class="btn">
                  <span>File</span>
                  <input id="file" type="file" />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
                <input type="submit" class="waves-effect waves-light btn-large" value="Log in" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Footer
