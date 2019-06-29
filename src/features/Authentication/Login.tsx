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
import { Label, Field, Input, Control, Button, Help, Title } from 'rbx';
import { Dispatch } from 'storeon';
import { authenticate } from '../../API';

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
  | {
      type:
        | 'SET_MAIL_ERROR'
        | 'SET_PASSWORD_ERROR'
        | 'SET_PASSWORD'
        | 'SET_MAIL'
        | 'SET_SUBMIT_ERROR';
      value: string;
    }
  | { type: 'SET_IS_SUBMITTING'; value: boolean };

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

export const Login = (props: LoginProps) => {
  const { history } = props;
  const storeDispatch = props.dispatch;

  const [
    { mail, password, isSubmitting, mailError, passwordError, submitError },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleSetMail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (value !== mail) {
        dispatch({ type: 'SET_MAIL', value });
      }

      if (!isValidMail(value)) {
        dispatch({ type: 'SET_MAIL_ERROR', value: 'Invalid mail.' });
        return;
      }

      if (mailError.length > 0) {
        dispatch({ type: 'SET_MAIL_ERROR', value: '' });
      }
    },
    [mail, mailError],
  );

  const handleSetPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      dispatch({
        type: 'SET_PASSWORD',
        value,
      });

      if (!isValidPassword(value)) {
        dispatch({
          type: 'SET_PASSWORD_ERROR',
          value: 'Password not matching required pattern.',
        });
        return;
      }

      if (passwordError.length > 0) {
        dispatch({ type: 'SET_PASSWORD_ERROR', value: '' });
      }
    },
    [passwordError],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch({
        type: 'SET_IS_SUBMITTING',
        value: true,
      });

      try {
        const response = await authenticate({ mail, password });

        if (response.status !== 200) {
          dispatch({
            type: 'SET_SUBMIT_ERROR',
            value: 'Invalid data provided. Please try again.',
          });
          return;
        }

        const { data } = response;

        if (data.error) {
          dispatch({
            type: 'SET_SUBMIT_ERROR',
            value: data.error,
          });

          dispatch({
            type: 'SET_IS_SUBMITTING',
            value: false,
          });

          return;
        }

        const { token } = data;

        storeDispatch('user/login', {
          token,
          isAuthenticated: true,
        });

        history.push('/profile');
      } catch (e) {
        dispatch({
          type: 'SET_SUBMIT_ERROR',
          value: 'Oops, something went wrong.',
        });

        dispatch({
          type: 'SET_IS_SUBMITTING',
          value: false,
        });
      }
    },
    [storeDispatch, history, mail, password],
  );

  const mayNotSubmit =
    !isValidMail(mail) ||
    mailError.length > 0 ||
    passwordError.length > 0 ||
    !isValidPassword(password) ||
    password.length === 0 ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Field kind="group">
        <Field.Body>
          <Field.Label>
            <Label htmlFor="login-1">Mail</Label>
          </Field.Label>
          <Field>
            <Control iconLeft iconRight>
              <Input
                as={DebounceInput}
                type="email"
                onChange={handleSetMail}
                size="small"
                debounceTimeout={300}
                disabled={isSubmitting}
                autoFocus
                state="focused"
                required
                id="login-1"
                name="mail"
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
            <Label htmlFor="login-2">Password</Label>
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
                disabled={isSubmitting}
                required
                id="login-2"
                name="password"
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
        disabled={mayNotSubmit}
        state={isSubmitting ? 'loading' : undefined}
      >
        Login
      </Button>
      {submitError.length > 0 && <Help color="danger">{submitError}</Help>}
    </form>
  );
};
