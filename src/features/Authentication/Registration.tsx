import { Button, Control, Field, Help, Input, Label, Message } from 'rbx';
import React, { ChangeEvent, useCallback, FormEvent, useReducer } from 'react';
import { DebounceInput } from 'react-debounce-input';
import {
  isValidMail,
  isValidPassword,
  passwordPattern,
  ValidityIconLeft,
  ValidityIconRight,
} from '../../components/shared';
import useStoreon from 'storeon/react';
import { AuthenticationJSON } from '../../types';
import { History } from 'history';

const initialState = {
  mail: '',
  password: '',
  repeatedPassword: '',
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
  | { type: 'SET_REPEATED_PASSWORD'; value: string }
  | { type: 'SET_IS_SUBMITTING'; value: boolean }
  | { type: 'SET_SUBMIT_ERROR'; value: string };

const reducer = (state: InitialStateType, action: ReducerAction) => {
  switch (action.type) {
    case 'SET_MAIL':
      return { ...state, mail: action.value };
    case 'SET_PASSWORD':
      return { ...state, password: action.value };
    case 'SET_REPEATED_PASSWORD':
      return { ...state, repeatedPassword: action.value };
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

interface RegistrationProps {
  history: History;
}

export const Registration = ({ history }: RegistrationProps) => {
  const { dispatch } = useStoreon();

  const [
    {
      isSubmitting,
      mail,
      password,
      repeatedPassword,
      mailError,
      passwordError,
      submitError,
    },
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
    (e: ChangeEvent<HTMLInputElement>, isRepeatedPassword = false) => {
      const { value } = e.target;

      setState({
        type: isRepeatedPassword ? 'SET_REPEATED_PASSWORD' : 'SET_PASSWORD',
        value,
      });

      if (!isValidPassword(value)) {
        setState({
          type: 'SET_PASSWORD_ERROR',
          value: 'Password not matching required pattern.',
        });
        return;
      }

      if (
        (isRepeatedPassword && value !== password) ||
        (!isRepeatedPassword && value !== repeatedPassword)
      ) {
        setState({
          type: 'SET_PASSWORD_ERROR',
          value: 'Passwords not matching.',
        });
        return;
      }

      if (passwordError.length > 0) {
        setState({ type: 'SET_PASSWORD_ERROR', value: '' });
      }
    },
    [password, repeatedPassword, passwordError],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setState({
        type: 'SET_IS_SUBMITTING',
        value: true,
      });

      const body = new FormData();
      body.append('mail', mail);
      body.append('password', password);

      try {
        const response = await fetch('/register', { method: 'POST', body });
        const json = (await response.json()) as AuthenticationJSON;

        if (json.error) {
          switch (json.error) {
            case 'MAIL_EXISTS':
              setState({
                type: 'SET_SUBMIT_ERROR',
                value: 'Mail already exists.',
              });
              break;
            case 'PASSWORD_INSECURE':
              setState({
                type: 'SET_SUBMIT_ERROR',
                value: 'Provided password is considered insecure.',
              });
              break;
            default:
              setState({
                type: 'SET_SUBMIT_ERROR',
                value: json.error,
              });
          }

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

        history.push('/');
      } catch (e) {
        setState({
          type: 'SET_SUBMIT_ERROR',
          value: 'Oops, something went wrong',
        });

        setState({
          type: 'SET_IS_SUBMITTING',
          value: false,
        });
      }
    },
    [mail, password, dispatch, history],
  );

  const maySubmit =
    !isValidMail(mail) ||
    mailError.length > 0 ||
    passwordError.length > 0 ||
    !isValidPassword(password) ||
    password.length === 0 ||
    repeatedPassword.length === 0 ||
    password !== repeatedPassword ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <Message color="info">
        <Message.Header>Information</Message.Header>
        <Message.Body>
          Although <em>not necessary</em>, it is recommended to use a real mail
          for resetting forgotten credentials.
          <br />
          If you choose to select a real mail, you'll receive a mail containing
          your login details.
        </Message.Body>
      </Message>

      <Field grouped>
        <Field.Body>
          <Field>
            <Label>
              Mail
              <Control iconLeft iconRight>
                <Input
                  as={DebounceInput}
                  type="email"
                  onChange={handleSetMail}
                  size="small"
                  debounceTimeout={300}
                />
                <ValidityIconLeft type="mail" value={mail} />
                <ValidityIconRight type="mail" value={mail} />
              </Control>
            </Label>
            {mailError.length > 0 && <Help color="danger">{mailError}</Help>}
          </Field>

          <Field>
            <Label>
              Password
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
              </Control>
            </Label>
          </Field>

          <Field>
            <Label>
              Repeat password
              <Control iconLeft iconRight>
                <Input
                  as={DebounceInput}
                  type="password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSetPassword(e, true)
                  }
                  pattern={passwordPattern}
                  size="small"
                  debounceTimeout={300}
                />
                <ValidityIconLeft type="password" value={repeatedPassword} />
                <ValidityIconRight type="password" value={repeatedPassword} />
              </Control>
            </Label>
            {passwordError.length > 0 && (
              <Help color="danger">{passwordError}</Help>
            )}
          </Field>
        </Field.Body>
      </Field>

      <Button
        type="submit"
        color="primary"
        disabled={maySubmit}
        state={isSubmitting ? 'loading' : undefined}
      >
        Submit
      </Button>
      {submitError.length > 0 && <Help color="danger">{submitError}</Help>}
    </form>
  );
};
