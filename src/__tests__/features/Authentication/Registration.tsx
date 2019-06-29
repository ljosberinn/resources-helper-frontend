import React from 'react';
import ReactDOM from 'react-dom';
import { Registration } from '../../../features/Authentication/Registration';
import { createMemoryHistory } from 'history';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';
import { createValueEvent } from '../../../testUtils';
import axiosMock from 'axios';

afterEach(cleanup);

const INVALID_MAIL = 'abc';
const SHORT_PASSWORD = INVALID_MAIL;
const INVALID_PASSWORD = 'somelongerpassword';
const VALID_MAIL = 'a@b.de';
const VALID_PASSWORD = 'somePassword1!';

const INVALID_ICON_SELECTOR = 'span.icon.has-text-danger';
const VALID_ICON_SELECTOR = 'span.icon.has-text-success';
const WARNING_SELECTOR = 'p.help.is-danger';

const props = {
  dispatch: jest.fn(),
  history: createMemoryHistory(),
};

describe('<Registration />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Registration {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should display errors on invalid password repetition', async () => {
    // Arrange
    const { container } = render(<Registration {...props} />);
    const passwordInput = container.querySelector(
      '#register-2',
    ) as HTMLInputElement;

    const passwordRepetitionInput = container.querySelector(
      '#register-3',
    ) as HTMLInputElement;

    const passwordParent = passwordInput.parentElement as HTMLDivElement;
    const passwordRepetitionParent = passwordRepetitionInput.parentElement as HTMLDivElement;
    const submitButton = container.querySelector('button');

    // Act
    fireEvent.change(passwordInput, createValueEvent(INVALID_PASSWORD));
    await waitForElement(
      () => passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordRepetitionInput, createValueEvent(SHORT_PASSWORD));
    await waitForElement(
      () =>
        passwordRepetitionParent.querySelectorAll(INVALID_ICON_SELECTOR)
          .length > 0,
    );

    expect(passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length).toBe(
      2,
    );
    expect(passwordRepetitionParent.querySelector(WARNING_SELECTOR)).not.toBe(
      null,
    );

    expect(submitButton).toHaveProperty('disabled', true);
    expect(
      passwordInput.outerHTML + passwordRepetitionInput.outerHTML,
    ).toMatchSnapshot();
  });

  it('should display errors on valid mail and invalid password pattern', async () => {
    // Arrange
    const { container } = render(<Registration {...props} />);
    const mailInput = container.querySelector(
      '#register-1',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      '#register-2',
    ) as HTMLInputElement;
    const passwordRepetition = container.querySelector(
      '#register-3',
    ) as HTMLInputElement;
    const mailParent = mailInput.parentElement as HTMLDivElement;
    const passwordParent = passwordInput.parentElement as HTMLDivElement;
    const passwordRepetitionParent = passwordRepetition.parentElement as HTMLDivElement;
    const submitButton = container.querySelector('button');

    // Act
    fireEvent.change(mailInput, createValueEvent(VALID_MAIL));
    await waitForElement(
      () => mailParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordInput, createValueEvent(INVALID_PASSWORD));
    await waitForElement(
      () => passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length > 0,
    );

    // Assert
    expect(passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length).toBe(
      2,
    );
    expect(passwordRepetitionParent.querySelector(WARNING_SELECTOR)).not.toBe(
      null,
    );

    expect(submitButton).toHaveProperty('disabled', true);
    expect(mailInput.outerHTML + passwordInput.outerHTML).toMatchSnapshot();
  });

  it('should display errors on valid mail and short password', async () => {
    // Arrange
    const { container } = render(<Registration {...props} />);
    const mailInput = container.querySelector(
      '#register-1',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      '#register-2',
    ) as HTMLInputElement;
    const passwordRepetition = container.querySelector(
      '#register-3',
    ) as HTMLInputElement;
    const mailParent = mailInput.parentElement as HTMLDivElement;
    const passwordParent = passwordInput.parentElement as HTMLDivElement;
    const passwordRepetitionParent = passwordRepetition.parentElement as HTMLDivElement;
    const submitButton = container.querySelector('button');

    // Act
    fireEvent.change(mailInput, createValueEvent(VALID_MAIL));
    await waitForElement(
      () => mailParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordInput, createValueEvent(SHORT_PASSWORD));
    await waitForElement(
      () => passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length > 0,
    );

    // Assert
    expect(passwordParent.querySelectorAll(INVALID_ICON_SELECTOR).length).toBe(
      2,
    );
    expect(passwordRepetitionParent.querySelector(WARNING_SELECTOR)).not.toBe(
      null,
    );

    expect(submitButton).toHaveProperty('disabled', true);
    expect(mailParent.outerHTML + passwordParent.outerHTML).toMatchSnapshot();
  });

  it('should display errors on invalid mail and valid password pattern', async () => {
    // Arrange
    const { container } = render(<Registration {...props} />);
    const mailInput = container.querySelector(
      '#register-1',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      '#register-2',
    ) as HTMLInputElement;
    const mailParent = mailInput.parentElement as HTMLDivElement;
    const passwordParent = passwordInput.parentElement as HTMLDivElement;
    const submitButton = container.querySelector('button');

    // Act
    fireEvent.change(mailInput, createValueEvent(INVALID_MAIL));
    await waitForElement(
      () => mailParent.querySelectorAll(INVALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordInput, createValueEvent(VALID_PASSWORD));
    await waitForElement(
      () => passwordParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    // Assert
    expect(mailParent.querySelectorAll(INVALID_ICON_SELECTOR).length).toBe(2);

    expect(mailParent.querySelector(WARNING_SELECTOR)).not.toBe(null);
    expect(passwordParent.querySelector(WARNING_SELECTOR)).toBe(null);

    expect(submitButton).toHaveProperty('disabled', true);
    expect(mailInput.outerHTML + passwordInput.outerHTML).toMatchSnapshot();
  });

  it('should submit with valid mail and valid password', async () => {
    // Arrange
    const { container } = render(<Registration {...props} />);
    const mailInput = container.querySelector(
      '#register-1',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      '#register-2',
    ) as HTMLInputElement;
    const passwordRepetitionInput = container.querySelector(
      '#register-3',
    ) as HTMLInputElement;
    const mailParent = mailInput.parentElement as HTMLDivElement;
    const submitButton = container.querySelector('button') as HTMLButtonElement;

    const spy = jest
      .spyOn(axiosMock, 'post')
      .mockImplementationOnce(() =>
        Promise.resolve({ data: { token: 'JWT' } }),
      );

    // Act
    fireEvent.change(mailInput, createValueEvent(VALID_MAIL));
    await waitForElement(
      () => mailParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordInput, createValueEvent(VALID_PASSWORD));
    await waitForElement(
      () => mailParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    fireEvent.change(passwordRepetitionInput, createValueEvent(VALID_PASSWORD));
    await waitForElement(
      () => mailParent.querySelectorAll(VALID_ICON_SELECTOR).length > 0,
    );

    await waitForElement(() => submitButton.disabled === false);
    fireEvent.click(submitButton);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      '/auth/register',
      {
        mail: VALID_MAIL,
        password: VALID_PASSWORD,
      },
      { timeout: 10000 },
    );
    expect(submitButton.classList.contains('is-loading')).toBeTruthy();
    expect(submitButton).toHaveProperty('disabled', true);
    expect(
      mailInput.outerHTML +
        passwordInput.outerHTML +
        passwordRepetitionInput.outerHTML,
    ).toMatchSnapshot();
  });
});
