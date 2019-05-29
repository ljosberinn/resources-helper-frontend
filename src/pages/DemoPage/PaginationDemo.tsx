import React from 'react';

import { Section, Title, Pagination } from 'rbx';

export const PaginationDemo = () => (
  <Section>
    <Title>Pagination</Title>

    <hr />
    <Pagination>
      <Pagination.Step align="previous">Previous</Pagination.Step>

      <Pagination.Step align="next">Next page</Pagination.Step>
      <Pagination.List>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Ellipsis />
        <Pagination.Link>45</Pagination.Link>
        <Pagination.Link current>46</Pagination.Link>
        <Pagination.Link>47</Pagination.Link>
        <Pagination.Ellipsis />
        <Pagination.Link>86</Pagination.Link>
      </Pagination.List>
    </Pagination>
    <br />
    <Pagination rounded>
      <Pagination.Step align="previous">Previous</Pagination.Step>

      <Pagination.Step align="next">Next page</Pagination.Step>

      <Pagination.List>
        <Pagination.Link>1</Pagination.Link>
        <Pagination.Ellipsis />
        <Pagination.Link>45</Pagination.Link>
        <Pagination.Link current>46</Pagination.Link>
        <Pagination.Link>47</Pagination.Link>
        <Pagination.Ellipsis />
        <Pagination.Link>86</Pagination.Link>
      </Pagination.List>
    </Pagination>
  </Section>
);
