import React from 'react';

const App = () => {
  // Static list of items with unique IDs
  const items = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Cherries' }
  ];

  return (
    <div>
      <h1>Static List with Unique Keys</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
