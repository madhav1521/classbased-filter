import React, { Component } from 'react'
import './App.css';
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Products products={[]} searchData={''} />
      </header>
    </div>
    )
  }
}
