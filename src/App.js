import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Welcome to GroKart</header>
        <input type="button" className="sign" value="Sign In" />
        <footer>Copyright GroKart</footer>
      </div>
    );
  }
}

export default App;
