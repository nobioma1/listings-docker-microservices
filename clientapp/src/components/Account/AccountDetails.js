import React from 'react';

const AccountDetails = ({ user }) => {
  return (
    <div>
      <h2>Logged in as:</h2>
      <p>email: {user.email}</p>
      <p>name: {user.name}</p>
    </div>
  );
};

export default AccountDetails;
