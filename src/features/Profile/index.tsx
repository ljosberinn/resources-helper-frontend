import React, { useState, useEffect } from 'react';
import useStoreon from 'storeon/react';
import { createTokenizedHeader, delayedLogout } from '../../utils';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';

interface ProfileProps {
  history: History;
}

const Profile = ({ history }: ProfileProps) => {
  const { user, dispatch } = useStoreon('user');
  const { token } = user;

  const [sessionExpired, setSessionExpiration] = useState(false);
  const [initializationError, setInitializationError] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch('/account', {
          method: 'GET',
          headers: createTokenizedHeader(token),
        });

        if (!response.ok && response.status === 401) {
          setSessionExpiration(true);
          delayedLogout(dispatch, history);
          return;
        }

        initializationError.length > 0 && setInitializationError('');

        const json = await response.json();
      } catch (e) {
        setInitializationError(
          'Oops, something went wrong... trying again in a few seconds!',
        );
        setTimeout(() => {
          // eslint-disable-next-line
          //location.reload();
        }, 5000);
      }
    };
    getUserData();
  }, [dispatch, history, token]);

  if (initializationError.length > 0) {
    return <h1>{initializationError}</h1>;
  }

  return (
    <>
      {sessionExpired && <SessionExpirationNotice />}
      <h1>Profile</h1>
    </>
  );
};

export default withRouter(Profile);
