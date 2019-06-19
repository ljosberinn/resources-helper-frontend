import React, { useState, FormEvent, useCallback } from 'react';
import useStoreon from 'storeon/react';

import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { APIKey } from './APIKey';
interface APIProps {
  history: History;
}

const API = ({ history }: APIProps) => {
  const { user, dispatch } = useStoreon('user');
  const { token } = user;

  const [sessionExpired, setSessionExpiration] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {},
  []);

  const APIKeyProps = {
    user,
    dispatch,
    history,
    setSessionExpiration,
    token,
  };

  return (
    <>
      {sessionExpired && <SessionExpirationNotice />}
      <APIKey {...APIKeyProps} />
      <form onSubmit={handleSubmit} />
    </>
  );
};

export default withRouter(API);
