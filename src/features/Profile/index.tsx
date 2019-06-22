import React, { useState, useEffect } from 'react';
import useStoreon from 'storeon/react';
import { createTokenizedHeader } from '../../utils';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { match } from 'react-router-dom';
import { isTokenExpired } from '../../utils';
interface ProfileParams {
  id?: string | undefined;
}

interface ProfileProps {
  history: History;
  match: match<ProfileParams>;
}

const Profile = ({ history, match: { params } }: ProfileProps) => {
  const { id } = params;
  const { user, dispatch } = useStoreon('user');
  const { token, isAuthenticated } = user;

  const [sessionExpired, setSessionExpiration] = useState(
    isTokenExpired(token),
  );
  const [initializationError, setInitializationError] = useState('');
  const isOwnProfile = id === undefined;

  const BACKEND_ROUTE = isOwnProfile ? '/account/' : `/profile/${id}`;

  const translation = {
    UNKNOWN_PROFILE: 'No profile found.',
    PROFILE_PRIVATE: 'This profile is not public',
    INIT_ERROR: 'OOps, something went wrong... trying again in a few seconds!',
  };

  useEffect(() => {
    (async () => {
      const options = {
        method: 'GET',
        headers: isOwnProfile ? createTokenizedHeader(token) : undefined,
      };

      try {
        const response = await fetch(BACKEND_ROUTE, options);

        if (!response.ok) {
          switch (response.status) {
            case 400:
              setInitializationError(translation.UNKNOWN_PROFILE);
              break;
            case 401:
              setSessionExpiration(true);
              break;
            case 403:
              setInitializationError(translation.PROFILE_PRIVATE);
              break;
          }
          return;
        }

        initializationError.length > 0 && setInitializationError('');

        const json = await response.json();

        if (isAuthenticated && json.token) {
          dispatch('user/refreshToken', { token: json.token });
        }

        const { apiQueryHistory, settings, apiKey } = json;

        dispatch('user/acknowledgeProfileData', {
          apiQueryHistory,
          settings,
          apiKey,
        });

        console.log(json);
      } catch (e) {
        setInitializationError(translation.INIT_ERROR);
        setTimeout(() => {
          // eslint-disable-next-line
          location.reload();
        }, 5000);
      }
    })();
  }, [
    BACKEND_ROUTE,
    dispatch,
    history,
    isOwnProfile,
    token,
    isAuthenticated,
    initializationError.length,
    translation.INIT_ERROR,
    translation.PROFILE_PRIVATE,
    translation.UNKNOWN_PROFILE,
  ]);

  if (initializationError.length > 0) {
    return <h1>{initializationError}</h1>;
  }

  return (
    <>
      {sessionExpired && (
        <SessionExpirationNotice dispatch={dispatch} history={history} />
      )}
      <h1>Profile</h1>
    </>
  );
};

export default withRouter(Profile);
