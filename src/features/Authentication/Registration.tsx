import {
  Button,
  Control,
  Field,
  Help,
  Input,
  Label,
  Message,
  Title,
  Column,
} from 'rbx';
import React, { ChangeEvent, useCallback, FormEvent, useReducer } from 'react';
import { DebounceInput } from 'react-debounce-input';
import {
  isValidMail,
  isValidPassword,
  passwordPattern,
  ValidityIconLeft,
  ValidityIconRight,
} from '../../components/shared';
import { register } from '../../API';
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

export const Registration = (props: RegistrationProps) => {
  const { history } = props;
  const storeDispatch = props.dispatch;
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
    (e: ChangeEvent<HTMLInputElement>, isRepeatedPassword = false) => {
      const { value } = e.target;

      dispatch({
        type: isRepeatedPassword ? 'SET_REPEATED_PASSWORD' : 'SET_PASSWORD',
        value,
      });

      if (!isValidPassword(value)) {
        dispatch({
          type: 'SET_PASSWORD_ERROR',
          value: translation.PASSWORD_INVALID,
        });
        return;
      }

      if (
        (isRepeatedPassword && value !== password) ||
        (!isRepeatedPassword && value !== repeatedPassword)
      ) {
        dispatch({
          type: 'SET_PASSWORD_ERROR',
          value: translation.UNMATCHING_PASSWORDS,
        });
        return;
      }

      if (passwordError.length > 0) {
        dispatch({ type: 'SET_PASSWORD_ERROR', value: '' });
      }
    },
    [password, repeatedPassword, passwordError],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch({
        type: 'SET_IS_SUBMITTING',
        value: true,
      });

      try {
        const json = await register({ mail, password });

        if (json.error) {
          switch (json.error) {
            case 'MAIL_EXISTS':
              dispatch({
                type: 'SET_SUBMIT_ERROR',
                value: translation.MAIL_EXISTS,
              });
              break;
            case 'PASSWORD_INSECURE':
              dispatch({
                type: 'SET_SUBMIT_ERROR',
                value: translation.PASSWORD_INSECURE,
              });
              break;
            default:
              dispatch({
                type: 'SET_SUBMIT_ERROR',
                value: json.error,
              });
          }

          dispatch({
            type: 'SET_IS_SUBMITTING',
            value: false,
          });

          return;
        }

        const { token } = json;

        storeDispatch('user/login', {
          token,
          isAuthenticated: true,
        });

        history.push('/profile');
      } catch (e) {
        dispatch({
          type: 'SET_SUBMIT_ERROR',
          value: translation.INIT_ERROR,
        });

        dispatch({
          type: 'SET_IS_SUBMITTING',
          value: false,
        });
      }
    },
    [mail, password, storeDispatch, history],
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
      <Title>Registration</Title>
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

      <Column.Group multiline>
        <Column size="one-fifth" offset="one-fifth">
          <Field.Label>
            <Label htmlFor="register-1">Mail</Label>
          </Field.Label>
        </Column>
        <Column size="two-fifths">
          <Field>
            <Control iconLeft iconRight>
              <Input
                as={DebounceInput}
                type="email"
                onChange={handleSetMail}
                size="small"
                debounceTimeout={300}
                required
                id="register-1"
                disabled={isSubmitting}
              />
              <ValidityIconLeft type="mail" value={mail} />
              <ValidityIconRight type="mail" value={mail} />
              {mailError.length > 0 && <Help color="danger">{mailError}</Help>}
            </Control>
          </Field>
        </Column>

        <Column size="one-fifth" offset="one-fifth">
          <Field.Label>
            <Label htmlFor="register-2">{translation.PASSWORD}</Label>
          </Field.Label>
        </Column>
        <Column size="two-fifths">
          <Field>
            <Control iconLeft iconRight>
              <Input
                as={DebounceInput}
                type="password"
                onChange={handleSetPassword}
                pattern={passwordPattern}
                size="small"
                debounceTimeout={300}
                required
                id="register-2"
                disabled={isSubmitting}
              />
              <ValidityIconLeft type="password" value={password} />
              <ValidityIconRight type="password" value={password} />
            </Control>
          </Field>
        </Column>

        <Column size="one-fifth" offset="one-fifth">
          <Field.Label>
            <Label htmlFor="register-3">{translation.REPEAT_PASSWORD}</Label>
          </Field.Label>
        </Column>
        <Column size="two-fifths">
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
                required
                id="register-3"
              />
              <ValidityIconLeft type="password" value={repeatedPassword} />
              <ValidityIconRight type="password" value={repeatedPassword} />
              {passwordError.length > 0 && (
                <Help color="danger">{passwordError}</Help>
              )}
            </Control>
          </Field>
        </Column>
      </Column.Group>

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
