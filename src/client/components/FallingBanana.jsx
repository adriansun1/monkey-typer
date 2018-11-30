import React from "react";

const ban = require("../img/banana.png");

const FallingBanana = props => {
  return (
    <span>
      <img src={ban} alt="nana" className="falling-banana" style={props.spanStyle} />
    </span>
  );
};

export default FallingBanana;
