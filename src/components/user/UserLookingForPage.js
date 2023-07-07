import { React, useState, useEffect } from 'react';
import { produce_content } from '../../content';

export default function UserLookingForPage() {

    const initialFormValues = {
        looking_for: {},
        trade_radius: 0,
      }
      
    const [values, setValues] = useState(initialFormValues);
    const [hideSearch, setHideSearch] = useState(true);
    const produce = produce_content;
      
    const toTradeItems = produce.sort((a, b) => a.localeCompare(b));;
      
      
         {/* ===============================================================================================================================
            ===============================TOGGLE FUNCITONALITY FOR LIST====================================================================
            ================================================================================================================================== */}

      
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

    return (
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
    )
}