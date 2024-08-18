import React from 'react';

function App() {
  
  const element = React.createElement('div', { className: 'container' },
    React.createElement('p', { className: 'paragraph' },
      React.createElement('h1', { className: 'heading' },
        React.createElement('a', { className: 'link', href: 'https://google.com' }, 'Visit Google')
      )
    )
  );

  return element;  // Return the created element directly
}

export default App;
