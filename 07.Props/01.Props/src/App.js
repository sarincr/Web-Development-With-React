import React from 'react';

import ChildComponent from './ChildComponent';

function App() {
  const data = "Hello from Parent Component";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={data} />
    </div>
  );
}

export default App;

