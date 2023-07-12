import React, { useState, useEffect } from 'react'
import PT from 'prop-types'
import { StyledSignUpForm } from './styles/StyledSignUpForm.styled'
import { produce_content } from '../content'
import InitialProduceInventoryForm from './forms/InitialProduceInventory';
import InitialSearchForProduceForm from './forms/InitialSearchForProduce';
import InitialUserNameAndPasswordForm from './forms/NamePasswordSignUp';
import AddressForm from './forms/Address';


const initialFormValues = {
  username: '',
  password: '',
  country: "",
  state: "",
  city: "",
  stree_address: "",
  zip_code: "",
  phone: '',
  email: "",
  bio: '',
  produce_to_share: {},
  looking_for: {},
  trade_radius: 0,
}
///========================================================== IMPORTANT ==========================================================
//pass down onChange and values through props for each respective components so that way state can be managed in this SignUpForm component

export default function SignUpForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const [activeComponent, setActiveComponent] = useState(<InitialUserNameAndPasswordForm />);
  const [hideTrade, setHideTrade] = useState(false);
  const [hideSearch, setHideSearch] = useState(false);
  const { signUp } = props;

  const handleClick = (component) => {
    setActiveComponent(component);
    };

  let renderedComponent;
    if (activeComponent === 'username_password') {
        renderedComponent = <InitialUserNameAndPasswordForm />;
    } else if (activeComponent === 'address') {
        renderedComponent = <AddressForm />;
    } else if (activeComponent === 'searching_for') {
        renderedComponent = <InitialSearchForProduceForm />;
    } else if (activeComponent === 'produce_inventory') {
        renderedComponent = <InitialProduceInventoryForm />;
  }


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

  const onSubmit = (evt, userCredentials) => {
    
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
    <div className="form-background-container">
    <StyledSignUpForm>
      <h2>Sign Up</h2>
      <InitialUserNameAndPasswordForm onChange={onChange} values={values}/>
      <InitialProduceInventoryForm handleCheckboxChange={handleCheckboxChange} values={values} toggleSearch={toggleSearch} hideSearch={hideSearch}/>
      <InitialSearchForProduceForm handleCheckboxChange={handleCheckboxChange} values={values} toggleSearch={toggleSearch} hideSearch={hideSearch}/>
      <AddressForm onChange={onChange} values={values}/>

      {/* ===============================================================================================================================
      ===============================ITEMS TO TRADE LIST====================================================================
      ================================================================================================================================== */}

      
      <button disabled={isDisabled()} onClick={onSubmit} id="submitCredentials">Submit</button>
    </StyledSignUpForm>
    </div>
  )
}