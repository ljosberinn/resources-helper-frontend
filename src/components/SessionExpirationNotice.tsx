import React from 'react';
import { Notification } from 'rbx';
import { Dispatch } from 'storeon';
import { History } from 'history';
import { delayedLogout } from '../utils';

interface SessionExpirationNoticeProps {
  dispatch: Dispatch;
  history: History;
}

export const SessionExpirationNotice = ({
  dispatch,
  history,
}: SessionExpirationNoticeProps) => {
  delayedLogout(dispatch, history);

  return (
    <Notification color="danger" className="progress-bar-5">
      Your session has expired. Please login again.
      <br />
      You will be redirected in 5 seconds.
    </Notification>
  );
};
