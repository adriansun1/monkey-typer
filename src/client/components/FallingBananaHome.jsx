import React from 'react';
import FallingBanana from './FallingBanana.jsx';

class FallingBananaHome extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const banArr = [];
    let j = 0;
    for (let i = 0; i < 15; i += 1) {
      const spanStyle = { animationDelay: `${Math.floor(Math.random() * 3000)}ms` };
      j += 1;
      banArr.push(<FallingBanana spanStyle={spanStyle} />);
    }
    return <span>{banArr}</span>;
  }
}

export default FallingBananaHome;
