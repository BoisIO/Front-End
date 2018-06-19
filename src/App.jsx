import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import { Switch, Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import StreamPage from './ui/components/pages/StreamPage'
import StreamPageContainer from './stream/components/streamcontainer/StreamPageContainer'
import LoginPage from './ui/components/pages/LoginPage'
import TransparentPersonPage from './ui/components/pages/TransparentPersonPage'
import TransparentPersonDetailPage from './ui/components/pages/TransparentPersonDetailPage'
import { getUserData } from './authentication/actions/user';
import { getStreams } from './stream/actions/streams';

class App extends Component {
  interval = null

  componentWillReceiveProps(nextProps) {
    if(nextProps.authenticated && !nextProps.user.Name) {
      this.props.dispatch(getUserData(localStorage.getItem("_username")))
      this.props.dispatch(getStreams())
    }
    if(nextProps.authenticated) {
      this.interval = setInterval(() => {
          this.props.dispatch(getStreams())
      },15000)
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <StreamPageContainer/>
        <Header/>
        <Switch>
          <Route exact path="/loginPage" component={(props)=> <LoginPage {...props} />}/>
          <Route path="/people/:id" component={(props)=> this.props.authenticated?<TransparentPersonDetailPage {...props} />:<LoginPage/>}/> 
          <Route exact path="/people" component={()=> this.props.authenticated?<TransparentPersonPage />:<LoginPage/>}/>
          <Route path="/:subpage" component={(props)=> this.props.authenticated?<StreamPage { ...props}/>:<LoginPage/>}/>
          <Route path="/" component={(props)=> this.props.authenticated?<StreamPage {...props} />:<LoginPage/>}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
function mapStateToProps(store) {
  return {authenticated: store.user.authenticated, user: store.user.user, dispatch: store.dispatch}
}
export default withRouter(connect(mapStateToProps)(App))