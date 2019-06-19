import React from 'react';
import { withRouter } from 'react-router-dom';
import { Divider } from 'rbx';

import { Login } from './Login';
import { Registration } from './Registration';
import { History } from 'history';

interface AccountProps {
  history: History;
}

const Authentication = ({ history }: AccountProps) => {
  return (
    <>
      <Login history={history} />
      <div className="block">
        <Divider color="primary">OR</Divider>
      </div>
      <Registration history={history} />
    </>
  );
};

export default withRouter(Authentication);
