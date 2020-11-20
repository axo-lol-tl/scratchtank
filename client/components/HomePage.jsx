import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="header1">
          <h1>Welcome to the Aquarium</h1>
          <h2 className="header2">Welcome User!</h2>
          <button className="bttn">Become a Member</button>
        </header>
      </div>
    );
  }
}

export default HomePage;
