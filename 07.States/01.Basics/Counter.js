import React, { useState } from 'react';

// Declare the Counter component
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

// Export the Counter component
export default Counter;
