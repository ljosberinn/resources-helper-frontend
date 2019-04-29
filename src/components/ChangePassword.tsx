import React, { useState, FormEvent, ChangeEvent, memo } from 'react';
import i18next from 'i18next';
import { Icon, Control, Label, Input, Button, Field } from 'rbx';
import { DebounceInput } from 'react-debounce-input';

interface ChangePasswordProps {
  t: i18next.TFunction;
}

const getVerificationClass = (currentPassword: string, newPassword: string, repeatedNewPassword: string) => {
  if (newPassword.length === 0 && repeatedNewPassword.length === 0) {
    return '';
  }

  if (newPassword.length > 0 || repeatedNewPassword.length > 0) {
    const passwordDiffersFromPreviousPassword = newPassword !== currentPassword && repeatedNewPassword !== currentPassword;
    const passwordsMatch = newPassword === repeatedNewPassword;

    if (passwordDiffersFromPreviousPassword && passwordsMatch) {
      return 'is-success';
    }
  }

  return 'is-danger';
};

export const ChangePassword = memo(({ t }: ChangePasswordProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatedNewPassword, setRepeatedNewPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      setError('Password incorrect');
    }, 3500);
  };

  const handleCurrentPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);

  const handleNewPassworddChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
    checkForErrors(repeatedNewPassword, password);
  };

  const checkForErrors = (existingVariable: string, newPassword: string) => {
    if (existingVariable.length > 0 && existingVariable !== newPassword) {
      setError(t('repeatedPasswordMismatch'));
      return;
    }

    if (newPassword === currentPassword) {
      setError(t('newPasswordIdenticalToOld'));
      return;
    }

    if (error.length > 0) {
      setError('');
    }
  };

  const handleRepeatedNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setRepeatedNewPassword(password);
    checkForErrors(newPassword, password);
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

  const verificationClass = getVerificationClass(currentPassword, newPassword, repeatedNewPassword);

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
            autoComplete="repeat-new-password"
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

      <Button type="submit" disabled={isDisabled} className={isVerifying ? 'is-loading is-primary' : 'is-primary'}>
        {t('changePassword')}
      </Button>
    </form>
  );
});
