import React, { useReducer, FormEvent, ChangeEvent, memo } from 'react';
import i18next from 'i18next';
import { Icon, Control, Label, Input, Button, Field } from 'rbx';
import { DebounceInput } from 'react-debounce-input';

interface PasswordChangeProps {
  t: i18next.TFunction;
}

const getVerificationClass = (
  currentPassword: string,
  newPassword: string,
  repeatedNewPassword: string,
) => {
  if (newPassword.length === 0 || repeatedNewPassword.length === 0) {
    return '';
  }

  const passwordDiffersFromPreviousPassword =
    newPassword !== currentPassword && repeatedNewPassword !== currentPassword;
  const passwordsMatch = newPassword === repeatedNewPassword;

  if (passwordDiffersFromPreviousPassword && passwordsMatch) {
    return 'is-success';
  }

  return 'is-danger';
};

const checkForErrors = (
  currentPassword: string,
  newPassword: string,
  repeatedNewPassword: string,
) => {
  const newPwLength = newPassword.length;
  const repeatedNewPwLength = repeatedNewPassword.length;

  if (
    newPwLength > 0 &&
    repeatedNewPwLength > 0 &&
    newPassword !== repeatedNewPassword
  ) {
    return 'repeatedPasswordMismatch';
  }

  if (
    newPwLength > 0 &&
    currentPassword.length > 0 &&
    repeatedNewPwLength > 0 &&
    (newPassword === currentPassword || repeatedNewPassword === currentPassword)
  ) {
    return 'newPasswordIdenticalToOld';
  }

  return '';
};

const initialState = {
  currentPassword: '',
  newPassword: '',
  repeatedNewPassword: '',
  isVerifying: false,
  error: '',
};

type InitialStateType = typeof initialState;

type ReducerAction =
  | { type: 'setError'; value: string }
  | { type: 'currentPassword'; value: string }
  | { type: 'newPassword'; value: string }
  | { type: 'repeatedNewPassword'; value: string }
  | { type: 'isVerifying'; value: boolean };

const reducer = (
  state: InitialStateType,
  action: ReducerAction,
): InitialStateType => {
  switch (action.type) {
    case 'setError':
      return { ...state, error: action.value };
    case 'isVerifying':
      return { ...state, isVerifying: action.value };
    case 'currentPassword':
      return { ...state, currentPassword: action.value };
    case 'newPassword':
      return { ...state, newPassword: action.value };
    case 'repeatedNewPassword':
      return { ...state, repeatedNewPassword: action.value };
    default:
      return state;
  }
};

export const PasswordChange = memo(({ t }: PasswordChangeProps) => {
  const [
    { currentPassword, newPassword, repeatedNewPassword, isVerifying, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'isVerifying', value: true });

    setTimeout(() => {
      dispatch({ type: 'isVerifying', value: false });
      dispatch({ type: 'setError', value: 'Password incorrect' });
    }, 3500);
  };

  const handleError = (newError: string) => {
    if (newError.length > 0) {
      dispatch({ type: 'setError', value: t(newError) as string });
      return;
    }

    if (newError === error) {
      return;
    }

    dispatch({ type: 'setError', value: '' });
  };

  const handleCurrentPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'currentPassword', value });

    handleError(checkForErrors(value, newPassword, repeatedNewPassword));
  };

  const handleNewPassworddChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'newPassword', value });

    handleError(checkForErrors(currentPassword, value, repeatedNewPassword));
  };

  const handleRepeatedNewPasswordChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    dispatch({ type: 'repeatedNewPassword', value });

    handleError(checkForErrors(currentPassword, newPassword, value));
  };

  const tCurrentPassword = t('currentPassword');
  const tNewPassword = t('newPassword');
  const tRepeatNewPassword = t('repeatNewPassword');

  const isDisabled =
    error.length > 0 ||
    isVerifying ||
    currentPassword.length === 0 ||
    newPassword.length === 0 ||
    repeatedNewPassword.length === 0 ||
    newPassword !== repeatedNewPassword;

  const verificationClass = getVerificationClass(
    currentPassword,
    newPassword,
    repeatedNewPassword,
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" autoComplete="username" hidden />
      <Field>
        <Label>{tCurrentPassword}</Label>
        <Control iconLeft iconRight>
          <Input
            as={DebounceInput}
            type="password"
            autoComplete="current-password"
            size="small"
            placeholder={tCurrentPassword}
            onChange={handleCurrentPasswordChange}
            disabled={isVerifying}
          />
          <Icon align="left" />
          <Icon align="right" />
        </Control>
      </Field>
      <Field>
        <Control iconLeft iconRight>
          <Label>{tNewPassword}</Label>

          <Input
            as={DebounceInput}
            type="password"
            autoComplete="new-password"
            size="small"
            placeholder={tNewPassword}
            onChange={handleNewPassworddChange}
            disabled={isVerifying}
            className={verificationClass}
          />
          <Icon align="left" />
          <Icon align="right" />
        </Control>
      </Field>
      <Field>
        <Control iconLeft iconRight>
          <Label>{tRepeatNewPassword}</Label>

          <Input
            as={DebounceInput}
            type="password"
            autoComplete="new-password"
            size="small"
            placeholder={tRepeatNewPassword}
            onChange={handleRepeatedNewPasswordChange}
            disabled={isVerifying}
            className={verificationClass}
          />
          <Icon align="left" />
          <Icon align="right" />
        </Control>
      </Field>
      {error.length > 0 && <p className="has-text-danger">{error}</p>}

      <Button
        type="submit"
        disabled={isDisabled}
        className={['is-primary', isVerifying ? 'is-loading' : '']
          .filter(className => className.length > 0)
          .join(' ')}
      >
        {t('changePassword')}
      </Button>
    </form>
  );
});

// @ts-ignore
PasswordChange.whyDidYouRender = true;
