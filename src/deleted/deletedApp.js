import React, { Component } from 'react'; // added this
import logo from './deletedLogo.svg';
import './deletedApp.css';

// function App() {
// class App extends React.Component { // added this
class App extends Component { // revised the line above into this after importing { Component } from 'react'
  render() { // added this
    return ( // wrapping parentheses because 'return' expects a single line with one parent element
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App; // so that other files can use this file (App.js)
