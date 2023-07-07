import { React, useState } from 'react';

export default function InitialUserNameAndPasswordForm() {

    const [values, setValues] = useState;

    const initialFormValues = {
        username: '',
        password: '',
        user_id: ''
    }

    function validatePassword(password1, password2) {
        const isValid = password1 === password2 && /^(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(password1);
        return isValid;
      }
      

    const isDisabled = () => {
        if(values.username.trim().length < 3 || values.password.trim().length < 8){
          return true
        } else if( values.username.trim().length >= 3 && values.password.trim().length >= 8 ){
          return false
        }
      }

      const onChange = evt => {
        const { id, value } = evt.target
        setValues({ ...values, [id]: value })
      }


    return(
        <>
        <form>
            <label>Name: </label>
                <input
                    maxLength={20}
                    value={values.username}
                    onChange={onChange}
                    placeholder="Enter a unique Username"
                    id="username"
                />
            <label>Email: </label>
                <input
                     maxLength={40}
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
            <label>Enter Password Again: </label>
                <input
                    maxLength={20}
                    value={values.password}
                    onChange={onChange}
                    placeholder="Enter Password"
                    id="password"
                    />
        </form>
        </>
    )
}