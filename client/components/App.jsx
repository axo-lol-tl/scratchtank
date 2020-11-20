import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import FishTank from './FishTank.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <FishTank />
      </div>
    );
  }
}

export default App;
