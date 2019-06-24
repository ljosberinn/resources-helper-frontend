import React, { memo, ChangeEvent } from 'react';
import { Field, Control, Button } from 'rbx';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID } from '../../Store';

interface QueryCheckboxProps {
  isLoading: boolean;
  info: string;
  id: APIEndpointID;
  defaultChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
}

export const QueryCheckbox = memo(
  ({ isLoading, info, id, defaultChecked, onChange }: QueryCheckboxProps) => (
    <Field>
      <Control>
        <StyledCheckbox
          defaultChecked={defaultChecked}
          id={`endpoint-${id}`}
          label={info}
          value={id}
          disabled={isLoading}
          onChange={onChange}
        />
        {isLoading && <Button state="loading" className="is-icon" />}
      </Control>
    </Field>
  ),
);
