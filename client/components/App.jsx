import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import ControlPanel from './ControlPanel.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
