import React, { memo, ChangeEvent } from 'react';
import { Field, Control, Button } from 'rbx';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID } from '../../Store';

interface QueryCheckboxProps {
  wasRecentlyQueried: boolean;
  isLoading: boolean;
  title: string;
  id: APIEndpointID;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const QueryCheckbox = memo(
  ({
    wasRecentlyQueried,
    isLoading,
    handleChange,
    title,
    id,
  }: QueryCheckboxProps) => (
    <Field>
      <Control>
        <StyledCheckbox
          defaultChecked={wasRecentlyQueried}
          id={`endpoint-${id}`}
          label={title}
          onChange={handleChange}
          value={id}
          disabled={isLoading}
        />
        {isLoading && <Button state="loading" className="is-icon" />}
      </Control>
    </Field>
  ),
);
