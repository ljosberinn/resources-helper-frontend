import React, { useState, FormEvent, useCallback, ChangeEvent } from 'react';
import useStoreon from 'storeon/react';
import { Button } from 'rbx';
import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { APIKey } from './APIKey';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID, IUserState, APIHistoryEntry } from '../../Store';
import { Dispatch } from 'storeon';
import { createTokenizedHeader, delayedLogout } from '../../utils';

const queryEndpoints: { id: APIEndpointID; title: string }[] = [
  { id: 1, title: 'Factories' },
  { id: 2, title: 'Warehouses' },
  { id: 3, title: 'Special Buildings' },
  { id: 4, title: 'Headquarter progress' },
  { id: 5, title: 'Mine details' },
  { id: 51, title: 'Mine summary' },
  { id: 6, title: 'Trade Log' },
  { id: 7, title: 'Player Information' },
  { id: 8, title: 'Monetrary Items' },
  { id: 9, title: 'Combat Log' },
  { id: 10, title: 'Missions' },
];

const translation = {
  SUBMIT_ERROR: 'Oops, something went wrong...',
};

interface APIProps {
  history: History;
}

const API = ({ history }: APIProps) => {
  const {
    user,
    dispatch,
  }: { user: IUserState; dispatch: Dispatch } = useStoreon('user');
  const { token, apiHistory, apiKey } = user;

  const [sessionExpired, setSessionExpiration] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [upcomingQueries, setUpcomingQueries] = useState<APIEndpointID[]>([0]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const headers = createTokenizedHeader(token);

        const body = new FormData();
        upcomingQueries.forEach(query =>
          body.append('queries[]', query.toString()),
        );

        const response = await fetch('/account/updateQueries', {
          method: 'POST',
          headers,
          body,
        });

        if (!response.ok && response.status === 401) {
          setSessionExpiration(true);
          delayedLogout(dispatch, history);
          return;
        }

        upcomingQueries.forEach(async query => {
          const response = await fetch(`/api/${query}`, {
            method: 'GET',
            headers,
          });

          const json = await response.json();

          switch (query) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            case 51:
              break;
            case 6:
              break;
            case 7:
              break;
            case 8:
              break;
            case 9:
              break;
            case 10:
              break;
          }
        });
      } catch (e) {
        setSubmitError(translation.SUBMIT_ERROR);
      }
    },
    [dispatch, history, token, upcomingQueries],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) as APIEndpointID;

      if (upcomingQueries.includes(value)) {
        upcomingQueries.splice(upcomingQueries.indexOf(value), 1);
        setUpcomingQueries([...upcomingQueries]);
        return;
      }

      setUpcomingQueries([...upcomingQueries, value]);
    },
    [upcomingQueries],
  );

  const hasHistory = apiHistory.length > 0;

  return (
    <>
      {sessionExpired && <SessionExpirationNotice />}
      <APIKey
        user={user}
        dispatch={dispatch}
        history={history}
        token={token}
        setSessionExpiration={setSessionExpiration}
      />
      <form onSubmit={handleSubmit}>
        {queryEndpoints.map(({ id, title }) => {
          const wasRecentlyQueried = hasHistory
            ? (apiHistory.find(entry => entry.id === id) as APIHistoryEntry)
                .active === 1
            : false;

          return (
            <StyledCheckbox
              defaultChecked={wasRecentlyQueried}
              id={`endpoint-${id}`}
              label={title}
              onChange={handleChange}
              value={id}
              key={id}
            />
          );
        })}
        <Button color="primary" disabled={upcomingQueries.length === 0}>
          Query
        </Button>
      </form>
    </>
  );
};

export default withRouter(API);
