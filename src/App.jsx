import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import Test from './Test'
import { Switch, Route } from 'react-router-dom'

import StreamCardDeck from './stream/components/streamcollections/StreamCardDeck';

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Headertekst"/>
        <Switch>
          <Route exact path="/streams" component={()=> <StreamCardDeck/>}/>
          <Route path="/" component={()=> <Test/>}/>
        </Switch>
        <Footer text="Footertekst"/>
      </div>
    )
  }
}

export default App
