import React from 'react';
import './App.css';

function App() {
  const handleClick = (value) => {
    alert(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick("Button Pressed!")}>Press Me</button>
      </header>
    </div>
  );
}

export default App;
