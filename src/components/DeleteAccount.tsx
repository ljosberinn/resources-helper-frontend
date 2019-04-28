import React from 'react';
import i18next from 'i18next';

interface DeleteAccountProps {
  t: i18next.TFunction;
}

export const DeleteAccount = ({ t }: DeleteAccountProps) => <button>delete</button>;
