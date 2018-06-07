import React, { Component } from 'react'
import './App.css'

import Header from './ui/components/Header'
import Footer from './ui/components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Headertekst"/>

        <Footer text="Footertekst"/>
      </div>
    )
  }
}

export default App
