import React from 'react';
import { Notification } from 'rbx';

export const SessionExpirationNotice = () => (
  <Notification color="danger" className="progress-bar-5">
    Your session has expired. Please login again.
    <br />
    You will be redirected in 5 seconds.
  </Notification>
);
