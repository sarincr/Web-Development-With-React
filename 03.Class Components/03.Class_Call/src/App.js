import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello App.JS</p>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
