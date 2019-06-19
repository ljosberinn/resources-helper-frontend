import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Column, Divider } from 'rbx';

import { Login } from './Login';
import { Registration } from './Registration';
import { History } from 'history';
import useStoreon from 'storeon/react';

interface AccountProps {
  history: History;
}

const Authentication = ({ history }: AccountProps) => {
  const { dispatch } = useStoreon();

  const props = { dispatch, history };

  return (
    <Container>
      <Column.Group centered>
        <Column size="one-third" textAlign="centered">
          <Login {...props} />
        </Column>
      </Column.Group>

      <div className="block">
        <Divider color="primary">OR</Divider>
      </div>

      <Column.Group centered>
        <Column size="two-thirds" textAlign="centered">
          <Registration {...props} />
        </Column>
      </Column.Group>
    </Container>
  );
};

export default withRouter(Authentication);
