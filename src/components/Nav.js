import { StyledNav, Image } from './styles/Nav.styled'
import { Button } from './styles/Button.styled'
import { NavLink, Routes, Route, useNavigate, Navigate, redirect } from 'react-router-dom';
import React from 'react';



export default function Nav() {

  const navigate = useNavigate();

  const redirectToSignUp = () => { 
  navigate("/signup");
}

const redirectToUserPage = () => {
  navigate("/userHomePage")
}

  return (
    <StyledNav>
          <div>
            <h1>Neighborhood Food Share Project</h1>
            <ul className="navbar">
                <li>
                  <button onClick={() => navigate('/home')}>Home</button>
                </li>
                <li>
                  <button onClick={() => navigate('/about')}>About</button>
                </li>
                <li>
                  <button onClick={() => navigate('/services')}>Services</button>
                </li>
                <li>
                  <button onClick={redirectToUserPage}>User Page</button>
                </li>
                <li>
                  <button onClick={() => navigate('/blog')}>Blog</button>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')}>Contact</button>
                </li>
                <li>
                  <button onClick={() => navigate('/faq')}>FAQ</button>
                </li>
            </ul>
          </div>
          <Button onClick={redirectToSignUp}>Sign Up!</Button>
    </StyledNav>
  )
}