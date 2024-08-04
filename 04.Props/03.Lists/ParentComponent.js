
import React from 'react';
import ListComponent from './ListComponent';

const ParentComponent = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ListComponent itemList={items} />
    </div>
  );
};

export default ParentComponent;
