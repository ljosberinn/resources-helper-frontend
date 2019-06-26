import React, { useState, FormEvent, useCallback } from 'react';
import useStoreon from 'storeon/react';
import { Button, Help, Column } from 'rbx';
import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { APIKey } from './APIKey';
import { APIEndpointID, IUserState, APIQueryHistoryEntry } from '../../Store';
import { Dispatch } from 'storeon';
import { createTokenizedHeader, isTokenExpired } from '../../utils';
import { calcRemainingAnimationDuration } from '../../utils';
import { QueryCard } from './QueryCard';

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
  MONETARY_ITEMS: 'Monetary Items',
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
  INFO_MONETARY_ITEMS: 'Lorem ipsum dolor sit amet',
  INFO_COMBAT_LOG: 'Lorem ipsum dolor sit amet',
  INFO_MISSIONS: 'Lorem ipsum dolor sit amet',
  SUBMIT: 'Query',
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
    title: translation.MONETARY_ITEMS,
    info: translation.INFO_MONETARY_ITEMS,
  },
  { id: 9, title: translation.COMBAT_LOG, info: translation.INFO_COMBAT_LOG },
  { id: 10, title: translation.MISSIONS, info: translation.INFO_MISSIONS },
];

const BACKEND_ROUTES = {
  apiQueryHistory: '/account/apiQueryHistory',
  api: (apiKey: string, query: APIEndpointID | 0) => `/api/${apiKey}/${query}`,
};

interface UpcomingQuery {
  id: APIEndpointID;
  loading: boolean;
}

const reducePreviousQueries = (apiQueryHistory: APIQueryHistoryEntry[]) =>
  apiQueryHistory.reduce((carry: UpcomingQuery[], { id, active }) => {
    if (active) {
      carry.push({ id, loading: false });
    }

    return carry;
  }, []);

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

  const [upcomingQueries, setUpcomingQueries] = useState<UpcomingQuery[]>(
    reducePreviousQueries(apiQueryHistory),
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const headers = createTokenizedHeader(token);

      upcomingQueries.forEach(async ({ id }) => {
        const start = Date.now();

        setUpcomingQueries(reduceLoadingTo(upcomingQueries, id, true));

        try {
          const response = await fetch(BACKEND_ROUTES.api(apiKey, 0), {
            method: 'GET',
            headers,
          });

          const json = await response.json();

          switch (id) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 51:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
              console.log(json);
              break;
          }
        } catch (e) {
          setSubmitError(translation.SUBMIT_ERROR);
        }

        const animationTimeout = calcRemainingAnimationDuration(start);

        setTimeout(() => {
          setUpcomingQueries(reduceLoadingTo(upcomingQueries, id, false));
        }, animationTimeout);
      });
    },
    [apiKey, token, upcomingQueries],
  );

  const handleClick = useCallback(
    (id: APIEndpointID) => {
      if (!upcomingQueries.find(entry => entry.id === id)) {
        setUpcomingQueries([...upcomingQueries, { id, loading: false }]);
        return;
      }

      setUpcomingQueries(upcomingQueries.filter(entry => entry.id !== id));
    },
    [upcomingQueries],
  );

  const isLoading = upcomingQueries.some(entry => entry.loading);
  const isDisabled =
    submitError.length > 0 || isLoading || upcomingQueries.length === 0;

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
        <Column.Group multiline>
          {queryEndpoints.map(({ id, title, info }) => (
            <QueryCard
              historyEntry={apiQueryHistory.find(entry => entry.id === id)}
              disabled={isLoading}
              isLoading={isQueryLoading(upcomingQueries, id)}
              handleClick={handleClick}
              checked={
                upcomingQueries.find(entry => entry.id === id) ? true : false
              }
              title={title}
              info={info}
              key={id}
              id={id}
            />
          ))}
        </Column.Group>
        <Button
          color="primary"
          state={isLoading ? 'loading' : undefined}
          disabled={isDisabled}
        >
          {translation.SUBMIT}
        </Button>
        {submitError && <Help color="warning">{submitError}</Help>}
      </form>
    </>
  );
};

const reduceLoadingTo = (
  upcomingQueries: UpcomingQuery[],
  id: APIEndpointID,
  value: boolean,
) =>
  upcomingQueries.map(entry => {
    if (entry.id === id) {
      entry.loading = value;
    }

    return entry;
  });

const isQueryLoading = (
  upcomingQueries: UpcomingQuery[],
  id: APIEndpointID,
) => {
  const query = upcomingQueries.find(entry => entry.id === id);

  if (upcomingQueries.length === 0 || !query) {
    return false;
  }

  return query.loading;
};

export default withRouter(API);
