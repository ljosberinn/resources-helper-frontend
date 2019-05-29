import React from 'react';

import { Section, Title, Modal, Content, Button, Delete } from 'rbx';

export const ModalDemo = () => (
  <Section>
    <Title>Modal</Title>
    <hr />
    <Button color="primary" size="large">
      Launch example modal
    </Button>
    <Modal>
      <Modal.Background />
      <Modal.Card>
        <Modal.Card.Head>
          <Modal.Card.Title>Modal title</Modal.Card.Title>
          <Delete />
        </Modal.Card.Head>
        <Modal.Card.Body>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Content>
        </Modal.Card.Body>
        <Modal.Card.Foot>
          <Button color="primary">Save changes</Button>
          <Button>Cancel</Button>
        </Modal.Card.Foot>
      </Modal.Card>
    </Modal>
  </Section>
);
