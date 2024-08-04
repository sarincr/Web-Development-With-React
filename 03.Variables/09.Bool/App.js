import React from 'react';

function App() {
  // Declare a variable `user` with an object containing user details
  const user = {
    name: 'Alice',
    age: 30,
    isLoggedIn: true
  };

  // Determine the greeting message based on the `isLoggedIn` property
  const greeting = user.isLoggedIn ? `Hello, ${user.name}!` : 'Please log in.';

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;
