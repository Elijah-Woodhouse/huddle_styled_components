import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import UserItemsPage from './UserItemsPage';
import userProfile from './UserProfile';
import UserMessagePage from './UserMessagePage';
import UserProfile from './UserProfile';

export default function UserHomePage(props) {

    const navigate = useNavigate();

    return(
    <>
    <UserHeader/>
    <UserProfile/>
    </>
    //<h2>*inmage here* Neighborhood Food project</h2>
    )
}