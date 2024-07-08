import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('Initial Value');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter new value"
        />
        <p>Value: {value}</p>
      </header>
    </div>
  );
}

export default App;
