import React, { useEffect, useState } from 'react'
import PT from 'prop-types'
import { StyledSignUpForm } from './styles/StyledSignUpForm.styled'
import { produce_content } from '../content'


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
  const [values, setValues] = useState(initialFormValues);
  const [hideTrade, setHideTrade] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  // ✨ where are my props? Destructure them here
  const { signUp } = props;
  const produce = produce_content;

  const toggleTrade = (event) => {
    event.preventDefault();
    setHideTrade((prevState) => !prevState);
  };

  const toggleSearch = (event) => {
    event.preventDefault();
    setHideSearch((prevState) => !prevState);
  }

  useEffect(() => {
    setValues(initialFormValues);
  }, [])

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }
  
  const handleCheckboxChange = (event) => {
    const { id, value, checked } = event.target;

    setValues((values) => ({
      ...values,
      [id]: checked
        ? [...values[id], value]
        : values[id].filter((item) => item !== value)
    }))
  // Perform additional actions based on the selected values
};

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
    <div class="form-background-container">
    <StyledSignUpForm>
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <p>
        Tell us your story neighbor!
      </p>
      <label>Name: </label>
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
      <label>Personal Info: </label>
      <input
        maxLength={200}
        value={values.homeAddress}
        onChange={onChange}
        placeholder="Enter Home Address"
        id="address"
      />
      <input
        maxLength={20}
        value={values.phone}
        onChange={onChange}
        placeholder="Phone #"
        id="phone"
      />
      <label>Produce that you have to trade: </label>
      <button className={`toggle-button ${hideTrade ? 'hidden' : 'visible'}`} onClick={toggleTrade}>
        {hideTrade ? '+' : '-'}
      </button>
      {!hideTrade && (
      <ul>
      {produce.map((item) => (
          <li key={item}>
            <label>
              <input
                id="produce_to_share"
                type="checkbox"
                name="produce_to_share"
                value={item}
                checked={values.produce_to_share.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      )}
      <label>Prodce that you want: </label>
      <button className={`toggle-button ${hideSearch ? 'hidden' : 'visible'}`} onClick={toggleSearch}>
        {hideSearch ? '+' : '-'}
      </button>

      {!hideSearch && ( 
      <ul>
      {produce.map((item) => (
          <li key={item}>
            <label>
              <input
                id="produce_to_share"
                type="checkbox"
                name="produce_to_share"
                value={item}
                checked={values.produce_to_share.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      )}
      
      <button disabled={isDisabled()} id="submitCredentials">Submit</button>
    </form>
    </StyledSignUpForm>
    </div>
  )
}