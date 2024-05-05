// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Your age is {props.age} years old.</p>
    </div>
  );
};

export default ChildComponent;
