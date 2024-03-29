import React, { useState, useEffect } from 'react';
import useStoreon from 'storeon/react';
import { getProfileResponse } from '../../API';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { match } from 'react-router-dom';
import { isTokenExpired } from '../../utils';
import { IPreloadedState, Events } from '../../Store';
interface ProfileParams {
  id?: string | undefined;
}

interface ProfileProps {
  history: History;
  match: match<ProfileParams>;
}

const Profile = ({ history, match: { params } }: ProfileProps) => {
  const { id } = params;
  const { user, dispatch } = useStoreon<IPreloadedState, Events>('user');
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
      try {
        const response = await getProfileResponse(BACKEND_ROUTE, token);

        switch (response.status) {
          case 400:
            setInitializationError(translation.UNKNOWN_PROFILE);
            return;
          case 401:
            setSessionExpiration(true);
            return;
          case 403:
            setInitializationError(translation.PROFILE_PRIVATE);
            return;
          case 200:
            initializationError.length > 0 && setInitializationError('');

            const { data } = response;

            if (isAuthenticated && data.token) {
              dispatch('user/refreshToken', { token: data.token });
            }

            const { apiQueryHistory, settings } = data;

            dispatch('user/acknowledgeProfileData', {
              apiQueryHistory,
              settings,
            });

            console.log(data);
        }
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
