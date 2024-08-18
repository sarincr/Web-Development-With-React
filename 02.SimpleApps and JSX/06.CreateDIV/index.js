import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myDiv = React.createElement('div', { id: 'new_id' }, 'Hello, world!');

ReactDOM.render(
  myDiv,
  document.getElementById('root')
);
