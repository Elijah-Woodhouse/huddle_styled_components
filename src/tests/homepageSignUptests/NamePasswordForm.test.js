import React from 'react';
import { render, screen, fireEvent, getByTestId,  } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import InitialUserNameAndPasswordForm from '../../components/forms/NamePasswordSignUp';
import SignUpForm from '../../components/SignUpForm';

const theme = {
  colors: {
    nav: '#658864',
    text: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

describe('name and password form', () => {
  test('[1] username, email, and password inputs all work correctly', () => {
    const values = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    };

    const onChange = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <SignUpForm values={values} onChange={onChange}/>
        </BrowserRouter>
      </ThemeProvider>
    );

    const emailInput = screen.getByTestId('email');
    const usernameInput = screen.getByTestId('username');
    const password1Input = screen.getByTestId('password-1');
    const password2Input = screen.getByTestId('password-2');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.input(usernameInput, { target: { value: 'testuser' } });
    fireEvent.input(password1Input, { target: { value: 'password123' } });
    fireEvent.input(password2Input, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(usernameInput.value).toBe('testuser');
    expect(password1Input.value).toBe('password123');
    expect(password2Input.value).toBe('password123');
  });
});
