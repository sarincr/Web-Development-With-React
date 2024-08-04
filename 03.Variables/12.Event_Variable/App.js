import React, { useState } from 'react';

function TextInput() {
  // Declare a state variable called 'text' with an initial value of an empty string
  const [ABC, setText] = useState('John Adam');

  // Handle input change
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        value={ABC}
        onChange={handleChange}
      />
      <p>You typed: {ABC}</p>
    </div>
  );
}

export default TextInput;
