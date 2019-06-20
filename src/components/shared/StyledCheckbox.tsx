import React, { ChangeEvent } from 'react';
import { Label } from 'rbx';

interface StyledCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  id: string;
  value?: string | number;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

interface CheckboxProps extends Partial<StyledCheckboxProps> {
  type: 'checkbox';
  className: 'is-checkradio';
}

export const StyledCheckbox = ({
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
  };

  onChange && (inputProps.onChange = onChange);
  checked && (inputProps.checked = checked);
  defaultChecked && (inputProps.defaultChecked = defaultChecked);
  value && (inputProps.value = value);

  return (
    <>
      <input {...inputProps} />
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};
