import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styles

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS Selector Change on Button Click</h1>
        <div className={isActive ? 'box active' : 'box'}>
          <p>This is a box whose style changes on button click!</p>
        </div>
        <button onClick={toggleClass}>Toggle Class</button>
      </header>
    </div>
  );
}

export default App;
