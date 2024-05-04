import './App.css';
import React from 'react';

function App() {
  const calculateSquare = (num) => {
    return num * num;
  };

  const number = 5;
  
  return (
    <div className='app-container'>
      <h1 className='heading'>Square Calculator</h1>
      <p className='paragraph'>The square of {number} is {calculateSquare(number)}.</p>
    </div>
  );
}

export default App;