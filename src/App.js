import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDos from './ToDos.js';

import ReactDOM from 'react-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div >
          <ToDos />
        
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById("root"));
