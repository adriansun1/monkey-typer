import React from "react";
import FallingBanana from "./FallingBanana.jsx"

const FallingBananaHome = props => {
  const banArr = [];
  let j = 0;
  for (let i = 0; i < 15; i += 1) {
    let spanStyle = {animationDelay:Math.floor(Math.random()*3000)+'ms'}
    j +=1;
    banArr.push(<FallingBanana spanStyle={spanStyle} />);
  }
  return <span>{banArr}</span>;
};

export default FallingBananaHome;
