import React from 'react';
import i18next from 'i18next';

interface AccountDeletionProps {
  t: i18next.TFunction;
}

export const AccountDeletion = ({ t }: AccountDeletionProps) => (
  <button>delete</button>
);
