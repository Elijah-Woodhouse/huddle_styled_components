import React from 'react';
import { produce_content } from '../../content';

export default function InitialProduceInventoryForm({handleCheckboxChange, values, toggleSearch, hideSearch}) {



    return(
        <>
        <div className="initial-produce-form-container">
            <form className="inital-produce-form">
                <label>Produce that you want: </label>
                <button className={`toggle-button ${hideSearch ? 'hidden' : 'visible'}`} onClick={toggleSearch}>
                    {hideSearch ? '+' : '-'}
                </button>
                {!hideSearch && ( 
                <ul className="checkbox-list">
                {produce_content.map((item) => (
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
            </form>
        </div>
        </>
    )
}