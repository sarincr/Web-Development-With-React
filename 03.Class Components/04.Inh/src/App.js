import React, { Component } from 'react';
import './App.css';

import Parent from './ComOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello App.JS</p>
          <Parent />
        </header>
      </div>
    );
  }
}

export default App;
