import React from 'react';

function App() {
  const ClickOne = () => {
    alert('Button clicked!');
  };

  return (
    <div className='app-container'>
      <h1 className='heading'>Hello React JS</h1>
      <button onClick={ClickOne}>Click Me</button>
    </div>
  );
}

export default App;
