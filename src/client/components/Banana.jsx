import React from "react";
import FallingBananaHome from "./FallingBananaHome.jsx"

const Banana = props => {



  
  return(
    <div id="banana-wrap">
      <h1>{Math.floor(props.totalBananas)}</h1>
      <img id="banana" src={require("../img/banana.png")} alt="dis a banana" />
    </div>
  )
};

export default Banana;