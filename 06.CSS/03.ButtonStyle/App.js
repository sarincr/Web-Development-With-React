import React, { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  // Define base and dynamic styles
  const baseButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

  const dynamicButtonStyle = {
    backgroundColor: isClicked ? '#4caf50' : '#008cba',
    color: isClicked ? '#fff' : '#fff'
  };

  // Combine base and dynamic styles
  const buttonStyle = { ...baseButtonStyle, ...dynamicButtonStyle };

  return (
    <div >
      <button
        style={buttonStyle}
        onClick={() => setIsClicked(!isClicked)}
      >
        {isClicked ? 'Clicked!' : 'Click Me'}
      </button>
    </div>
  );
}

export default App;
