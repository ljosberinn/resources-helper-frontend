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

export const StyledCheckbox = ({
  disabled,
  checked,
  defaultChecked,
  id,
  label,
  value,
  onChange,
}: StyledCheckboxProps) => (
  <>
    <input
      id={id}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
      defaultChecked={defaultChecked}
      value={value}
      type="checkbox"
      className="is-checkradio"
    />
    <Label htmlFor={id}>{label}</Label>
  </>
);
