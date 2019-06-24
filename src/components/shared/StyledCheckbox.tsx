import React, { ChangeEvent } from 'react';
import { Label } from 'rbx';

interface StyledCheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  id: string;
  label: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

interface CheckboxProps extends Partial<StyledCheckboxProps> {
  type: 'checkbox';
  className: 'is-checkradio';
}

export const StyledCheckbox = ({
  disabled,
  checked,
  defaultChecked,
  id,
  label,
  value,
  onChange,
}: StyledCheckboxProps) => {
  const inputProps: CheckboxProps = {
    type: 'checkbox',
    className: 'is-checkradio',
    id: id,
    disabled,
    onChange,
    checked,
    defaultChecked,
    value,
  };

  return (
    <>
      <input {...inputProps} />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};
