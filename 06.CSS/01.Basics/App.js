import React from 'react';

function App() {
  // Define styles using a JavaScript object
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello, Inline CSS!</h1>
      <p>Welcome to the world of inline styling in React.</p>
    </div>
  );
}

export default App;
