import React from 'react';
import { useSelector } from 'react-redux';

import AccountDetails from './AccountDetails';

const Account = () => {
  const user = useSelector(({ session }) => session.user);
  return (
    <div>
      <AccountDetails user={user} />
    </div>
  );
};

export default Account;
