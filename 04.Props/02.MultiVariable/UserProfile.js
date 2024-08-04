import React from 'react';

function UserProfile({ user }) {
  const { name, age, address, isOnline } = user;

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>City: {address.city}</p>
      <p>State: {address.state}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default UserProfile;
