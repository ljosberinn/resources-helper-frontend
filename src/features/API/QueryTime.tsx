import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { APIQueryHistoryEntry } from '../../Store';

const calcDiffInDays = (start: Date, end = Date.now()) =>
  Math.abs(start.getTime() - end) / (1000 * 60 * 60 * 24);

interface QueryTimeProps {
  historyEntry: APIQueryHistoryEntry | undefined;
}

export const QueryTime = ({ historyEntry }: QueryTimeProps) => {
  if (!historyEntry || historyEntry.lastQuery === 0) {
    return null;
  }

  const date = new Date(historyEntry.lastQuery);
  const diff = calcDiffInDays(date);

  return (
    <time dateTime={date.toISOString().split('.')[0]}>
      <FontAwesomeIcon icon={faClock} />{' '}
      {diff < 1 ? 'less than a day ago' : `${Math.ceil(diff)} day(s) ago`}
    </time>
  );
};
