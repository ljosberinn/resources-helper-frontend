import React from 'react';
import { Icon } from 'rbx';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isValidMail, isValidAPIKey, isValidPassword } from './Validation';
import { ValidityIconProps } from './Validation';

export const ValidityIconRight = ({ type, value }: ValidityIconProps) => {
  if (value.length === 0) {
    return null;
  }

  if (
    (type === 'password' && isValidPassword(value)) ||
    (type === 'mail' && isValidMail(value)) ||
    (type === 'apiKey' && isValidAPIKey(value))
  ) {
    return (
      <Icon align="right" color="success">
        <FontAwesomeIcon icon={faCheck} />
      </Icon>
    );
  }

  return (
    <Icon align="right" color="danger">
      <FontAwesomeIcon icon={faTimes} />
    </Icon>
  );
};
