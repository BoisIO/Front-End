import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import Test from './Test'
import { Switch, Route } from 'react-router-dom'

import StreamPage from './ui/components/pages/StreamPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Headertekst"/>
        <Switch>
          <Route path="/streams" component={(props)=> <StreamPage { ...props}/>}/>
          <Route path="/streams/{subpage}" component={(props)=> <StreamPage { ...props}/>}/>
          <Route path="/" component={()=> <Test/>}/>
        </Switch>
        <Footer text="Footertekst"/>
      </div>
    )
  }
}

export default App
