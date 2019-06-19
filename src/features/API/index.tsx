import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { Help, Field, Label, Control, Input } from 'rbx';
import useStoreon from 'storeon/react';
import {
  isValidAPIKey,
  apiKeyPattern,
  ValidityIconLeft,
  StyledCheckbox,
  ValidityIconRight,
} from '../../components/shared';
import { withRouter } from 'react-router';
import { History } from 'history';
import { SessionExpirationNotice } from '../../components/SessionExpirationNotice';

interface APIProps {
  history: History;
}

const createTokenizedHeader = (token: string, type?: string) => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  type && headers.append('X-Http-Method-Override', type);

  return headers;
};

const API = ({ history }: APIProps) => {
  const { user, dispatch } = useStoreon('user');
  const { token } = user;

  const [apiKey, setAPIKey] = useState(user.apiKey);
  const [sessionExpired, setSessionExpiration] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {},
  []);

  const handleAPIKeyInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setAPIKey(value);

      if (isValidAPIKey(value)) {
        dispatch('user/setAPIKey', { apiKey: value });
      }
    },
    [dispatch],
  );

  const handleAPIKeyMemory = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      const { checked } = target;

      target.disabled = true;

      const headers = createTokenizedHeader(token, 'PATCH');

      const body = new FormData();
      if (checked) {
        body.append('apiKey', apiKey);
      }

      try {
        const response = await fetch('/account/settings/rememberAPIKey', {
          method: 'POST',
          headers,
          body,
        });

        if (!response.ok && response.status === 401) {
          setSessionExpiration(true);
          setTimeout(() => {
            dispatch('user/logout');
            history.push('/login');
          }, 5000);
          return;
        }

        const json = await response.json();
        const { token } = json;

        dispatch('user/refreshToken', { token });
        submitError.length > 0 && setSubmitError('');

        target.disabled = false;
      } catch (e) {
        setSubmitError('Something went wrong...');
        target.disabled = false;
      }
    },
    [apiKey, dispatch, history, submitError.length, token],
  );

  return (
    <>
      {sessionExpired && <SessionExpirationNotice />}
      <Field grouped>
        <Field.Body>
          <Field>
            <Label>
              API-Key
              <Control iconRight iconLeft>
                <Input
                  type="text"
                  maxLength={45}
                  onInput={handleAPIKeyInputChange}
                  defaultValue={apiKey}
                  pattern={apiKeyPattern}
                />
                <ValidityIconLeft type="apiKey" value={apiKey} />
                <ValidityIconRight type="apiKey" value={apiKey} />
              </Control>
            </Label>
          </Field>
          <Field>
            <StyledCheckbox
              id="remember-api-key"
              label="Remember API-Key"
              onChange={handleAPIKeyMemory}
            />
            <Help color="info">
              This will save the API-Key server side so you won't have to
              copy-paste it all the time.
            </Help>
            {submitError.length > 0 && (
              <Help color="danger">{submitError}</Help>
            )}
          </Field>
        </Field.Body>
      </Field>

      <form onSubmit={handleSubmit} />
    </>
  );
};

export default withRouter(API);
