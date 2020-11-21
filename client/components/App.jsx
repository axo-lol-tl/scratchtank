import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';

// <Homepage component contains FishTank and Controls>

function App () {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/fishtank" exact component={HomePage} />
        </Switch >
      </div>
    </Router>
  );
};

export default App;




