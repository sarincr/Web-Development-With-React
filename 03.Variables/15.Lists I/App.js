import React from 'react';

function MyList() {
  const items = ['Car', 'Jeep', 'Bus'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default MyList;
