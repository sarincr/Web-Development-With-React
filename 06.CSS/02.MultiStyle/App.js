import React from 'react';

function App() {
  // Define styles using JavaScript objects
  const baseStyle = {
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  // Conditional styles based on a condition
  const isHighlighted = true; // Change this value to see the effect
  const dynamicStyle = {
    backgroundColor: isHighlighted ? '#ffeb3b' : '#e0e0e0',
    color: isHighlighted ? '#000' : '#666'
  };

  return (
    <div style={{ ...baseStyle, ...dynamicStyle }}>
      <h1>Conditional Inline Styling</h1>
      <p>The background color and text color change based on the condition.</p>
    </div>
  );
}

export default App;
