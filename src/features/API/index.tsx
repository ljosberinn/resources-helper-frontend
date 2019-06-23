import React, { useState, FormEvent, useCallback, ChangeEvent } from 'react';
import useStoreon from 'storeon/react';
import { Button, Help, Column, Card, Content } from 'rbx';
import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';
import { APIKey } from './APIKey';
import { APIEndpointID, IUserState, APIQueryHistoryEntry } from '../../Store';
import { Dispatch } from 'storeon';
import { createTokenizedHeader, isTokenExpired } from '../../utils';
import { calcRemainingAnimationDuration } from '../../utils';
import { QueryCheckbox } from './QueryCheckbox';
import { QueryTime } from './QueryTime';

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
  api: (apiKey: string, query: APIEndpointID) => `/api/${apiKey}/${query}`,
};

const reduceToUpcomingQueries = (apiQueryHistory: APIQueryHistoryEntry[]) =>
  apiQueryHistory.reduce((carry: APIEndpointID[], { active, id }) => {
    if (active) {
      carry.push(id);
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
  const [upcomingQueries, setUpcomingQueries] = useState<APIEndpointID[]>(
    reduceToUpcomingQueries(apiQueryHistory),
  );
  const [queriesInProgress, setQueriesInProgress] = useState<APIEndpointID[]>(
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const headers = createTokenizedHeader(token);

      setQueriesInProgress(upcomingQueries);

      upcomingQueries.forEach(async query => {
        const start = Date.now();

        try {
          const response = await fetch(BACKEND_ROUTES.api(apiKey, query), {
            method: 'GET',
            headers,
          });

          const json = await response.json();

          switch (query) {
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

        const timeout = calcRemainingAnimationDuration(start);

        setTimeout(() => {
          upcomingQueries.splice(upcomingQueries.indexOf(query), 1);
          setQueriesInProgress([...upcomingQueries]);
        }, timeout);
      });

      const newAPIQueryHistory = apiQueryHistory.map(entry => {
        if (upcomingQueries.includes(entry.id)) {
          entry.active = true;
          entry.lastQuery = Date.now();
        } else {
          entry.active = false;
        }

        return entry;
      });

      setUpcomingQueries(reduceToUpcomingQueries(newAPIQueryHistory));

      dispatch('user/setAPIQueryHistory', {
        apiQueryHistory: newAPIQueryHistory,
      });
    },
    [dispatch, token, upcomingQueries, apiKey, apiQueryHistory],
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
  const maySubmit =
    isLoading ||
    submitError.length > 0 ||
    upcomingQueries.length === 0 ||
    !apiKey ||
    (apiKey && apiKey.length === 0);

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
          {queryEndpoints.map(({ id, title, info }) => {
            const historyEntry = apiQueryHistory.find(entry => entry.id === id);

            const wasRecentlyQueried =
              hasHistory && historyEntry ? historyEntry.active : false;

            return (
              <Column size="one-third" key={id}>
                <Card>
                  <Card.Header>
                    <Card.Header.Title>{title}</Card.Header.Title>
                    <Card.Header.Icon>
                      <QueryTime historyEntry={historyEntry} />
                    </Card.Header.Icon>
                  </Card.Header>
                  <Card.Content>
                    <Content>
                      <QueryCheckbox
                        wasRecentlyQueried={wasRecentlyQueried}
                        isLoading={queriesInProgress.includes(id)}
                        title={info}
                        id={id}
                        handleChange={handleChange}
                      />
                    </Content>
                  </Card.Content>
                </Card>
              </Column>
            );
          })}
        </Column.Group>
        <Button
          color="primary"
          state={isLoading ? 'loading' : undefined}
          disabled={maySubmit}
        >
          {translation.SUBMIT}
        </Button>
        {submitError && <Help color="warning">{submitError}</Help>}
      </form>
    </>
  );
};

export default withRouter(API);
