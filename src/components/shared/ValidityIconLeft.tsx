import React from 'react';
import { Icon } from 'rbx';
import {
  faLock,
  faLockOpen,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isValidMail, isValidPassword, isValidAPIKey } from './Validation';
import { ValidityIconProps } from './Validation';

export const ValidityIconLeft = ({ type, value }: ValidityIconProps) => {
  if (type === 'password') {
    const color =
      value.length > 0
        ? isValidPassword(value)
          ? 'success'
          : 'danger'
        : undefined;

    return (
      <Icon align="left" color={color}>
        <FontAwesomeIcon icon={color === 'success' ? faLock : faLockOpen} />
      </Icon>
    );
  }

  if (type === 'mail') {
    const color =
      value.length > 0
        ? isValidMail(value)
          ? 'success'
          : 'danger'
        : undefined;

    return (
      <Icon align="left" color={color}>
        <FontAwesomeIcon icon={faEnvelope} />
      </Icon>
    );
  }

  if (type === 'apiKey') {
    const color =
      value && value.length > 0
        ? isValidAPIKey(value)
          ? 'success'
          : 'danger'
        : undefined;

    return (
      <Icon align="left" color={color}>
        <FontAwesomeIcon icon={faKey} />
      </Icon>
    );
  }

  return null;
};
