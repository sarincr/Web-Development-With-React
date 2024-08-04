import React, { useState } from 'react';

function App() {
  // State variables for user input
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  // Handler for background color change
  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  // Handler for text color change
  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  // Inline style object with dynamic values
  const dynamicStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return (
    <div>
      <div style={dynamicStyle}>
        <h1>Dynamic Inline Styling</h1>
        <p>Change the background and text color using the inputs below.</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <label>
          Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </label>
        <br />
        <label style={{ marginTop: '10px' }}>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
