import React, { useState } from 'react';

// Declare the Toggle component
const Toggle = () => {
  // Declare a state variable named "isOn" with initial value of false
  const [isOn, setIsOn] = useState(false);

  // Function to handle the button click
  const handleClick = () => {
    setIsOn(!isOn); // Toggle the state
  };

  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={handleClick}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

// Export the Toggle component
export default Toggle;
