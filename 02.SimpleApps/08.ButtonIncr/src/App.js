import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a state variable 'abc_ount' with initial value 0
  const [abc_ount, setAbc_ount] = useState(0);

  // Function to increment the abc_ount
  const incrementAbc_ount = () => {
    setAbc_ount(abc_ount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>Current Count: {abc_ount}</p>
        <button onClick={incrementAbc_ount}>Increment</button>
      </header>
    </div>
  );
}

export default App;
