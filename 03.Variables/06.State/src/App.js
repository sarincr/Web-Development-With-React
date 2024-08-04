import React, { useState } from 'react';

function App() {
  // Declare a state variable `counter` with an initial value of 0
  const [counter, setCounter] = useState(0);

  // Function to handle button click and increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
