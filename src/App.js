import { ThemeProvider } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Card from './components/Card'
import UserHomePage from './components/user/UserHomePage'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import {card_content, produce_content} from './content'
import SignUpForm from './components/SignUpForm'

const theme = {
  colors: {
    nav: '#658864', 
    text: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {

  //const navigate = useNavigate()

  // const newUser = {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  //   password: 'password123'
  // }

  const userCredentials = {
    name: "",
    id: "",
    password: ""
  }

  const signUp = (newUser) => {
    // axios.post('http://localhost:3000/users', newUser)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // })
  }

  const signIn = () => {
    // axios.get("http;//localhost:3000/users", userCredentials)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => {
    //   console.error(error)
    // })
  }
  

  // <Route path="/home" element={<Home />} />
  // <Route path="/about" element={<About />} />
  // <Route path="/services" element={<Services />} />
  // <Route path="/blog" element={<Blog />} />
  // <Route path="/contact" element={<Contact />} />
  // <Route path="/faq" element={<FAQ />} />


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/userHomePage" element={<UserHomePage />} />
          <Route path="/" element={
            <>
            <Nav/>
            <HomePage/>
            <Container>
              {card_content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Container>
          </>} />
          <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
