import React from "react";
import "../css/Monkey-Option.css";
import "../img/chimp-monkey.jpg";
import "../img/smart-monkey.jpg";
const chimp = require("../img/chimp-monkey.jpg");
const smart = require("../img/smart-monkey.jpg");

const MonkeyOptions = props => (
  <div className="monkey-option">
    <img src={props.monkey.pic} alt="cant be asked to fill this out" />
    <h2>{props.monkey.name}</h2>
    <span id='info-display'>
      <h4>Price: {props.monkey.price}</h4>
      <h4>You Have: {props.monkey.existing}</h4>
      <h4>WPM: {props.monkey.wpm}</h4>

    </span>

    <button
      onClick={() => {
        props.changeMonkeyAmount(props.monkey.name, true);
      }}
    >
      +
    </button>
    <button
      onClick={() => {
        props.changeMonkeyAmount(props.monkey.name, false);
      }}
    >
      -
    </button>
  </div>
);

export default MonkeyOptions;
