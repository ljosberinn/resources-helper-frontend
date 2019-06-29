import React from 'react';
import ReactDOM from 'react-dom';
import { ResourcesHelper } from '../ResourcesHelper';
import { store } from './../Store';
import StoreContext from 'storeon/react/context';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('<ResourcesHelper />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <StoreContext.Provider value={store}>
        <ResourcesHelper />
      </StoreContext.Provider>,
      div,
    );

    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});
