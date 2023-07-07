import { React, useState, useEffect } from 'react';
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import UserItemsPage from './UserItemsPage';
import UserMessagePage from './UserMessagePage';
import UserLookingForPage from './UserLookingForPage';
import axios from 'axios';

export default function UserProfile(props) {

    const { fetch_user } = props;

    const [activeComponent, setActiveComponent] = useState('');

    const handleClick = (component) => {
        setActiveComponent(component);
        };

    let renderedComponent;
    if (activeComponent === 'my items') {
        renderedComponent = <UserItemsPage />;
    } else if (activeComponent === 'messages') {
        renderedComponent = <UserMessagePage />;
    } else if (activeComponent === 'looking for') {
        renderedComponent = <UserLookingForPage />;
    } 

    return (
        <>
        <div className="user-profile">
            <div className="picture-and-contact-info">
                <div className="profile-picture">
                    <img src="profilepicture"/>
                </div>

                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <p>Address: 123 Main Street</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: user@example.com</p>
                </div>
            </div>
            <div className="trade-message-contacts-looking-for">
                <div className="trade-bar-nav">
                    <button onClick={() => handleClick()}>Contacts</button>
                    <button onClick={() => handleClick("messages")}>Messages</button>
                    <button onClick={() => handleClick('my items')}>My Items</button>
                    <button onClick={() => handleClick('looking for')}>What I'm Looking For</button>
                </div>
                {renderedComponent}
            </div>
        </div> 
        </>
    )
}