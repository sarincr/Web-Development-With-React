import React from 'react';

function MyComponent() {
  const myVariable = undefined; // You can change this to see different outputs

  return (
    <div>
      {myVariable === undefined ? (
        <p>The variable is undefined.</p>
      ) : (
        <p>The variable is defined and its value is: {myVariable}</p>
      )}
    </div>
  );
}

export default MyComponent;
