import React from 'react';

const App = () => {
  // Define the first function
  const greet = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}!`;
  };

  // Define the second function
  const farewell = (firstName, lastName, city) => {
    return `Goodbye, ${firstName} ${lastName} from ${city}!`;
  };

  // Variables to be transferred
  const firstName = 'Alice';
  const lastName = 'Johnson';
  const city = 'New York';

  // Use the functions inside the component
  return (
    <div>
      <h1>{greet(firstName, lastName)}</h1>
      <h1>{farewell(firstName, lastName, city)}</h1>
    </div>
  );
};

// Export the component as default
export default App;
