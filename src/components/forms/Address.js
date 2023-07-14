import { React, useState } from 'react';

export default function AddressForm({onChange, values}) {


    return(
        <div className="address-form-container">
            <form className="address-form">
                <label>Country: </label>
                    <input
                        maxLength={20}
                        value={values.country}
                        onChange={onChange}
                        placeholder="Enter a unique Username"
                        id="country"
                    />
                <label>State: </label>
                    <input
                        maxLength={40}
                        value={values.state}
                        onChange={onChange}
                        placeholder=""
                        id="state"
                    />
                <label>City: </label>
                    <input
                        maxLength={20}
                        value={values.city}
                        onChange={onChange}
                        placeholder="Enter City"
                        id="city"
                    />
                <label>Street Address: </label>
                    <input
                        maxLength={20}
                        value={values.street_address}
                        onChange={onChange}
                        placeholder="Enter Password"
                        id="street_address"
                        />
                <label>Zip Code: </label>
                    <input
                        maxLength={5}
                        value={values.zip_code}
                        onChange={onChange}
                        placeholder="Enter Zip Code"
                        id="zip_code"
                        />
            </form>
        </div>
    )
}