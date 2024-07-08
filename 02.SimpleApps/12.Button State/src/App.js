import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    setValue('Hello from button click!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <button onClick={handleClick}>Click Me!</button>
        <p>Value: {value}</p>
      </header>
    </div>
  );
}

export default App;
