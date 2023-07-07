import { React, useState, useEffect } from 'react';
import { produce_content } from '../../content';

export default function UserItemsPage() {

    const initialFormValues = {

        produce_to_share: {},
        trade_radius: 0,
      }
      
    const [values, setValues] = useState(initialFormValues);
    const [hideTrade, setHideTrade] = useState(false);
    const produce = produce_content;
      
    const toShareItems = produce.sort((a, b) => a.localeCompare(b));;
      
      
         {/* ===============================================================================================================================
            ===============================TOGGLE FUNCITONALITY FOR THE TWO LISTS====================================================================
            ================================================================================================================================== */}
      
    const toggleTrade = (event) => {
        event.preventDefault();
        setHideTrade((prevState) => !prevState);
    };
      
      
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


    return(
        <>
        <h3>Produce Currently In your Inventory:</h3>
        <ul>
            <li></li>
        </ul>
        <label>Produce that you would like to trade: </label>
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
        </>
    )
}