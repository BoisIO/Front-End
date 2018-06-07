import React, { Component } from 'react'

import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'
import { Switch, Route } from 'react-router-dom'

import axios from 'axios'
import { throttleAdapterEnhancer, cacheAdapterEnhancer, Cache } from 'axios-extensions'

const http = axios.create({
	baseURL: '/',
  headers: { 
    'Cache-Control': 'no-cache'
  },
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault:true, defaultCache: new Cache({maxAge: 1000*60*60})})), //require, basic adapter
})

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Headertekst"/>
        <Switch>
          <Route path="/" component={()=> <div axios={http}/>}/>
        </Switch>
        <Footer text="Footertekst"/>
      </div>
    )
  }
}

export default App
