import React, { useState } from 'react';

const ListExample = () => {
  // Initial list of items
  const [items, setItems] = useState(['Apples', 'Bananas', 'Cherries']);
  // State to keep track of the new item input
  const [newItem, setNewItem] = useState('');

  // Function to handle adding a new item to the list
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>My List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ListExample;
