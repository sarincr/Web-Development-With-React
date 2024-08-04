import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Click Here
      </button>
    </div>
  );
};

export default App;
