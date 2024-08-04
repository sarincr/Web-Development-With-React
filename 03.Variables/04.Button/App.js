import React from 'react';

// Define the functional component
function App() {
  // Define the function to be called on button click
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App</h1>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
