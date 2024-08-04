import React from 'react';

const App = () => {
  const user = {
    // name: 'Alice',
     name : null,
  };

  return (
    <div>
      {user && user.name ? (
        <h1>Welcome, {user.name}!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
};

export default App;
