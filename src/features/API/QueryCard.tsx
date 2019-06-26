import React, { ChangeEvent, MouseEvent } from 'react';
import { Field, Button, Control, Content, Column, Card } from 'rbx';
import { StyledCheckbox } from '../../components/shared';
import { APIEndpointID, APIQueryHistoryEntry } from '../../Store';
import { QueryHeader } from './QueryHeader';

const preventDoubleEventDispatchTagNames = ['LABEL', 'INPUT'];

const handleDivClick = (e: MouseEvent<HTMLDivElement>) => {
  const { target, currentTarget } = e;

  if (
    preventDoubleEventDispatchTagNames.includes((target as HTMLElement).tagName)
  ) {
    return;
  }

  (currentTarget.querySelector('input') as HTMLInputElement).click();
};

interface QueryCardProps {
  historyEntry: APIQueryHistoryEntry | undefined;
  isSpecificallyLoading: boolean;
  disabled: boolean;
  title: string;
  info: string;
  id: APIEndpointID;
  checked: boolean;
  handleClick: (id: APIEndpointID) => void;
}

export const QueryCard = ({
  isSpecificallyLoading,
  disabled,
  info,
  id,
  checked,
  handleClick,
  title,
  historyEntry,
}: QueryCardProps) => (
  <Column size="one-third" onClick={handleDivClick} className="query-header">
    <Card>
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
                disabled={isSpecificallyLoading || disabled}
                onChange={() => handleClick(id)}
              />
              {isSpecificallyLoading && (
                <Button state="loading" className="is-icon" />
              )}
            </Control>
          </Field>
        </Content>
      </Card.Content>
    </Card>
  </Column>
);
