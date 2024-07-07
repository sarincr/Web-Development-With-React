// src/App.js
import React from 'react';

const App = () => {
  // Define the first function
  const greet = (name) => {
    return `Hello, ${name}!`;
  };

  // Define the second function
  const farewell = (name) => {
    return `Goodbye, ${name}!`;
  };

  // Use the functions inside the component
  return (
    <div>
      <h1>{greet('Alice')}</h1>
      <h1>{farewell('Bob')}</h1>
    </div>
  );
};

// Export the SimpleApp component as default
export default App;
