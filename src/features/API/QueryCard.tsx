import React from 'react';
import { Field, Button, Control, Content, Column, Card } from 'rbx';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID, APIQueryHistoryEntry } from '../../Store';
import { QueryHeader } from './QueryHeader';

interface QueryCardProps {
  historyEntry: APIQueryHistoryEntry | undefined;
  isLoading: boolean;
  disabled: boolean;
  title: string;
  info: string;
  id: APIEndpointID;
  checked: boolean;
  handleClick: (id: APIEndpointID) => void;
}

export const QueryCard = ({
  isLoading,
  disabled,
  info,
  id,
  checked,
  handleClick,
  title,
  historyEntry,
}: QueryCardProps) => (
  <Column size="one-third">
    <Card className="query-header" onClick={() => handleClick(id)}>
      <QueryHeader title={title} historyEntry={historyEntry} />
      <Card.Content>
        <Content>
          <Field>
            <Control>
              <StyledCheckbox
                checked={checked}
                id={`endpoint-${id}`}
                label={info}
                value={id}
                disabled={isLoading || disabled}
              />
              {isLoading && <Button state="loading" className="is-icon" />}
            </Control>
          </Field>
        </Content>
      </Card.Content>
    </Card>
  </Column>
);
