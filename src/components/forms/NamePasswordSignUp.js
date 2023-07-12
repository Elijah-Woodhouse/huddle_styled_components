import { React, useState } from 'react';


export default function InitialUserNameAndPasswordForm({onChange, values}) {


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
                    value={values.email}
                    onChange={onChange}
                    placeholder="Enter a unique Username"
                    id="email"
                />
            <label>Password: </label>
                <input
                    maxLength={20}
                    value={values.password1}
                    onChange={onChange}
                    placeholder="Enter Password"
                    id="password1"
                />
            <label>Enter Password Again: </label>
                <input
                    maxLength={20}
                    value={values.password2}
                    onChange={onChange}
                    placeholder="Enter Password"
                    id="password2"
                    />
        </form>
        </>
    )
}