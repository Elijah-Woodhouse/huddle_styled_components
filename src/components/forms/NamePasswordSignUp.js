import React from 'react';

export default function InitialUserNameAndPasswordForm({ onChange, values }) {
  function validatePassword(password1, password2) {
    const isValid =
      password1 === password2 && /^(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(password1);
    return isValid;
  }

  const isDisabled = () => {
    if (values.username.trim().length < 3 || values.password2.trim().length < 8) {
      return true;
    } else if (
      values.username.trim().length >= 3 &&
      values.password2.trim().length >= 8 && values.password1 === values.password2
    ) {
      return false;
    }
  };

  return (
    <div>
        <label>Name: </label>
        <input
          data-testid="username"
          maxLength={20}
          value={values.username}
          onChange={onChange}
          placeholder="Enter a unique Username"
          id="username"
        />
        <label>Email: </label>
        <input
          data-testid="email"
          maxLength={40}
          value={values.email}
          onChange={onChange}
          placeholder="Enter your Email"
          id="email"
        />
        <label>Password: </label>
        <input
          data-testid="password-1"
          maxLength={20}
          value={values.password1}
          onChange={onChange}
          placeholder="Enter Password"
          id="password1"
        />
        <label>Enter Password Again: </label>
        <input
          data-testid="password-2"
          maxLength={20}
          value={values.password2}
          onChange={onChange}
          placeholder="Enter Password Again"
          id="password2"
        />
    </div>
  );
}
