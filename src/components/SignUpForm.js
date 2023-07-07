import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PT from 'prop-types'
import { StyledSignUpForm } from './styles/StyledSignUpForm.styled'
import { produce_content } from '../content'


const initialFormValues = {
  username: '',
  password: '',
  homeAddress: '',
  phone: '',
  bio: '',
  comments: '',
  produce_to_share: {},
  looking_for: {},
  trade_radius: 0,
}

export default function SignUpForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const [hideTrade, setHideTrade] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const { signUp } = props;
  const produce = produce_content;

  const toTradeItems = produce.sort((a, b) => a.localeCompare(b));;
  const toShareItems = produce.sort((a, b) => a.localeCompare(b));;


   {/* ===============================================================================================================================
      ===============================TOGGLE FUNCITONALITY FOR THE TWO LISTS====================================================================
      ================================================================================================================================== */}

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

   {/* ===============================================================================================================================
      =========================================CHANGE HANDLERS====================================================================
      ================================================================================================================================== */}

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const handleCheckboxChange = (event, checklistName) => {
    const { value, checked } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [checklistName]: {
        ...prevValues[checklistName],
        [value]: checked,
      },
    }));
  };


   {/* ======================================================================================================================================
      ===============================SUBMIT FUNCTIONALITY SENDING DATA TO SERVER====================================
      ================================================================================================================================== */}

  const onSubmit = evt => {
    evt.preventDefault()
    props.signUp(values);
  }

   {/* ==================================================================================================================
      ===============================DISABLES OR ENABLES SUBMIT BUTTON DEPENING ON FORM STATUS====================================
      ================================================================================================================================== */}

  const isDisabled = () => {
    if(values.username.trim().length < 3 || values.password.trim().length < 8){
      return true
    } else if( values.username.trim().length >= 3 && values.password.trim().length >= 8 ){
      return false
    }
  }



    {/* ================================================================================================================================================
      =============================================================FORM JSX===============================================================================================
      ================================================================================================================================================================ */}


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
        placeholder="Enter a unique Username"
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
      <label>Personal Info</label>
      <label>Address:</label>
      <input
        maxLength={200}
        value={values.homeAddress}
        onChange={onChange}
        placeholder="Enter Home Address"
        id="homeAddress"
      />
      <label>Phone: </label>
      <input
        maxLength={20}
        value={values.phone}
        onChange={onChange}
        placeholder="Phone #"
        id="phone"
      />
      <label>Your Story: </label>
      <input
        maxLength={1000}
        value={values.bio}
        onChange={onChange}
        placeholder="A short Bio. What do you enjoy?"
        id="bio"
      />

      {/* ===============================================================================================================================
      ===============================ITEMS TO TRADE LIST====================================================================
      ================================================================================================================================== */}

      <label>Produce that you have to trade: </label>
      <button className={`toggle-button ${hideTrade ? 'hidden' : 'visible'}`} onClick={toggleTrade}>
        {hideTrade ? '+' : '-'}
      </button>
      {!hideTrade && (
      <ul className="checkbox-list">
      {toShareItems.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                name="produce_to_share"
                value={item}
                checked={values.produce_to_share[item] || false}
                onChange={(event) => handleCheckboxChange(event, 'produce_to_share')}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      )}


 {/* ===============================================================================================================================
      ===============================ITEMS TO LOOK FOR LIST====================================================================
      ================================================================================================================================== */}

      <label>Produce that you want: </label>
      <button className={`toggle-button ${hideSearch ? 'hidden' : 'visible'}`} onClick={toggleSearch}>
        {hideSearch ? '+' : '-'}
      </button>
      {!hideSearch && ( 
      <ul className="checkbox-list">
      {toTradeItems.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                name="looking_for"
                value={item}
                checked={values.looking_for[item] || false}
                onChange={(event) => handleCheckboxChange(event, 'looking_for')}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      )}

<label>Additional Comments: </label>
      <input
        maxLength={20}
        value={values.comments}
        onChange={onChange}
        placeholder="Any more details you'd like to add?"
        id="comments"
      />
      
      <button disabled={isDisabled()} id="submitCredentials">Submit</button>
    </form>
    </StyledSignUpForm>
    </div>
  )
}