
import './App.css';
import React from 'react';

function App() {
  let customCSS="codeone"
  return (
    <div className='app-container'>
      <h1 className='heading'>Hello React JS</h1>
      <p className={customCSS}>This is a paragraph inside the div.</p>
    </div>
  );
}




export default App;
