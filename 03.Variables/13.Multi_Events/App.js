import React, { useState } from 'react';

function MultiInput() {
  // Declare state variables for firstName and lastName
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Handle changes to the first name input field
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  // Handle changes to the last name input field
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Last Name"
      />
      <p>
        You typed: {firstName} {lastName}
      </p>
    </div>
  );
}

export default MultiInput;
