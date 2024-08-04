import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Jane Doe',
    age: 28,
    address: {
      city: 'San Francisco',
      state: 'CA',
    },
    isOnline: true,
  };

  return (
    <div className="App">
      <UserProfile user={user} />
    </div>
  );
}

export default App;
