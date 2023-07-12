import React from 'react';

export default function AddressForm() {
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