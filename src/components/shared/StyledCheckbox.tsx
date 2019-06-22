import React, { ChangeEvent } from 'react';
import { Label } from 'rbx';

interface StyledCheckboxProps {
  disabled?: boolean;
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
  };

  disabled && (inputProps.disabled = disabled);
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
