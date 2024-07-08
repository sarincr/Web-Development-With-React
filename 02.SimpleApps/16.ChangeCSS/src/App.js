import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // Update label color directly using classList in vanilla JS
    document.querySelector('.custom-label').style.color = inputText;
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter color name"
      />
      <label className="custom-label">Label Text</label>
      <button onClick={handleButtonClick}>Change Label Color</button>
    </div>
  );
}

export default App;
