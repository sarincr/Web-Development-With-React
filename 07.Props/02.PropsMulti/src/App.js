// App.js
import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  return (
    <div>
      <h1>Welcome to my App!</h1>
      {/* Passing props to ChildComponent */}
      <ChildComponent name="Alice" age={30} />
      <ChildComponent name="Bob" age={25} />
    </div>
  );
};

export default App;
