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
import { AuthenticationJSON } from '../../types';
import { History } from 'history';
import { Dispatch } from 'storeon';

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
  | {
      type:
        | 'SET_MAIL_ERROR'
        | 'SET_PASSWORD_ERROR'
        | 'SET_PASSWORD'
        | 'SET_MAIL'
        | 'SET_REPEATED_PASSWORD'
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

const translation = {
  MAIL_INVALID: 'Invalid mail.',
  PASSWORD_INVALID: 'Password not matching required pattern.',
  UNMATCHING_PASSWORDS: 'Passwords not matching.',
  MAIL_EXISTS: 'Mail already exists.',
  PASSWORD_INSECURE: 'Provided password is considered insecure.',
  INIT_ERROR: 'Oops, something went wrong',
  SUBMIT: 'Submit',
  REPEAT_PASSWORD: 'Repeat password',
  PASSWORD: 'Password',
};

interface RegistrationProps {
  history: History;
  dispatch: Dispatch;
}

export const Registration = ({ history, dispatch }: RegistrationProps) => {
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
          value: translation.PASSWORD_INVALID,
        });
        return;
      }

      if (
        (isRepeatedPassword && value !== password) ||
        (!isRepeatedPassword && value !== repeatedPassword)
      ) {
        setState({
          type: 'SET_PASSWORD_ERROR',
          value: translation.UNMATCHING_PASSWORDS,
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
      body.append('password', password.trim());

      try {
        const response = await fetch('/register', { method: 'POST', body });
        const json = (await response.json()) as AuthenticationJSON;

        if (json.error) {
          switch (json.error) {
            case 'MAIL_EXISTS':
              setState({
                type: 'SET_SUBMIT_ERROR',
                value: translation.MAIL_EXISTS,
              });
              break;
            case 'PASSWORD_INSECURE':
              setState({
                type: 'SET_SUBMIT_ERROR',
                value: translation.PASSWORD_INSECURE,
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

        history.push('/profile');
      } catch (e) {
        setState({
          type: 'SET_SUBMIT_ERROR',
          value: translation.INIT_ERROR,
        });

        setState({
          type: 'SET_IS_SUBMITTING',
          value: false,
        });
      }
    },
    [mail, password, dispatch, history],
  );

  const mayNotSubmit =
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

      <Field kind="group">
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
            />
            <ValidityIconLeft type="mail" value={mail} />
            <ValidityIconRight type="mail" value={mail} />
          </Control>
          {mailError.length > 0 && <Help color="danger">{mailError}</Help>}
        </Field>

        <Field.Label>
          <Label>{translation.PASSWORD}</Label>
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
          </Control>
        </Field>

        <Field.Label>
          <Label>{translation.REPEAT_PASSWORD}</Label>
        </Field.Label>
        <Field>
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
          {passwordError.length > 0 && (
            <Help color="danger">{passwordError}</Help>
          )}
        </Field>
      </Field>

      <Button
        type="submit"
        color="primary"
        disabled={mayNotSubmit}
        state={isSubmitting ? 'loading' : undefined}
      >
        {translation.SUBMIT}
      </Button>
      {submitError.length > 0 && <Help color="danger">{submitError}</Help>}
    </form>
  );
};
