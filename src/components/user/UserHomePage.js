import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import UserItemsPage from './UserItemsPage';
import userProfile from './UserProfile';
import UserMessagePage from './UserMessagePage';
import UserProfile from './UserProfile';
//import axios from 'axios';

export default function UserHomePage(props) {

    const initialFormValues = {
        name: "",
        password: "",
        user_id: ""
}

    const fetch_user = () => {
        //axios.get("https://localhost/3000/user/user_id", user_credentials)
    }

    const navigate = useNavigate();

    return(
    <>
    <UserHeader/>
    <UserProfile fetch_user={fetch_user}/>
    </>
    //<h2>*inmage here* Neighborhood Food project</h2>
    )
}