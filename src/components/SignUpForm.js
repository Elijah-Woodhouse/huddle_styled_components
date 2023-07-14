import React, { useState, useEffect } from 'react';
import PT from 'prop-types';
import { StyledSignUpForm } from './styles/StyledSignUpForm.styled';
import { produce_content } from '../content';
import InitialProduceInventoryForm from './forms/InitialProduceInventory';
import InitialSearchForProduceForm from './forms/InitialSearchForProduce';
import InitialUserNameAndPasswordForm from './forms/NamePasswordSignUp';
import AddressForm from './forms/Address';

const initialFormValues = {
  username: '',
  password: '',
  country: '',
  state: '',
  city: '',
  stree_address: '',
  zip_code: '',
  phone: '',
  email: '',
  bio: '',
  produce_to_share: {},
  looking_for: {},
  trade_radius: 0,
};

export default function SignUpForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const [activeComponent, setActiveComponent] = useState('username_password');
  const [hideTrade, setHideTrade] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const { signUp } = props;

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  let renderedComponent;
  if (activeComponent === 'username_password') {
    renderedComponent = <InitialUserNameAndPasswordForm values={values} onChange={onChange} />;
  } else if (activeComponent === 'address') {
    renderedComponent = <AddressForm values={values} onChange={onChange} />;
  } else if (activeComponent === 'searching_for') {
    renderedComponent = <InitialSearchForProduceForm values={values} onChange={onChange} />;
  } else if (activeComponent === 'produce_inventory') {
    renderedComponent = <InitialProduceInventoryForm values={values} onChange={onChange} />;
  }

  const toggleTrade = (event) => {
    event.preventDefault();
    setHideTrade((prevState) => !prevState);
  };

  const toggleSearch = (event) => {
    event.preventDefault();
    setHideSearch((prevState) => !prevState);
  };

  useEffect(() => {
    setValues(initialFormValues);
  }, []);


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

  const onSubmit = (evt, userCredentials) => {};

  const isDisabled = () => {
    if (values.username.trim().length < 3 || values.password.trim().length < 8) {
      return true;
    } else if (values.username.trim().length >= 3 && values.password.trim().length >= 8) {
      return false;
    }
  };

  return (
    <div className="form-background-container">
      <StyledSignUpForm>
        <h2>Sign Up</h2>
        {renderedComponent}
        <button disabled={isDisabled()} onClick={onSubmit} id="submitCredentials">
          Submit
        </button>
      </StyledSignUpForm>
    </div>
  );
}
