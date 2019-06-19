import React, { ChangeEvent } from 'react';
import { Label } from 'rbx';

interface StyledCheckboxProps {
  checked?: boolean;
  id: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

export const StyledCheckbox = ({
  checked,
  id,
  label,
  onChange,
}: StyledCheckboxProps) => (
  <>
    <input
      type="checkbox"
      className="is-checkradio"
      checked={checked}
      id={id}
      onChange={onChange}
    />
    <Label htmlFor={id}>{label}</Label>
  </>
);
