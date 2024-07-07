import React from 'react';
import './App.css';


function sum(a, b) {
  return a + b;
}

function App() {
  // Using the functions within the component
  const total = sum(5, 3);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <p>The sum of 5 and 3 is: {total}</p>
      </header>
    </div>
  );
}

export default App;
