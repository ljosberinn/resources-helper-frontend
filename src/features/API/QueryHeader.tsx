import React, { memo } from 'react';
import { Card } from 'rbx';
import { QueryTime } from './QueryTime';
import { APIQueryHistoryEntry } from '../../Store';

interface QueryHeaderProps {
  title: string;
  historyEntry: APIQueryHistoryEntry | undefined;
}

export const QueryHeader = memo(({ title, historyEntry }: QueryHeaderProps) => (
  <Card.Header>
    <Card.Header.Title>{title}</Card.Header.Title>
    <Card.Header.Icon>
      <QueryTime historyEntry={historyEntry} />
    </Card.Header.Icon>
  </Card.Header>
));
