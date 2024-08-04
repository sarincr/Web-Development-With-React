import React from 'react';

const App = () => {
  const errorMessage = 'An error occurred. Please try again.';
  // Uncomment the next line to test the success state
  // const errorMessage = null;

  return (
    <div>
      {errorMessage ? (
        <div style={{ color: 'red' }}>
          <h1>Error</h1>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <div style={{ color: 'green' }}>
          <h1>Success</h1>
          <p>Operation completed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default App;
