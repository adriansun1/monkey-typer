import React, { Component } from 'react'
import MonkeyOptions from './MonkeyOptions.jsx'
import '../css/Main.css'
import '../css/Market.css'

export default class Market extends Component {
  render() {
    return (
      <div id="market-wrap">
        <div id="market">
        <h3>market</h3>
        <MonkeyOptions />
        <MonkeyOptions />
        <MonkeyOptions />
        <MonkeyOptions />
        </div>
        <div id='market-placeholder'></div>
        <div id ="banana-wrap">
          <img id='banana' src={require("../img/gsd.png")} alt="dis a banana"></img>
        </div>
      </div>
      
    )
  }
}
