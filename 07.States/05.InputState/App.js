import React, { useState } from 'react';

function App() {
  // State to hold the list of user profiles
  const [userProfiles, setUserProfiles] = useState([]);
  
  // State to hold current input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle adding a new user profile
  const handleAddProfile = () => {
    if (name && email) {
      const newProfile = { name, email };
      setUserProfiles([...userProfiles, newProfile]);
      // Clear input fields
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>User Profiles</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>
      <h2>Profile List:</h2>
      <ul>
        {userProfiles.map((profile, index) => (
          <li key={index}>
            <strong>Name:</strong> {profile.name} <br />
            <strong>Email:</strong> {profile.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
