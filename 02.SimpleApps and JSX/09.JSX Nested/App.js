import React from 'react';

function App() {
  const divElement = React.createElement(
    'div',{ className: 'container' },React.createElement(
      'h1',
      { className: 'main-heading' },
      'Hello from createElement'
    ),
    React.createElement(
      'h2',
      { className: 'sub-heading' },
      'This is a sub-heading'
    ),
    React.createElement(
      'h3',
      { className: 'small-heading' },
      'This is a small heading'
    )
  );

  return divElement;
}

export default App;
