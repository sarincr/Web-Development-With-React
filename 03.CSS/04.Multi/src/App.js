import React from 'react';

function App() {
  const appContainerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px'
  };

  const headingStyle = {
    color: 'blue',
    fontSize: '24px'
  };

  const paragraphStyle = {
    color: 'green',
    fontSize: '18px'
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={headingStyle}>Hello React JS</h1>
      <p style={paragraphStyle}>This is a paragraph inside the div.</p>
    </div>
  );
}

export default App;
