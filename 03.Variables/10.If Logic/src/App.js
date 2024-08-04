import React, { useState } from 'react';

const FunctionWithIfLogic = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Example of a function with conditional logic
    if (count < 5) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div>
      <h2>Function with If Logic</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default FunctionWithIfLogic;
