import React, { useState, FormEvent, useCallback, ChangeEvent } from 'react';
import useStoreon from 'storeon/react';
import { Button, Help, Control, Field } from 'rbx';
import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { APIKey } from './APIKey';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID, IUserState } from '../../Store';
import { Dispatch } from 'storeon';
import { createTokenizedHeader, isTokenExpired } from '../../utils';
import { GenericTokenResponse } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {
  calcRemainingAnimationDuration,
  getAPIQueryHistory,
} from '../../utils';

const translation = {
  SUBMIT_ERROR: 'Oops, something went wrong...',
  FACTORIES: 'Factories',
  WAREHOUSES: 'Warehouses',
  SPECIAL_BUILDINGS: 'Special Buildings',
  HQ_PROGRESS: 'Headquarter progress',
  MINE_DETAILS: 'Mine details',
  MINE_SUMMARY: 'Mine summary',
  TRADE_LOG: 'Trade Log',
  PLAYER_INFO: 'Player Information',
  MONETRARY_ITEMS: 'Monetrary Items',
  COMBAT_LOG: 'Combat Log',
  MISSIONS: 'Missions',
  INFO_FACTORIES: 'Lorem ipsum dolor sit amet',
  INFO_WAREHOUSES: 'Lorem ipsum dolor sit amet',
  INFO_SPECIAL_BUILDINGS: 'Lorem ipsum dolor sit amet',
  INFO_HQ_PROGRESS: 'Lorem ipsum dolor sit amet',
  INFO_MINE_DETAILS: 'Lorem ipsum dolor sit amet',
  INFO_MINE_SUMMARY: 'Lorem ipsum dolor sit amet',
  INFO_TRADE_LOG: 'Lorem ipsum dolor sit amet',
  INFO_PLAYER_INFO: 'Lorem ipsum dolor sit amet',
  INFO_MONETRARY_ITEMS: 'Lorem ipsum dolor sit amet',
  INFO_COMBAT_LOG: 'Lorem ipsum dolor sit amet',
  INFO_MISSIONS: 'Lorem ipsum dolor sit amet',
};

const queryEndpoints: { id: APIEndpointID; title: string; info: string }[] = [
  { id: 1, title: translation.FACTORIES, info: translation.INFO_FACTORIES },
  { id: 2, title: translation.WAREHOUSES, info: translation.INFO_WAREHOUSES },
  {
    id: 3,
    title: translation.SPECIAL_BUILDINGS,
    info: translation.INFO_SPECIAL_BUILDINGS,
  },
  { id: 4, title: translation.HQ_PROGRESS, info: translation.INFO_HQ_PROGRESS },
  {
    id: 5,
    title: translation.MINE_DETAILS,
    info: translation.INFO_MINE_DETAILS,
  },
  {
    id: 51,
    title: translation.MINE_SUMMARY,
    info: translation.INFO_MINE_SUMMARY,
  },
  { id: 6, title: translation.TRADE_LOG, info: translation.INFO_TRADE_LOG },
  { id: 7, title: translation.PLAYER_INFO, info: translation.INFO_PLAYER_INFO },
  {
    id: 8,
    title: translation.MONETRARY_ITEMS,
    info: translation.INFO_MONETRARY_ITEMS,
  },
  { id: 9, title: translation.COMBAT_LOG, info: translation.INFO_COMBAT_LOG },
  { id: 10, title: translation.MISSIONS, info: translation.INFO_MISSIONS },
];

const BACKEND_ROUTES = {
  apiQueryHistory: '/account/apiQueryHistory',
  api: (query: APIEndpointID) => `/api/${query}`,
};

interface APIProps {
  history: History;
}

