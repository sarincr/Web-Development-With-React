
import './App.css';
import React from 'react';

function App() {
  return React.createElement(
    'div',
    { className: 'app-container' },
    React.createElement('h1', { className: 'heading' }, 'Hello React JS'),
    React.createElement('p', { className: 'paragraph' }, 'This is a paragraph inside the div.')
  );
}



export default App;
