import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import Test from './Test'
import { Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux';
import StreamPage from './ui/components/pages/StreamPage';
import StreamPageContainer from './stream/components/streamcontainer/StreamPageContainer'
import Login from './authentication/components/Login'

class App extends Component {
  render() {
    return (
      <div>
        <StreamPageContainer/>
        <Header/>
        <Switch>
          <Route path="/" component={(props)=> this.props.user.authenticated?<StreamPage { ...props}/>:<Login/>}/>
          <Route path="/search/{keyword}" component={(props)=> this.props.user.authenticated?<StreamPage { ...props}/>:<Login/>}/>
          <Route path="/{subpage}" component={(props)=> this.props.user.authenticated?<StreamPage { ...props}/>:<Login/>}/>
          <Route path="/test" component={(props)=> this.props.user.authenticated?<Test {...props}/>:<Login/>}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
function mapStateToProps(store) {
  return store;
}
export default connect(mapStateToProps)(App);