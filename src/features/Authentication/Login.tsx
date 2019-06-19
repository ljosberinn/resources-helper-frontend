import React, { FormEvent, useCallback, useReducer, ChangeEvent } from 'react';
import {
  isValidPassword,
  isValidMail,
  ValidityIconLeft,
  ValidityIconRight,
  passwordPattern,
} from '../../components/shared';
import { History } from 'history';
import { DebounceInput } from 'react-debounce-input';
import { Label, Field, Input, Control, Button, Help } from 'rbx';
import { AuthenticationJSON } from '../../types';
import { Dispatch } from 'storeon';

const initialState = {
  mail: '',
  password: '',
  isSubmitting: false,
  mailError: '',
  passwordError: '',
  submitError: '',
};

type InitialStateType = typeof initialState;

type ReducerAction =
  | { type: 'SET_MAIL_ERROR'; value: string }
  | { type: 'SET_PASSWORD_ERROR'; value: string }
  | { type: 'SET_PASSWORD'; value: string }
  | { type: 'SET_MAIL'; value: string }
  | { type: 'SET_IS_SUBMITTING'; value: boolean }
  | { type: 'SET_SUBMIT_ERROR'; value: string };

const reducer = (state: InitialStateType, action: ReducerAction) => {
  switch (action.type) {
    case 'SET_MAIL':
      return { ...state, mail: action.value };
    case 'SET_PASSWORD':
      return { ...state, password: action.value };
    case 'SET_IS_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    case 'SET_MAIL_ERROR':
      return { ...state, mailError: action.value };
    case 'SET_PASSWORD_ERROR':
      return { ...state, passwordError: action.value };
    case 'SET_SUBMIT_ERROR':
      return { ...state, submitError: action.value };
  }

  return state;
};
interface LoginProps {
  history: History;
  dispatch: Dispatch;
}

export const Login = ({ history, dispatch }: LoginProps) => {
  const [
    { mail, password, isSubmitting, mailError, passwordError, submitError },
    setState,
  ] = useReducer(reducer, initialState);

  const handleSetMail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (value !== mail) {
        setState({ type: 'SET_MAIL', value });
      }

      if (!isValidMail(value)) {
        setState({ type: 'SET_MAIL_ERROR', value: 'Invalid mail.' });
        return;
      }

      if (mailError.length > 0) {
        setState({ type: 'SET_MAIL_ERROR', value: '' });
      }
    },
    [mail, mailError],
  );

  const handleSetPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setState({
        type: 'SET_PASSWORD',
        value,
      });

      if (!isValidPassword(value)) {
        setState({
          type: 'SET_PASSWORD_ERROR',
          value: 'Password not matching required pattern.',
        });
        return;
      }

      if (passwordError.length > 0) {
        setState({ type: 'SET_PASSWORD_ERROR', value: '' });
      }
    },
    [passwordError],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setState({
        type: 'SET_IS_SUBMITTING',
        value: true,
      });

      try {
        const body = new FormData();
        body.append('mail', mail);
        body.append('password', password);

        const response = await fetch('/login', { method: 'POST', body });
        const json = (await response.json()) as AuthenticationJSON;

        if (json.error) {
          setState({
            type: 'SET_SUBMIT_ERROR',
            value: 'Mail or password invalid.',
          });

          setState({
            type: 'SET_IS_SUBMITTING',
            value: false,
          });

          return;
        }

        const { token } = json;

        dispatch('user/login', {
          token,
          isAuthenticated: true,
        });

        history.push('/profile');
      } catch (e) {
        setState({
          type: 'SET_SUBMIT_ERROR',
          value: 'Oops, something went wrong.',
        });

        setState({
          type: 'SET_IS_SUBMITTING',
          value: false,
        });
      }
    },
    [dispatch, history, mail, password],
  );

  const maySubmit =
    !isValidMail(mail) ||
    mailError.length > 0 ||
    passwordError.length > 0 ||
    !isValidPassword(password) ||
    password.length === 0 ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <Field kind="group">
        <Field.Body>
          <Field.Label>
            <Label>Mail</Label>
          </Field.Label>
          <Field>
            <Control iconLeft iconRight>
              <Input
                as={DebounceInput}
                type="email"
                onChange={handleSetMail}
                size="small"
                debounceTimeout={300}
                autoFocus
                state="focused"
              />
              <ValidityIconLeft type="mail" value={mail} />
              <ValidityIconRight type="mail" value={mail} />
              {mailError.length > 0 && <Help color="danger">{mailError}</Help>}
            </Control>
          </Field>
        </Field.Body>
      </Field>
      <Field kind="group">
        <Field.Body>
          <Field.Label>
            <Label>Password</Label>
          </Field.Label>
          <Field>
            <Control iconLeft iconRight>
              <Input
                as={DebounceInput}
                type="password"
                onChange={handleSetPassword}
                pattern={passwordPattern}
                size="small"
                debounceTimeout={300}
              />
              <ValidityIconLeft type="password" value={password} />
              <ValidityIconRight type="password" value={password} />
              {passwordError.length > 0 && (
                <Help color="danger">{passwordError}</Help>
              )}
            </Control>
          </Field>
        </Field.Body>
      </Field>
      <Button
        type="submit"
        color="primary"
        disabled={maySubmit}
        state={isSubmitting ? 'loading' : undefined}
      >
        Login
      </Button>
      {submitError.length > 0 && <Help color="danger">{submitError}</Help>}
    </form>
  );
};
