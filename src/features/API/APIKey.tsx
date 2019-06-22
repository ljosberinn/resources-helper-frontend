import React, {
  useState,
  memo,
  useCallback,
  ChangeEvent,
  SetStateAction,
  Dispatch as ReactDispatch,
} from 'react';
import { Field, Label, Input, Help, Control } from 'rbx';
import {
  isValidAPIKey,
  apiKeyPattern,
  ValidityIconLeft,
  StyledCheckbox,
  ValidityIconRight,
} from '../../components/shared';
import { Dispatch } from 'storeon';
import { History } from 'history';
import { IUserState } from '../../Store';
import { tokenizedFakePatch, delayedLogout } from '../../utils';

interface APIKeyProps {
  user: IUserState;
  dispatch: Dispatch;
  token: string;
  history: History;
  setSessionExpiration: ReactDispatch<SetStateAction<boolean>>;
}

const BACKEND_ROUTE = '/account/settings/rememberAPIKey';

export const APIKey = memo(
  ({ user, dispatch, token, history, setSessionExpiration }: APIKeyProps) => {
    const [apiKey, setAPIKey] = useState(user.apiKey);
    const [submitError, setSubmitError] = useState('');

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

        const body = new FormData();
        if (checked) {
          body.append('apiKey', apiKey);
        }

        const { hasExpiredToken, json, error } = await tokenizedFakePatch(
          token,
          BACKEND_ROUTE,
          body,
        );

        if (error) {
          setSubmitError(error);
          target.disabled = false;
          return;
        }

        submitError.length > 0 && setSubmitError('');

        if (hasExpiredToken) {
          setSessionExpiration(true);
          delayedLogout(dispatch, history);
          return;
        }

        json && dispatch('user/refreshToken', { token: json.token });

        target.disabled = false;
      },
      [
        apiKey,
        dispatch,
        history,
        setSessionExpiration,
        submitError.length,
        token,
      ],
    );

    return (
      <Field kind="group">
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
              defaultChecked={user.settings.remembersAPIKey === 1}
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
    );
  },
);
