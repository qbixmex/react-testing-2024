import {
  describe, expect, test, vi,
} from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Login } from '../../components';

describe('Test on <Login /> component', () => {
  test('Should render correctly', () => {
    // Mock onSubmit function
    const onSubmit = vi.fn();

    const { container } = render(
      <Login onSubmit={onSubmit} />,
    );

    const emailLabel = container.querySelector('label[for="email"]');
    const emailInput = container.querySelector('#email');
    const passwordLabel = container.querySelector('label[for="password"]');
    const passwordInput = container.querySelector('#password');
    const cancelBtn = container.querySelector('#reset-btn');
    const submitBtn = container.querySelector('button[type="submit"]');

    // Email
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    // Password
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Buttons
    expect(cancelBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  test('Should submit credentials', () => {
    // Mock onSubmit function
    const onSubmit = vi.fn();

    // Mock credentials
    const credentials = {
      email: 'michael@moonwalker.com',
      password: 'annie_are_you_okay',
    };

    const { container } = render(
      <Login onSubmit={onSubmit} />,
    );

    const form = container.querySelector('#login-form');
    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');

    fireEvent.change(emailInput!, { target: { value: credentials.email } });
    fireEvent.change(passwordInput!, { target: { value: credentials.password } });
    fireEvent.submit(form!);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(credentials);
  });

  test('Should submit credentials by clicking submit button', () => {
    // Mock onSubmit function
    const onSubmit = vi.fn();

    // Mock credentials
    const credentials = {
      email: 'michael@moonwalker.com',
      password: 'annie_are_you_okay',
    };

    const { container } = render(
      <Login onSubmit={onSubmit} />,
    );

    const emailInput = container.querySelector('#email');
    const passwordInput = container.querySelector('#password');
    const submitBtn = container.querySelector('button[type="submit"]');

    fireEvent.change(emailInput!, { target: { value: credentials.email } });
    fireEvent.change(passwordInput!, { target: { value: credentials.password } });
    fireEvent.click(submitBtn!);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(credentials);
  });

  test('Should reset form by clicking Cancel button', () => {
    // Mock onSubmit function
    const onSubmit = vi.fn();

    // Mock credentials
    const credentials = {
      email: 'michael@moonwalker.com',
      password: 'annie_are_you_okay',
    };

    const { container } = render(
      <Login onSubmit={onSubmit} />,
    );

    const emailInput = container.querySelector('#email') as HTMLInputElement;
    const passwordInput = container.querySelector('#password') as HTMLInputElement;
    const cancelBtn = container.querySelector('#reset-btn');

    fireEvent.change(emailInput!, { target: { value: credentials.email } });
    fireEvent.change(passwordInput!, { target: { value: credentials.password } });

    fireEvent.click(cancelBtn!);

    expect(emailInput?.value).toBe('');
    expect(emailInput?.value).toBe('');
  });
});
