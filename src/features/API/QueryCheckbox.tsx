import React, { memo, ChangeEvent } from 'react';
import { Field, Control, Help, Button } from 'rbx';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID } from '../../Store';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface QueryCheckboxProps {
  wasRecentlyQueried: boolean;
  isLoading: boolean;
  title: string;
  info: string;
  id: APIEndpointID;
  lastQuery: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const QueryCheckbox = memo(
  ({
    wasRecentlyQueried,
    isLoading,
    handleChange,
    title,
    info,
    id,
    lastQuery,
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
        <Help color="info">{info}</Help>
        {isLoading ? (
          <Button state="loading" className="is-icon" />
        ) : (
          lastQuery > 0 && (
            <Help color="primary">{getQueryTime(lastQuery)}</Help>
          )
        )}
      </Control>
    </Field>
  ),
);

const calcDiffInDays = (start: Date, end = Date.now()) =>
  Math.abs(start.getTime() - end) / (1000 * 60 * 60 * 24);

const getQueryTime = (lastQuery: number) => {
  const date = new Date(lastQuery);

  const diff = calcDiffInDays(date);

  return (
    <time dateTime={date.toISOString().split('.')[0]}>
      <FontAwesomeIcon icon={faClock} />{' '}
      {diff < 1 ? 'less than a day' : `${Math.ceil(diff)} day(s)`} ago
    </time>
  );
};
