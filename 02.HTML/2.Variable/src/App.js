import './App.css';
import React from 'react';

function App() {
  const message = "Hello, React JS. Welcome";
  
  return (
    <div className='app-container'>
      <h1 className='heading'>{message}</h1>
      <p className='paragraph'>This is a paragraph inside the div.</p>
    </div>
  );
}

export default App;