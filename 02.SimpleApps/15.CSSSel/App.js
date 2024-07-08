// App.js

import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('');

  const applyBgColor = () => {
    const inputColor = document.getElementById('colorInput').value;
    setBgColor(inputColor);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
      <h1>Change Background Color</h1>
      <input type="text" id="colorInput" placeholder="Type a color name or code" />
      <button onClick={applyBgColor}>Apply Color</button>
    </div>
  );
}

export default App;
