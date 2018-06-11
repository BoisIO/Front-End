import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import Test from './Test'
import { Switch, Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import StreamPage from './ui/components/pages/StreamPage';
import StreamPageContainer from './stream/components/streamcontainer/StreamPageContainer'
import Login from './authentication/components/Login'
import TransparentPersonPage from './ui/components/pages/TransparentPersonPage';

class App extends Component {
  render() {
    return (
      <div>
        <StreamPageContainer/>
        <Header/>
        <Switch>
          <Route path="/people/{id}" component={(props)=> this.props.user.authenticated?<TransparentPersonPage {...props} />:<Login/>}/> 
          <Route exact path="/people" component={()=> this.props.user.authenticated?<TransparentPersonPage />:<Login/>}/>
          <Route path="/search/{keyword}" component={(props)=> this.props.user.authenticated?<StreamPage { ...props}/>:<Login/>}/>
          <Route path="/{subpage}" component={(props)=> this.props.user.authenticated?<StreamPage { ...props}/>:<Login/>}/>
          <Route exact path="/test" component={(props)=> this.props.user.authenticated?<Test {...props}/>:<Login/>}/>
          <Route path="/" component={(props)=> this.props.user.authenticated?<StreamPage {...props} />:<Login/>}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
function mapStateToProps(store) {
  return store;
}
export default withRouter(connect(mapStateToProps)(App));