const API = ({ history }: APIProps) => {
  const {
    user,
    dispatch,
  }: { user: IUserState; dispatch: Dispatch } = useStoreon('user');
  const { token, apiQueryHistory, apiKey } = user;

  const [sessionExpired, setSessionExpiration] = useState(
    isTokenExpired(token),
  );
  const [submitError, setSubmitError] = useState('');
  const [upcomingQueries, setUpcomingQueries] = useState<APIEndpointID[]>(
    apiQueryHistory.length > 0
      ? apiQueryHistory.reduce((carry: APIEndpointID[], { active, id }) => {
          if (active) {
            carry.push(id);
          }

          return carry;
        }, [])
      : [],
  );
  const [queriesInProgress, setQueriesInProgress] = useState<APIEndpointID[]>(
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const headers = createTokenizedHeader(token);

        const response = await fetch(BACKEND_ROUTES.apiQueryHistory, {
          method: 'POST',
          headers,
          body: upcomingQueries.reduce((carry, query) => {
            carry.append('queries[]', query.toString());
            return carry;
          }, new FormData()),
        });

        if (response.status === 401) {
          setSessionExpiration(true);
          return;
        }

        dispatch('user/refreshToken', {
          token: ((await response.json()) as GenericTokenResponse).token,
        });

        setQueriesInProgress(upcomingQueries);

        upcomingQueries.forEach(async query => {
          const start = Date.now();

          const response = await fetch(
            `${BACKEND_ROUTES.api(query)}?apiKey=${apiKey}`,
            {
              method: 'GET',
              headers,
            },
          );

          const json = await response.json();

          switch (query) {
            case 1:
              console.log(json);
              break;
            case 2:
              console.log(json);
              break;
            case 3:
              console.log(json);
              break;
            case 4:
              console.log(json);
              break;
            case 5:
              console.log(json);
              break;
            case 51:
              console.log(json);
              break;
            case 6:
              console.log(json);
              break;
            case 7:
              console.log(json);
              break;
            case 8:
              console.log(json);
              break;
            case 9:
              console.log(json);
              break;
            case 10:
              console.log(json);
              break;
          }

          const timeout = calcRemainingAnimationDuration(start, Date.now());

          setTimeout(() => {
            queriesInProgress.splice(queriesInProgress.indexOf(query), 1);

            setQueriesInProgress([...queriesInProgress]);
          }, timeout);
        });

        const newAPIHistory = await getAPIQueryHistory(token);
        dispatch('user/setAPIQueryHistory', { apiQueryHistory: newAPIHistory });
      } catch (e) {
        setSubmitError(translation.SUBMIT_ERROR);
      }
    },
    [dispatch, token, upcomingQueries, apiKey],
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

  const hasHistory = apiQueryHistory.length > 0;
  const isLoading = queriesInProgress.length > 0;

  return (
    <>
      {sessionExpired && (
        <SessionExpirationNotice dispatch={dispatch} history={history} />
      )}
      <APIKey
        user={user}
        dispatch={dispatch}
        history={history}
        token={token}
        setSessionExpiration={setSessionExpiration}
      />
      <form onSubmit={handleSubmit}>
        {queryEndpoints.map(({ id, title, info }) => {
          const historyEntry = apiQueryHistory.find(entry => entry.id === id);

          const wasRecentlyQueried =
            hasHistory && historyEntry ? historyEntry.active : false;

          const isLoading = queriesInProgress.includes(id);

          return (
            <Field key={id}>
              <Control>
                <StyledCheckbox
                  defaultChecked={wasRecentlyQueried}
                  id={`endpoint-${id}`}
                  label={title}
                  onChange={handleChange}
                  value={id}
                  disabled={isLoading}
                />
                <Help color="info">{info}</Help>
                {isLoading ? (
                  <Button state="loading" className="is-icon" />
                ) : (
                  historyEntry &&
                  historyEntry.lastQuery > 0 && (
                    <Help color="primary">{getQueryTime(historyEntry)}</Help>
                  )
                )}
              </Control>
            </Field>
          );
        })}
        <Button
          color="primary"
          state={isLoading ? 'loading' : undefined}
          disabled={isLoading || upcomingQueries.length === 0}
        >
          Query
        </Button>
        {submitError && <Help color="warning">{submitError}</Help>}
      </form>
    </>
  );
};

const getQueryTime = ({ lastQuery }: { lastQuery: number }) => {
  const date = new Date(lastQuery);

  const diff =
    Math.abs(date.getTime() - new Date(Date.now()).getTime()) /
    (1000 * 60 * 60 * 24);

  return (
    <time dateTime={date.toISOString().split('.')[0]}>
      <FontAwesomeIcon icon={faClock} />{' '}
      {diff < 1 ? 'less than a day' : `${Math.ceil(diff)} day(s)`} ago
    </time>
  );
};

export default withRouter(API);
