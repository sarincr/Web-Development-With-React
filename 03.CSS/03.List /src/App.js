import './App.css';
import React from 'react';

function App() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  return (
    <div className='app-container'>
      <h1 className='heading'>List of Items</h1>
      <ul className='item-list'>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
