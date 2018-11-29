import React, { Component } from "react";
import "../css/Main.css";
import "../css/Typebox.css";
import TypeGame from "../game_logic/TypeGame.js";

export default class Typebox extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const spans = [];
    for(let i = 0; i< this.props.lettArrs.length; i+=1){
      spans.push(<span className={this.props.classArrs[i]}>{this.props.lettArrs[i]}</span>)
    }

    return (
      <div className="text-wrap">
        <textarea
          onChange={e => {
            this.props.handleKeys(e);
          }}
          value={""}
        />
        <div id="wordarr-display">{spans}</div>
      </div>
    );
  }
}
