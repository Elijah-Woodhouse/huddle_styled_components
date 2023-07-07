import React from 'react';

export default function InitialSearchForProduceForm() {



    
    return(
        <>
         <form>
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
        </form>
        </>
    )
}