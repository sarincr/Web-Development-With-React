import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and a function to update it, "setCount"
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(Old_Count => Old_Count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(Old_Count => Old_Count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
