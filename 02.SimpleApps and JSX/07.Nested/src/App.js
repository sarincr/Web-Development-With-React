import React from 'react';

function App() {
  const Greeting = () => {
    return <h1>Hello from a component!</h1>;
  };

  return (
    <div>
       <h1>Hello App component</h1>
      <Greeting />
    </div>
  );
}

export default App;
