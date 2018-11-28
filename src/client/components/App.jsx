import React, { Component } from 'react'
import MonkeyDisplay from './MonkeyDisplay.jsx'
import Typebox from './Typebox.jsx'
import Market from './Market.jsx';
import '../css/App.css';

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <h1>hi its working</h1>
        <h1>hot reload</h1>
        <Typebox />
        <MonkeyDisplay />
        <Market />
      </div>
    )
  }
}
