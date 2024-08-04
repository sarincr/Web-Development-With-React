// ListComponent.jsx
import React from 'react';

const ListComponent = ({ itemList }) => {
  return (
    <ul>
      {itemList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
