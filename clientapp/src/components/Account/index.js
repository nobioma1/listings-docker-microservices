import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';

import AccountDetails from './AccountDetails';
import { clearSession } from '../../store/actions/sessions';
import { Button } from '../shared';

const mutation = gql`
  mutation($userSessionId: ID!) {
    deleteUserSession(userSessionId: $userSessionId)
  }
`;

const Account = () => {
  const [deleteUserSession] = useMutation(mutation);
  const session = useSelector(({ session }) => session);
  const dispatch = useDispatch();

  const logoutHandler = userSessionId => {
    dispatch(clearSession());
    deleteUserSession({ variables: { userSessionId } });
  };

  return (
    <div>
      <AccountDetails user={session.user} />
      <Button title="Logout" onClick={() => logoutHandler(session.id)} />
    </div>
  );
};

export default Account;
