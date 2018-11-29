import React, { Component } from "react";
import MonkeyOptions from "./MonkeyOptions.jsx";
import Banana from "./Banana.jsx";
import "../css/Main.css";
import "../css/Market.css";

export default class Market extends Component {
  render() {
    const monkeyOptionCreator = [];
    const MO = this.props.monkeyMarketArr;
    const keys = Object.keys(MO);
    for (let i = 0; i < keys.length; i += 1) {
      monkeyOptionCreator.push(<MonkeyOptions changeMonkeyAmount = {this.props.changeMonkeyAmount} monkey = {MO[keys[i]]}/>);
    }
    return (
      <div id="market-wrap">
        <div id="market">
          <h3>market</h3>
          {monkeyOptionCreator}
        </div>
        <Banana totalBananas={this.props.totalBananas} />
      </div>
    );
  }
}
