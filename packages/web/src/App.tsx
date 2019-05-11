import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Fib from './Fib';
import logo from './logo.svg';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to not-reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/">Home</Link>
            <Link to="/other-page">Other page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route exact path="/other-page" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
