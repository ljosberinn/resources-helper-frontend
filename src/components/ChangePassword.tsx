import React, { useState, FormEvent, ChangeEvent } from 'react';
import i18next from 'i18next';
import { Icon, Control, Label, Input, Button, Field } from 'rbx';
import { DebounceInput } from 'react-debounce-input';

interface ChangePasswordProps {
  t: i18next.TFunction;
}

export const ChangePassword = ({ t }: ChangePasswordProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatedNewPassword, setRepeatedNewPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [hasMatchingNewPasswords, setHasMatchingNewPasswords] = useState(false);
  const [newPasswordIsOldPassword, setNewPasswordIsOldPassword] = useState(false);
  const [error, setError] = useState('');

  if (newPasswordIsOldPassword && error.length === 0) {
    setError(t('newPasswordIdenticalToOld'));
  }

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
    setHasMatchingNewPasswords(password === repeatedNewPassword);
    setNewPasswordIsOldPassword(currentPassword === password);
  };

  const handleRepeatedNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setRepeatedNewPassword(password);
    setHasMatchingNewPasswords(newPassword === password);
    setNewPasswordIsOldPassword(currentPassword === password);
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

  let verificationClass = '';
  if (newPassword.length > 0 && repeatedNewPassword.length > 0 && error.length === 0) {
    verificationClass = hasMatchingNewPasswords ? 'is-success' : 'is-danger';
  }

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
      <Button type="submit" disabled={isDisabled} className={isVerifying ? 'is-loading is-primary' : 'is-primary'}>
        {t('changePassword')}
      </Button>
      {error.length > 0 && <p className="has-text-error">{error}</p>}
    </form>
  );
};
