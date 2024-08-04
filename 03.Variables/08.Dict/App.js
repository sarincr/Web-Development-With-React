import React from 'react';

function App() {
  // Declare a variable `user` with an object containing user details
  const user = {
    name: 'Alice',
    age: 30,
    isLoggedIn: true
  };



  return (
    <div>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;
