import React, { useEffect, useState } from 'react'
import PT from 'prop-types'
import { StyledSignUpForm } from './styles/StyledSignUpForm.styled'

const initialFormValues = {
  username: '',
  password: '',
  homeAddress: '',
  phone: '',
  produce_to_share: [],
  looking_for: [],
  trade_radius: 0,
}
export default function SignUpForm(props) {
  const [values, setValues] = useState(initialFormValues)
  // ✨ where are my props? Destructure them here
  const { signUp } = props;

  useEffect(() => {
    setValues(initialFormValues);
  }, [])

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    // ✨ implement
    signUp(values);
  }

  const isDisabled = () => {
    // ✨ implement
    if(values.username.trim().length < 3 || values.password.trim().length < 8){
      return true
    } else if( values.username.trim().length >= 3 && values.password.trim().length >= 8 ){
      return false
    }
  }

  return (
    <StyledSignUpForm>
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <p>
        Tell us a little bit about yourself!
      </p>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter Username"
        id="username"
      />
      <label>Password: </label>
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter Password"
        id="password"
      />
      <input
        maxLength={200}
        value={values.password}
        onChange={onChange}
        placeholder="Enter Home Address"
        id="address"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Phone #"
        id="phone"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials">Submit</button>
    </form>
    </StyledSignUpForm>
  )
}