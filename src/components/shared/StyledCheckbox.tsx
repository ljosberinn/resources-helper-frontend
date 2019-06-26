import React, { ChangeEvent, MouseEvent } from 'react';
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
      onChange={onChange ? onChange : NoOp}
      checked={checked}
      defaultChecked={defaultChecked}
      value={value}
      type="checkbox"
      className="is-checkradio"
    />
    <Label htmlFor={id} onClick={onChange ? undefined : preventDefaultOnLabel}>
      {label}
    </Label>
  </>
);

const NoOp = () => {};
const preventDefaultOnLabel = (e: MouseEvent<HTMLLabelElement>) =>
  e.preventDefault();
